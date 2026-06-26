<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

require_once "../config/openai.php";

function out($arr){
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    exit;
}

if(empty($OPENAI_API_KEY)){
    out(["success"=>false,"message"=>"OpenAI API key bulunamadı."]);
}

if(!isset($_SESSION["user_id"])){
    out(["success"=>false,"message"=>"Oturum bulunamadı."]);
}

$input = json_decode(file_get_contents("php://input"), true);
if(!is_array($input)){ $input = []; }

$topic = trim($input["topic"] ?? "");
$content = trim($input["content"] ?? "");

if($topic === ""){
    out(["success"=>false,"message"=>"Konu boş."]);
}

$prompt = "
Sen deneyimli bir Threads içerik editörüsün.

KONU:
{$topic}

VARSA İÇERİK PAKETİ:
{$content}

Görev:
Aynı konu için 3 farklı Threads çıktısı üret.

1) short_content:
- 350-600 karakter arası olsun.
- İlk cümle dikkat çekici olsun.
- Kısa paragraflar kullan.
- Samimi ama uzman dili olsun.

2) long_content:
- 800-1200 karakter arası olsun.
- Threads akışına uygun, rahat okunan kısa paragraflar olsun.
- Instagram açıklaması gibi değil, sohbet eder gibi ama uzman tonda olsun.

3) thread_series:
- 5 parçalık bir dizi olsun.
- Her parça 180-320 karakter arası olsun.
- 1. parça güçlü hook olsun.
- 2-4. parçalar bilgiyi adım adım açsın.
- 5. parça güven veren kapanış olsun.

Genel kurallar:
- Emoji kullanma.
- Hashtag kullanma.
- 'Başlık:', 'Açıklama:', 'Thread:' gibi etiketler yazma.
- Tanı veya tedavi garantisi verme.
- Korkutucu veya manipülatif dil kullanma.
- Sağlık alanında etik, sade ve güven veren dil kullan.
- Bilgi uydurma.

Sadece geçerli JSON döndür:

{
  \"success\": true,
  \"short_content\": \"\",
  \"long_content\": \"\",
  \"thread_series\": [\"\",\"\",\"\",\"\",\"\"]
}
";

$payload = [
    "model" => "gpt-4o-mini",
    "messages" => [
        ["role"=>"system", "content"=>"Sadece geçerli JSON döndür. Markdown kullanma. Etiket yazma."],
        ["role"=>"user", "content"=>$prompt]
    ],
    "temperature" => 0.65
];

$ch = curl_init("https://api.openai.com/v1/chat/completions");
curl_setopt_array($ch,[
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_TIMEOUT => 120,
    CURLOPT_HTTPHEADER => [
        "Content-Type: application/json",
        "Authorization: Bearer " . $OPENAI_API_KEY
    ],
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE)
]);

$response = curl_exec($ch);
$error = curl_error($ch);
$http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if($error){
    out(["success"=>false,"message"=>"OpenAI bağlantı hatası: " . $error]);
}

$data = json_decode($response, true);

if($http < 200 || $http >= 300){
    out(["success"=>false,"message"=>"OpenAI API hata döndürdü.","http"=>$http,"raw"=>$data ?: $response]);
}

$contentRaw = trim($data["choices"][0]["message"]["content"] ?? "");
$contentRaw = preg_replace('/^```json\s*/', '', $contentRaw);
$contentRaw = preg_replace('/^```\s*/', '', $contentRaw);
$contentRaw = preg_replace('/```$/', '', $contentRaw);
$contentRaw = trim($contentRaw);

$json = json_decode($contentRaw, true);

if(!is_array($json)){
    out(["success"=>false,"message"=>"Threads JSON çözümlenemedi.","raw"=>$contentRaw]);
}

$short = trim((string)($json["short_content"] ?? $json["short"] ?? ""));
$long = trim((string)($json["long_content"] ?? $json["long"] ?? ""));
$series = $json["thread_series"] ?? $json["series"] ?? [];

if(!is_array($series)){
    $series = [$series];
}

$series = array_values(array_filter(array_map(function($x){
    return trim((string)$x);
}, $series)));
$series = array_slice($series, 0, 5);

out([
    "success" => true,
    "short_content" => $short,
    "long_content" => $long,
    "thread_series" => $series
]);
