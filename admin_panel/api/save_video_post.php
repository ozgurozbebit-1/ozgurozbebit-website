<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

require_once "../config/database.php";

if(!isset($_SESSION["user_id"])){
    echo json_encode(["success"=>false,"message"=>"Oturum bulunamadı."], JSON_UNESCAPED_UNICODE);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);
if(!is_array($input)){ $input = []; }

$user_id = $_SESSION["user_id"];

$topic = trim($input["topic"] ?? "");
$selected_title = trim($input["selected_title"] ?? "");
$description = trim($input["description"] ?? "");
$hashtags = trim($input["hashtags"] ?? "");
$youtube_tags = trim($input["youtube_tags"] ?? "");
$pinned_comment = trim($input["pinned_comment"] ?? "");
$video_url = trim($input["video_url"] ?? "");
$video_path = trim($input["video_path"] ?? "");
$file_name = trim($input["file_name"] ?? "");

if($topic === ""){
    echo json_encode(["success"=>false,"message"=>"Konu boş olamaz."], JSON_UNESCAPED_UNICODE);
    exit;
}

if($video_url === ""){
    echo json_encode(["success"=>false,"message"=>"Video URL boş olamaz."], JSON_UNESCAPED_UNICODE);
    exit;
}

$stmt = $pdo->prepare("
    INSERT INTO video_posts
    (
        user_id,
        topic,
        selected_title,
        description,
        hashtags,
        youtube_tags,
        pinned_comment,
        video_url,
        video_path,
        file_name,
        platform,
        status
    )
    VALUES
    (
        :user_id,
        :topic,
        :selected_title,
        :description,
        :hashtags,
        :youtube_tags,
        :pinned_comment,
        :video_url,
        :video_path,
        :file_name,
        'youtube_shorts',
        'draft'
    )
");

$stmt->execute([
    ":user_id" => $user_id,
    ":topic" => $topic,
    ":selected_title" => $selected_title,
    ":description" => $description,
    ":hashtags" => $hashtags,
    ":youtube_tags" => $youtube_tags,
    ":pinned_comment" => $pinned_comment,
    ":video_url" => $video_url,
    ":video_path" => $video_path,
    ":file_name" => $file_name
]);

echo json_encode([
    "success" => true,
    "message" => "Video taslağı kaydedildi.",
    "video_post_id" => $pdo->lastInsertId()
], JSON_UNESCAPED_UNICODE);
exit;