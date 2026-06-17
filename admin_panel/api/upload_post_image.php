<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();

header("Content-Type: application/json; charset=utf-8");

function out($arr){
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    exit;
}

if(!isset($_SESSION["user_id"])){
    out(["success"=>false, "message"=>"Oturum bulunamadı."]);
}

if(!isset($_FILES["image"])){
    out(["success"=>false, "message"=>"Görsel dosyası gelmedi."]);
}

$file = $_FILES["image"];

if($file["error"] !== UPLOAD_ERR_OK){
    out(["success"=>false, "message"=>"Upload hatası: ".$file["error"]]);
}

$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime = finfo_file($finfo, $file["tmp_name"]);
finfo_close($finfo);

$allowed = ["image/jpeg", "image/png", "image/webp"];

if(!in_array($mime, $allowed)){
    out(["success"=>false, "message"=>"Instagram uyumu için JPG, PNG veya WEBP yükle. MIME: ".$mime]);
}

$uploadDir = __DIR__ . "/../uploads/posts/";

if(!is_dir($uploadDir)){
    mkdir($uploadDir, 0755, true);
}

$filename = "post_" . date("Ymd_His") . "_" . rand(1000,9999) . ".jpg";
$target = $uploadDir . $filename;

if($mime === "image/jpeg"){
    $src = imagecreatefromjpeg($file["tmp_name"]);
}elseif($mime === "image/png"){
    $src = imagecreatefrompng($file["tmp_name"]);
}elseif($mime === "image/webp"){
    $src = imagecreatefromwebp($file["tmp_name"]);
}else{
    out(["success"=>false, "message"=>"Görsel okunamadı."]);
}

if(!$src){
    out(["success"=>false, "message"=>"Görsel işlenemedi."]);
}

$w = imagesx($src);
$h = imagesy($src);

$max = 1350;

if($w >= $h){
    $newW = min($w, $max);
    $newH = intval($h * ($newW / $w));
}else{
    $newH = min($h, $max);
    $newW = intval($w * ($newH / $h));
}

$dst = imagecreatetruecolor($newW, $newH);

$white = imagecolorallocate($dst, 255, 255, 255);
imagefill($dst, 0, 0, $white);

imagecopyresampled($dst, $src, 0, 0, 0, 0, $newW, $newH, $w, $h);

if(!imagejpeg($dst, $target, 85)){
    out(["success"=>false, "message"=>"JPG kaydedilemedi."]);
}

imagedestroy($src);
imagedestroy($dst);

$url = "https://admin.ozgurozbebit.com.tr/uploads/posts/" . $filename;

out([
    "success" => true,
    "message" => "Görsel Instagram uyumlu JPG olarak yüklendi.",
    "image_url" => $url,
    "mime" => $mime,
    "converted" => true
]);