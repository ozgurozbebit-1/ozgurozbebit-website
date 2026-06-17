<?php

function scorePlatformPotential($data = [])
{
    $title        = trim($data["title"] ?? "");
    $subtitle     = trim($data["subtitle"] ?? "");
    $metaphor     = trim($data["metaphor"] ?? "");
    $visualStyle  = trim($data["visual_style"] ?? "");
    $topic        = trim($data["topic"] ?? "");

    $titleLower   = mb_strtolower($title, "UTF-8");
    $subtitleLower= mb_strtolower($subtitle, "UTF-8");
    $metaphorLower= mb_strtolower($metaphor, "UTF-8");
    $styleLower   = mb_strtolower($visualStyle, "UTF-8");
    $topicLower   = mb_strtolower($topic, "UTF-8");

    $platforms = [
        "instagram" => [
            "name" => "Instagram",
            "score" => 50,
            "strengths" => [],
            "warnings" => [],
            "suggestions" => []
        ],
        "facebook" => [
            "name" => "Facebook",
            "score" => 50,
            "strengths" => [],
            "warnings" => [],
            "suggestions" => []
        ],
        "linkedin" => [
            "name" => "LinkedIn",
            "score" => 50,
            "strengths" => [],
            "warnings" => [],
            "suggestions" => []
        ],
        "x" => [
            "name" => "X",
            "score" => 50,
            "strengths" => [],
            "warnings" => [],
            "suggestions" => []
        ],
        "youtube" => [
            "name" => "YouTube Community",
            "score" => 50,
            "strengths" => [],
            "warnings" => [],
            "suggestions" => []
        ]
    ];

    /*
    |--------------------------------------------------------------------------
    | Ortak Analizler
    |--------------------------------------------------------------------------
    */

    $titleLen = mb_strlen($title, "UTF-8");
    $subtitleLen = mb_strlen($subtitle, "UTF-8");
    $metaphorLen = mb_strlen($metaphor, "UTF-8");

    $premiumKeywords = [
        "premium",
        "sinematik",
        "cinematic",
        "modern",
        "minimal",
        "editorial",
        "realistic",
        "professional",
        "kurumsal",
        "klinik"
    ];

    $premiumHit = 0;

    foreach ($premiumKeywords as $word) {
        if (mb_strpos($styleLower . " " . $metaphorLower, $word) !== false) {
            $premiumHit++;
        }
    }

    $emotionalWords = [
        "kaygı",
        "anksiyete",
        "depresyon",
        "panik",
        "yalnız",
        "stres",
        "öfke",
        "ilişki",
        "evlilik",
        "çocuk",
        "aile",
        "uyku",
        "tükenmişlik"
    ];

    $emotionalHit = 0;

    foreach ($emotionalWords as $word) {
        if (mb_strpos($topicLower . " " . $titleLower . " " . $subtitleLower, $word) !== false) {
            $emotionalHit++;
        }
    }

    $professionalWords = [
        "bilimsel",
        "klinik",
        "psikiyatri",
        "uzman",
        "tedavi",
        "belirti",
        "tanı",
        "takip",
        "ilaç",
        "ruhsal",
        "sağlık"
    ];

    $professionalHit = 0;

    foreach ($professionalWords as $word) {
        if (mb_strpos($topicLower . " " . $titleLower . " " . $subtitleLower . " " . $styleLower, $word) !== false) {
            $professionalHit++;
        }
    }

    $curiosityWords = [
        "neden",
        "nasıl",
        "aslında",
        "gerçek",
        "işaret",
        "belirti",
        "farkında",
        "sanılanın aksine",
        "biliyor musunuz",
        "en sık",
        "gizli"
    ];

    $curiosityHit = 0;

    foreach ($curiosityWords as $word) {
        if (mb_strpos($titleLower . " " . $subtitleLower, $word) !== false) {
            $curiosityHit++;
        }
    }

    /*
    |--------------------------------------------------------------------------
    | Instagram Skoru
    |--------------------------------------------------------------------------
    */

    if ($premiumHit >= 2) {
        $platforms["instagram"]["score"] += 15;
        $platforms["instagram"]["strengths"][] = "Premium görsel dili Instagram için güçlü.";
    }

    if ($metaphorLen >= 40) {
        $platforms["instagram"]["score"] += 12;
        $platforms["instagram"]["strengths"][] = "Metaforik anlatım kaydırma durdurma etkisini artırabilir.";
    }

    if ($titleLen >= 12 && $titleLen <= 55) {
        $platforms["instagram"]["score"] += 10;
        $platforms["instagram"]["strengths"][] = "Başlık Instagram görsel akışı için uygun uzunlukta.";
    }

    if ($emotionalHit > 0) {
        $platforms["instagram"]["score"] += 8;
        $platforms["instagram"]["strengths"][] = "Duygusal konu Instagram etkileşimini destekler.";
    }

    if ($titleLen > 70) {
        $platforms["instagram"]["score"] -= 8;
        $platforms["instagram"]["warnings"][] = "Başlık Instagram için uzun kalabilir.";
        $platforms["instagram"]["suggestions"][] = "Instagram için başlığı daha kısa ve vurucu hale getir.";
    }

    /*
    |--------------------------------------------------------------------------
    | Facebook Skoru
    |--------------------------------------------------------------------------
    */

    if ($emotionalHit > 0) {
        $platforms["facebook"]["score"] += 15;
        $platforms["facebook"]["strengths"][] = "Duygusal ve gündelik konu Facebook kitlesi için uygun.";
    }

    if ($subtitleLen >= 30 && $subtitleLen <= 160) {
        $platforms["facebook"]["score"] += 10;
        $platforms["facebook"]["strengths"][] = "Açıklayıcı alt başlık Facebook paylaşımı için destekleyici.";
    }

    if ($professionalHit > 0) {
        $platforms["facebook"]["score"] += 8;
        $platforms["facebook"]["strengths"][] = "Sağlık bilgilendirme dili Facebook için güven verici.";
    }

    if ($metaphorLen >= 40) {
        $platforms["facebook"]["score"] += 7;
    }

    if ($subtitleLen === 0) {
        $platforms["facebook"]["warnings"][] = "Facebook için açıklayıcı alt başlık eksik.";
        $platforms["facebook"]["suggestions"][] = "Facebook paylaşımına kısa bir açıklama eklemek etkileşimi artırabilir.";
    }

    /*
    |--------------------------------------------------------------------------
    | LinkedIn Skoru
    |--------------------------------------------------------------------------
    */

    if ($professionalHit >= 1) {
        $platforms["linkedin"]["score"] += 18;
        $platforms["linkedin"]["strengths"][] = "Profesyonel sağlık dili LinkedIn için güçlü.";
    }

    if ($premiumHit >= 2) {
        $platforms["linkedin"]["score"] += 12;
        $platforms["linkedin"]["strengths"][] = "Kurumsal ve premium görsel algısı LinkedIn için uygun.";
    }

    if ($titleLen >= 18 && $titleLen <= 75) {
        $platforms["linkedin"]["score"] += 8;
    }

    if ($subtitleLen >= 40 && $subtitleLen <= 180) {
        $platforms["linkedin"]["score"] += 8;
        $platforms["linkedin"]["strengths"][] = "Açıklayıcı alt başlık LinkedIn kitlesi için uygun.";
    }

    if ($professionalHit === 0) {
        $platforms["linkedin"]["warnings"][] = "LinkedIn için profesyonel bağlam biraz zayıf.";
        $platforms["linkedin"]["suggestions"][] = "Başlık veya açıklamada klinik/bilgilendirici çerçeve güçlendirilebilir.";
    }

    /*
    |--------------------------------------------------------------------------
    | X Skoru
    |--------------------------------------------------------------------------
    */

    if ($curiosityHit > 0) {
        $platforms["x"]["score"] += 18;
        $platforms["x"]["strengths"][] = "Merak uyandırıcı başlık X için avantajlı.";
    }

    if ($titleLen <= 50 && $titleLen >= 8) {
        $platforms["x"]["score"] += 12;
        $platforms["x"]["strengths"][] = "Kısa başlık X akışı için uygun.";
    }

    if ($titleLen > 70) {
        $platforms["x"]["score"] -= 12;
        $platforms["x"]["warnings"][] = "Başlık X için fazla uzun.";
        $platforms["x"]["suggestions"][] = "X için daha kısa, tartışma başlatan bir cümle kullanılabilir.";
    }

    if ($curiosityHit === 0) {
        $platforms["x"]["warnings"][] = "X için tartışma veya merak tetikleyicisi düşük.";
        $platforms["x"]["suggestions"][] = "Başlığa soru, çarpıcı gerçek veya kısa karşıtlık eklenebilir.";
    }

    /*
    |--------------------------------------------------------------------------
    | YouTube Community Skoru
    |--------------------------------------------------------------------------
    */

    if ($curiosityHit > 0) {
        $platforms["youtube"]["score"] += 15;
        $platforms["youtube"]["strengths"][] = "Merak unsuru YouTube topluluk paylaşımı için güçlü.";
    }

    if ($premiumHit >= 2) {
        $platforms["youtube"]["score"] += 10;
        $platforms["youtube"]["strengths"][] = "Görsel kalite YouTube topluluk akışı için iyi.";
    }

    if ($emotionalHit > 0) {
        $platforms["youtube"]["score"] += 10;
        $platforms["youtube"]["strengths"][] = "Duygusal konu yorum alma ihtimalini artırabilir.";
    }

    if ($titleLen >= 15 && $titleLen <= 70) {
        $platforms["youtube"]["score"] += 8;
    }

    if ($metaphorLen >= 40) {
        $platforms["youtube"]["score"] += 7;
    }

    /*
    |--------------------------------------------------------------------------
    | Skorları Normalize Et
    |--------------------------------------------------------------------------
    */

    foreach ($platforms as $key => $platform) {
        if ($platforms[$key]["score"] > 100) {
            $platforms[$key]["score"] = 100;
        }

        if ($platforms[$key]["score"] < 0) {
            $platforms[$key]["score"] = 0;
        }

        if (count($platforms[$key]["strengths"]) === 0) {
            $platforms[$key]["strengths"][] = "Temel paylaşım potansiyeli mevcut.";
        }

        if (count($platforms[$key]["warnings"]) === 0) {
            $platforms[$key]["warnings"][] = "Belirgin platform riski yok.";
        }

        if (count($platforms[$key]["suggestions"]) === 0) {
            $platforms[$key]["suggestions"][] = "Mevcut haliyle kullanılabilir.";
        }
    }

    /*
    |--------------------------------------------------------------------------
    | En Uygun Platformu Bul
    |--------------------------------------------------------------------------
    */

    $bestKey = null;
    $bestScore = -1;

    foreach ($platforms as $key => $platform) {
        if ($platform["score"] > $bestScore) {
            $bestScore = $platform["score"];
            $bestKey = $key;
        }
    }

    $bestPlatform = $platforms[$bestKey];

    /*
    |--------------------------------------------------------------------------
    | Genel Yorum
    |--------------------------------------------------------------------------
    */

    if ($bestScore >= 85) {
        $overallStatus = "Çok güçlü platform uyumu";
        $overallIcon = "🏆";
        $overallLevel = "excellent";
        $smartComment = "Bu içerik özellikle " . $bestPlatform["name"] . " için güçlü görünüyor. Görsel dil, konu ve metin yapısı bu platformun beklentileriyle iyi örtüşüyor.";
    } elseif ($bestScore >= 70) {
        $overallStatus = "İyi platform uyumu";
        $overallIcon = "🚀";
        $overallLevel = "good";
        $smartComment = "Bu içerik en çok " . $bestPlatform["name"] . " platformunda etkili olabilir. Diğer platformlar için başlık veya açıklama küçük uyarlamalarla güçlendirilebilir.";
    } elseif ($bestScore >= 55) {
        $overallStatus = "Orta platform uyumu";
        $overallIcon = "🟡";
        $overallLevel = "weak";
        $smartComment = "Bu içerik paylaşılabilir ancak platforma özel uyarlama yapılırsa daha iyi performans verebilir. En uygun seçenek şu an " . $bestPlatform["name"] . " görünüyor.";
    } else {
        $overallStatus = "Zayıf platform uyumu";
        $overallIcon = "🔴";
        $overallLevel = "bad";
        $smartComment = "Bu içerik mevcut haliyle hiçbir platformda çok güçlü görünmüyor. Başlık, metafor ve açıklama yeniden güçlendirilirse platform performansı artabilir.";
    }

    return [
        "success" => true,
        "best_platform_key" => $bestKey,
        "best_platform" => $bestPlatform["name"],
        "best_score" => $bestScore,
        "status" => $overallStatus,
        "status_icon" => $overallIcon,
        "level" => $overallLevel,
        "smart_comment" => $smartComment,
        "platforms" => $platforms
    ];
}