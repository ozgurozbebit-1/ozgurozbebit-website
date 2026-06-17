<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();

require_once "../config/database.php";

if(!isset($_SESSION["user_id"])){
    die("Oturum bulunamadı.");
}

$user_id = $_SESSION["user_id"];

$stmt = $pdo->prepare("
    SELECT *
    FROM social_accounts
    WHERE user_id = ?
      AND platform = 'facebook'
    LIMIT 1
");
$stmt->execute([$user_id]);
$fb = $stmt->fetch(PDO::FETCH_ASSOC);

if(!$fb){
    die("Facebook hesabı bulunamadı.");
}

$page_id = $fb["page_id"] ?? "";
$page_token = $fb["page_token"] ?? "";

if($page_id == "" || $page_token == ""){
    die("page_id veya page_token eksik.");
}

function graphGet($url){
    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30
    ]);
    $response = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);

    return [
        "error" => $error,
        "raw" => $response,
        "json" => json_decode($response, true)
    ];
}

function graphPost($url, $data){
    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $url,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query($data),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 60
    ]);
    $response = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);

    return [
        "error" => $error,
        "raw" => $response,
        "json" => json_decode($response, true)
    ];
}

/* 1) Instagram Business ID al */
$pageUrl = "https://graph.facebook.com/v23.0/" . $page_id .
    "?fields=instagram_business_account{id,username}" .
    "&access_token=" . urlencode($page_token);

$pageResult = graphGet($pageUrl);

$ig_id = $pageResult["json"]["instagram_business_account"]["id"] ?? "";

if($ig_id == ""){
    echo "<pre>";
    echo "Instagram ID alınamadı.\n\n";
    print_r($pageResult);
    echo "</pre>";
    exit;
}

/* 2) Test görseli */
$image_url = "https://picsum.photos/1200/1200";

$caption = "Instagram API test paylaşımı ✅\n\nÖzgür Özbebit Content Center üzerinden otomatik paylaşım testi.";

/* 3) Media container oluştur */
$containerUrl = "https://graph.facebook.com/v23.0/" . $ig_id . "/media";

$containerResult = graphPost($containerUrl, [
    "image_url" => $image_url,
    "caption" => $caption,
    "access_token" => $page_token
]);

$creation_id = $containerResult["json"]["id"] ?? "";

if($creation_id == ""){
    echo "<pre>";
    echo "Media container oluşturulamadı.\n\n";
    print_r($containerResult);
    echo "</pre>";
    exit;
}

/* 4) Publish et */
sleep(8);
$publishUrl = "https://graph.facebook.com/v23.0/" . $ig_id . "/media_publish";

$publishResult = graphPost($publishUrl, [
    "creation_id" => $creation_id,
    "access_token" => $page_token
]);

echo "<pre>";
echo "INSTAGRAM TEST PUBLISH SONUCU\n\n";

echo "IG ID:\n";
print_r($ig_id);

echo "\n\nCONTAINER RESULT:\n";
print_r($containerResult);

echo "\n\nPUBLISH RESULT:\n";
print_r($publishResult);

echo "</pre>";