<?php

function generateSocialCopy($data = [])
{
    $platform   = trim($data["platform"] ?? "Instagram");
    $topic      = trim($data["topic"] ?? "");
    $title      = trim($data["title"] ?? "");
    $cta        = trim($data["cta"] ?? "");
    $hashtags   = $data["hashtags"] ?? [];

    if (!is_array($hashtags)) {
        $hashtags = [];
    }

    $hashText = implode(" ", $hashtags);

    /*
    |--------------------------------------------------------------------------
    | Instagram
    |--------------------------------------------------------------------------
    */

    if ($platform === "Instagram") {

        $copy =
$title . "

" .
$topic . " hakkında farkındalık kazanmak, yanlış inanışları azaltabilir.

Bilgi güçtür. 🌿

" .
($cta ?: "Kaydetmeyi ve ihtiyaç duyabilecek kişilerle paylaşmayı unutmayın.") . "

" .
$hashText;

    }

    /*
    |--------------------------------------------------------------------------
    | LinkedIn
    |--------------------------------------------------------------------------
    */

    elseif ($platform === "LinkedIn") {

        $copy =
$title . "

" .
"Ruh sağlığı alanında en sık karşılaşılan konulardan biri: " . $topic . ".

Bilimsel bilgi ve doğru farkındalık, hem bireysel hem de toplumsal açıdan önemli katkılar sağlayabilir.

" .
($cta ?: "Bu konu hakkındaki görüşlerinizi paylaşabilirsiniz.") . "

" .
$hashText;

    }

    /*
    |--------------------------------------------------------------------------
    | Facebook
    |--------------------------------------------------------------------------
    */

    elseif ($platform === "Facebook") {

        $copy =
$title . "

" .
$topic . " hakkında toplumda birçok yanlış bilgi bulunabiliyor.

Doğru bilgiye ulaşmak, gereksiz kaygıları azaltabilir ve destek arayışını kolaylaştırabilir.

" .
($cta ?: "Bu içeriği faydalı bulduysanız paylaşabilirsiniz.") . "

" .
$hashText;

    }

    /*
    |--------------------------------------------------------------------------
    | X
    |--------------------------------------------------------------------------
    */

    elseif ($platform === "X") {

        $copy =
$title . "

" .
$topic . "

" .
($cta ?: "Siz ne düşünüyorsunuz?");

    }

    /*
    |--------------------------------------------------------------------------
    | YouTube Community
    |--------------------------------------------------------------------------
    */

    elseif ($platform === "YouTube Community") {

        $copy =
$title . "

" .
$topic . " hakkında kısa bir soru:

Sizce toplumda bu konuda en sık yapılan hata nedir?

" .
($cta ?: "Yorumlarda paylaşabilirsiniz.") . "

" .
$hashText;

    }

    /*
    |--------------------------------------------------------------------------
    | Fallback
    |--------------------------------------------------------------------------
    */

    else {

        $copy =
$title . "

" .
$topic . "

" .
($cta ?: "Görüşlerinizi paylaşabilirsiniz.");

    }

    return [
        "success" => true,
        "platform" => $platform,
        "copy" => trim($copy)
    ];
}