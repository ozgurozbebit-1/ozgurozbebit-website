<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

require_once "../config/openai.php";

if(!isset($_SESSION["user_id"])){
    echo json_encode([
        "success" => false,
        "message" => "Oturum bulunamadı."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);
if(!is_array($input)){ $input = []; }

$topic = trim($input["topic"] ?? "");

if($topic === ""){
    echo json_encode([
        "success" => false,
        "message" => "Konu boş."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$prompt = "
Sen deneyimli bir YouTube Shorts içerik stratejisti ve psikiyatri sağlık iletişimi editörüsün.

Görev:
Verilen konu için Uzm. Dr. Özgür Özbebit markasına uygun YouTube Shorts yayın paketi hazırla.

Konu:
{$topic}

Kurallar:
- Türkçe yaz.
- Sağlık etiğine uygun ol.
- Tanı koyma, tedavi garantisi verme.
- Korkutucu, manipülatif veya panik yaratıcı dil kullanma.
- Başlıklar kısa, merak uyandırıcı ve YouTube Shorts'a uygun olsun.
- Açıklama profesyonel ama sade olsun.
- Hashtagler Türkçe karakter sorunu yaratmayacak şekilde sade olabilir.
- Sadece geçerli JSON döndür. Açıklama yazma.

JSON formatı:
{
  \"success\": true,
  \"main_title\": \"Ana önerilen Shorts başlığı\",
  \"title_options\": [
    \"Başlık 1\",
    \"Başlık 2\",
    \"Başlık 3\",
    \"Başlık 4\",
    \"Başlık 5\"
  ],
  \"description\": \"YouTube Shorts açıklaması\",
  \"hashtags\": [
    \"#shorts\",
    \"#psikiyatri\"
  ],
  \"youtube_tags\": [
    \"psikiyatri\",
    \"ruh sağlığı\"
  ],
  \"pinned_comment\": \"Sabit yorum önerisi\"
}
";

$postData = [
    "model" => "gpt-4o-mini",
    "messages" => [
        [
            "role" => "system",
            "content" => "Sen sağlık iletişimi ve YouTube Shorts konusunda uzman bir Türkçe içerik editörüsün."
        ],
        [
            "role" => "user",
            "content" => $prompt
        ]
    ],
    "temperature" => 0.8
];

$ch = curl_init("https://api.openai.com/v1/chat/completions");

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        "Content-Type: application/json",
        "Authorization: Bearer " . $OPENAI_API_KEY
    ],
    CURLOPT_POSTFIELDS => json_encode($postData, JSON_UNESCAPED_UNICODE),
    CURLOPT_TIMEOUT => 60
]);

$response = curl_exec($ch);
$error = curl_error($ch);
curl_close($ch);

if($error){
    echo json_encode([
        "success" => false,
        "message" => "OpenAI bağlantı hatası: " . $error
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$data = json_decode($response, true);

$content = $data["choices"][0]["message"]["content"] ?? "";

if($content === ""){
    echo json_encode([
        "success" => false,
        "message" => "OpenAI boş cevap döndü.",
        "raw" => $response
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$content = trim($content);
$content = preg_replace('/^```json\s*/', '', $content);
$content = preg_replace('/^```\s*/', '', $content);
$content = preg_replace('/\s*```$/', '', $content);

$json = json_decode($content, true);

if(!is_array($json)){
    echo json_encode([
        "success" => false,
        "message" => "AI JSON formatında cevap vermedi.",
        "raw" => $content
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$json["success"] = true;

echo json_encode($json, JSON_UNESCAPED_UNICODE);
exit;