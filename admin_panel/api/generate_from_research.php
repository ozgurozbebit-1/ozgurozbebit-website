<?php
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
$research = trim($input["research"] ?? "");

if($topic === "" || $research === ""){
    echo json_encode(["success"=>false,"message"=>"Konu veya araştırma boş."], JSON_UNESCAPED_UNICODE);
    exit;
}

$prompt = "
Sen V47 AI Dijital İçerik Direktörüsün.

Görev:
Verilen araştırma sonucuna dayanarak konuya özel, okunabilir platform içerik paketi üret.

KONU:
{$topic}

ARAŞTIRMA:
{$research}

Kurallar:
- Araştırmada doğrulanmış bilgi yoksa biyografi uydurma.
- Psikiyatri konusu değilse psikiyatriye bağlama.
- Sağlık alanında garanti, mucize, kesin sonuç, başarı garantisi veya fiyat bilgisi üretme.
- Hasta yorumu, başarı oranı veya tedavi sonucu uydurma.
- content_package alanı ham JSON değil, okunabilir metin olsun.
- social_copy alanı doğrudan paylaşılabilir sosyal medya metni olsun.
- visual_prompt alanı yazısız, profesyonel ve açık tonlu görsel üretim promptu olsun.
- 'Başlık:', 'Alt Başlık:', 'Giriş:', 'Sonuç:', 'Açıklama:', 'Metin:', 'Konu:', 'Slayt:' veya 'Ekran:' etiketlerini kullanma.

content_package içinde şu bölüm başlıkları AYNEN yer alsın:
1. INSTAGRAM POSTU
2. INSTAGRAM CAROUSEL
3. INSTAGRAM STORY
4. REELS SENARYOSU
5. LINKEDIN YAZISI

Carousel özel kuralları:
- 5 görsel metni üret.
- İlk görsel hook/merak uyandırıcı olsun.
- Her slayt konuya özel somut bilgi taşısın.
- Genel motivasyon cümlesi yazma.
- Konu DEHB ve yaz tatili ise rutin, uyku, ekran süresi, dürtüsellik ve aile planı gibi somut başlıklara değin.

Sadece JSON döndür:

{
  \"success\": true,
  \"profession\": \"\",
  \"expertise_areas\": [],
  \"content_categories\": [],
  \"content_package\": \"\",
  \"social_copy\": \"\",
  \"visual_prompt\": \"\"
}
";

$payload = [
    "model" => "gpt-4o-mini",
    "messages" => [
        ["role"=>"system", "content"=>"Sadece JSON döndür. Markdown kullanma. Bilgi uydurma."],
        ["role"=>"user", "content"=>$prompt]
    ],
    "temperature" => 0.35
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
        "success"=>false,
        "message"=>"JSON çözümlenemedi.",
        "raw"=>$content
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$json["success"] = true;

if(empty($json["content_package"])){
    $json["content_package"] = "Araştırmaya göre içerik paketi üretilemedi. Daha fazla doğrulanmış bilgi gerekli.";
}

if(empty($json["social_copy"])){
    $json["social_copy"] = "Bu konu hakkında güvenilir içerik üretmek için ek doğrulanmış bilgi gereklidir.";
}

echo json_encode($json, JSON_UNESCAPED_UNICODE);
exit;
?>