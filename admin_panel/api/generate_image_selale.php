<?php
session_start();

ini_set('display_errors', 0);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

try {

    if(!isset($_SESSION["user_id"])){
        echo json_encode(["success"=>false,"message"=>"Oturum bulunamadı."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    require_once "../config/openai.php";

    $apiKey = "";

    if(isset($OPENAI_API_KEY) && $OPENAI_API_KEY !== ""){
        $apiKey = $OPENAI_API_KEY;
    } elseif(defined("OPENAI_API_KEY")) {
        $apiKey = OPENAI_API_KEY;
    }

    if($apiKey === ""){
        echo json_encode(["success"=>false,"message"=>"OpenAI API anahtarı bulunamadı."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $input = json_decode(file_get_contents("php://input"), true);
    if(!is_array($input)){ $input = []; }

    $prompt = trim($input["prompt"] ?? "");

    if($prompt === ""){
        echo json_encode(["success"=>false,"message"=>"Prompt boş geldi."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    /*
    V13.8 ANA KURAL:
    Bu dosya artık promptu yeniden yorumlamaz.
    Metafor, konu stratejisi ve görsel dil dashboard/image.php
    ve generate_visual_concept.php tarafından hazırlanır.
    Burada sadece gelen hazır prompt ile yazısız görsel üretilir.
    */

    $visualPrompt = $prompt . "

SON GÜVENLİK KURALLARI:
- Görselde kesinlikle yazı olmasın.
- Harf, kelime, başlık, slogan, tabela, logo, marka adı olmasın.
- Türkçe veya İngilizce hiçbir metin üretme.
- Watermark, imza veya sahte logo üretme.
- Görsel sonradan PHP ile başlık ve marka katmanı eklenecek şekilde temiz kalsın.
";

    $payload = [
        "model" => "gpt-image-1",
        "prompt" => $visualPrompt,
        "size" => "1024x1024",
        "quality" => "medium",
        "n" => 1
    ];

    $ch = curl_init("https://api.openai.com/v1/images/generations");

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_TIMEOUT => 180,
        CURLOPT_HTTPHEADER => [
            "Content-Type: application/json",
            "Authorization: Bearer " . $apiKey
        ],
        CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE)
    ]);

    $response = curl_exec($ch);

    if($response === false){
        $curlError = curl_error($ch);
        curl_close($ch);
        echo json_encode(["success"=>false,"message"=>"OpenAI bağlantı hatası: ".$curlError], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $result = json_decode($response, true);

    if($httpCode < 200 || $httpCode >= 300){
        echo json_encode([
            "success"=>false,
            "message"=>"OpenAI Image API hata döndürdü.",
            "http_code"=>$httpCode,
            "raw"=>$result ?: $response
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $b64 = $result["data"][0]["b64_json"] ?? "";

    if($b64 === ""){
        echo json_encode([
            "success"=>false,
            "message"=>"Görsel verisi boş geldi.",
            "raw"=>$result
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $dir = "../uploads/generated_images";

    if(!is_dir($dir)){
        mkdir($dir, 0755, true);
    }

    $filename = "image_" . date("Ymd_His") . "_" . rand(1000,9999) . ".png";
    $filepath = $dir . "/" . $filename;

    file_put_contents($filepath, base64_decode($b64));

    $publicUrl = "../uploads/generated_images/" . $filename;

    echo json_encode([
        "success"=>true,
        "message"=>"V13.8 metafor uyumlu yazısız AI görsel başarıyla üretildi.",
        "image_url"=>$publicUrl,
        "used_prompt"=>$visualPrompt
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