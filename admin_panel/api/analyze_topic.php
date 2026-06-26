<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();

header('Content-Type: application/json; charset=utf-8');

require_once "../config/openai.php";

if(empty($OPENAI_API_KEY)){
    echo json_encode(["success"=>false,"message"=>"OpenAI API key bulunamadı."], JSON_UNESCAPED_UNICODE);
    exit;
}

if(!isset($_SESSION["user_id"])){
    echo json_encode(["success"=>false,"message"=>"Oturum bulunamadı."], JSON_UNESCAPED_UNICODE);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);
if(!is_array($input)){ $input = []; }

$topic = trim($input["topic"] ?? "");

if($topic === ""){
    echo json_encode(["success"=>false,"message"=>"Konu boş."], JSON_UNESCAPED_UNICODE);
    exit;
}

$prompt = "
Sen gelişmiş bir dijital içerik direktörüsün.

Görev:
Kullanıcının verdiği konuyu analiz et ve içeriğin hangi alana ait olduğunu belirle.

KONU:
{$topic}

ÖNEMLİ:
- Konu bir kişi adıysa bunu kişi olarak değerlendir.
- Kişi adı gördüğünde onu psikiyatri kavramı gibi yorumlama.
- Sadece umut kelimesinden psikoloji veya umut teması üretme.
- Umut Özbebit gibi bir isim gelirse bunu kişi veya doktor adayı olarak sınıflandır.
- Emin değilsen RESEARCH_NEEDED de.
- Bilmediğin kişi hakkında biyografik bilgi uydurma.
- İnternet araştırması yapılması gerekiyorsa bunu açıkça belirt.
- Eğer araştırma gerekiyorsa search_query alanına Google'da aranacak en uygun sorguyu yaz.
- Doğrulanmış bilgi yoksa safe_assumption alanına sadece Araştırma gerekli. yaz.

Kategori seçenekleri:
PSYCHIATRY
PERSON
DOCTOR
BRAND
PLACE
MEDICAL
FINANCE
GENERAL
RESEARCH_NEEDED

Sadece geçerli JSON döndür:

{
  \"success\": true,
  \"category\": \"\",
  \"reason\": \"\",
  \"research_needed\": true,
  \"search_query\": \"\",
  \"safe_assumption\": \"\",
  \"recommended_content\": \"\",
  \"recommended_platform\": \"\"
}
";

$payload = [
    "model" => "gpt-4o-mini",
    "messages" => [
        ["role" => "system", "content" => "Sadece JSON döndür. Markdown kullanma."],
        ["role" => "user", "content" => $prompt]
    ],
    "temperature" => 0.2
];

$ch = curl_init("https://api.openai.com/v1/chat/completions");

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        "Content-Type: application/json",
        "Authorization: Bearer " . $OPENAI_API_KEY
    ],
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE)
]);

$response = curl_exec($ch);
$error = curl_error($ch);
curl_close($ch);

if($error){
    echo json_encode(["success"=>false,"message"=>"OpenAI bağlantı hatası: ".$error], JSON_UNESCAPED_UNICODE);
    exit;
}

$data = json_decode($response, true);
$content = $data["choices"][0]["message"]["content"] ?? "";

$content = trim($content);
$content = preg_replace('/^```json\s*/', '', $content);
$content = preg_replace('/^```\s*/', '', $content);
$content = preg_replace('/```$/', '', $content);
$content = trim($content);

$json = json_decode($content, true);

if(!is_array($json)){
    echo json_encode([
        "success" => false,
        "message" => "Analiz JSON çözümlenemedi.",
        "raw" => $content
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$json["success"] = true;

if(empty($json["category"])){
    $json["category"] = "RESEARCH_NEEDED";
}

if(!isset($json["research_needed"])){
    $json["research_needed"] = false;
}

if(
    $json["research_needed"] === true &&
    in_array(($json["category"] ?? ""), ["PERSON", "DOCTOR", "BRAND", "PLACE", "RESEARCH_NEEDED"])
){
    $json["safe_assumption"] = "Araştırma gerekli.";
    $json["recommended_content"] = "Araştırma sonrası içerik önerisi üretilecek.";
    $json["recommended_platform"] = "Araştırma sonrası belirlenecek.";

    if(empty($json["search_query"])){
        $json["search_query"] = $topic;
    }
}

echo json_encode($json, JSON_UNESCAPED_UNICODE);
exit;