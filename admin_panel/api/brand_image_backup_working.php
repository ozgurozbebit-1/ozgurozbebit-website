<?php
session_start();
require_once "../config/title_engine.php";

ini_set('display_errors', 0);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

try {

    if(!isset($_SESSION["user_id"])){
        echo json_encode(["success"=>false,"message"=>"Oturum bulunamadı."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $input = json_decode(file_get_contents("php://input"), true);
    if(!is_array($input)){ $input = []; }

    $imageUrl = trim($input["image_url"] ?? "");
    $title = trim($input["title"] ?? "PANİK ATAK NEDİR?");
    $title = smartVisualTitle($title);
    $subtitle = trim($input["subtitle"] ?? "Panik atak, aniden başlayan yoğun kaygı ve bedensel belirtilerle seyredebilir.");

    if($imageUrl === ""){
        echo json_encode(["success"=>false,"message"=>"Görsel yolu boş geldi."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $imagePath = str_replace("../", "", $imageUrl);
    $sourcePath = "../" . $imagePath;

    if(!file_exists($sourcePath)){
        echo json_encode(["success"=>false,"message"=>"Kaynak görsel bulunamadı: ".$sourcePath], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $fontRegular = __DIR__ . "/../assets/fonts/DejaVuSans.ttf";
    $fontBold = __DIR__ . "/../assets/fonts/DejaVuSans-Bold.ttf";
    $logoPath = __DIR__ . "/../assets/logo.png";

    if(!file_exists($fontRegular) || !file_exists($fontBold)){
        echo json_encode(["success"=>false,"message"=>"Font dosyası bulunamadı."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $img = imagecreatefromstring(file_get_contents($sourcePath));

    if(!$img){
        echo json_encode(["success"=>false,"message"=>"Görsel açılamadı."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $w = imagesx($img);
    $h = imagesy($img);

    imagealphablending($img, true);
    imagesavealpha($img, true);

    $white = imagecolorallocate($img, 255, 255, 255);
    $navy = imagecolorallocate($img, 5, 48, 73);
    $softWhite = imagecolorallocate($img, 245, 248, 250);
    $dark = imagecolorallocate($img, 20, 35, 45);

    function areaBrightness($img, $x, $y, $width, $height){
        $total = 0;
        $count = 0;
        $step = 20;

        for($i=$x; $i<$x+$width; $i+=$step){
            for($j=$y; $j<$y+$height; $j+=$step){
                if($i >= imagesx($img) || $j >= imagesy($img)) continue;

                $rgb = imagecolorat($img, $i, $j);
                $r = ($rgb >> 16) & 0xFF;
                $g = ($rgb >> 8) & 0xFF;
                $b = $rgb & 0xFF;

                $brightness = ($r + $g + $b) / 3;
                $total += $brightness;
                $count++;
            }
        }

        return $count > 0 ? $total / $count : 255;
    }

    function areaComplexity($img, $x, $y, $width, $height){
        $totalDiff = 0;
        $count = 0;
        $step = 25;

        for($i=$x; $i<$x+$width-$step; $i+=$step){
            for($j=$y; $j<$y+$height-$step; $j+=$step){
                if($i+$step >= imagesx($img) || $j+$step >= imagesy($img)) continue;

                $rgb1 = imagecolorat($img, $i, $j);
                $rgb2 = imagecolorat($img, $i+$step, $j+$step);

                $r1 = ($rgb1 >> 16) & 0xFF;
                $g1 = ($rgb1 >> 8) & 0xFF;
                $b1 = $rgb1 & 0xFF;

                $r2 = ($rgb2 >> 16) & 0xFF;
                $g2 = ($rgb2 >> 8) & 0xFF;
                $b2 = $rgb2 & 0xFF;

                $diff = abs($r1-$r2) + abs($g1-$g2) + abs($b1-$b2);
                $totalDiff += $diff;
                $count++;
            }
        }

        return $count > 0 ? $totalDiff / $count : 0;
    }

    function drawWrappedText($img, $text, $font, $size, $x, $y, $color, $shadowColor, $maxWidth, $lineHeight){
        $words = explode(" ", trim($text));
        $line = "";
        $lastY = $y;

        foreach($words as $word){
            $testLine = $line === "" ? $word : $line . " " . $word;
            $box = imagettfbbox($size, 0, $font, $testLine);
            $testWidth = $box[2] - $box[0];

            if($testWidth > $maxWidth && $line !== ""){
                imagettftext($img, $size, 0, $x + 2, $y + 2, $shadowColor, $font, $line);
                imagettftext($img, $size, 0, $x, $y, $color, $font, $line);
                $lastY = $y;
                $line = $word;
                $y += $lineHeight;
            } else {
                $line = $testLine;
            }
        }

        if($line !== ""){
            imagettftext($img, $size, 0, $x + 2, $y + 2, $shadowColor, $font, $line);
            imagettftext($img, $size, 0, $x, $y, $color, $font, $line);
            $lastY = $y;
        }

        return $lastY;
    }

    function tr_uppercase($text){
        $search = ['i','ı','ğ','ü','ş','ö','ç','â','î','û'];
        $replace = ['İ','I','Ğ','Ü','Ş','Ö','Ç','Â','Î','Û'];
        $text = str_replace($search, $replace, $text);
        return mb_strtoupper($text, 'UTF-8');
    }

    $footerColor = imagecolorallocate($img, 3, 63, 92);
    imagefilledrectangle($img, 0, $h - 100, $w, $h, $footerColor);

    if(file_exists($logoPath)){
        $logo = @imagecreatefrompng($logoPath);

        if($logo){
            $logoSize = 58;
            $logoCanvas = imagecreatetruecolor($logoSize, $logoSize);
            imagealphablending($logoCanvas, false);
            imagesavealpha($logoCanvas, true);

            $transparent = imagecolorallocatealpha($logoCanvas, 0, 0, 0, 127);
            imagefilledrectangle($logoCanvas, 0, 0, $logoSize, $logoSize, $transparent);

            imagecopyresampled($logoCanvas, $logo, 0, 0, 0, 0, $logoSize, $logoSize, imagesx($logo), imagesy($logo));

            for($x = 0; $x < $logoSize; $x++){
                for($y = 0; $y < $logoSize; $y++){
                    $rgba = imagecolorat($logoCanvas, $x, $y);
                    $r = ($rgba >> 16) & 0xFF;
                    $g = ($rgba >> 8) & 0xFF;
                    $b = $rgba & 0xFF;

                    if($r < 25 && $g < 25 && $b < 25){
                        imagesetpixel($logoCanvas, $x, $y, $transparent);
                    }
                }
            }

            imagecopy($img, $logoCanvas, 18, $h - 78, 0, 0, $logoSize, $logoSize);

            imagedestroy($logoCanvas);
            imagedestroy($logo);
        }
    }

    $title = tr_uppercase($title);

    $topY = 78;
    $boxW = 390;
    $boxH = 210;

    $leftX = 60;
    $rightX = max(60, $w - $boxW - 60);

    $leftComplexity = areaComplexity($img, $leftX, $topY, $boxW, $boxH);
    $rightComplexity = areaComplexity($img, $rightX, $topY, $boxW, $boxH);

    if($rightComplexity + 8 < $leftComplexity){
        $textX = $rightX;
    } else {
        $textX = $leftX;
    }

    $textY = 88;
    $textMaxWidth = 380;

    $selectedBrightness = areaBrightness($img, $textX, $topY, $boxW, $boxH);

    if($selectedBrightness > 120){
        $titleColor = $navy;
        $subtitleColor = $dark;
        $shadowColor = imagecolorallocatealpha($img, 255, 255, 255, 30);
    } else {
        $titleColor = $white;
        $subtitleColor = $softWhite;
        $shadowColor = imagecolorallocatealpha($img, 0, 20, 35, 10);
    }

    $titleEndY = drawWrappedText($img, $title, $fontBold, 32, $textX, $textY, $titleColor, $shadowColor, $textMaxWidth, 40);

    if($subtitle !== ""){
        $subtitleY = $titleEndY + 36;
        drawWrappedText($img, $subtitle, $fontRegular, 18, $textX, $subtitleY, $subtitleColor, $shadowColor, $textMaxWidth, 26);
    }

    $footerWhite = imagecolorallocate($img, 255, 255, 255);
    $footerSoft = imagecolorallocate($img, 220, 238, 245);
    $footerGold = imagecolorallocate($img, 214, 170, 88);
    $footerShadow = imagecolorallocatealpha($img, 0, 20, 35, 35);

    imagettftext($img, 24, 0, 88 + 2, $h - 54 + 2, $footerShadow, $fontBold, "Uzm. Dr. Özgür Özbebit");
    imagettftext($img, 24, 0, 88, $h - 54, $footerWhite, $fontBold, "Uzm. Dr. Özgür Özbebit");
    imagettftext($img, 15, 0, 88, $h - 25, $footerSoft, $fontRegular, "Psikiyatri Uzmanı");

    imageline($img, $w - 365, $h - 72, $w - 365, $h - 28, $footerGold);

    imagettftext($img, 16, 0, $w - 330, $h - 54, $footerWhite, $fontRegular, "ozgurozbebit.com.tr");
    imagettftext($img, 15, 0, $w - 330, $h - 25, $footerSoft, $fontRegular, "@drozgurozbebit");

    $dir = "../uploads/branded_images";
    if(!is_dir($dir)){
        mkdir($dir, 0755, true);
    }

    $filename = "brand_" . date("Ymd_His") . "_" . rand(1000,9999) . ".png";
    $outputPath = $dir . "/" . $filename;

    imagepng($img, $outputPath);
    imagedestroy($img);

    echo json_encode([
        "success"=>true,
        "message"=>"Logo entegre kurumsal görsel başarıyla oluşturuldu.",
        "image_url"=>"../uploads/branded_images/".$filename
    ], JSON_UNESCAPED_UNICODE);
    exit;

} catch(Throwable $e) {

    echo json_encode([
        "success"=>false,
        "message"=>"PHP hata yakaladı: ".$e->getMessage(),
        "file"=>$e->getFile(),
        "line"=>$e->getLine()
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
?>