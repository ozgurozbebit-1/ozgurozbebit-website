<?php
session_start();

ini_set('display_errors', 0);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

try {

    if(!isset($_SESSION["user_id"])){
        echo json_encode([
            "success" => false,
            "message" => "Oturum bulunamadı."
        ], JSON_UNESCAPED_UNICODE);
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
        echo json_encode([
            "success" => false,
            "message" => "OpenAI API anahtarı bulunamadı."
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $input = json_decode(file_get_contents("php://input"), true);

    if(!is_array($input)){
        $input = [];
    }

    $topic = trim($input["topic"] ?? "");
    $videoType = trim($input["videoType"] ?? "YouTube Shorts");
    $tone = trim($input["tone"] ?? "Sakin, bilimsel ve anlaşılır");
    $duration = trim($input["duration"] ?? "45 saniye");
    $strategy = trim($input["strategy"] ?? "Standart");

    if($topic === ""){
        $topic = "Panik atak kalp krizi değildir";
    }

    $prompt = "
Sen Uzm. Dr. Özgür Özbebit için çalışan profesyonel bir YouTube içerik editörüsün.

Konu:
$topic

Video tipi:
$videoType

Ton:
$tone

Süre:
$duration

İçerik stratejisi:
$strategy

Aşağıdaki yapıda Türkçe, etik ve profesyonel bir YouTube içerik paketi üret:

1. YOUTUBE BAŞLIK ÖNERİLERİ
- 5 başlık üret.
- Tıklanabilir ama abartısız olsun.
- Sağlık reklamı gibi durmasın.

2. THUMBNAIL METNİ ÖNERİLERİ
- 5 kısa thumbnail metni üret.
- 2-5 kelime arası olsun.
- Korkutucu veya manipülatif olmasın.

3. YOUTUBE AÇIKLAMASI
- SEO uyumlu açıklama yaz.
- Uzm. Dr. Özgür Özbebit ismi geçsin.
- Bilgilendirme amaçlı olduğunu belirt.

4. HASHTAGLER
- 10 hashtag üret.

5. SHORTS SENARYOSU
- Giriş cümlesi
- Orta bölüm
- Kapanış
- Ekran yazıları

6. UZUN VİDEO AKIŞI
- Zaman damgalı bölüm planı üret.
- Süreye uygun olsun.

7. SABİTLENMİŞ YORUM
- İzleyiciyi etik biçimde bilgilendiren kısa yorum yaz.

8. CANVA / THUMBNAIL PROMPTU
- Turkuaz, beyaz, lacivert tonlarında kurumsal psikiyatri estetiği kullan.
- Korkutucu, dramatik, panik yaratan görsel isteme.
- Thumbnail tasarım promptu üret.

9. ETİK UYARI
- Tanı veya tedavi yerine geçmez.
- Kişisel değerlendirme için uzmana başvurulmalıdır.

10. STRATEJİYE ÖZEL EK PAKET

Eğer içerik stratejisi 'Viral Büyüme' ise ayrıca şunları üret:
- 10 viral ama etik başlık önerisi
- 5 thumbnail varyasyonu
- İlk 3 saniye hook cümleleri
- İzlenme süresini artıracak retention noktaları
- Yorum sabitleme önerisi
- Abone olmaya davet eden etik CTA
- Videonun ilk 10 saniyesinde söylenecek güçlü giriş

Eğer içerik stratejisi 'SEO Odaklı' ise ayrıca şunları üret:
- YouTube SEO başlığı
- 15 arama anahtar kelimesi
- Açıklama içinde kullanılacak SEO cümleleri
- Bölüm başlıkları
- YouTube arama niyetine uygun 5 soru başlığı

Eğer içerik stratejisi 'Hasta Eğitimi' ise ayrıca şunları üret:
- Hastanın anlayacağı sade açıklama
- Yanlış bilinen 5 nokta
- Ne zaman uzmana başvurmalı bölümü
- Aile/hasta yakını için kısa not
- Endişeyi artırmadan bilgilendiren özet

Eğer içerik stratejisi 'Uzman Marka Oluşturma' ise ayrıca şunları üret:
- Uzm. Dr. Özgür Özbebit markasını güçlendiren 5 içerik açısı
- Güven veren uzman dili önerileri
- Kurumsal ama sıcak kapanış cümleleri
- LinkedIn'e uyarlanabilecek kısa versiyon
- YouTube kanal serisi önerisi

Eğer içerik stratejisi 'Standart' ise:
- Sadece temel YouTube paketini üret.
- Gereksiz uzatma yapma.

Kurallar:
- Türkçe yaz.
- Tanı veya tedavi garantisi verme.
- Mucize, kesin çözüm, garanti tedavi gibi ifadeler kullanma.
- Korkutucu dil kullanma.
- Reklam dili kullanma.
- Hekim kimliğine uygun sade, güven veren ve bilimsel dil kullan.
- Kullanıcıya soru sorma.
- Ek sohbet cümlesi ekleme.
- Çıktıyı başlıklarla düzenli ver.
";

    $payload = [
        "model" => "gpt-4.1-mini",
        "input" => $prompt
    ];

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

    if($response === false){
        $curlError = curl_error($ch);
        curl_close($ch);

        echo json_encode([
            "success" => false,
            "message" => "OpenAI bağlantı hatası: " . $curlError
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $result = json_decode($response, true);

    if($httpCode < 200 || $httpCode >= 300){
        echo json_encode([
            "success" => false,
            "message" => "OpenAI API hata döndürdü.",
            "http_code" => $httpCode,
            "raw" => $result ?: $response
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $content = $result["output_text"] ?? "";

    if($content === "" && isset($result["output"][0]["content"][0]["text"])){
        $content = $result["output"][0]["content"][0]["text"];
    }

    if($content === ""){
        echo json_encode([
            "success" => false,
            "message" => "OpenAI cevap verdi ama içerik boş geldi.",
            "raw" => $result
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    echo json_encode([
        "success" => true,
        "content" => $content
    ], JSON_UNESCAPED_UNICODE);
    exit;

} catch(Throwable $e) {

    echo json_encode([
        "success" => false,
        "message" => "PHP hata yakaladı: " . $e->getMessage(),
        "file" => $e->getFile(),
        "line" => $e->getLine()
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
?>