<?php
die("SELALE BRAND IMAGE ÇALIŞIYOR");
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
    $title = trim($input["title"] ?? "KONU BAŞLIĞI");
    $subtitle = trim($input["subtitle"] ?? "");
    $middleText = trim($input["middle_text"] ?? "");

    if($imageUrl === ""){
        echo json_encode(["success"=>false,"message"=>"Görsel yolu boş geldi."], JSON_UNESCAPED_UNICODE);
        exit;
    }

   // Hem ../uploads/... hem /uploads/... hem de https://admin.../uploads/... destekler
$cleanUrl = trim($imageUrl);
$pathOnly = parse_url($cleanUrl, PHP_URL_PATH);

if(!$pathOnly){
    $pathOnly = $cleanUrl;
}

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

    $fontRegular = __DIR__ . "/../assets/fonts/DejaVuSans.ttf";
    $fontBold = __DIR__ . "/../assets/fonts/DejaVuSans-Bold.ttf";
    $logoPath = __DIR__ . "/../assets/logo.png";

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

function pr_wrap_lines($text, $font, $size, $maxWidth, $maxLines=5){
    $words = preg_split('/\s+/', trim($text));
    $lines = [];
    $line = "";

    foreach($words as $word){
        $test = ($line === "") ? $word : $line . " " . $word;

        if(pr_text_width($font, $size, $test) > $maxWidth && $line !== ""){
            $lines[] = $line;
            $line = $word;
            if(count($lines) >= $maxLines){ break; }
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

        imagettftext($img, $size, 0, $x + 3, $y + 3, $shadow, $font, $ln);
        imagettftext($img, $size, 0, $x, $y, $color, $font, $ln);

        $y += $lineHeight;
    }

    return $y;
}

function pr_draw_wrapped($img, $text, $font, $size, $x, $y, $color, $maxWidth, $lineHeight, $maxLines=5){
    $lines = pr_wrap_lines($text, $font, $size, $maxWidth, $maxLines);

    foreach($lines as $ln){
        imagettftext($img, $size, 0, $x, $y, $color, $font, $ln);
        $y += $lineHeight;
    }
}

function pr_fill_rounded_rect($img, $x1, $y1, $x2, $y2, $r, $rgba){
    // Tek seferlik alpha mask: köşelerde "pavyon ışığı" oluşmasını engeller.
    $w = $x2 - $x1;
    $h = $y2 - $y1;

    $overlay = imagecreatetruecolor($w, $h);
    imagealphablending($overlay, false);
    imagesavealpha($overlay, true);

    $transparent = imagecolorallocatealpha($overlay, 0, 0, 0, 127);
    imagefilledrectangle($overlay, 0, 0, $w, $h, $transparent);

    [$rr,$gg,$bb,$aa] = $rgba;
    $color = imagecolorallocatealpha($overlay, $rr, $gg, $bb, $aa);

    imagefilledrectangle($overlay, $r, 0, $w-$r, $h, $color);
    imagefilledrectangle($overlay, 0, $r, $w, $h-$r, $color);
    imagefilledellipse($overlay, $r, $r, $r*2, $r*2, $color);
    imagefilledellipse($overlay, $w-$r, $r, $r*2, $r*2, $color);
    imagefilledellipse($overlay, $r, $h-$r, $r*2, $r*2, $color);
    imagefilledellipse($overlay, $w-$r, $h-$r, $r*2, $r*2, $color);

    imagealphablending($img, true);
    imagecopy($img, $overlay, $x1, $y1, 0, 0, $w, $h);

    imagedestroy($overlay);
}

function pr_paste_circular_logo($canvas, $logoPath, $dstX, $dstY, $size){
    if(!file_exists($logoPath)){ return; }

    $logo = @imagecreatefrompng($logoPath);
    if(!$logo){ return; }

    $circle = imagecreatetruecolor($size, $size);
    imagealphablending($circle, false);
    imagesavealpha($circle, true);

    $transparent = imagecolorallocatealpha($circle, 0, 0, 0, 127);
    imagefilledrectangle($circle, 0, 0, $size, $size, $transparent);

    imagecopyresampled($circle, $logo, 0, 0, 0, 0, $size, $size, imagesx($logo), imagesy($logo));

    $cx = $size / 2;
    $cy = $size / 2;
    $radius = ($size / 2) - 2;

    for($x=0; $x<$size; $x++){
        for($y=0; $y<$size; $y++){
            $dx = $x - $cx;
            $dy = $y - $cy;

            if(($dx*$dx + $dy*$dy) > ($radius*$radius)){
                imagesetpixel($circle, $x, $y, $transparent);
            }
        }
    }

    imagecopy($canvas, $circle, $dstX, $dstY, 0, 0, $size, $size);

    imagedestroy($circle);
    imagedestroy($logo);
}


    $src = imagecreatefromstring(file_get_contents($sourcePath));

    if(!$src){
        echo json_encode(["success"=>false,"message"=>"Görsel açılamadı."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $sw = imagesx($src);
    $sh = imagesy($src);

    $w = 1080;
    $h = 1080;

    $canvas = imagecreatetruecolor($w, $h);
    imagealphablending($canvas, true);
    imagesavealpha($canvas, true);

    $white = imagecolorallocate($canvas, 255, 255, 255);
    $black = imagecolorallocate($canvas, 18, 18, 18);
    $footerColor = imagecolorallocate($canvas, 3, 63, 92);
    $footerSoft = imagecolorallocate($canvas, 220, 238, 245);
    $gold = imagecolorallocate($canvas, 214, 170, 88);
    $shadow = imagecolorallocatealpha($canvas, 0, 0, 0, 48);

    // TEK RESİM: foto içinde foto yok.
    $scale = max($w / $sw, $h / $sh);
    $newW = intval($sw * $scale);
    $newH = intval($sh * $scale);
    $dstX = intval(($w - $newW) / 2);
    $dstY = intval(($h - $newH) / 2);

    imagecopyresampled($canvas, $src, $dstX, $dstY, 0, 0, $newW, $newH, $sw, $sh);

    $warm = imagecolorallocatealpha($canvas, 120, 70, 25, 115);
    imagefilledrectangle($canvas, 0, 0, $w, $h, $warm);

    $title = pr_upper($title);
    $titleLen = mb_strlen($title, 'UTF-8');

    if($titleLen > 42){
        $titleSize = 34;
        $titleLine = 42;
    }elseif($titleLen > 28){
        $titleSize = 42;
        $titleLine = 50;
    }else{
        $titleSize = 52;
        $titleLine = 60;
    }

    $titleEndY = pr_draw_centered(
        $canvas,
        $title,
        $fontBold,
        $titleSize,
        intval($w/2),
        70,
        $white,
        $shadow,
        940,
        $titleLine,
        2
    );

    $sepY = $titleEndY + 8;
   
    if($subtitle !== ""){
        pr_draw_centered(
            $canvas,
            $subtitle,
            $fontRegular,
            22,
            intval($w/2),
            $sepY + 40,
            $white,
            $shadow,
            800,
            29,
            2
        );
    }

  // Orta metin kutusu: uzun metinlerde otomatik küçülür ve kesilmez.
if($middleText !== ""){
    $panelX = 95;
    $panelY = 520;
    $panelW = 890;
    $panelH = 290;

    $textMaxWidth = $panelW - 90;
    $fontSize = 24;
    $lineHeight = 34;
    $maxLines = 6;

    // Metin sığmazsa fontu kademeli küçült
    while($fontSize > 16){
        $lines = pr_wrap_lines($middleText, $fontRegular, $fontSize, $textMaxWidth, $maxLines + 1);

        if(count($lines) <= $maxLines){
            break;
        }

        $fontSize--;
        $lineHeight = $fontSize + 10;
    }

    $lines = pr_wrap_lines($middleText, $fontRegular, $fontSize, $textMaxWidth, $maxLines);

    pr_fill_rounded_rect(
        $canvas,
        $panelX,
        $panelY,
        $panelX + $panelW,
        $panelY + $panelH,
        28,
        [255,255,255,22]
    );

    $startY = $panelY + 58;

    foreach($lines as $ln){
        imagettftext(
            $canvas,
            $fontSize,
            0,
            $panelX + 45,
            $startY,
            $black,
            $fontRegular,
            $ln
        );

        $startY += $lineHeight;
    }
}

    // V33.5 Premium hazır footer banner
$footerPath = __DIR__ . "/../assets/premium_footer_banner_selale.png";

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

    $dir = "../uploads/branded_images";
    if(!is_dir($dir)){
        mkdir($dir, 0755, true);
    }

    $filename = "brand_" . date("Ymd_His") . "_" . rand(1000,9999) . ".jpg";
    $outputPath = $dir . "/" . $filename;

    imagejpeg($canvas, $outputPath, 88);

    imagedestroy($src);
    imagedestroy($canvas);

    echo json_encode([
        "success"=>true,
        "message"=>"V33.4 premium tek resim post başarıyla oluşturuldu.",
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
