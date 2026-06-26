<?php
session_start();

ini_set('display_errors', 0);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

require_once "../config/openai.php";

if(!isset($_SESSION["user_id"])){
    echo json_encode(["success"=>false,"message"=>"Oturum bulunamadı."], JSON_UNESCAPED_UNICODE);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);
if(!is_array($input)){ $input = []; }

$topic = trim($input["topic"] ?? "");
$mainCategory = trim($input["main_category"] ?? "");
$subCategory = trim($input["sub_category"] ?? "");
$matchedTopic = trim($input["matched_topic"] ?? "");

if($topic === ""){
    echo json_encode(["success"=>false,"message"=>"Konu boş."], JSON_UNESCAPED_UNICODE);
    exit;
}

$prompt = "
Sen deneyimli bir sağlık iletişimi ve sosyal medya içerik direktörüsün.

Konu daha önce işlenmiş olabilir.

Kullanıcının yazdığı konu:
{$topic}

Daha önce eşleşen konu:
{$matchedTopic}

Ana kategori:
{$mainCategory}

Alt kategori:
{$subCategory}

Görev:
Bu konuya yakın ama birebir tekrar olmayan 8 yeni sosyal medya içerik konusu öner.

Kurallar:
- Türkçe yaz.
- Kısa ve net başlıklar üret.
- Her öneri sosyal medya post konusu gibi olsun.
- Kesin tedavi vaadi verme.
- Sadece JSON dön.
- Markdown kullanma.

JSON formatı:
{
  \"suggestions\": [
    \"Öneri 1\",
    \"Öneri 2\",
    \"Öneri 3\"
  ]
}
";

$payload = [
    "model" => "gpt-4o-mini",
    "messages" => [
        [
            "role" => "user",
            "content" => $prompt
        ]
    ],
    "temperature" => 0.7,
    "response_format" => [
        "type" => "json_object"
    ]
];

$ch = curl_init("https://api.openai.com/v1/chat/completions");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        "Content-Type: application/json",
        "Authorization: Bearer " . OPENAI_API_KEY
    ],
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
    CURLOPT_TIMEOUT => 60
]);

$response = curl_exec($ch);
$error = curl_error($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if($error){
    echo json_encode([
        "success"=>false,
        "message"=>"cURL hatası: " . $error
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if(!$response || trim($response) === ""){
    echo json_encode([
        "success"=>false,
        "message"=>"OpenAI boş cevap döndürdü."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$data = json_decode($response, true);

if(!is_array($data)){
    echo json_encode([
        "success"=>false,
        "message"=>"OpenAI ana cevabı JSON değil.",
        "http_code"=>$httpCode,
        "raw"=>mb_substr($response, 0, 1500)
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if(isset($data["error"])){
    echo json_encode([
        "success"=>false,
        "message"=>$data["error"]["message"] ?? "OpenAI API hatası.",
        "http_code"=>$httpCode
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$content = $data["choices"][0]["message"]["content"] ?? "";
$content = trim($content);

$content = preg_replace('/^```json\s*/i', '', $content);
$content = preg_replace('/^```\s*/i', '', $content);
$content = preg_replace('/```$/', '', $content);
$content = trim($content);

$json = json_decode($content, true);

$suggestions = [];

if(is_array($json) && isset($json["suggestions"]) && is_array($json["suggestions"])){
    $suggestions = $json["suggestions"];
}

if(empty($suggestions)){
    $lines = preg_split('/\r\n|\r|\n/', $content);

    foreach($lines as $line){
        $line = trim($line);
        $line = preg_replace('/^[\-\*\d\.\)\s]+/u', '', $line);
        $line = trim($line, " \t\n\r\0\x0B\"'");

        if($line !== "" && mb_strlen($line) > 5){
            $suggestions[] = $line;
        }
    }
}

$suggestions = array_values(array_filter(array_unique($suggestions)));

if(empty($suggestions)){
    echo json_encode([
        "success"=>false,
        "message"=>"Öneri üretilemedi.",
        "raw"=>$content
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode([
    "success"=>true,
    "suggestions"=>array_slice($suggestions, 0, 8)
], JSON_UNESCAPED_UNICODE);
exit;