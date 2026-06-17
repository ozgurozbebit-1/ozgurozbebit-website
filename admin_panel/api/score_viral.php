<?php
session_start();

require_once "../config/viral_score_engine.php";

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

    $result = scoreViralPotential([
        "title"        => $input["title"] ?? "",
        "subtitle"     => $input["subtitle"] ?? "",
        "metaphor"     => $input["metaphor"] ?? "",
        "visual_style" => $input["visual_style"] ?? "",
        "topic"        => $input["topic"] ?? ""
    ]);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

} catch (Throwable $e) {

    echo json_encode([
        "success" => false,
        "message" => "V19 viral skoru hesaplanırken hata oluştu.",
        "error" => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}