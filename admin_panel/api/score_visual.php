<?php
session_start();

require_once "../config/visual_quality_engine.php";

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

    $result = scoreVisualQuality([
        "title"        => $input["title"] ?? "",
        "subtitle"     => $input["subtitle"] ?? "",
        "image_prompt" => $input["image_prompt"] ?? "",
        "visual_style" => $input["visual_style"] ?? "",
        "metaphor"     => $input["metaphor"] ?? "",
        "has_logo"     => $input["has_logo"] ?? true,
        "has_footer"   => $input["has_footer"] ?? true,
        "has_overlay"  => $input["has_overlay"] ?? true
    ]);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

} catch (Throwable $e) {

    echo json_encode([
        "success" => false,
        "message" => "V18 kalite skoru hesaplanırken hata oluştu.",
        "error" => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}