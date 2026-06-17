<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();

require_once "../config/database.php";
require_once "../config/meta.php";

if(!isset($_SESSION["user_id"])){
    die("Oturum bulunamadı.");
}

$user_id = intval($_SESSION["user_id"]);

if(!isset($_GET["code"])){
    die("Meta bağlantısı başarısız. Code gelmedi.");
}

$code = $_GET["code"];

function graphGet($url){
    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_TIMEOUT => 60
    ]);

    $response = curl_exec($ch);
    $error = curl_error($ch);
    $http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return [
        "http" => $http,
        "error" => $error,
        "response" => $response,
        "json" => json_decode($response, true)
    ];
}

function saveAccount($pdo, $user_id, $platform, $accountName, $accessToken, $pageToken, $pageId, $accountId){
    $stmt = $pdo->prepare("
        SELECT id
        FROM social_accounts
        WHERE platform=?
        AND user_id=?
        ORDER BY id DESC
        LIMIT 1
    ");
    $stmt->execute([$platform, $user_id]);
    $existing = $stmt->fetch(PDO::FETCH_ASSOC);

    if($existing){
        $update = $pdo->prepare("
            UPDATE social_accounts
            SET account_name=?,
                access_token=?,
                page_token=?,
                page_id=?,
                account_id=?,
                status=1
            WHERE id=?
        ");
        $update->execute([
            $accountName,
            $accessToken,
            $pageToken,
            $pageId,
            $accountId,
            $existing["id"]
        ]);

        return $existing["id"];
    }

    $insert = $pdo->prepare("
        INSERT INTO social_accounts
        (user_id, platform, account_name, access_token, page_token, page_id, account_id, status, created_at)
        VALUES
        (?, ?, ?, ?, ?, ?, ?, 1, NOW())
    ");
    $insert->execute([
        $user_id,
        $platform,
        $accountName,
        $accessToken,
        $pageToken,
        $pageId,
        $accountId
    ]);

    return $pdo->lastInsertId();
}

$tokenUrl = "https://graph.facebook.com/v23.0/oauth/access_token?"
    . "client_id=" . urlencode(META_APP_ID)
    . "&redirect_uri=" . urlencode(META_REDIRECT_URI)
    . "&client_secret=" . urlencode(META_APP_SECRET)
    . "&code=" . urlencode($code);

$tokenResult = graphGet($tokenUrl);
$tokenData = $tokenResult["json"];

if(empty($tokenData["access_token"])){
    echo "<h3>Access token alınamadı</h3>";
    echo "<pre>";
    print_r($tokenResult);
    echo "</pre>";
    exit;
}

$shortToken = $tokenData["access_token"];

$longTokenUrl = "https://graph.facebook.com/v23.0/oauth/access_token?"
    . "grant_type=fb_exchange_token"
    . "&client_id=" . urlencode(META_APP_ID)
    . "&client_secret=" . urlencode(META_APP_SECRET)
    . "&fb_exchange_token=" . urlencode($shortToken);

$longTokenResult = graphGet($longTokenUrl);
$longTokenData = $longTokenResult["json"];

$userAccessToken = $longTokenData["access_token"] ?? $shortToken;

$pagesUrl = "https://graph.facebook.com/v23.0/me/accounts?"
    . "fields=id,name,access_token,instagram_business_account{id,username},connected_instagram_account{id,username}"
    . "&access_token=" . urlencode($userAccessToken);

$pagesResult = graphGet($pagesUrl);
$pagesData = $pagesResult["json"];

if(empty($pagesData["data"]) || !is_array($pagesData["data"])){
    echo "<h3>Facebook sayfaları alınamadı</h3>";
    echo "<pre>";
    print_r($pagesResult);
    echo "</pre>";
    exit;
}

$selectedPage = null;

foreach($pagesData["data"] as $page){
    if(isset($page["name"]) && stripos($page["name"], "Özgür") !== false){
        $selectedPage = $page;
        break;
    }
}

if(!$selectedPage){
    $selectedPage = $pagesData["data"][0];
}

$pageId = $selectedPage["id"] ?? "";
$pageName = $selectedPage["name"] ?? "Facebook Sayfası";
$pageToken = $selectedPage["access_token"] ?? "";

if(!$pageId || !$pageToken){
    echo "<h3>Sayfa ID veya sayfa token alınamadı</h3>";
    echo "<pre>";
    print_r($selectedPage);
    echo "</pre>";
    exit;
}

$igId = "";
$igUsername = "";

if(!empty($selectedPage["instagram_business_account"]["id"])){
    $igId = $selectedPage["instagram_business_account"]["id"];
    $igUsername = $selectedPage["instagram_business_account"]["username"] ?? "";
}elseif(!empty($selectedPage["connected_instagram_account"]["id"])){
    $igId = $selectedPage["connected_instagram_account"]["id"];
    $igUsername = $selectedPage["connected_instagram_account"]["username"] ?? "";
}

/*
    Facebook kaydı:
    access_token = user long token
    page_token   = page access token
    page_id      = Facebook page id
    account_id   = Facebook page id
*/
$facebookRowId = saveAccount(
    $pdo,
    $user_id,
    "facebook",
    $pageName,
    $userAccessToken,
    $pageToken,
    $pageId,
    $pageId
);

/*
    Instagram kaydı:
    varsa ayrıca platform='instagram' olarak da kaydediyoruz.
    Böylece eski carousel dosyaları bile çalışabilir.
*/
$instagramRowId = null;

if($igId){
    $instagramRowId = saveAccount(
        $pdo,
        $user_id,
        "instagram",
        $igUsername ?: "Instagram Business",
        $userAccessToken,
        $pageToken,
        $pageId,
        $igId
    );
}

echo "<h2>✅ Meta bağlantısı başarıyla yenilendi</h2>";

echo "<h3>Facebook</h3>";
echo "<pre>";
echo "Row ID: ".$facebookRowId."\n";
echo "Page Name: ".$pageName."\n";
echo "Page ID: ".$pageId."\n";
echo "Page Token: VAR\n";
echo "</pre>";

if($igId){
    echo "<h3>Instagram</h3>";
    echo "<pre>";
    echo "Row ID: ".$instagramRowId."\n";
    echo "Instagram ID: ".$igId."\n";
    echo "Username: ".$igUsername."\n";
    echo "</pre>";
}else{
    echo "<h3>Instagram</h3>";
    echo "<pre>Instagram Business hesabı bu Facebook sayfasından dönmedi.</pre>";
}

echo "<hr>";
echo "<p>Şimdi admin panelde V27 tek tuşla yayınlamayı tekrar test et brom.</p>";
exit;
?>