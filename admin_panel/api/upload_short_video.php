<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

if(!isset($_SESSION["user_id"])){
    echo json_encode(["success"=>false,"message"=>"Oturum bulunamadı."], JSON_UNESCAPED_UNICODE);
    exit;
}

if(!isset($_FILES["video"])){
    echo json_encode(["success"=>false,"message"=>"Video dosyası gelmedi."], JSON_UNESCAPED_UNICODE);
    exit;
}

$root = realpath(__DIR__ . "/..");
$uploadDir = $root . "/uploads/videos";

if(!is_dir($uploadDir)){
    mkdir($uploadDir, 0755, true);
}

$file = $_FILES["video"];

if($file["error"] !== UPLOAD_ERR_OK){
    echo json_encode(["success"=>false,"message"=>"Yükleme hatası: ".$file["error"]], JSON_UNESCAPED_UNICODE);
    exit;
}

$ext = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));

if($ext !== "mp4"){
    echo json_encode(["success"=>false,"message"=>"Sadece MP4 video yüklenebilir."], JSON_UNESCAPED_UNICODE);
    exit;
}

$maxSize = 300 * 1024 * 1024;

if($file["size"] > $maxSize){
    echo json_encode(["success"=>false,"message"=>"Video çok büyük. En fazla 300 MB yükleyebilirsin."], JSON_UNESCAPED_UNICODE);
    exit;
}

$newName = "short_" . date("Ymd_His") . "_" . rand(1000,9999) . ".mp4";
$target = $uploadDir . "/" . $newName;

if(!move_uploaded_file($file["tmp_name"], $target)){
    echo json_encode(["success"=>false,"message"=>"Video kaydedilemedi."], JSON_UNESCAPED_UNICODE);
    exit;
}

$https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');
$scheme = $https ? "https" : "http";
$host = $_SERVER['HTTP_HOST'] ?? "";

echo json_encode([
    "success" => true,
    "message" => "Video başarıyla yüklendi.",
    "video_url" => $scheme . "://" . $host . "/uploads/videos/" . $newName,
    "video_path" => "uploads/videos/" . $newName,
    "file_name" => $newName
], JSON_UNESCAPED_UNICODE);
exit;