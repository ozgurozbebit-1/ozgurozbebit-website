<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

if(!isset($_SESSION["user_id"])){
    echo json_encode(["success"=>false,"message"=>"Oturum bulunamadı."]);
    exit;
}

if(!isset($_FILES["video"])){
    echo json_encode(["success"=>false,"message"=>"Video dosyası gelmedi."]);
    exit;
}

$root = realpath(__DIR__ . "/..");
$uploadDir = $root . "/uploads/videos";

if(!is_dir($uploadDir)){
    mkdir($uploadDir, 0755, true);
}

$file = $_FILES["video"];

if($file["error"] !== UPLOAD_ERR_OK){
    echo json_encode(["success"=>false,"message"=>"Yükleme hatası: ".$file["error"]]);
    exit;
}

$ext = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));

if($ext !== "mp4"){
    echo json_encode(["success"=>false,"message"=>"Sadece MP4 video yüklenebilir."]);
    exit;
}

$newName = "short_" . time() . "_" . rand(1000,9999) . ".mp4";
$target = $uploadDir . "/" . $newName;

if(!move_uploaded_file($file["tmp_name"], $target)){
    echo json_encode(["success"=>false,"message"=>"Video kaydedilemedi."]);
    exit;
}

echo json_encode([
    "success"=>true,
    "message"=>"Video başarıyla yüklendi.",
    "video_url"=>"../uploads/videos/" . $newName
], JSON_UNESCAPED_UNICODE);
exit;