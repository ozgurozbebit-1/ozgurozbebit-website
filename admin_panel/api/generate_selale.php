<?php
session_start();

ini_set('display_errors', 0);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

require_once "../config/openai.php";

$data = json_decode(file_get_contents("php://input"), true);
if (!is_array($data)) { $data = []; }

$topic  = trim($data["topic"] ?? "");
$series = trim($data["series"] ?? "");
$tone   = trim($data["tone"] ?? "");

if ($topic === "") { $topic = "Çocuklarda sınav kaygısı"; }
if ($series === "") { $series = "Aile Danışmanlığı Bilgilendirme"; }
if ($tone === "") { $tone = "Sakin, güven veren, anlaşılır ve danışmanlık diline uygun"; }

$prompt = "
Sen Şelale Özbebit için çalışan profesyonel bir aile danışmanlığı içerik editörüsün.

Şelale Özbebit'in içerik alanları:
- Aile danışmanlığı
- Ebeveyn danışmanlığı
- Çocuk gelişimi
- Ergenlik dönemi
- Sınav kaygısı
- Dürtüsellik
- Dikkat sorunları
- Aile içi iletişim
- Çift danışmanlığı
- İlişki danışmanlığı

ÇOK ÖNEMLİ DİL KURALLARI:
- 'Terapi' kelimesini hiçbir yerde kullanma.
- 'Tedavi', 'tanı', 'hastalık', 'klinik', 'hekim', 'doktor', 'psikiyatri', 'psikiyatrist' kelimelerini kullanma.
- Tıbbi iddia veya yönlendirme yapma.
- Gerektiğinde 'uzman desteği', 'profesyonel destek' veya 'danışmanlık desteği' ifadelerini kullan.
- Dil sıcak, güven veren, etik, sade ve ailelere hitap eden bir dil olsun.

KONU:
$topic

İçerik serisi:
$series

Ton:
$tone

Aşağıdaki platform paketini Türkçe ve EKSİKSİZ üret.

ÇOK KRİTİK FORMAT KURALI:
- Bölüm başlıkları AYNEN şu şekilde olmalı.
- Bu bölüm başlıkları dışında hiçbir yerde 'Başlık:', 'Alt Başlık:', 'Giriş:', 'Sonuç:', 'Açıklama:', 'Metin:', 'Konu:', 'Slayt:' veya 'Ekran:' etiketi kullanma.
- Etiket yazma; sadece nihai paylaşım metnini yaz.
- Markdown yıldızı kullanma.
- JSON döndürme.
- Konuya özel, somut, uygulanabilir bilgi ver. Her konuya uyabilecek genel cümlelerden kaçın.
- Özellikle carousel bölümünde konu başlığındaki bütün ana unsurlar görünür olmalı.

1. INSTAGRAM POSTU
Kısa, anlaşılır, güven veren bir sosyal medya metni yaz. 3-5 kısa paragraf ve 5 hashtag ekle. 'Başlık:' etiketi yazma.

2. INSTAGRAM CAROUSEL
5 görsellik carousel metni yaz.
Carousel akışı güçlü ve konuya özel olmalı:
1) İlk görsel güçlü hook olsun: merak uyandırsın, ama korkutmasın.
2) Konuya özel ana problem veya yanlış bilinen nokta.
3) Konuya özel kritik bilgi veya mini farkındalık.
4) Aile/kişi için uygulanabilir bir öneri.
5) Kapanış: kısa, güven veren, takip çağrısı.

Carousel kuralları:
- Her görsel için yalnızca görselin üstüne yazılacak kısa metni ver.
- Her görsel metni 1-2 cümleyi geçmesin.
- 'Slayt', 'Başlık', 'Açıklama' gibi etiketler kullanma.
- Genel cümle yazma. Örneğin 'Duygular önemlidir' gibi boş ifadeler kullanma.
- Konu DEHB ise rutin, uyku, ekran süresi, dürtüsellik, aile düzeni gibi konuya özgü bilgilerden yararlan.
- Konu yaz tatili ise tatil rutini, serbest zaman, ekran kullanımı ve uyku düzeniyle ilişkilendir.

3. INSTAGRAM STORY
3 kısa story ekranı yaz. 'Ekran:' etiketi kullanma. Son maddede soru veya anket önerisi olsun.

4. REELS SENARYOSU
30-45 saniyelik video akışı yaz. Giriş/Orta/Kapanış etiketi yazma; doğal metin halinde yaz. Ekran yazıları için de 'Ekran:' etiketi kullanma.

5. LINKEDIN YAZISI
Daha profesyonel, kurumsal ve aile danışmanlığı kimliğine uygun 4-6 paragraflık metin yaz. 'Başlık:' etiketi yazma.
6. X PAYLAŞIMI
3 kısa X paylaşımı yaz. Her biri ayrı satır olsun.

7. BLOG TASLAĞI
Kısa blog planı yaz. Etiketli alan adları kullanma. Doğal bir blog akışı ver.

8. YOUTUBE SHORTS
45 saniyelik konuşma metni, kısa açıklama ve 5 etiket üret. 'Başlık:' ve 'Açıklama:' etiketi yazma.

9. THUMBNAIL METNİ
5 kısa thumbnail metni öner.

10. SEO PAKETİ
Meta title, meta description ve 10 anahtar kelime üret. 'Başlık:' etiketi yazma.

11. INSTAGRAM GÖRSEL FİKRİ
Görselde ne olacağını detaylı anlat.

12. INSTAGRAM CAROUSEL TASARIMI
Tam beyaz kart kullanmadan, açık tonlu fotoğraf/imaj hissi korunarak okunabilir 5 slaytlık tasarım fikri ver.

13. REELS KAPAK METNİ
5 kısa kapak metni öner.

14. YOUTUBE THUMBNAIL METNİ
5 güçlü thumbnail metni öner.

15. CANVA TASARIM PROMPTU
Canva veya yapay zeka görsel üreticileri için detaylı prompt oluştur. Aile danışmanlığı merkezine uygun modern, sade, güven veren ve sıcak bir estetik kullan. Turkuaz, yeşil, açık mavi, açık bej ve beyaz tonları öner.

Güvenlik ve etik kurallar:
- Kişiye özel değerlendirme, kesin sonuç veya garanti ifade etme.
- Kişiyi uygun profesyonel destek veya danışmanlık desteği almaya teşvik et ama korkutma.
- Bilimsel, sade ve etik yaz.
- Reklam dili kullanma.
- 'Kesin çözüm', 'garanti', 'mucize' gibi ifadeler kullanma.
- Şelale Özbebit markasına uygun güven veren, sade ve etik bir ton kullan.
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
    echo json_encode(["success" => false, "message" => "OpenAI API anahtarı bulunamadı."], JSON_UNESCAPED_UNICODE);
    exit;
}

$ch = curl_init("https://api.openai.com/v1/responses");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_TIMEOUT => 180,
    CURLOPT_HTTPHEADER => ["Content-Type: application/json", "Authorization: Bearer " . $apiKey],
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE)
]);

$response = curl_exec($ch);

if ($response === false) {
    echo json_encode(["success" => false, "message" => "OpenAI bağlantı hatası: " . curl_error($ch)], JSON_UNESCAPED_UNICODE);
    curl_close($ch);
    exit;
}

$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$result = json_decode($response, true);

if ($httpCode < 200 || $httpCode >= 300) {
    echo json_encode(["success" => false, "message" => "OpenAI API hata döndürdü.", "http_code" => $httpCode, "raw" => $result ?: $response], JSON_UNESCAPED_UNICODE);
    exit;
}

$text = $result["output_text"] ?? "";
if ($text === "" && isset($result["output"][0]["content"][0]["text"])) {
    $text = $result["output"][0]["content"][0]["text"];
}

if ($text === "") {
    echo json_encode(["success" => false, "message" => "OpenAI cevap verdi ama içerik metni boş geldi.", "raw" => $result], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode(["success" => true, "content" => $text], JSON_UNESCAPED_UNICODE);
exit;
?>