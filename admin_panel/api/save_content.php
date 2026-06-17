<?php

ini_set('display_errors',1);
error_reporting(E_ALL);

header('Content-Type: application/json');

require_once "../config/database.php";

$data = json_decode(file_get_contents("php://input"), true);

$title = trim($data["title"] ?? "");
$content = trim($data["content"] ?? "");

if($title==""){
    $title="İsimsiz İçerik";
}

$stmt = $pdo->prepare("
INSERT INTO content_projects
(title, topic, status)
VALUES
(?, ?, 'draft')
");

$stmt->execute([
    $title,
    $content
]);

$projectId = $pdo->lastInsertId();

echo json_encode([
    "success"=>true,
    "project_id"=>$projectId
]);