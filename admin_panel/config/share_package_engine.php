<?php

function generateSharePackage($data = [])
{
    $platform = trim($data["platform"] ?? "LinkedIn");
    $copy = trim($data["copy"] ?? "");
    $cta = trim($data["cta"] ?? "");
    $imageUrl = trim($data["image_url"] ?? "");
    $recommendedTime = trim($data["recommended_time"] ?? "");
    $recommendedDays = $data["recommended_days"] ?? [];
    $recommendedFormat = trim($data["recommended_format"] ?? "");
    $hashtags = $data["hashtags"] ?? [];

    if (!is_array($recommendedDays)) {
        $recommendedDays = [];
    }

    if (!is_array($hashtags)) {
        $hashtags = [];
    }

    $daysText = count($recommendedDays) > 0
        ? implode(", ", $recommendedDays)
        : "Belirlenmedi";

    $hashtagsText = count($hashtags) > 0
        ? implode(" ", array_values(array_unique($hashtags)))
        : "#psikiyatri #ruhsağlığı #özgürözbebit";

    if ($copy === "") {
        $copy = "Ruh sağlığı hakkında bilgilendirici içerik.";
    }

    if ($cta === "") {
        $cta = "Daha fazla ruh sağlığı içeriği için takip edebilirsiniz.";
    }

    if ($recommendedTime === "") {
        $recommendedTime = "09:00 - 11:00";
    }

    if ($recommendedFormat === "") {
        $recommendedFormat = "Tek görsel";
    }

    $fullPackage =
"PLATFORM:
{$platform}

PAYLAŞIM METNİ:
{$copy}

CTA:
{$cta}

HASHTAGLER:
{$hashtagsText}

ÖNERİLEN YAYIN GÜNLERİ:
{$daysText}

ÖNERİLEN YAYIN SAATİ:
{$recommendedTime}

ÖNERİLEN FORMAT:
{$recommendedFormat}

GÖRSEL:
{$imageUrl}";

    return [
        "success" => true,
        "platform" => $platform,
        "copy" => $copy,
        "cta" => $cta,
        "hashtags" => array_values(array_unique($hashtags)),
        "hashtags_text" => $hashtagsText,
        "recommended_days" => $recommendedDays,
        "recommended_days_text" => $daysText,
        "recommended_time" => $recommendedTime,
        "recommended_format" => $recommendedFormat,
        "image_url" => $imageUrl,
        "full_package" => $fullPackage
    ];
}