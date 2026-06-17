<?php
session_start();

require_once "../config/database.php";

header("Content-Type: application/json; charset=utf-8");

function out($arr){
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    exit;
}

$postText = trim($_POST["post_text"] ?? $_GET["post_text"] ?? "");
$imageUrl = trim($_POST["image_url"] ?? $_GET["image_url"] ?? "");

if($postText === ""){
    out([
        "success" => false,
        "message" => "post_text eksik"
    ]);
}

$allowedPlatforms = ["facebook", "linkedin", "instagram"];

$platformsRaw = $_POST["platforms"] ?? $_GET["platforms"] ?? "";

if($platformsRaw !== ""){
    $decodedPlatforms = json_decode($platformsRaw, true);

    if(is_array($decodedPlatforms)){
        $platforms = array_values(array_intersect($allowedPlatforms, $decodedPlatforms));
    }else{
        $platforms = $allowedPlatforms;
    }
}else{
    $platforms = $allowedPlatforms;
}

if(empty($platforms)){
    out([
        "success" => false,
        "message" => "Geçerli platform seçilmedi."
    ]);
}

$results = [];

foreach($platforms as $platform){

    if($platform === "instagram" && $imageUrl === ""){
        $results[] = [
            "platform" => $platform,
            "success" => false,
            "message" => "Instagram için image_url zorunlu. Instagram atlandı."
        ];
        continue;
    }

    $stmt = $pdo->prepare("
        INSERT INTO publish_jobs
        (platform, post_text, image_url, status, created_at)
        VALUES
        (?, ?, ?, 'pending', NOW())
    ");

    $stmt->execute([
        $platform,
        $postText,
        $imageUrl
    ]);

    $jobId = $pdo->lastInsertId();

    $url = "https://admin.ozgurozbebit.com.tr/api/publish_now.php?job_id=".$jobId;

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 120
    ]);

    $response = curl_exec($ch);
    $error = curl_error($ch);
    $http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $decoded = json_decode($response, true);

    $results[] = [
        "platform" => $platform,
        "job_id" => $jobId,
        "http" => $http,
        "response" => $decoded,
        "raw" => $response,
        "error" => $error
    ];
}

out([
    "success" => true,
    "message" => "Çoklu yayın işlemi tamamlandı",
    "platforms" => $platforms,
    "results" => $results
]);