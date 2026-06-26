<?php
session_start();
require_once "../config/database.php";
header("Content-Type: application/json; charset=utf-8");

function out($arr){
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    exit;
}

function cleanInstagramPostText($text){
    $text = trim($text);

    // Instagram post içine yanlışlıkla gelen Carousel / Story / Reels bölümlerini keser.
    $patterns = [
        '/(?:\r?\n|\s{2,})\s*[0-9]+\s*[-.:)]?\s*(?:instagram\s+)?(?:carousel|carous?el|story|reels?|reels\s+senaryosu)\b.*$/isu',
        '/(?:\r?\n|\s{2,})\s*(?:instagram\s+)?(?:carousel|carous?el|story|reels?|reels\s+senaryosu)\b.*$/isu',
        '/\b[0-9]+\s*[-.:)]?\s*(?:instagram\s+)?(?:carousel|carous?el|story|reels?|reels\s+senaryosu)\b.*$/isu'
    ];

    foreach($patterns as $pattern){
        $text = preg_replace($pattern, '', $text);
    }

    return trim($text);
}

$defaultPostText = trim($_POST["post_text"] ?? $_GET["post_text"] ?? "");
$imageUrl = trim($_POST["image_url"] ?? $_GET["image_url"] ?? "");
$allowedPlatforms = ["facebook", "linkedin", "instagram"];

$platformsRaw = $_POST["platforms"] ?? $_GET["platforms"] ?? "";
if($platformsRaw !== ""){
    $decodedPlatforms = json_decode($platformsRaw, true);
    $platforms = is_array($decodedPlatforms) ? array_values(array_intersect($allowedPlatforms, $decodedPlatforms)) : $allowedPlatforms;
}else{
    $platforms = $allowedPlatforms;
}

if(empty($platforms)){
    out(["success"=>false,"message"=>"Geçerli platform seçilmedi."]);
}

$platformTextsRaw = $_POST["platform_texts"] ?? $_GET["platform_texts"] ?? "";
$platformTexts = [];
if($platformTextsRaw !== ""){
    $decodedTexts = json_decode($platformTextsRaw, true);
    if(is_array($decodedTexts)){
        $platformTexts = $decodedTexts;
    }
}

if($defaultPostText === "" && empty($platformTexts)){
    out(["success"=>false,"message"=>"post_text veya platform_texts eksik"]);
}

$results = [];

foreach($platforms as $platform){

    if($platform === "instagram" && $imageUrl === ""){
        $results[] = [
            "platform"=>$platform,
            "success"=>false,
            "message"=>"Instagram için image_url zorunlu. Instagram atlandı."
        ];
        continue;
    }

    $postText = trim($platformTexts[$platform] ?? $defaultPostText);

    if($platform === "instagram"){
        $postText = cleanInstagramPostText($postText);
    }

    if($postText === ""){
        $results[] = [
            "platform"=>$platform,
            "success"=>false,
            "message"=>$platform." için paylaşım metni boş. Atlandı."
        ];
        continue;
    }

    $stmt = $pdo->prepare("
        INSERT INTO publish_jobs 
        (platform, post_text, image_url, status, created_at) 
        VALUES (?, ?, ?, 'pending', NOW())
    ");
    $stmt->execute([$platform, $postText, $imageUrl]);
    $jobId = $pdo->lastInsertId();

    $url = "https://admin.ozgurozbebit.com.tr/api/publish_now.php?job_id=".$jobId;

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER=>true,
        CURLOPT_TIMEOUT=>160
    ]);

    $response = curl_exec($ch);
    $error = curl_error($ch);
    $http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $decoded = json_decode($response, true);

    $results[] = [
        "platform"=>$platform,
        "job_id"=>$jobId,
        "used_text"=>$postText,
        "image_url"=>$imageUrl,
        "http"=>$http,
        "response"=>$decoded,
        "raw"=>$response,
        "error"=>$error
    ];
}

$allOk = true;
$summary = [];

foreach($results as $r){

    $platform = $r["platform"] ?? "unknown";
    $http = $r["http"] ?? 0;
    $err = $r["error"] ?? "";
    $resp = $r["response"] ?? [];
    $respSuccess = is_array($resp) ? ($resp["success"] ?? null) : null;
    $respMessage = is_array($resp) ? ($resp["message"] ?? "") : "";
    $respError = is_array($resp) ? ($resp["error"] ?? "") : "";
    $raw = $r["raw"] ?? "";

    $ok = !(
        $http < 200 ||
        $http >= 300 ||
        $err !== "" ||
        $respSuccess === false ||
        ($respSuccess === null && isset($r["success"]) && $r["success"] === false)
    );

    if(!$ok){
        $allOk = false;
    }

    $detail = trim($respMessage . ($respError ? " | " . $respError : ""));

    if($detail === "" && $err !== ""){
        $detail = $err;
    }

    if($detail === "" && $raw !== ""){
        $detail = mb_substr($raw, 0, 500, 'UTF-8');
    }

    if($detail === ""){
        $detail = $ok ? "Yayın başarılı görünüyor." : "Yayın başarısız.";
    }

    $summary[] = [
        "platform"=>$platform,
        "job_id"=>$r["job_id"] ?? "",
        "http"=>$http,
        "success"=>$ok,
        "message"=>$detail,
        "error"=>$err,
        "image_url"=>$r["image_url"] ?? ""
    ];
}

out([
    "success"=>$allOk,
    "message"=>$allOk ? "Tüm platformlara yayın başarılı görünüyor." : "Bazı platformlarda yayın hatası var. Detaylar aşağıda.",
    "platforms"=>$platforms,
    "summary"=>$summary,
    "results"=>$results
]);
?>