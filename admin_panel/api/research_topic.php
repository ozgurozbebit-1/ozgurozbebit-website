<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

require_once "../config/openai.php";
require_once "../config/research.php";

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
$search_query = trim($input["search_query"] ?? "");
$googleResults = "";

if($topic === ""){
    echo json_encode(["success"=>false,"message"=>"Konu boş."], JSON_UNESCAPED_UNICODE);
    exit;
}

if($search_query === ""){
    $search_query = $topic;
}
$serpUrl =
    "https://serpapi.com/search.json?" .
    http_build_query([
        "engine" => "google",
        "q" => $search_query,
        "api_key" => SERP_API_KEY,
        "num" => 5
    ]);

$serpResponse = @file_get_contents($serpUrl);

if($serpResponse !== false){

    $serpData = json_decode($serpResponse, true);

    if(!empty($serpData["organic_results"])){

        foreach($serpData["organic_results"] as $row){

            $googleResults .=
                ($row["title"] ?? "") .
                "\n" .
                ($row["snippet"] ?? "") .
                "\n\n";
        }
    }
}

$prompt = "
Sen bir dijital içerik araştırma asistanısın.

KONU:
{$topic}

ARAMA SORGUSU:
{$search_query}
GOOGLE SONUÇLARI:
{$googleResults}

ÖNEMLİ:
- İnternete gerçekten erişemiyorsan bunu açıkça söyle.
- Bilmediğin kişi, marka veya kurum hakkında bilgi uydurma.
- Doğrulanmış bilgi yoksa 'Araştırma gerekli' de.
- Kullanıcının vereceği ek bilgiyle içerik hazırlanabileceğini belirt.
- Psikiyatri konusu değilse psikiyatriyle ilişkilendirme.
- Kişinin mesleğini profession alanına yaz.
- İçerik üretilebilecek ana konuları content_categories dizisine yaz.

Sadece geçerli JSON döndür:

{
  \"success\": true,
  \"research_summary\": \"\",
  \"known_facts\": [],
  \"missing_info\": [],
  \"expertise_areas\": [],
  \"content_categories\": [],
  \"profession\": \"\",
  \"content_angle\": \"\",
  \"suggested_post_topic\": \"\",
  \"risk_note\": \"\"
}
";

$payload = [
    "model" => "gpt-4o-mini",
    "messages" => [
        ["role" => "system", "content" => "Sadece JSON döndür. Markdown kullanma. Bilgi uydurma."],
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
        "message" => "Araştırma JSON çözümlenemedi.",
        "raw" => $content
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$json["success"] = true;
$json["topic"] = $topic;
$json["search_query"] = $search_query;

echo json_encode($json, JSON_UNESCAPED_UNICODE);
exit;