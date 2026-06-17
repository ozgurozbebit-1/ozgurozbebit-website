<?php

header('Content-Type: application/json; charset=utf-8');

require_once "../config/database.php";

try {

    $pdo->exec("DELETE FROM content_planner");

    $topics = [
        ["Panik atak kalp krizi değildir", "Carousel"],
        ["OKB sadece temizlik değildir", "Reels"],
        ["Depresyon tembellik değildir", "Blog"],
        ["DEHB erişkinlerde de görülür", "Shorts"],
        ["Uyku ruh sağlığının temelidir", "Carousel"],
        ["Anksiyete kontrol edilebilir", "Reels"],
        ["Bipolar bozukluk nedir", "Blog"],
        ["Çocuklarda özgüven gelişimi", "Carousel"],
        ["Stres yönetimi", "Reels"],
        ["Sosyal anksiyete nedir", "Shorts"],
        ["Travma sonrası stres belirtileri", "Carousel"],
        ["Dikkat eksikliği ve günlük yaşam", "Reels"],
        ["Panik atakta nefes darlığı neden olur", "Shorts"],
        ["İlaç tedavisi hakkında doğru bilinen yanlışlar", "Blog"],
        ["Psikiyatriste ne zaman başvurmalı", "Carousel"]
    ];

    for($i = 1; $i <= 30; $i++){

        $item = $topics[array_rand($topics)];

        $stmt = $pdo->prepare("
            INSERT INTO content_planner
            (day_no, topic, format)
            VALUES (?, ?, ?)
        ");

        $stmt->execute([
            $i,
            $item[0],
            $item[1]
        ]);
    }

    echo json_encode([
        "success" => true,
        "message" => "30 günlük içerik takvimi oluşturuldu"
    ], JSON_UNESCAPED_UNICODE);

} catch(Exception $e){

    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);

}