<?php
session_start();

require_once "../config/database.php";

header("Content-Type: application/json; charset=utf-8");

function out($arr){
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);
if(!is_array($input)){ $input = []; }

$postText = trim($input["post_text"] ?? "");
$imageUrl = trim($input["image_url"] ?? "");

if($postText === ""){
    out(["success"=>false, "message"=>"Paylaşım metni boş."]);
}

$platforms = ["linkedin", "facebook", "x"];

$count = 0;

foreach($platforms as $platform){

    $stmt = $pdo->prepare("
        INSERT INTO publish_jobs
        (platform, post_text, image_url, status, created_at)
        VALUES
        (?, ?, ?, 'pending', NOW())
    ");

    $stmt->execute([
        $platform,
        $postText,
        $imageUrl
    ]);

    $count++;
}

out([
    "success"=>true,
    "message"=>"Yayın merkezine gönderildi.",
    "count"=>$count
]);