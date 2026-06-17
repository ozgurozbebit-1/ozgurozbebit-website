<?php
session_start();

require_once "../config/share_package_engine.php";

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

    $result = generateSharePackage([
        "platform" => $input["platform"] ?? "LinkedIn",
        "copy" => $input["copy"] ?? "",
        "cta" => $input["cta"] ?? "",
        "image_url" => $input["image_url"] ?? "",
        "recommended_time" => $input["recommended_time"] ?? "",
        "recommended_days" => $input["recommended_days"] ?? [],
        "recommended_format" => $input["recommended_format"] ?? "",
        "hashtags" => $input["hashtags"] ?? []
    ]);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

} catch (Throwable $e) {

    echo json_encode([
        "success" => false,
        "message" => "V23 paylaşım paketi oluşturulurken hata oluştu.",
        "error" => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}