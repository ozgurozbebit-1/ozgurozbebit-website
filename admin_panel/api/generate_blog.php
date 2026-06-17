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
    $audience = trim($input["audience"] ?? "Hasta ve hasta yakınları");
    $style = trim($input["style"] ?? "Sakin, bilimsel ve anlaşılır");
    $length = trim($input["length"] ?? "1500-2000 kelime");

    if($topic === ""){
        $topic = "Panik atak kalp krizi değildir";
    }

    $prompt = "
Sen Uzm. Dr. Özgür Özbebit için çalışan profesyonel bir SEO blog editörüsün.

Konu:
$topic

Hedef kitle:
$audience

Yazı stili:
$style

Uzunluk:
$length

Aşağıdaki yapıda Türkçe, SEO uyumlu, etik ve profesyonel bir blog içerik paketi üret:

1. SEO BAŞLIK
- Google aramalarına uygun, sade ve güven veren başlık üret.

2. META DESCRIPTION
- 150-160 karakter civarında meta açıklama yaz.

3. URL SLUG
- Türkçe karakter kullanmadan, kısa SEO slug üret.

4. ANAHTAR KELİMELER
- 10 anahtar kelime üret.

5. BLOG YAZISI
- H1 başlık
- Giriş
- En az 5 adet H2 ara başlık
- Gerekiyorsa H3 alt başlıklar
- Sonuç bölümü
- Okunabilir, sade ve bilimsel dil kullan.
- Tanı veya tedavi vaadi verme.
- Sağlık reklamı gibi yazma.

6. SIK SORULAN SORULAR
- Konuyla ilgili 5 soru-cevap üret.

7. GOOGLE SNIPPET ÖNERİSİ
- Google'da öne çıkan kısa cevap formatında 1 paragraf yaz.

8. LINKEDIN ÖZETİ
- Profesyonel ve kurumsal dilde kısa LinkedIn paylaşımı yaz.

9. INSTAGRAM ÖZETİ
- Sosyal medya dostu kısa açıklama ve 5 hashtag üret.

10. X PAYLAŞIMLARI
- 3 kısa X paylaşımı üret.

11. CANVA BLOG KAPAK PROMPTU
- Blog kapak görseli için turkuaz-beyaz-lacivert kurumsal psikiyatri estetiğinde prompt üret.

12. ETİK UYARI
- Bu yazının genel bilgilendirme amaçlı olduğunu ve tanı/tedavi yerine geçmediğini belirt.

Kurallar:
- Türkçe yaz.
- Korkutucu dil kullanma.
- Mucize, kesin çözüm, garanti tedavi gibi ifadeler kullanma.
- Uzm. Dr. Özgür Özbebit markasına uygun güven veren dil kullan.
- Kullanıcıya soru sorma.
- Ek sohbet cümlesi ekleme.
- Çıktıyı düzenli başlıklarla ver.
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