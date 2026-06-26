<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

require_once "../config/database.php";

if(!isset($_SESSION["user_id"])){
    echo json_encode(["success"=>false,"message"=>"Oturum bulunamadı."], JSON_UNESCAPED_UNICODE);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);
if(!is_array($input)){ 
    $input = []; 
}

$topic = trim($input["topic"] ?? "");

if($topic === ""){
    echo json_encode(["success"=>false,"message"=>"Konu boş."], JSON_UNESCAPED_UNICODE);
    exit;
}

$like = "%" . $topic . "%";

$stmt = $pdo->prepare("
    SELECT id, topic, main_category, sub_category, platform, created_at
    FROM content_memory
    WHERE topic LIKE :like
       OR main_category LIKE :like
       OR sub_category LIKE :like
    ORDER BY created_at DESC
    LIMIT 10
");

$stmt->execute([":like" => $like]);
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

$first = $rows[0] ?? [];

$suggestionSeed = [
    "topic" => $topic,
    "main_category" => $first["main_category"] ?? "",
    "sub_category" => $first["sub_category"] ?? "",
    "matched_topic" => $first["topic"] ?? ""
];

echo json_encode([
    "success" => true,
    "topic" => $topic,
    "count" => count($rows),
    "matches" => $rows,
    "suggestion_seed" => $suggestionSeed
], JSON_UNESCAPED_UNICODE);

exit;