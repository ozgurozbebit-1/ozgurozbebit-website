<?php
session_start();

ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once "../config/database.php";
require_once "../config/threads.php";

$stmt = $pdo->query("
    SELECT * FROM threads_accounts
    WHERE access_token IS NOT NULL AND access_token != ''
    ORDER BY id DESC
    LIMIT 1
");

$account = $stmt->fetch(PDO::FETCH_ASSOC);

if(!$account){
    die("Threads token bulunamadı. threads_accounts tablosunda access_token yok.");
}

$accessToken = $account["access_token"];

$meUrl = THREADS_API_URL . "/me?" . http_build_query([
    "fields" => "id,username",
    "access_token" => $accessToken
]);

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $meUrl,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 30
]);

$response = curl_exec($ch);
$error = curl_error($ch);
curl_close($ch);

if($error){
    die("cURL hatası: " . $error);
}

$data = json_decode($response, true);

echo "<pre>";
print_r($data);
echo "</pre>";

if(empty($data["id"])){
    die("Threads user id alınamadı. Raw response: " . htmlspecialchars($response));
}

$threadsUserId = $data["id"];
$username = $data["username"] ?? $account["username"] ?? "";

$update = $pdo->prepare("
    UPDATE threads_accounts
    SET threads_user_id = ?, username = ?
    WHERE id = ?
");

$update->execute([$threadsUserId, $username, $account["id"]]);

echo "<h2>Threads user_id düzeltildi ✅</h2>";
echo "<p>threads_user_id: ".htmlspecialchars($threadsUserId)."</p>";
echo "<p>username: ".htmlspecialchars($username)."</p>";
echo '<p><a href="../dashboard/automation.php">Otomasyon merkezine dön</a></p>';
?>