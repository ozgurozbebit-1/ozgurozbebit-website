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

    require_once "../config/database.php";
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

    $plan_id = intval($input["id"] ?? $_POST["id"] ?? $_GET["id"] ?? 0);

    if($plan_id <= 0){
        echo json_encode([
            "success" => false,
            "message" => "Plan ID gelmedi."
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $stmt = $pdo->prepare("
        SELECT id, day_no, topic, format, status
        FROM content_planner
        WHERE id = ?
        LIMIT 1
    ");
    $stmt->execute([$plan_id]);
    $plan = $stmt->fetch(PDO::FETCH_ASSOC);

    if(!$plan){
        echo json_encode([
            "success" => false,
            "message" => "Plan bulunamadı."
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $topic  = trim($plan["topic"] ?? "");
    $format = trim($plan["format"] ?? "");
    $day_no = intval($plan["day_no"] ?? 0);

    if($topic === ""){
        echo json_encode([
            "success" => false,
            "message" => "Plan konusu boş."
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    if($format === ""){
        $format = "Instagram Post";
    }

    $prompt = "
Sen Uzm. Dr. Özgür Özbebit için çalışan profesyonel bir psikiyatri içerik editörüsün.

Gün: $day_no
Konu: $topic
Format: $format

Bu formata uygun tek bir profesyonel Türkçe içerik üret.

Format Shorts ise:
- Başlık
- 45 saniyelik konuşma metni
- Ekran yazıları
- Açıklama
- 5 etiket

Format Carousel ise:
- 6 slaytlık carousel metni
- Her slayt için başlık ve kısa açıklama
- Instagram açıklaması
- 5 hashtag

Format Reels ise:
- 30-45 saniyelik reels senaryosu
- Giriş, orta bölüm, kapanış
- Ekran yazıları

Format LinkedIn ise:
- Profesyonel LinkedIn yazısı
- 4-6 paragraf

Diğer formatlarda:
- Başlık
- 3-5 kısa paragraf
- 5 hashtag

Kurallar:
- Tanı veya tedavi garantisi verme.
- Korkutucu dil kullanma.
- Bilimsel, sade ve etik yaz.
- Reklam dili kullanma.
- Kesin çözüm, garanti tedavi, mucize gibi ifadeler kullanma.
- Ek sohbet cümlesi ekleme.
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

    $title = "Gün " . $day_no . " - " . $topic;
    $platform = $format;
    $status = "taslak";

    $insert = $pdo->prepare("
        INSERT INTO content_projects
        (title, content, platform, status, created_at)
        VALUES (?, ?, ?, ?, NOW())
    ");

    $insert->execute([
        $title,
        $content,
        $platform,
        $status
    ]);

    $project_id = $pdo->lastInsertId();

    $update = $pdo->prepare("
        UPDATE content_planner
        SET status = ?
        WHERE id = ?
    ");

    $update->execute([
        "üretildi",
        $plan_id
    ]);

    echo json_encode([
        "success" => true,
        "message" => "İçerik başarıyla üretildi ve taslak olarak kaydedildi.",
        "project_id" => $project_id,
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