<?php
session_start();

if(!isset($_SESSION["user_id"])){
    header("Location: ../index.php");
    exit;
}

require_once "../config/database.php";

$platform = $_POST["platform"] ?? "";
$post_text = trim($_POST["post_text"] ?? "");
$image_url = trim($_POST["image_url"] ?? "");

if($platform === "" || $post_text === ""){
    header("Location: ../dashboard/publish.php?error=empty");
    exit;
}

$stmt = $pdo->prepare("
    INSERT INTO publish_jobs 
    (platform, post_text, image_url, status, created_at)
    VALUES (?, ?, ?, 'pending', NOW())
");

$stmt->execute([
    $platform,
    $post_text,
    $image_url
]);

header("Location: ../dashboard/publish.php?success=job_created");
exit;