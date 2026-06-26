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
    $title = trim($input["title"] ?? "KONU");
    $slides = $input["slides"] ?? [];

    if($imageUrl === ""){
        echo json_encode(["success"=>false,"message"=>"image_url boş geldi."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    if(!is_array($slides)){ $slides = []; }

    function cr_clean_label_text($text){
        $text = trim((string)$text);
        $text = mb_convert_encoding($text, 'UTF-8', 'UTF-8');
        $text = @iconv('UTF-8', 'UTF-8//IGNORE', $text);
        $text = preg_replace('/[\x{1F000}-\x{1FAFF}\x{2600}-\x{27BF}]/u', '', $text);
        $text = preg_replace('/\*\*/u', '', $text);
        $text = preg_replace('/---/u', '', $text);
        $text = preg_replace('/^\s*[-–—]*\s*\d+[\.\)]\s*/u', '', $text);

        $blockedLabels = [
            'Başlık','Baslik','Ana Başlık','Ana Baslik','Alt Başlık','Alt Baslik',
            'Giriş','Giris','Sonuç','Sonuc','Açıklama','Aciklama',
            'Metin','Konu','Slayt','Slide','Ekran'
        ];

        foreach($blockedLabels as $label){
            $text = preg_replace('/^\s*'.preg_quote($label, '/').'\s*\d*\s*:\s*/iu', '', $text);
            $text = preg_replace('/\n\s*'.preg_quote($label, '/').'\s*\d*\s*:\s*/iu', "\n", $text);
        }

        $text = preg_replace('/\s{2,}/u', ' ', $text);
        $text = preg_replace('/\n{3,}/u', "\n\n", $text);
        return trim($text);
    }

    $slides = array_values(array_filter(array_map(function($x){
        return cr_clean_label_text($x);
    }, $slides)));

    if(count($slides) < 2){
        echo json_encode(["success"=>false,"message"=>"Carousel için en az 2 slayt metni gerekli."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $slides = array_slice($slides, 0, 5);
    $title = cr_clean_label_text($title);

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
    foreach($fontRegularCandidates as $f){ if(file_exists($f)){ $fontRegular = $f; break; } }
    $fontBold = "";
    foreach($fontBoldCandidates as $f){ if(file_exists($f)){ $fontBold = $f; break; } }

    if(!file_exists($fontRegular) || !file_exists($fontBold)){
        echo json_encode(["success"=>false,"message"=>"Font dosyası bulunamadı."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $footerPath = __DIR__ . "/../assets/premium_footer_banner.png";
    if(!file_exists($footerPath)){
        echo json_encode(["success"=>false,"message"=>"premium_footer_banner.png bulunamadı."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    function cr_upper($text){
        $search = ['i','ı','ğ','ü','ş','ö','ç','â','î','û'];
        $replace = ['İ','I','Ğ','Ü','Ş','Ö','Ç','Â','Î','Û'];
        return mb_strtoupper(str_replace($search, $replace, $text), 'UTF-8');
    }

    function cr_text_width($font, $size, $text){
        $box = imagettfbbox($size, 0, $font, $text);
        return abs($box[2] - $box[0]);
    }

    function cr_wrap_lines($text, $font, $size, $maxWidth, $maxLines=6){
        $words = preg_split('/\s+/', trim($text));
        $lines = [];
        $line = "";

        foreach($words as $word){
            $test = ($line === "") ? $word : $line . " " . $word;
            if(cr_text_width($font, $size, $test) > $maxWidth && $line !== ""){
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

    function cr_average_luma($img, $x1, $y1, $x2, $y2){
        $w = imagesx($img);
        $h = imagesy($img);
        $x1 = max(0, min($w-1, intval($x1)));
        $x2 = max(0, min($w-1, intval($x2)));
        $y1 = max(0, min($h-1, intval($y1)));
        $y2 = max(0, min($h-1, intval($y2)));

        $sum = 0;
        $count = 0;
        $step = 18;

        for($y=$y1; $y<=$y2; $y+=$step){
            for($x=$x1; $x<=$x2; $x+=$step){
                $rgb = imagecolorat($img, $x, $y);
                $r = ($rgb >> 16) & 0xFF;
                $g = ($rgb >> 8) & 0xFF;
                $b = $rgb & 0xFF;
                $sum += (0.2126*$r + 0.7152*$g + 0.0722*$b);
                $count++;
            }
        }

        return $count > 0 ? ($sum / $count) : 128;
    }

    function cr_draw_center_block($img, $text, $font, $size, $centerX, $centerY, $color, $stroke, $maxWidth, $lineHeight, $maxLines){
        $lines = cr_wrap_lines($text, $font, $size, $maxWidth, $maxLines);
        $totalH = (count($lines) - 1) * $lineHeight;
        $y = intval($centerY - ($totalH / 2));

        foreach($lines as $ln){
            $tw = cr_text_width($font, $size, $ln);
            $x = intval($centerX - ($tw / 2));

            // Güçlü ama premium okunurluk: kutu yok, sadece kontur/gölge var.
            for($dx=-3; $dx<=3; $dx++){
                for($dy=-3; $dy<=3; $dy++){
                    if($dx === 0 && $dy === 0){ continue; }
                    if(($dx*$dx + $dy*$dy) <= 10){
                        imagettftext($img, $size, 0, $x + $dx, $y + $dy, $stroke, $font, $ln);
                    }
                }
            }

            imagettftext($img, $size, 0, $x, $y, $color, $font, $ln);
            $y += $lineHeight;
        }
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

    $footerProbe = imagecreatefrompng($footerPath);
    $footerOriginalW = imagesx($footerProbe);
    $footerOriginalH = imagesy($footerProbe);
    imagedestroy($footerProbe);

    // Premium footer bozulmasın, çok büyümesin.
    $footerH = min(210, max(165, $footerOriginalH));
    $photoH = $h - $footerH;

    $dir = "../uploads/carousel_images";
    if(!is_dir($dir)){ mkdir($dir, 0755, true); }

    $imageUrls = [];

    /*
      FINAL CAROUSEL SOURCE CROP
      Eğer kaynak kurumsal post ise carousel arka planına o postun üst başlığı,
      alt başlığı ve eski footer'ı taşınmasın diye sadece temiz fotoğraf gövdesi alınır.

      ÖNEMLİ:
      - Üstteki eski "LİDERLİK / alt başlık" kalıntılarını keser.
      - Alttaki eski footer kalıntılarını keser.
      - Görsel net kalır, blur uygulanmaz.
      - Yazı direkt fotoğrafın üstüne basılır.
    */
    $isBrandedSource = (
        str_contains($pathOnly, "branded_images") ||
        str_contains($pathOnly, "brand_") ||
        str_contains($pathOnly, "branded_")
    );

    if($isBrandedSource){
        $cropX = 0;

        // Eski post başlık/alt başlık alanını tamamen at.
        $cropY = intval($sh * 0.30);

        // Eski post footer alanına inmeden temiz fotoğraf alanında kal.
        $cropW = $sw;
        $cropH = intval($sh * 0.46);

        // Güvenlik: crop alanı görsel dışına taşmasın.
        if(($cropY + $cropH) > $sh){
            $cropH = $sh - $cropY;
        }
    }else{
        $cropX = 0;
        $cropY = 0;
        $cropW = $sw;
        $cropH = $sh;
    }

    foreach($slides as $i => $slideText){

        $canvas = imagecreatetruecolor($w, $h);
        imagealphablending($canvas, true);
        imagesavealpha($canvas, true);

        $black = imagecolorallocate($canvas, 12,18,32);
        $white = imagecolorallocate($canvas, 255,255,255);
        $teal = imagecolorallocate($canvas, 15,118,110);
        $tealStroke = imagecolorallocatealpha($canvas, 255,255,255, 18);
        $darkStroke = imagecolorallocatealpha($canvas, 0,0,0, 28);
        $lightStroke = imagecolorallocatealpha($canvas, 255,255,255, 10);
        $cleanBg = imagecolorallocate($canvas, 255,255,255);
        imagefilledrectangle($canvas, 0, 0, $w, $h, $cleanBg);

        // FOTOĞRAF NET: blur yok, flu yok, kart yok, oval yok.
        // Post/story gibi net görsel; sadece footer dışı fotoğraf alanına basılır.
        $scale = max($w / $cropW, $photoH / $cropH);
        $newW = intval($cropW * $scale);
        $newH = intval($cropH * $scale);
        $dstX = intval(($w - $newW) / 2);
        $dstY = intval(($photoH - $newH) / 2);

        // Eğer görsel portre/obje ağırlıklı ise tepesi kaybolmasın diye yukarıdan hizala.
        if($newH > $photoH){
            $dstY = 0;
        }

        imagecopyresampled(
            $canvas,
            $src,
            $dstX,
            $dstY,
            $cropX,
            $cropY,
            $newW,
            $newH,
            $cropW,
            $cropH
        );

        // Merkezi bölgenin parlaklığına göre yazı rengi seç.
        $luma = cr_average_luma($canvas, 110, intval($photoH*0.24), 970, intval($photoH*0.72));
        if($luma > 150){
            $textColor = $black;
            $strokeColor = $lightStroke;
        }else{
            $textColor = $white;
            $strokeColor = $darkStroke;
        }

        if($i === 0){
            $mainText = cr_upper($slideText);
            $fontSize = 45;
            $lineHeight = 57;
            $maxLines = 6;
        }else{
            $mainText = $slideText;
            $fontSize = 40;
            $lineHeight = 53;
            $maxLines = 6;
        }

        while($fontSize > 26){
            $lines = cr_wrap_lines($mainText, $fontBold, $fontSize, 900, $maxLines + 1);
            if(count($lines) <= $maxLines){ break; }
            $fontSize -= 2;
            $lineHeight = $fontSize + 12;
        }

        cr_draw_center_block(
            $canvas,
            $mainText,
            $fontBold,
            $fontSize,
            intval($w/2),
            intval($photoH/2),
            $textColor,
            $strokeColor,
            900,
            $lineHeight,
            $maxLines
        );

        // İlk slaytta Kaydır + ok, diğer slaytlarda sadece ok.
        if($i === 0){
            $navText = "Kaydır →";
            $navSize = 28;
        }else{
            $navText = "→";
            $navSize = 34;
        }

        // Kaydır yazısı da zemine göre otomatik görünür olur.
        $navLuma = cr_average_luma($canvas, 50, $photoH - 100, 320, $photoH - 25);
        $navColor = ($navLuma > 150) ? $teal : $white;
        $navStroke = ($navLuma > 150) ? $lightStroke : $darkStroke;

        for($dx=-2; $dx<=2; $dx++){
            for($dy=-2; $dy<=2; $dy++){
                if($dx === 0 && $dy === 0){ continue; }
                imagettftext($canvas, $navSize, 0, 78 + $dx, $photoH - 42 + $dy, $navStroke, $fontBold, $navText);
            }
        }
        imagettftext($canvas, $navSize, 0, 78, $photoH - 42, $navColor, $fontBold, $navText);

        // Footer alanını temizle ve sadece premium footer bas.
        imagefilledrectangle($canvas, 0, $photoH, $w, $h, $cleanBg);
        $footer = imagecreatefrompng($footerPath);
        if($footer){
            imagecopyresampled(
                $canvas,
                $footer,
                0,
                $photoH,
                0,
                0,
                $w,
                $footerH,
                imagesx($footer),
                imagesy($footer)
            );
            imagedestroy($footer);
        }

        $filename = "carousel_" . date("Ymd_His") . "_" . ($i+1) . "_" . rand(1000,9999) . ".jpg";
        $outputPath = $dir . "/" . $filename;
        imagejpeg($canvas, $outputPath, 95);
        imagedestroy($canvas);

        $imageUrls[] = "../uploads/carousel_images/" . $filename;
    }

    imagedestroy($src);

    echo json_encode([
        "success"=>true,
        "message"=>"Net foto üstü premium carousel oluşturuldu.",
        "image_urls"=>$imageUrls,
        "count"=>count($imageUrls)
    ], JSON_UNESCAPED_UNICODE);
    exit;

} catch(Throwable $e){
    echo json_encode([
        "success"=>false,
        "message"=>"PHP hata yakaladı: ".$e->getMessage(),
        "file"=>$e->getFile(),
        "line"=>$e->getLine()
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
?>
