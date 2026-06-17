<?php
session_start();

ini_set('display_errors', 0);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

require_once "../config/openai.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!is_array($data)) {
    $data = [];
}

$topic  = trim($data["topic"] ?? "");
$series = trim($data["series"] ?? "");
$tone   = trim($data["tone"] ?? "");

if ($topic === "") {
    $topic = "Panik atak kalp krizi değildir";
}

if ($series === "") {
    $series = "Psikiyatri Bilgilendirme";
}

if ($tone === "") {
    $tone = "Sakin, bilimsel ve anlaşılır";
}

$prompt = "
Sen Uzm. Dr. Özgür Özbebit için çalışan profesyonel bir psikiyatri içerik editörüsün.

Konu:
$topic

İçerik serisi:
$series

Ton:
$tone

Aşağıdaki içerik paketini Türkçe üret:

1. INSTAGRAM POSTU
- Kısa, anlaşılır, güven veren.
- 1 başlık, 3-5 paragraf, 5 hashtag.

2. INSTAGRAM CAROUSEL
- 6 slaytlık carousel metni.
- Her slayt için başlık ve kısa açıklama.

3. INSTAGRAM STORY
- 3 story ekranı.
- Her ekranda kısa metin.
- Son ekranda soru/anket önerisi.

4. REELS SENARYOSU
- 30-45 saniyelik video metni.
- Giriş cümlesi, orta bölüm, kapanış.
- Ekran yazıları dahil.

5. LINKEDIN YAZISI
- Daha profesyonel ve kurumsal dil.
- Hekim kimliğine uygun.
- 4-6 paragraf.

6. X PAYLAŞIMI
- 3 kısa tweet/X paylaşımı.
- Her biri ayrı ayrı yazılsın.

7. BLOG TASLAĞI
- Başlık
- Giriş
- 4 ara başlık
- Kısa sonuç

8. YOUTUBE SHORTS
- Başlık
- 45 saniyelik konuşma metni
- Açıklama
- 5 etiket

9. THUMBNAIL METNİ
- 5 kısa thumbnail başlığı öner.

10. SEO PAKETİ
- Meta title
- Meta description
- 10 anahtar kelime

11. INSTAGRAM GÖRSEL FİKRİ
- Görselde ne olacağını detaylı anlat.

12. INSTAGRAM CAROUSEL TASARIMI
- Her slayt için tasarım fikri ver.

13. REELS KAPAK METNİ
- 5 kısa kapak önerisi üret.

14. YOUTUBE THUMBNAIL METNİ
- 5 güçlü thumbnail önerisi üret.

15. CANVA TASARIM PROMPTU
- Canva veya yapay zeka görsel üreticileri için detaylı prompt oluştur.
- Kurumsal psikiyatri kliniği estetiği kullan.
- Turkuaz ve beyaz tonları öner.

Kurallar:
- Tanı veya tedavi garantisi verme.
- Kişiyi hekime başvurmaya teşvik et ama korkutma.
- Bilimsel, sade ve etik yaz.
- Reklam dili kullanma.
- 'Kesin çözüm', 'garanti tedavi', 'mucize' gibi ifadeler kullanma.
- Uzm. Dr. Özgür Özbebit markasına uygun güven veren ton kullan.
- Kullanıcıya soru sorma.
- Ek açıklama ekleme.
- Çıktıyı eksiksiz tamamla.
";

$payload = [
    "model" => "gpt-4.1-mini",
    "input" => $prompt
];

$apiKey = $OPENAI_API_KEY ?? OPENAI_API_KEY ?? "";

if ($apiKey === "") {
    echo json_encode([
        "success" => false,
        "message" => "OpenAI API anahtarı bulunamadı."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$ch = curl_init("https://api.openai.com/v1/responses");

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

if ($response === false) {
    echo json_encode([
        "success" => false,
        "message" => "OpenAI bağlantı hatası: " . curl_error($ch)
    ], JSON_UNESCAPED_UNICODE);
    curl_close($ch);
    exit;
}

$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$result = json_decode($response, true);

if ($httpCode < 200 || $httpCode >= 300) {
    echo json_encode([
        "success" => false,
        "message" => "OpenAI API hata döndürdü.",
        "http_code" => $httpCode,
        "raw" => $result ?: $response
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$text = $result["output_text"] ?? "";

if ($text === "" && isset($result["output"][0]["content"][0]["text"])) {
    $text = $result["output"][0]["content"][0]["text"];
}

if ($text === "") {
    echo json_encode([
        "success" => false,
        "message" => "OpenAI cevap verdi ama içerik metni boş geldi.",
        "raw" => $result
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode([
    "success" => true,
    "content" => $text
], JSON_UNESCAPED_UNICODE);
exit;
?>