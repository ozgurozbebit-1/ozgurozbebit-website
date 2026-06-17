<?php

function generatePublishingStrategy($data = [])
{
    $bestPlatform = trim($data["best_platform"] ?? "");
    $bestScore    = intval($data["best_score"] ?? 0);
    $topic        = trim($data["topic"] ?? "");
    $title        = trim($data["title"] ?? "");

    /*
    |--------------------------------------------------------------------------
    | Platform Stratejisi
    |--------------------------------------------------------------------------
    */

    $platformAdvice = [
        "Instagram" => [
            "time" => "18:00 - 21:00",
            "days" => ["Pazartesi","Çarşamba","Pazar"],
            "format" => "Tek görsel veya carousel"
        ],
        "Facebook" => [
            "time" => "19:00 - 21:00",
            "days" => ["Salı","Perşembe","Pazar"],
            "format" => "Tek görsel"
        ],
        "LinkedIn" => [
            "time" => "09:00 - 11:00",
            "days" => ["Salı","Çarşamba","Perşembe"],
            "format" => "Tek görsel + kısa profesyonel açıklama"
        ],
        "X" => [
            "time" => "12:00 - 14:00",
            "days" => ["Pazartesi","Salı","Çarşamba"],
            "format" => "Kısa metin + görsel"
        ],
        "YouTube Community" => [
            "time" => "18:00 - 22:00",
            "days" => ["Cuma","Cumartesi","Pazar"],
            "format" => "Topluluk gönderisi + görsel"
        ]
    ];

    if(!isset($platformAdvice[$bestPlatform])){
        $bestPlatform = "Instagram";
    }

    $time = $platformAdvice[$bestPlatform]["time"];
    $days = $platformAdvice[$bestPlatform]["days"];
    $format = $platformAdvice[$bestPlatform]["format"];

    /*
    |--------------------------------------------------------------------------
    | Performans Tahmini
    |--------------------------------------------------------------------------
    */

    if($bestScore >= 90){
        $performance = "Çok Yüksek";
        $reachScore = rand(85,95);
    }
    elseif($bestScore >= 80){
        $performance = "Yüksek";
        $reachScore = rand(75,84);
    }
    elseif($bestScore >= 70){
        $performance = "Orta-Yüksek";
        $reachScore = rand(65,74);
    }
    elseif($bestScore >= 60){
        $performance = "Orta";
        $reachScore = rand(55,64);
    }
    else{
        $performance = "Düşük";
        $reachScore = rand(40,54);
    }

    /*
    |--------------------------------------------------------------------------
    | CTA Motoru
    |--------------------------------------------------------------------------
    */

    $ctaList = [
        "Siz bu konuda ne düşünüyorsunuz?",
        "Bu durumu yaşayan bir yakınınız oldu mu?",
        "Deneyiminizi yorumlarda paylaşabilirsiniz.",
        "Bu bilgiyi faydalı bulduysanız kaydetmeyi unutmayın.",
        "Daha fazla ruh sağlığı içeriği için takip edebilirsiniz."
    ];

    $cta = $ctaList[array_rand($ctaList)];

    /*
    |--------------------------------------------------------------------------
    | Hashtag Motoru
    |--------------------------------------------------------------------------
    */

    $hashtags = [
        "#psikiyatri",
        "#ruhsağlığı",
        "#mentalhealth",
        "#özgürözbebit"
    ];

    $topicLower = mb_strtolower($topic,"UTF-8");

    $map = [
        "depresyon" => "#depresyon",
        "anksiyete" => "#anksiyete",
        "okb" => "#okb",
        "dehb" => "#dehb",
        "panik" => "#panikatak",
        "bipolar" => "#bipolar",
        "uyku" => "#uykusuzluk",
        "stres" => "#stres",
        "evlilik" => "#evlilik",
        "çocuk" => "#çocukgelişimi"
    ];

    foreach($map as $key => $tag){
        if(mb_strpos($topicLower,$key)!==false){
            $hashtags[] = $tag;
        }
    }

    $hashtags = array_unique($hashtags);

    /*
    |--------------------------------------------------------------------------
    | AI Direktör Yorumu
    |--------------------------------------------------------------------------
    */

    if($bestScore >= 90){

        $directorComment =
        "Bu içerik şu anki analizlere göre oldukça güçlü görünüyor. Özellikle {$bestPlatform} platformunda yüksek performans gösterebilir. Yayın saati ve CTA önerilerine uyulursa erişim potansiyeli daha da artabilir.";

    }
    elseif($bestScore >= 75){

        $directorComment =
        "İçerik paylaşılabilir seviyede. Platform uyumu iyi görünüyor. Başlık ve açıklama optimizasyonları ile daha yüksek etkileşim alınabilir.";

    }
    else{

        $directorComment =
        "İçerik temel seviyede uygun görünüyor ancak yayın öncesinde başlık ve görsel dili tekrar gözden geçirilirse daha iyi sonuç alınabilir.";

    }

    return [

        "success" => true,

        "best_platform" => $bestPlatform,

        "best_score" => $bestScore,

        "recommended_time" => $time,

        "recommended_days" => $days,

        "recommended_format" => $format,

        "performance" => $performance,

        "reach_score" => $reachScore,

        "cta" => $cta,

        "hashtags" => array_values($hashtags),

        "director_comment" => $directorComment

    ];
}