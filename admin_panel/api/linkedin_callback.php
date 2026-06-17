<?php

session_start();

require_once "../config/database.php";
require_once "../config/linkedin.php";

if(isset($_GET["error"])){
    echo "<h3>LinkedIn Hatası</h3>";
    echo "<pre>";
    print_r($_GET);
    echo "</pre>";
    exit;
}

if(!isset($_GET["code"])){
    die("Authorization code bulunamadı");
}

$code = $_GET["code"];

$postData = http_build_query([
    "grant_type"    => "authorization_code",
    "code"          => $code,
    "redirect_uri"  => LINKEDIN_REDIRECT_URI,
    "client_id"     => LINKEDIN_CLIENT_ID,
    "client_secret" => LINKEDIN_CLIENT_SECRET
]);

$ch = curl_init();

curl_setopt_array($ch,[
    CURLOPT_URL => "https://www.linkedin.com/oauth/v2/accessToken",
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $postData,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        "Content-Type: application/x-www-form-urlencoded"
    ]
]);

$response = curl_exec($ch);
$curlError = curl_error($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if($curlError){
    echo "<h3>cURL Hatası</h3>";
    echo "<pre>";
    print_r($curlError);
    echo "</pre>";
    exit;
}

$data = json_decode($response,true);

if($httpCode < 200 || $httpCode >= 300 || empty($data["access_token"])){
    echo "<h3>Access token alınamadı</h3>";
    echo "<pre>";
    echo "HTTP: ".$httpCode."\n\n";
    print_r($data);
    echo "\nRaw Response:\n".$response;
    echo "</pre>";
    exit;
}

$accessToken = $data["access_token"];

/*
|--------------------------------------------------------------------------
| LinkedIn kullanıcı bilgisi al
|--------------------------------------------------------------------------
| OpenID Connect userinfo endpoint:
| sub   = LinkedIn kişi ID
| name  = ad soyad
| email = e-posta
|--------------------------------------------------------------------------
*/

$ch = curl_init();

curl_setopt_array($ch,[
    CURLOPT_URL => "https://api.linkedin.com/v2/userinfo",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        "Authorization: Bearer ".$accessToken
    ]
]);

$userResponse = curl_exec($ch);
$userCurlError = curl_error($ch);
$userHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if($userCurlError){
    echo "<h3>LinkedIn userinfo cURL Hatası</h3>";
    echo "<pre>";
    print_r($userCurlError);
    echo "</pre>";
    exit;
}

$userInfo = json_decode($userResponse,true);

if($userHttpCode < 200 || $userHttpCode >= 300 || empty($userInfo["sub"])){
    echo "<h3>LinkedIn kullanıcı bilgisi alınamadı</h3>";
    echo "<pre>";
    echo "HTTP: ".$userHttpCode."\n\n";
    print_r($userInfo);
    echo "\nRaw Response:\n".$userResponse;
    echo "</pre>";
    exit;
}

$linkedinSub = $userInfo["sub"];
$accountId = "urn:li:person:" . $linkedinSub;
$accountName = $userInfo["name"] ?? "Özgür Özbebit LinkedIn";
$email = $userInfo["email"] ?? null;

/*
|--------------------------------------------------------------------------
| Eski LinkedIn kayıtlarını pasifleştir
|--------------------------------------------------------------------------
*/

$pdo->prepare("
    UPDATE social_accounts
    SET status=0
    WHERE platform='linkedin'
")->execute();

/*
|--------------------------------------------------------------------------
| Yeni LinkedIn hesabını kaydet
|--------------------------------------------------------------------------
*/

$stmt = $pdo->prepare("
    INSERT INTO social_accounts
    (
        platform,
        account_name,
        account_id,
        access_token,
        status,
        created_at
    )
    VALUES
    (
        'linkedin',
        ?,
        ?,
        ?,
        1,
        NOW()
    )
");

$stmt->execute([
    $accountName,
    $accountId,
    $accessToken
]);

header("Location: ../dashboard/social_accounts.php?linkedin=connected");
exit;