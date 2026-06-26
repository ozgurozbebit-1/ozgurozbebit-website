<?php
session_start();

ini_set('display_errors', 0);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

require_once "../config/database.php";
require_once "../config/threads.php";

try {

    if(!isset($_SESSION["user_id"])){
        echo json_encode(["success"=>false,"message"=>"Oturum bulunamadı."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $user_id = $_SESSION["user_id"];

    $input = json_decode(file_get_contents("php://input"), true);
    if(!is_array($input)){ $input = []; }

    $text = trim($input["text"] ?? "");
    $imageUrl = trim($input["image_url"] ?? "");

    if($text === ""){
        $text = "Özgür Özbebit Dijital İçerik Merkezi üzerinden Threads paylaşımı.";
    }

    // Threads metin sınırı 500 karakter. Güvenli kırpma.
    if(mb_strlen($text, "UTF-8") > 490){
        $text = mb_substr($text, 0, 487, "UTF-8") . "...";
    }

    // Gelen görsel URL göreli ise tam public URL'e çevir.
    if($imageUrl !== ""){
        if(str_starts_with($imageUrl, "../")){
            $imageUrl = str_replace("../", "/", $imageUrl);
        }

        if(str_starts_with($imageUrl, "/")){
            $imageUrl = "https://admin.ozgurozbebit.com.tr" . $imageUrl;
        }
    }

    $stmt = $pdo->prepare("
        SELECT * FROM threads_accounts
        WHERE user_id = ?
        ORDER BY id DESC
        LIMIT 1
    ");
    $stmt->execute([$user_id]);
    $account = $stmt->fetch(PDO::FETCH_ASSOC);

    if(!$account || empty($account["access_token"])){
        echo json_encode(["success"=>false,"message"=>"Threads token bulunamadı."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $accessToken = $account["access_token"];
    $threadsUserId = !empty($account["threads_user_id"]) ? $account["threads_user_id"] : "me";

    $createUrl = THREADS_API_URL . "/" . $threadsUserId . "/threads";

    if($imageUrl !== ""){
        $postData = [
            "media_type" => "IMAGE",
            "image_url" => $imageUrl,
            "text" => $text,
            "access_token" => $accessToken
        ];
    }else{
        $postData = [
            "media_type" => "TEXT",
            "text" => $text,
            "access_token" => $accessToken
        ];
    }

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $createUrl,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query($postData),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 45
    ]);

    $response1 = curl_exec($ch);
    $error1 = curl_error($ch);
    $http1 = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if($error1){
        echo json_encode(["success"=>false,"message"=>"Container cURL hatası: ".$error1], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $data1 = json_decode($response1, true);

    if(empty($data1["id"])){
        echo json_encode([
            "success"=>false,
            "message"=>"Threads container oluşturulamadı.",
            "http_code"=>$http1,
            "sent_image_url"=>$imageUrl,
            "response"=>$data1,
            "raw"=>$response1
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $creationId = $data1["id"];

    sleep(2);

    $publishUrl = THREADS_API_URL . "/" . $threadsUserId . "/threads_publish";

    $publishData = [
        "creation_id" => $creationId,
        "access_token" => $accessToken
    ];

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $publishUrl,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query($publishData),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 45
    ]);

    $response2 = curl_exec($ch);
    $error2 = curl_error($ch);
    $http2 = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if($error2){
        echo json_encode(["success"=>false,"message"=>"Publish cURL hatası: ".$error2], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $data2 = json_decode($response2, true);

    if(empty($data2["id"])){
        echo json_encode([
            "success"=>false,
            "message"=>"Threads yayına alınamadı.",
            "http_code"=>$http2,
            "container_id"=>$creationId,
            "response"=>$data2,
            "raw"=>$response2
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    echo json_encode([
        "success"=>true,
        "message"=>"Threads paylaşımı başarılı.",
        "post_id"=>$data2["id"],
        "image_url"=>$imageUrl
    ], JSON_UNESCAPED_UNICODE);
    exit;

} catch(Throwable $e) {

    echo json_encode([
        "success"=>false,
        "message"=>"PHP hata yakaladı: ".$e->getMessage(),
        "file"=>$e->getFile(),
        "line"=>$e->getLine()
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
?>