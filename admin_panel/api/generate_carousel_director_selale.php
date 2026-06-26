<?php
session_start();

ini_set('display_errors', 0);
error_reporting(E_ALL);
header('Content-Type: application/json; charset=utf-8');

require_once "../config/openai.php";

function out($arr){
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    exit;
}

if(!isset($_SESSION["user_id"])){
    out(["success"=>false,"message"=>"Oturum bulunamadı."]);
}

$apiKey = $OPENAI_API_KEY ?? OPENAI_API_KEY ?? "";
if($apiKey === ""){
    out(["success"=>false,"message"=>"OpenAI API anahtarı bulunamadı."]);
}

$input = json_decode(file_get_contents("php://input"), true);
if(!is_array($input)){ $input = []; }

$topic = trim($input["topic"] ?? "");
$content = trim($input["content"] ?? "");
$research = trim($input["research"] ?? "");

if($topic === ""){
    out(["success"=>false,"message"=>"Konu boş."]);
}

$prompt = "
Sen Uzm. Dr. Özgür Özbebit markası için çalışan üst düzey Instagram carousel içerik direktörüsün.

KONU:
{$topic}

VARSA İÇERİK PAKETİ:
{$content}

VARSA ARAŞTIRMA:
{$research}

Görev:
Konuya doğrudan bağlı, 5 slaytlık, kaydırma isteği uyandıran, bilimsel ama anlaşılır carousel metni üret.

Kalite hedefi:
- Her slayt tek fikir taşısın.
- Her slayt spot bilgi gibi okunmalı.
- Genel geçer motivasyon cümlesi yazma.
- Her cümle konunun kendi özgül gerçeğini anlatmalı.
- Slaytlar birbirini takip eden mini hikaye gibi ilerlesin.
- İlk slayt merak uyandırmalı; soru, şaşırtıcı gerçek veya yaygın yanlışla açılabilir.
- Son slayt güven veren ve takip çağrısı içeren kısa kapanış olsun.

Zorunlu akış:
1. Slayt: Konuya doğrudan bağlı güçlü hook. Merak uyandır.
2. Slayt: Konuya özel temel sorun veya yanlış anlama.
3. Slayt: Aile/kişi için somut, akılda kalan kritik bilgi.
4. Slayt: Uygulanabilir, basit ve gerçekçi öneri.
5. Slayt: Güven veren kapanış + takip çağrısı.

DEHB ve yaz tatili gibi konularda özellikle kullan:
- okul rutinlerinin kaybı
- uyku saatinin kayması
- ekran süresinin artması
- serbest zaman yönetimi
- dürtüsellik ve erteleme
- ebeveynlerin küçük günlük plan yapması
- tatilin tamamen sınırsızlık olmadığı

Yasaklar:
- 'Başlık:', 'Slayt:', 'Açıklama:', 'Metin:', 'Konu:', 'Ekran:' etiketlerini ASLA yazma.
- Emoji kullanma.
- Sembol veya ikon kullanma.
- Markdown kullanma.
- Tedavi garantisi verme.
- Tanı koyma.
- Korkutucu veya manipülatif dil kullanma.
- 'Farkındalık önemlidir', 'Duygular önemlidir', 'Sağlıklı seçimler mümkündür' gibi boş ve genel cümleler yazma.

Uzunluk:
- 1. slayt 55-90 karakter.
- 2-4. slaytlar 75-125 karakter.
- 5. slayt 65-105 karakter.
- Türkçe karakterleri doğru kullan.

Sadece geçerli JSON döndür:

{
  \"success\": true,
  \"slides\": [
    \"\",
    \"\",
    \"\",
    \"\",
    \"\"
  ]
}
";

$payload = [
    "model" => "gpt-4o-mini",
    "messages" => [
        ["role"=>"system", "content"=>"Sadece geçerli JSON döndür. Markdown kullanma. Etiket ve emoji yazma."],
        ["role"=>"user", "content"=>$prompt]
    ],
    "temperature" => 0.42
];

$ch = curl_init("https://api.openai.com/v1/chat/completions");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_TIMEOUT => 120,
    CURLOPT_HTTPHEADER => [
        "Content-Type: application/json",
        "Authorization: Bearer " . $apiKey
    ],
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE)
]);

$response = curl_exec($ch);
$error = curl_error($ch);
$http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if($error){
    out(["success"=>false,"message"=>"OpenAI bağlantı hatası: ".$error]);
}

$data = json_decode($response, true);

if($http < 200 || $http >= 300){
    out(["success"=>false,"message"=>"OpenAI API hata döndürdü.","http"=>$http,"raw"=>$data ?: $response]);
}

$content = trim($data["choices"][0]["message"]["content"] ?? "");
$content = preg_replace('/^```json\s*/', '', $content);
$content = preg_replace('/^```\s*/', '', $content);
$content = preg_replace('/```$/', '', $content);
$content = trim($content);

$json = json_decode($content, true);

if(!is_array($json) || empty($json["slides"]) || !is_array($json["slides"])){
    out(["success"=>false,"message"=>"Carousel Director JSON çözümlenemedi.","raw"=>$content]);
}

function clean_slide($text){
    $text = trim((string)$text);
    $text = mb_convert_encoding($text, 'UTF-8', 'UTF-8');
    $text = iconv('UTF-8', 'UTF-8//IGNORE', $text);
    $text = preg_replace('/[\x{1F000}-\x{1FAFF}\x{2600}-\x{27BF}]/u', '', $text);
    $text = preg_replace('/\*\*/u', '', $text);
    $text = preg_replace('/---/u', '', $text);
    $text = preg_replace('/^\s*[-–—]*\s*\d+[\.\)]\s*/u', '', $text);

    $labels = ['Başlık','Baslik','Ana Başlık','Ana Baslik','Alt Başlık','Alt Baslik','Açıklama','Aciklama','Metin','Konu','Slayt','Slide','Ekran','Giriş','Giris','Sonuç','Sonuc'];
    foreach($labels as $label){
        $text = preg_replace('/^\s*'.preg_quote($label, '/').'\s*\d*\s*:\s*/iu', '', $text);
    }

    $text = preg_replace('/\s{2,}/u', ' ', $text);
    return trim($text);
}

$slides = array_values(array_filter(array_map('clean_slide', $json["slides"])));
$slides = array_slice($slides, 0, 5);

if(count($slides) < 5){
    if(mb_stripos($topic, "DEHB") !== false && (mb_stripos($topic, "tatil") !== false || mb_stripos($topic, "yaz") !== false)){
        $slides = [
            "Yaz tatili DEHB'li çocuklar için neden daha zor geçebilir?",
            "Okul rutini bitince uyku, ekran süresi ve görev başlatma daha kolay dağılır.",
            "Bu tembellik değil; çoğu zaman yürütücü işlev desteğinin azalmasıdır.",
            "Her gün aynı saatte uyku, hareket ve kısa görev planı büyük fark yaratabilir.",
            "DEHB hakkında güvenilir ve anlaşılır içerikler için takip edebilirsiniz."
        ];
    }else{
        $slides = [
            $topic . " konusunda çoğu kişinin kaçırdığı nokta ne?",
            "Belirtiyi tek başına değil, günlük yaşam içindeki etkisiyle değerlendirin.",
            "Rutin, uyku ve çevresel destekler sürecin görünümünü belirgin biçimde değiştirebilir.",
            "Küçük ama sürdürülebilir adımlar, büyük değişimlerden daha uygulanabilirdir.",
            "Daha güvenilir ruh sağlığı içerikleri için takip edebilirsiniz."
        ];
    }
}

out([
    "success"=>true,
    "slides"=>$slides
]);
?>
