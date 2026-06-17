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
$page_token =
    $fb["page_access_token"]
    ?? $fb["page_token"]
    ?? "";

if($page_id == "" || $page_token == ""){
    echo "<pre>";
    print_r($fb);
    die("page_id veya page_token eksik.");
}

function graphGet($url){
    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_TIMEOUT => 30
    ]);

    $response = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);

    return [
        "url" => $url,
        "error" => $error,
        "response_raw" => $response,
        "response_json" => json_decode($response, true)
    ];
}

$url = "https://graph.facebook.com/v23.0/" . $page_id .
       "?fields=id,name,instagram_business_account,connected_instagram_account" .
       "&access_token=" . urlencode($page_token);

$result = graphGet($url);

echo "<pre>";
echo "PAGE ID:\n";
print_r($page_id);

echo "\n\nPAGE TOKEN ilk 20 karakter:\n";
print_r(substr($page_token, 0, 20) . "...");

echo "\n\nGRAPH RESULT:\n";
print_r($result);
echo "</pre>";