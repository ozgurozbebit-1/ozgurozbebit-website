<?php
header('Content-Type: application/json; charset=utf-8');
require_once "../config/database.php";

$data = json_decode(file_get_contents("php://input"), true);
$id = intval($data["id"] ?? 0);

if($id <= 0){
    echo json_encode(["success"=>false, "message"=>"Geçersiz ID"], JSON_UNESCAPED_UNICODE);
    exit;
}

$stmt = $pdo->prepare("DELETE FROM content_projects WHERE id=?");
$stmt->execute([$id]);

echo json_encode(["success"=>true], JSON_UNESCAPED_UNICODE);