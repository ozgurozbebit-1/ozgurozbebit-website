<?php
session_start();
require_once "../config/database.php";

header("Content-Type: text/plain; charset=utf-8");

$stmt = $pdo->prepare("
    SELECT *
    FROM social_accounts
    WHERE platform='facebook'
    ORDER BY id DESC
    LIMIT 1
");
$stmt->execute();
$fb = $stmt->fetch(PDO::FETCH_ASSOC);

if(!$fb){
    die("Facebook kaydı yok.");
}

$pageId = $fb["page_id"] ?? "";
$pageToken = $fb["page_access_token"] ?? $fb["page_token"] ?? "";
$status = $fb["status"] ?? "";

echo "Facebook kayıt bulundu\n";
echo "status: ".$status."\n";
echo "page_id: ".$pageId."\n";
echo "page_token var mı: ".($pageToken ? "EVET" : "HAYIR")."\n\n";

if(!$pageId || !$pageToken){
    die("page_id veya page_token eksik.");
}

$url = "https://graph.facebook.com/v23.0/".$pageId.
    "?fields=id,name,access_token,instagram_business_account{id,username}".
    "&access_token=".urlencode($pageToken);

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 60
]);

$response = curl_exec($ch);
$error = curl_error($ch);
$http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo "GRAPH HTTP: ".$http."\n";
echo "CURL ERROR: ".$error."\n\n";
echo "GRAPH RESPONSE:\n";
echo $response;