<?php

function generateMultiPlatformPackage($data = [])
{
    $topic = trim($data["topic"] ?? "");
    $title = trim($data["title"] ?? "");
    $imageUrl = trim($data["image_url"] ?? "");
    $cta = trim($data["cta"] ?? "");
    $hashtags = $data["hashtags"] ?? [];

    if (!is_array($hashtags)) {
        $hashtags = [];
    }

    if ($topic === "") {
        $topic = "Ruh sağlığı";
    }

    if ($title === "") {
        $title = $topic;
    }

    if ($cta === "") {
        $cta = "Daha fazla ruh sağlığı içeriği için takip edebilirsiniz.";
    }

    if (count($hashtags) === 0) {
        $hashtags = [
            "#psikiyatri",
            "#ruhsağlığı",
            "#mentalhealth",
            "#özgürözbebit"
        ];
    }

    $topicLower = mb_strtolower($topic, "UTF-8");

    $topicHashtags = [
        "depresyon" => "#depresyon",
        "anksiyete" => "#anksiyete",
        "kaygı" => "#kaygı",
        "okb" => "#okb",
        "dehb" => "#dehb",
        "panik" => "#panikatak",
        "bipolar" => "#bipolar",
        "uyku" => "#uykusuzluk",
        "stres" => "#stres",
        "öfke" => "#öfke",
        "ilişki" => "#ilişkiler",
        "evlilik" => "#evlilik",
        "çocuk" => "#çocukgelişimi"
    ];

    foreach ($topicHashtags as $key => $tag) {
        if (mb_strpos($topicLower, $key) !== false) {
            $hashtags[] = $tag;
        }
    }

    $hashtags = array_values(array_unique($hashtags));
    $hashtagText = implode(" ", $hashtags);

    /*
    |--------------------------------------------------------------------------
    | Platform Metinleri
    |--------------------------------------------------------------------------
    */

    $instagramCopy =
$title . "

" .
$topic . " hakkında doğru bilgi, farkındalığı artırabilir.

Bilgi korkuyu azaltır. 🌿

Kaydetmeyi ve ihtiyaç duyabilecek kişilerle paylaşmayı unutmayın.

" .
$hashtagText;

    $facebookCopy =
$title . "

" .
$topic . " hakkında toplumda birçok yanlış bilgi bulunabiliyor.

Doğru bilgiye ulaşmak, gereksiz kaygıları azaltabilir ve destek arayışını kolaylaştırabilir.

" .
$cta . "

" .
$hashtagText;

    $linkedinCopy =
$title . "

" .
"Ruh sağlığı alanında en sık karşılaşılan konulardan biri: " . $topic . ".

Bilimsel bilgi, doğru farkındalık ve güvenilir uzman anlatımı; bireysel ve toplumsal ruh sağlığı açısından önemli katkılar sağlayabilir.

" .
$cta . "

" .
$hashtagText;

    $xCopy =
$title . "

" .
$topic . "

" .
"Sizce toplumda bu konuda en sık yanlış bilinen nokta nedir?";

    $youtubeCommunityCopy =
$title . "

" .
$topic . " hakkında kısa bir soru:

Sizce bu konuda toplumda en sık yapılan yanlış yorum nedir?

Yorumlarda paylaşabilirsiniz.

" .
$hashtagText;

    $shortVideoPrompt =
"Bu görselden 8-12 saniyelik dikey short video üret.

Konu:
{$topic}

Video tarzı:
- 9:16 dikey format
- Sakin, güven veren, profesyonel psikiyatri içerik dili
- Görseldeki ana metaforu koru
- Hafif kamera hareketi, yumuşak zoom veya parallax efekti kullan
- Korkutucu, dramatik veya panik yaratan sahne olmasın
- Sağlık reklamı gibi görünmesin
- Tanı veya tedavi garantisi çağrıştırmasın
- Son karede paylaşım başlığı için sade boş alan bırak
- Yazı, logo, watermark veya bozuk harf üretme

Amaç:
Instagram Reels, YouTube Shorts ve TikTok benzeri kısa video formatları için profesyonel ruh sağlığı farkındalık videosu.";

    $platforms = [
        "instagram" => [
            "name" => "Instagram",
            "copy" => trim($instagramCopy),
            "image_url" => $imageUrl,
            "format" => "Kare post veya carousel",
            "recommended_time" => "18:00 - 21:00"
        ],
        "facebook" => [
            "name" => "Facebook",
            "copy" => trim($facebookCopy),
            "image_url" => $imageUrl,
            "format" => "Tek görsel paylaşım",
            "recommended_time" => "19:00 - 21:00"
        ],
        "linkedin" => [
            "name" => "LinkedIn",
            "copy" => trim($linkedinCopy),
            "image_url" => $imageUrl,
            "format" => "Tek görsel + profesyonel açıklama",
            "recommended_time" => "09:00 - 11:00"
        ],
        "x" => [
            "name" => "X",
            "copy" => trim($xCopy),
            "image_url" => $imageUrl,
            "format" => "Kısa metin + görsel",
            "recommended_time" => "12:00 - 14:00"
        ],
        "youtube_community" => [
            "name" => "YouTube Community",
            "copy" => trim($youtubeCommunityCopy),
            "image_url" => $imageUrl,
            "format" => "Topluluk gönderisi",
            "recommended_time" => "18:00 - 22:00"
        ]
    ];

    $fullPackage = "";

    foreach ($platforms as $platform) {
        $fullPackage .=
"━━━━━━━━━━━━━━━━━━━━
{$platform["name"]}

Format:
{$platform["format"]}

Önerilen Saat:
{$platform["recommended_time"]}

Metin:
{$platform["copy"]}

Görsel:
{$platform["image_url"]}

";
    }

    $fullPackage .=
"━━━━━━━━━━━━━━━━━━━━
SHORT VIDEO PROMPT

{$shortVideoPrompt}
";

    return [
        "success" => true,
        "topic" => $topic,
        "title" => $title,
        "image_url" => $imageUrl,
        "hashtags" => $hashtags,
        "hashtags_text" => $hashtagText,
        "platforms" => $platforms,
        "short_video_prompt" => $shortVideoPrompt,
        "full_package" => trim($fullPackage)
    ];
}