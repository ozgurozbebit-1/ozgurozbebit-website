<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

require_once "../config/database.php";

if(!isset($_SESSION["user_id"])){
    echo json_encode(["success"=>false,"message"=>"Oturum bulunamadı."]);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);
if(!is_array($input)){ $input = []; }

$topic = trim($input["topic"] ?? "");
$main_category = trim($input["main_category"] ?? "");
$sub_category = trim($input["sub_category"] ?? "");
$platform = trim($input["platform"] ?? "automation");

if($topic === ""){
    echo json_encode(["success"=>false,"message"=>"Konu boş."]);
    exit;
}

$content_hash = hash("sha256", mb_strtolower($topic, "UTF-8"));

$stmt = $pdo->prepare("
    INSERT INTO content_memory
    (topic, main_category, sub_category, platform, content_hash)
    VALUES
    (:topic, :main_category, :sub_category, :platform, :content_hash)
");

$stmt->execute([
    ":topic" => $topic,
    ":main_category" => $main_category,
    ":sub_category" => $sub_category,
    ":platform" => $platform,
    ":content_hash" => $content_hash
]);

echo json_encode([
    "success" => true,
    "message" => "İçerik hafızaya kaydedildi."
], JSON_UNESCAPED_UNICODE);
exit;