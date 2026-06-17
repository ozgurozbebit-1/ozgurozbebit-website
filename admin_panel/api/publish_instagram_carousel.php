<?php
session_start();

require_once "../config/database.php";

header("Content-Type: application/json; charset=utf-8");

function out($arr){
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    exit;
}

function graphPost($url, $data){
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $data,
        CURLOPT_TIMEOUT => 120
    ]);

    $response = curl_exec($ch);
    $error = curl_error($ch);
    $http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return [
        "http" => $http,
        "raw" => $response,
        "error" => $error,
        "json" => json_decode($response, true)
    ];
}

function graphGet($url){
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 90
    ]);

    $response = curl_exec($ch);
    $error = curl_error($ch);
    $http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return [
        "http" => $http,
        "raw" => $response,
        "error" => $error,
        "json" => json_decode($response, true)
    ];
}

$postText = trim($_POST["post_text"] ?? "");
$imageUrlsRaw = $_POST["image_urls"] ?? "";

if($postText === ""){
    out(["success"=>false, "message"=>"post_text eksik"]);
}

$imageUrls = json_decode($imageUrlsRaw, true);

if(!is_array($imageUrls)){
    out(["success"=>false, "message"=>"image_urls JSON değil"]);
}

$imageUrls = array_values(array_filter($imageUrls, function($u){
    return is_string($u) && trim($u) !== "";
}));

if(count($imageUrls) < 2){
    out(["success"=>false, "message"=>"Carousel için en az 2 görsel gerekli"]);
}

$imageUrls = array_slice($imageUrls, 0, 10);

/*
    V29 FIX:
    Instagram hesabını ayrı platform='instagram' satırından değil,
    çalışan publish_now.php mantığı gibi aktif Facebook sayfasından alıyoruz.
*/
$stmt = $pdo->prepare("
    SELECT *
    FROM social_accounts
    WHERE platform='facebook'
    AND (status='active' OR status=1)
    ORDER BY id DESC
    LIMIT 1
");
$stmt->execute();
$fb = $stmt->fetch(PDO::FETCH_ASSOC);

if(!$fb){
    out(["success"=>false, "message"=>"Instagram için aktif Facebook hesabı bulunamadı"]);
}

$pageId = $fb["page_id"] ?? "";
$pageToken =
    $fb["page_access_token"]
    ?? $fb["page_token"]
    ?? "";

if(!$pageId || !$pageToken){
    out(["success"=>false, "message"=>"Facebook page_id veya page_token eksik"]);
}

$pageUrl = "https://graph.facebook.com/v23.0/" . $pageId .
    "?fields=instagram_business_account{id,username}" .
    "&access_token=" . urlencode($pageToken);

$pageRes = graphGet($pageUrl);

$igId = $pageRes["json"]["instagram_business_account"]["id"] ?? "";
$igUsername = $pageRes["json"]["instagram_business_account"]["username"] ?? "";

if(!$igId){
    out([
        "success"=>false,
        "message"=>"Instagram Business ID alınamadı",
        "debug"=>[
            "page_id"=>$pageId,
            "page_result"=>$pageRes
        ]
    ]);
}

$children = [];
$debug = [
    [
        "step" => "instagram_account",
        "ig_id" => $igId,
        "username" => $igUsername
    ]
];

foreach($imageUrls as $url){

    $url = trim($url);

    $res = graphPost("https://graph.facebook.com/v23.0/".$igId."/media", [
        "image_url" => $url,
        "is_carousel_item" => "true",
        "access_token" => $pageToken
    ]);

    $debug[] = [
        "step" => "child_container",
        "url" => $url,
        "result" => $res
    ];

    if($res["http"] < 200 || $res["http"] >= 300 || empty($res["json"]["id"])){
        out([
            "success" => false,
            "message" => "Carousel çocuk görsel container oluşturulamadı",
            "failed_url" => $url,
            "debug" => $debug
        ]);
    }

    $children[] = $res["json"]["id"];
}

sleep(5);

$carousel = graphPost("https://graph.facebook.com/v23.0/".$igId."/media", [
    "media_type" => "CAROUSEL",
    "children" => implode(",", $children),
    "caption" => $postText,
    "access_token" => $pageToken
]);

$debug[] = [
    "step" => "carousel_container",
    "result" => $carousel
];

if($carousel["http"] < 200 || $carousel["http"] >= 300 || empty($carousel["json"]["id"])){
    out([
        "success" => false,
        "message" => "Carousel ana container oluşturulamadı",
        "debug" => $debug
    ]);
}

sleep(8);

$publish = graphPost("https://graph.facebook.com/v23.0/".$igId."/media_publish", [
    "creation_id" => $carousel["json"]["id"],
    "access_token" => $pageToken
]);

$debug[] = [
    "step" => "publish",
    "result" => $publish
];

if($publish["http"] < 200 || $publish["http"] >= 300 || empty($publish["json"]["id"])){
    out([
        "success" => false,
        "message" => "Carousel yayınlanamadı",
        "debug" => $debug
    ]);
}

out([
    "success" => true,
    "message" => "Instagram carousel yayınlandı",
    "post_id" => $publish["json"]["id"],
    "image_count" => count($imageUrls),
    "instagram_username" => $igUsername,
    "debug" => $debug
]);