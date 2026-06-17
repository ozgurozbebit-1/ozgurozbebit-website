<?php
session_start();

require_once "../config/publishing_strategy_engine.php";

ini_set('display_errors', 0);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

try {

    if (!isset($_SESSION["user_id"])) {
        echo json_encode([
            "success" => false,
            "message" => "Oturum bulunamadı."
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $input = json_decode(file_get_contents("php://input"), true);

    if (!is_array($input)) {
        $input = [];
    }

    $result = generatePublishingStrategy([
        "best_platform" => $input["best_platform"] ?? "",
        "best_score"    => $input["best_score"] ?? 0,
        "topic"         => $input["topic"] ?? "",
        "title"         => $input["title"] ?? ""
    ]);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

} catch (Throwable $e) {

    echo json_encode([
        "success" => false,
        "message" => "V21 yayın stratejisi oluşturulurken hata oluştu.",
        "error" => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}