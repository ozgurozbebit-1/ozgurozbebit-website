<?php
header('Content-Type: application/json; charset=utf-8');
require_once "../config/database.php";

$data = json_decode(file_get_contents("php://input"), true);

$id = intval($data["id"] ?? 0);
$status = trim($data["status"] ?? "");

$allowed = ["draft", "approved", "published"];

if($id <= 0 || !in_array($status, $allowed)){
    echo json_encode(["success"=>false, "message"=>"Geçersiz istek"], JSON_UNESCAPED_UNICODE);
    exit;
}

$stmt = $pdo->prepare("UPDATE content_projects SET status=? WHERE id=?");
$stmt->execute([$status, $id]);

echo json_encode(["success"=>true], JSON_UNESCAPED_UNICODE);