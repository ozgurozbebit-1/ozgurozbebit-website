<?php

function scoreViralPotential($data = [])
{
    $title        = trim($data["title"] ?? "");
    $subtitle     = trim($data["subtitle"] ?? "");
    $metaphor     = trim($data["metaphor"] ?? "");
    $visualStyle  = trim($data["visual_style"] ?? "");
    $topic        = trim($data["topic"] ?? "");

    $score = 0;

    $strengths = [];
    $warnings = [];
    $suggestions = [];

    /*
    |--------------------------------------------------------------------------
    | 1. Başlık Gücü
    |--------------------------------------------------------------------------
    */

    $titleLower = mb_strtolower($title, "UTF-8");

    $viralWords = [
        "neden",
        "nasıl",
        "gerçek",
        "işaret",
        "belirti",
        "hata",
        "biliyor musunuz",
        "aslında",
        "sanılanın aksine",
        "kaçırmayın",
        "farkında mısınız",
        "en sık",
        "gizli",
        "şaşırtıcı",
        "bilmeniz gereken"
    ];

    $viralHit = 0;

    foreach($viralWords as $word){
        if(mb_strpos($titleLower,$word)!==false){
            $viralHit++;
        }
    }

    if($viralHit >= 2){
        $score += 25;
        $strengths[] = "Başlık merak uyandırıyor.";
    }
    elseif($viralHit == 1){
        $score += 18;
        $strengths[] = "Başlık dikkat çekici.";
    }
    else{
        $score += 10;
        $warnings[] = "Başlık viral tetikleyici içermiyor.";
        $suggestions[] = "Neden, nasıl, işaret, aslında gibi merak unsurları eklenebilir.";
    }

    /*
    |--------------------------------------------------------------------------
    | 2. Başlık Uzunluğu
    |--------------------------------------------------------------------------
    */

    $titleLen = mb_strlen($title);

    if($titleLen >= 18 && $titleLen <= 55){
        $score += 15;
        $strengths[] = "Başlık sosyal medya için ideal uzunlukta.";
    }
    elseif($titleLen >= 10 && $titleLen <= 75){
        $score += 10;
    }
    else{
        $score += 5;
        $warnings[] = "Başlık uzunluğu optimum değil.";
    }

    /*
    |--------------------------------------------------------------------------
    | 3. Metafor Gücü
    |--------------------------------------------------------------------------
    */

    $metaphorLen = mb_strlen($metaphor);

    if($metaphorLen >= 80){
        $score += 20;
        $strengths[] = "Metafor görsel durdurma etkisini artırabilir.";
    }
    elseif($metaphorLen >= 30){
        $score += 12;
    }
    else{
        $score += 5;
        $warnings[] = "Metafor gücü düşük.";
    }

    /*
    |--------------------------------------------------------------------------
    | 4. Premium Görsel Algısı
    |--------------------------------------------------------------------------
    */

    $style = mb_strtolower($visualStyle);

    $premiumKeywords = [
        "premium",
        "sinematik",
        "cinematic",
        "modern",
        "minimal",
        "editorial",
        "realistic",
        "professional"
    ];

    $premiumHit = 0;

    foreach($premiumKeywords as $word){
        if(mb_strpos($style,$word)!==false){
            $premiumHit++;
        }
    }

    if($premiumHit >= 3){
        $score += 15;
        $strengths[] = "Premium görsel algısı yüksek.";
    }
    elseif($premiumHit >= 1){
        $score += 10;
    }
    else{
        $score += 5;
    }

    /*
    |--------------------------------------------------------------------------
    | 5. Konu Gücü
    |--------------------------------------------------------------------------
    */

    $topicLower = mb_strtolower($topic);

    $highInterestTopics = [
        "depresyon",
        "anksiyete",
        "okb",
        "dehb",
        "panik atak",
        "bipolar",
        "uykusuzluk",
        "stres",
        "öfke",
        "çocuk",
        "ilişki",
        "evlilik",
        "kaygı"
    ];

    $topicHit = 0;

    foreach($highInterestTopics as $word){
        if(mb_strpos($topicLower,$word)!==false){
            $topicHit++;
        }
    }

    if($topicHit > 0){
        $score += 15;
        $strengths[] = "Konu yüksek ilgi potansiyeline sahip.";
    }
    else{
        $score += 8;
    }

    /*
    |--------------------------------------------------------------------------
    | 6. Alt Başlık
    |--------------------------------------------------------------------------
    */

    $subtitleLen = mb_strlen($subtitle);

    if($subtitleLen >= 25 && $subtitleLen <= 120){
        $score += 10;
        $strengths[] = "Alt başlık etkileşimi destekliyor.";
    }
    elseif($subtitleLen > 0){
        $score += 5;
    }
    else{
        $warnings[] = "Alt başlık eksik.";
    }

    /*
    |--------------------------------------------------------------------------
    | Normalize
    |--------------------------------------------------------------------------
    */

    if($score > 100){
        $score = 100;
    }

    if($score >= 85){
        $status = "Yüksek paylaşım potansiyeli";
        $status_icon = "🔥";
        $level = "excellent";
    }
    elseif($score >= 70){
        $status = "İyi performans bekleniyor";
        $status_icon = "🚀";
        $level = "good";
    }
    elseif($score >= 50){
        $status = "Ortalama performans";
        $status_icon = "🟡";
        $level = "weak";
    }
    else{
        $status = "Düşük viral potansiyel";
        $status_icon = "🔴";
        $level = "bad";
    }

    /*
    |--------------------------------------------------------------------------
    | AI Viral Yorumu
    |--------------------------------------------------------------------------
    */

    if($score >= 90){
        $comment = "Bu içerik yüksek dikkat çekme potansiyeline sahip. Başlık, konu ve görsel dili birlikte güçlü çalışıyor.";
    }
    elseif($score >= 80){
        $comment = "Bu içerik sosyal medyada iyi performans gösterebilir. Merak unsuru ve görsel kalite dengeli.";
    }
    elseif($score >= 70){
        $comment = "İçerik kullanılabilir seviyede. Başlık veya metafor güçlendirilirse erişim artabilir.";
    }
    elseif($score >= 50){
        $comment = "İçerik fikir olarak iyi ancak viral tetikleyiciler zayıf kalmış görünüyor.";
    }
    else{
        $comment = "Bu içerik büyük olasılıkla akışta kaybolacaktır. Başlık ve metafor yeniden düşünülmeli.";
    }

    return [
        "success" => true,
        "score" => $score,
        "status" => $status,
        "status_icon" => $status_icon,
        "level" => $level,
        "smart_comment" => $comment,
        "strengths" => array_values(array_unique($strengths)),
        "warnings" => array_values(array_unique($warnings)),
        "suggestions" => array_values(array_unique($suggestions))
    ];
}