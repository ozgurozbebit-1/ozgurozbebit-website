<?php
session_start();

ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once "../config/database.php";
require_once "../config/threads.php";

if(!isset($_SESSION["user_id"])){
    die("Oturum bulunamadı. Önce admin panele giriş yap.");
}

$user_id = $_SESSION["user_id"];

if(!isset($_GET["code"])){
    die("Threads bağlantısı başarısız. Code gelmedi.");
}

$code = $_GET["code"];

/* 1) Token al */
$postData = http_build_query([
    "client_id" => THREADS_APP_ID,
    "client_secret" => THREADS_APP_SECRET,
    "grant_type" => "authorization_code",
    "redirect_uri" => THREADS_REDIRECT_URI,
    "code" => $code
]);

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => THREADS_TOKEN_URL,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $postData,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 30
]);

$response = curl_exec($ch);
$error = curl_error($ch);
curl_close($ch);

if($error){
    die("Token cURL hatası: " . $error);
}

$data = json_decode($response, true);

if(empty($data["access_token"])){
    echo "<pre>";
    echo "Token alınamadı:\n\n";
    print_r($data);
    echo "\nRaw response:\n";
    echo htmlspecialchars($response);
    echo "</pre>";
    exit;
}

$access_token = $data["access_token"];
$token_type = $data["token_type"] ?? "bearer";
$expires_in = $data["expires_in"] ?? null;

/* 2) Threads kullanıcı bilgisini çek */
$meUrl = THREADS_API_URL . "/me?" . http_build_query([
    "fields" => "id,username",
    "access_token" => $access_token
]);

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $meUrl,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 30
]);

$meResponse = curl_exec($ch);
$meError = curl_error($ch);
curl_close($ch);

if($meError){
    die("Threads kullanıcı bilgisi cURL hatası: " . $meError);
}

$meData = json_decode($meResponse, true);

if(empty($meData["id"])){
    echo "<pre>";
    echo "Threads kullanıcı ID alınamadı:\n\n";
    print_r($meData);
    echo "\nRaw response:\n";
    echo htmlspecialchars($meResponse);
    echo "</pre>";
    exit;
}

$threads_user_id = $meData["id"];
$username = $meData["username"] ?? "drozgurozbebit";

/* 3) Eski kaydı temizle, yeni temiz kayıt ekle */
$stmt = $pdo->prepare("DELETE FROM threads_accounts WHERE user_id = ?");
$stmt->execute([$user_id]);

$stmt = $pdo->prepare("
    INSERT INTO threads_accounts
    (user_id, threads_user_id, username, access_token, token_type, expires_in)
    VALUES
    (:user_id, :threads_user_id, :username, :access_token, :token_type, :expires_in)
");

$stmt->execute([
    ":user_id" => $user_id,
    ":threads_user_id" => $threads_user_id,
    ":username" => $username,
    ":access_token" => $access_token,
    ":token_type" => $token_type,
    ":expires_in" => $expires_in
]);

echo "<h2>Threads bağlantısı başarılı ✅</h2>";
echo "<p>Token ve Threads kullanıcı ID veritabanına kaydedildi.</p>";
echo "<p><strong>Threads User ID:</strong> ".htmlspecialchars($threads_user_id)."</p>";
echo "<p><strong>Username:</strong> ".htmlspecialchars($username)."</p>";
echo '<p><a href="../dashboard/automation.php">Otomasyon merkezine dön</a></p>';
?>