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

    $stmt = $pdo->query("
        SELECT id, day_no, topic, format, status
        FROM content_planner
        WHERE status = 'planned'
        ORDER BY day_no ASC
    ");

    $plans = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if(count($plans) == 0){
        echo json_encode([
            "success" => false,
            "message" => "Üretilecek planned durumunda plan bulunamadı."
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $created = [];
    $errors = [];

    foreach($plans as $plan){

        $plan_id = intval($plan["id"]);
        $day_no  = intval($plan["day_no"]);
        $topic   = trim($plan["topic"] ?? "");
        $format  = trim($plan["format"] ?? "");

        if($topic === ""){
            $errors[] = "Gün {$day_no}: konu boş olduğu için atlandı.";
            continue;
        }

        if($format === ""){
            $format = "Instagram Post";
        }

        $prompt = "
Sen Uzm. Dr. Özgür Özbebit için çalışan profesyonel bir psikiyatri içerik editörüsün.

Bu içerik 30 günlük içerik planından otomatik üretilecek.

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
- Uzm. Dr. Özgür Özbebit markasına uygun güven veren ton kullan.
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
            $errors[] = "Gün {$day_no}: OpenAI bağlantı hatası: " . curl_error($ch);
            curl_close($ch);
            continue;
        }

        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        $result = json_decode($response, true);

        if($httpCode < 200 || $httpCode >= 300){
            $errors[] = "Gün {$day_no}: OpenAI API hata döndürdü. HTTP: {$httpCode}";
            continue;
        }

        $content = $result["output_text"] ?? "";

        if($content === "" && isset($result["output"][0]["content"][0]["text"])){
            $content = $result["output"][0]["content"][0]["text"];
        }

        if($content === ""){
            $errors[] = "Gün {$day_no}: OpenAI içerik boş döndürdü.";
            continue;
        }

        $title = "Gün " . $day_no . " - " . $topic;

        $insert = $pdo->prepare("
            INSERT INTO content_projects
            (title, content, platform, status, created_at)
            VALUES (?, ?, ?, ?, NOW())
        ");

        $insert->execute([
            $title,
            $content,
            $format,
            "draft"
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

        $created[] = [
            "day_no" => $day_no,
            "plan_id" => $plan_id,
            "project_id" => $project_id,
            "title" => $title
        ];

        usleep(300000);
    }

    echo json_encode([
        "success" => true,
        "message" => count($created) . " içerik üretildi ve taslaklara kaydedildi.",
        "created_count" => count($created),
        "error_count" => count($errors),
        "created" => $created,
        "errors" => $errors
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