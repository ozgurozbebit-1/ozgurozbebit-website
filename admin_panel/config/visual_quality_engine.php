<?php

function scoreVisualQuality($data = [])
{
    $title        = trim($data["title"] ?? "");
    $subtitle     = trim($data["subtitle"] ?? "");
    $imagePrompt  = trim($data["image_prompt"] ?? "");
    $visualStyle  = trim($data["visual_style"] ?? "");
    $metaphor     = trim($data["metaphor"] ?? "");
    $hasLogo      = $data["has_logo"] ?? true;
    $hasFooter    = $data["has_footer"] ?? true;
    $hasOverlay   = $data["has_overlay"] ?? true;

    $score = 0;
    $strengths = [];
    $warnings = [];
    $suggestions = [];

    /*
    |--------------------------------------------------------------------------
    | 1. Başlık Kalitesi - 15 Puan
    |--------------------------------------------------------------------------
    */

    $titleLen = mb_strlen($title, "UTF-8");

    if ($titleLen >= 12 && $titleLen <= 55) {
        $score += 15;
        $strengths[] = "Başlık uzunluğu sosyal medya için ideal.";
    } elseif ($titleLen > 55 && $titleLen <= 75) {
        $score += 10;
        $warnings[] = "Başlık biraz uzun olabilir.";
        $suggestions[] = "Başlığı daha kısa ve vurucu hale getirebilirsin.";
    } elseif ($titleLen > 0) {
        $score += 6;
        $warnings[] = "Başlık uzunluğu ideal aralığın dışında.";
        $suggestions[] = "Başlığı 12–55 karakter aralığında tutmak daha iyi sonuç verir.";
    } else {
        $warnings[] = "Başlık bulunamadı.";
        $suggestions[] = "Görsele mutlaka net bir ana başlık eklenmeli.";
    }

    /*
    |--------------------------------------------------------------------------
    | 2. Alt Başlık Kalitesi - 10 Puan
    |--------------------------------------------------------------------------
    */

    $subtitleLen = mb_strlen($subtitle, "UTF-8");

    if ($subtitleLen >= 20 && $subtitleLen <= 120) {
        $score += 10;
        $strengths[] = "Alt başlık açıklayıcı ve dengeli.";
    } elseif ($subtitleLen > 120 && $subtitleLen <= 170) {
        $score += 6;
        $warnings[] = "Alt başlık biraz uzun.";
        $suggestions[] = "Alt başlığı daha kısa ve nefes alan bir metne çevirmek iyi olur.";
    } elseif ($subtitleLen > 0) {
        $score += 4;
        $warnings[] = "Alt başlık etkisi sınırlı olabilir.";
    } else {
        $score += 3;
        $warnings[] = "Alt başlık yok.";
    }

    /*
    |--------------------------------------------------------------------------
    | 3. Görsel Prompt Gücü - 20 Puan
    |--------------------------------------------------------------------------
    */

    $promptLen = mb_strlen($imagePrompt, "UTF-8");

    if ($promptLen >= 300) {
        $score += 20;
        $strengths[] = "Görsel prompt detaylı ve zengin.";
    } elseif ($promptLen >= 160) {
        $score += 14;
        $strengths[] = "Görsel prompt yeterince açıklayıcı.";
    } elseif ($promptLen > 0) {
        $score += 8;
        $warnings[] = "Görsel prompt biraz zayıf.";
        $suggestions[] = "Prompt içine ışık, kompozisyon, duygu, stil ve metafor detayları eklenebilir.";
    } else {
        $warnings[] = "Görsel prompt bulunamadı.";
        $suggestions[] = "Skorlama için görsel prompt bilgisinin gönderilmesi önerilir.";
    }

    /*
    |--------------------------------------------------------------------------
    | 4. Metafor Gücü - 15 Puan
    |--------------------------------------------------------------------------
    */

    $metaphorLen = mb_strlen($metaphor, "UTF-8");

    if ($metaphorLen >= 40) {
        $score += 15;
        $strengths[] = "Metafor güçlü ve görsel anlatımı destekliyor.";
    } elseif ($metaphorLen > 0) {
        $score += 9;
        $warnings[] = "Metafor var ama daha güçlü olabilir.";
        $suggestions[] = "Metaforu daha sinematik veya sembolik hale getirebilirsin.";
    } else {
        $score += 4;
        $warnings[] = "Metafor bilgisi sınırlı.";
    }

    /*
    |--------------------------------------------------------------------------
    | 5. Görsel Stil / Premium Etki - 15 Puan
    |--------------------------------------------------------------------------
    */

    $styleText = mb_strtolower($visualStyle . " " . $imagePrompt, "UTF-8");

    $premiumKeywords = [
        "premium",
        "sinematik",
        "cinematic",
        "editorial",
        "minimal",
        "modern",
        "soft light",
        "dramatic light",
        "professional",
        "realistic",
        "high quality",
        "depth of field",
        "studio",
        "magazine"
    ];

    $premiumHit = 0;

    foreach ($premiumKeywords as $word) {
        if (mb_strpos($styleText, $word) !== false) {
            $premiumHit++;
        }
    }

    if ($premiumHit >= 4) {
        $score += 15;
        $strengths[] = "Görsel stil premium algıyı destekliyor.";
    } elseif ($premiumHit >= 2) {
        $score += 10;
        $strengths[] = "Görsel stil yeterince profesyonel.";
    } elseif ($premiumHit >= 1) {
        $score += 6;
        $warnings[] = "Premium görsel dili biraz zayıf.";
        $suggestions[] = "Prompt içine sinematik ışık, editorial kompozisyon ve profesyonel fotoğraf dili eklenebilir.";
    } else {
        $score += 3;
        $warnings[] = "Premium stil sinyali düşük.";
    }

    /*
    |--------------------------------------------------------------------------
    | 6. Marka / Footer Sistemi - 10 Puan
    |--------------------------------------------------------------------------
    */

    if ($hasLogo && $hasFooter) {
        $score += 10;
        $strengths[] = "Logo ve footer marka bütünlüğünü destekliyor.";
    } elseif ($hasLogo || $hasFooter) {
        $score += 6;
        $warnings[] = "Marka alanı kısmen eksik.";
        $suggestions[] = "Logo ve footer birlikte kullanılırsa görsel daha kurumsal görünür.";
    } else {
        $score += 2;
        $warnings[] = "Logo/footer bulunmuyor.";
    }

    /*
    |--------------------------------------------------------------------------
    | 7. Okunabilirlik / Kontrast Varsayımı - 10 Puan
    |--------------------------------------------------------------------------
    */

    if ($hasOverlay) {
        $score += 10;
        $strengths[] = "Yazı okunabilirliği için overlay/kontrast katmanı aktif.";
    } else {
        $score += 5;
        $warnings[] = "Overlay/kontrast katmanı pasif görünüyor.";
        $suggestions[] = "Başlık alanına yarı saydam degrade veya kontrast panel eklenebilir.";
    }

    /*
    |--------------------------------------------------------------------------
    | Final Normalizasyon
    |--------------------------------------------------------------------------
    */

    if ($score > 100) {
        $score = 100;
    }

    if ($score >= 85) {
        $status = "Kullanıma hazır";
        $status_icon = "✅";
        $level = "excellent";
    } elseif ($score >= 70) {
        $status = "Küçük düzeltme önerilir";
        $status_icon = "🟡";
        $level = "good";
    } elseif ($score >= 50) {
        $status = "Yeniden üretim önerilir";
        $status_icon = "🟠";
        $level = "weak";
    } else {
        $status = "Başarısız görsel";
        $status_icon = "🔴";
        $level = "bad";
    }

    /*
    |--------------------------------------------------------------------------
    | V18.1 Akıllı Kalite Yorumu
    |--------------------------------------------------------------------------
    */

    if ($score >= 90) {
        $smartComment = "Bu görsel yayın için çok güçlü görünüyor. Başlık, alt başlık, metafor, marka bütünlüğü ve okunabilirlik dengeli şekilde çalışıyor.";
    } elseif ($score >= 85) {
        $smartComment = "Bu görsel yayınlanabilir seviyede. Genel kalite güçlü; küçük dokunuşlarla daha da premium hale getirilebilir.";
    } elseif ($score >= 70) {
        $smartComment = "Bu görsel kullanılabilir ancak yayın öncesi küçük düzeltmeler önerilir. Özellikle metin uzunluğu, metafor gücü veya marka alanı yeniden kontrol edilebilir.";
    } elseif ($score >= 50) {
        $smartComment = "Bu görsel fikir olarak kullanılabilir fakat mevcut haliyle yeniden düzenlenmesi daha doğru olur. Daha güçlü prompt, daha net metafor ve daha iyi kontrast gerekebilir.";
    } else {
        $smartComment = "Bu görsel yayın için zayıf görünüyor. Yeni bir görsel üretmek, başlık ve metafor yapısını baştan kurmak daha sağlıklı olur.";
    }

    if (count($warnings) === 0 && $score >= 85) {
        $smartComment .= " Belirgin bir risk alanı görünmüyor.";
    }

    if (count($suggestions) > 0 && $score < 90) {
        $smartComment .= " İyileştirme önerilerini uygulamak sonucu belirgin şekilde güçlendirebilir.";
    }

    return [
        "success" => true,
        "score" => $score,
        "status" => $status,
        "status_icon" => $status_icon,
        "level" => $level,
        "smart_comment" => $smartComment,
        "strengths" => array_values(array_unique($strengths)),
        "warnings" => array_values(array_unique($warnings)),
        "suggestions" => array_values(array_unique($suggestions))
    ];
}