<?php
session_start();

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
    $title = trim($input["title"] ?? "KONU BAŞLIĞI");
    $subtitle = trim($input["subtitle"] ?? "");
    $middleText = trim($input["middle_text"] ?? $input["middleText"] ?? $input["content"] ?? "");

    if($imageUrl === ""){
        echo json_encode(["success"=>false,"message"=>"Görsel yolu boş geldi."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $pathOnly = parse_url($imageUrl, PHP_URL_PATH);
    if(!$pathOnly){ $pathOnly = $imageUrl; }

    $pathOnly = urldecode($pathOnly);
    $pathOnly = str_replace("\\", "/", $pathOnly);
    $pathOnly = preg_replace('#^(\.\./)+#', '', $pathOnly);

    if(str_starts_with($pathOnly, "/")){
        $sourcePath = __DIR__ . "/.." . $pathOnly;
    }else{
        $sourcePath = __DIR__ . "/../" . $pathOnly;
    }

    if(!file_exists($sourcePath)){
        echo json_encode(["success"=>false,"message"=>"Kaynak görsel bulunamadı: ".$sourcePath], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $fontRegularCandidates = [
        __DIR__ . "/../assets/fonts/Poppins-Regular.ttf",
        __DIR__ . "/../assets/fonts/Montserrat-Regular.ttf",
        __DIR__ . "/../assets/fonts/Inter-Regular.ttf",
        __DIR__ . "/../assets/fonts/DejaVuSans.ttf"
    ];

    $fontBoldCandidates = [
        __DIR__ . "/../assets/fonts/Poppins-SemiBold.ttf",
        __DIR__ . "/../assets/fonts/Montserrat-SemiBold.ttf",
        __DIR__ . "/../assets/fonts/Inter-SemiBold.ttf",
        __DIR__ . "/../assets/fonts/DejaVuSans-Bold.ttf"
    ];

    $fontRegular = "";
    foreach($fontRegularCandidates as $f){
        if(file_exists($f)){ $fontRegular = $f; break; }
    }

    $fontBold = "";
    foreach($fontBoldCandidates as $f){
        if(file_exists($f)){ $fontBold = $f; break; }
    }

    $footerPath = __DIR__ . "/../assets/premium_footer_banner.png";

    if(!file_exists($fontRegular) || !file_exists($fontBold)){
        echo json_encode(["success"=>false,"message"=>"Font dosyası bulunamadı."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    function pr_upper($text){
        $search = ['i','ı','ğ','ü','ş','ö','ç','â','î','û'];
        $replace = ['İ','I','Ğ','Ü','Ş','Ö','Ç','Â','Î','Û'];
        return mb_strtoupper(str_replace($search, $replace, $text), 'UTF-8');
    }

    function pr_text_width($font, $size, $text){
        $box = imagettfbbox($size, 0, $font, $text);
        return abs($box[2] - $box[0]);
    }

    function pr_wrap_lines($text, $font, $size, $maxWidth, $maxLines=3){
        $words = preg_split('/\s+/', trim($text));
        $lines = [];
        $line = "";

        foreach($words as $word){
            $test = ($line === "") ? $word : $line . " " . $word;

            if(pr_text_width($font, $size, $test) > $maxWidth && $line !== ""){
                $lines[] = $line;
                $line = $word;

                if(count($lines) >= $maxLines){
                    break;
                }
            }else{
                $line = $test;
            }
        }

        if($line !== "" && count($lines) < $maxLines){
            $lines[] = $line;
        }

        return $lines;
    }

    function pr_draw_centered($img, $text, $font, $size, $centerX, $y, $color, $shadow, $maxWidth, $lineHeight, $maxLines=2){
        $lines = pr_wrap_lines($text, $font, $size, $maxWidth, $maxLines);

        foreach($lines as $ln){
            $tw = pr_text_width($font, $size, $ln);
            $x = intval($centerX - ($tw / 2));

            imagettftext($img, $size, 0, $x + 2, $y + 3, $shadow, $font, $ln);
            imagettftext($img, $size, 0, $x, $y, $color, $font, $ln);

            $y += $lineHeight;
        }

        return $y;
    }

    function pr_soft_rounded_box($canvas, $x, $y, $w, $h, $radius, $r, $g, $b, $alpha){
        $layer = imagecreatetruecolor($w, $h);
        imagealphablending($layer, false);
        imagesavealpha($layer, true);

        $transparent = imagecolorallocatealpha($layer, 0, 0, 0, 127);
        imagefilledrectangle($layer, 0, 0, $w, $h, $transparent);

        $color = imagecolorallocatealpha($layer, $r, $g, $b, $alpha);

        imagefilledrectangle($layer, $radius, 0, $w - $radius, $h, $color);
        imagefilledrectangle($layer, 0, $radius, $w, $h - $radius, $color);

        imagefilledellipse($layer, $radius, $radius, $radius * 2, $radius * 2, $color);
        imagefilledellipse($layer, $w - $radius, $radius, $radius * 2, $radius * 2, $color);
        imagefilledellipse($layer, $radius, $h - $radius, $radius * 2, $radius * 2, $color);
        imagefilledellipse($layer, $w - $radius, $h - $radius, $radius * 2, $radius * 2, $color);

        imagealphablending($canvas, true);
        imagecopy($canvas, $layer, $x, $y, 0, 0, $w, $h);
        imagedestroy($layer);
    }

    $src = imagecreatefromstring(file_get_contents($sourcePath));
    if(!$src){
        echo json_encode(["success"=>false,"message"=>"Görsel açılamadı."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $sw = imagesx($src);
    $sh = imagesy($src);

    $w = 1080;
    $h = 1920;

    $canvas = imagecreatetruecolor($w, $h);
    imagealphablending($canvas, true);
    imagesavealpha($canvas, true);

    $white = imagecolorallocate($canvas, 255, 255, 255);
    $shadow = imagecolorallocatealpha($canvas, 0, 0, 0, 26);

    $isBrandedPost = str_contains($pathOnly, "branded_images");

    if($isBrandedPost){
        $cropX = 0;
        $cropY = intval($sh * 0.20);
        $cropW = $sw;
        $cropH = intval($sh * 0.56);
    }else{
        $cropX = 0;
        $cropY = 0;
        $cropW = $sw;
        $cropH = $sh;
    }

    $footerH = 260;

    if(file_exists($footerPath)){
        $tmpFooter = imagecreatefrompng($footerPath);
        if($tmpFooter){
            $footerH = imagesy($tmpFooter);
            imagedestroy($tmpFooter);
        }
    }

    $usableH = $h - $footerH;

    $scale = max($w / $cropW, $usableH / $cropH);
    $newW = intval($cropW * $scale);
    $newH = intval($cropH * $scale);
    $dstX = intval(($w - $newW) / 2);
    $dstY = intval(($usableH - $newH) / 2);

    imagecopyresampled($canvas, $src, $dstX, $dstY, $cropX, $cropY, $newW, $newH, $cropW, $cropH);

    $topShade = imagecolorallocatealpha($canvas, 0, 0, 0, 82);
    imagefilledrectangle($canvas, 0, 0, $w, 490, $topShade);

    $midShade = imagecolorallocatealpha($canvas, 0, 0, 0, 112);
    imagefilledrectangle($canvas, 0, 490, $w, 670, $midShade);

    $title = pr_upper($title);
    $titleLen = mb_strlen($title, 'UTF-8');

    if($titleLen > 42){
        $titleSize = 56;
        $titleLine = 70;
    }elseif($titleLen > 26){
        $titleSize = 68;
        $titleLine = 82;
    }else{
        $titleSize = 80;
        $titleLine = 94;
    }

    $titleEndY = pr_draw_centered(
        $canvas,
        $title,
        $fontBold,
        $titleSize,
        intval($w / 2),
        110,
        $white,
        $shadow,
        960,
        $titleLine,
        3
    );

    $subtitleY = $titleEndY + 35;

    if($subtitle !== ""){
        pr_draw_centered(
            $canvas,
            $subtitle,
            $fontRegular,
            42,
            intval($w / 2),
            $subtitleY,
            $white,
            $shadow,
            900,
            52,
            2
        );
    }

    if($middleText !== ""){

        $boxX = 95;
        $boxW = 890;
        $boxY = 950;

        $textSize = 26;
        $lineHeight = 38;
        $maxLines = 9;

        $paddingX = 52;
        $paddingTop = 46;
        $paddingBottom = 46;

        $textLines = pr_wrap_lines(
            $middleText,
            $fontRegular,
            $textSize,
            $boxW - ($paddingX * 2),
            $maxLines
        );

        $boxH = $paddingTop + $paddingBottom + (count($textLines) * $lineHeight);

        $maxBoxBottom = $h - $footerH - 65;

        if($boxY + $boxH > $maxBoxBottom){
            $boxY = $maxBoxBottom - $boxH;
        }

        pr_soft_rounded_box($canvas, $boxX, $boxY, $boxW, $boxH, 30, 245, 245, 245, 22);

        $black = imagecolorallocate($canvas, 22, 22, 22);
        $ty = $boxY + $paddingTop + 2;

        foreach($textLines as $ln){
            imagettftext(
                $canvas,
                $textSize,
                0,
                $boxX + $paddingX,
                $ty,
                $black,
                $fontRegular,
                $ln
            );
            $ty += $lineHeight;
        }
    }

    if(file_exists($footerPath)){
        $footer = imagecreatefrompng($footerPath);
        if($footer){
            $footerW = imagesx($footer);
            $footerH = imagesy($footer);

            imagecopyresampled(
                $canvas,
                $footer,
                0,
                $h - $footerH,
                0,
                0,
                $w,
                $footerH,
                $footerW,
                $footerH
            );

            imagedestroy($footer);
        }
    }

    $dir = "../uploads/story_images";

    if(!is_dir($dir)){
        mkdir($dir, 0755, true);
    }

    $filename = "story_" . date("Ymd_His") . "_" . rand(1000,9999) . ".jpg";
    $outputPath = $dir . "/" . $filename;

    imagejpeg($canvas, $outputPath, 95);

    imagedestroy($src);
    imagedestroy($canvas);

    echo json_encode([
        "success"=>true,
        "message"=>"Premium story başarıyla oluşturuldu.",
        "image_url"=>"../uploads/story_images/".$filename
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