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

    $title = trim($input["title"] ?? "");

    if($title === ""){
        echo json_encode(["success"=>false,"message"=>"Başlık boş."], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $prompt = "
Sen deneyimli bir psikiyatri sosyal medya editörüsün.

Konu:
".$title."

Görev:
Bu konu için Instagram/LinkedIn görselinde kullanılabilecek 4 kısa, güçlü, etik ve profesyonel başlık üret.

Kurallar:
- Her başlık maksimum 5 kelime olsun.
- Tıbbi iddia, kesin sonuç, korkutma veya manipülasyon olmasın.
- Premium psikiyatri markasına uygun olsun.
- Sadece 4 satır döndür.
- Numara, madde işareti, açıklama yazma.
";

    $payload = [
        "model" => "gpt-4.1-mini",
        "messages" => [
            [
                "role" => "user",
                "content" => $prompt
            ]
        ],
        "temperature" => 0.8,
        "max_tokens" => 180
    ];

    $ch = curl_init("https://api.openai.com/v1/chat/completions");

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_TIMEOUT => 60,
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

    $data = json_decode($response, true);

    if($httpCode < 200 || $httpCode >= 300){
        echo json_encode([
            "success"=>false,
            "message"=>"OpenAI hata döndürdü.",
            "http_code"=>$httpCode,
            "raw"=>$data ?: $response
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $content = trim($data["choices"][0]["message"]["content"] ?? "");

    $lines = preg_split("/\r\n|\n|\r/", $content);
    $titles = [];

    foreach($lines as $line){
        $line = trim($line);
        $line = preg_replace('/^[0-9\-\.\)\s]+/u', '', $line);
        $line = trim($line);

        if($line !== ""){
            $titles[] = $line;
        }
    }

    $titles = array_slice($titles, 0, 4);

    echo json_encode([
        "success"=>true,
        "titles"=>$titles
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