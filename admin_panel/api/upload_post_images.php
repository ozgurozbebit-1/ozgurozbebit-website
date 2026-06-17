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

if(!isset($_FILES["images"])){
    out(["success"=>false, "message"=>"Görsel dosyaları gelmedi."]);
}

$uploadDir = __DIR__ . "/../uploads/posts/";

if(!is_dir($uploadDir)){
    mkdir($uploadDir, 0755, true);
}

$allowed = ["image/jpeg", "image/png", "image/webp"];
$results = [];

$count = count($_FILES["images"]["name"]);

for($i=0; $i<$count; $i++){

    if($_FILES["images"]["error"][$i] !== UPLOAD_ERR_OK){
        $results[] = [
            "success" => false,
            "name" => $_FILES["images"]["name"][$i],
            "message" => "Upload hatası: ".$_FILES["images"]["error"][$i]
        ];
        continue;
    }

    $tmp = $_FILES["images"]["tmp_name"][$i];
    $originalName = $_FILES["images"]["name"][$i];

    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = finfo_file($finfo, $tmp);
    finfo_close($finfo);

    if(!in_array($mime, $allowed)){
        $results[] = [
            "success" => false,
            "name" => $originalName,
            "message" => "Instagram uyumu için JPG, PNG veya WEBP yükle. MIME: ".$mime
        ];
        continue;
    }

    if($mime === "image/jpeg"){
        $src = imagecreatefromjpeg($tmp);
    }elseif($mime === "image/png"){
        $src = imagecreatefrompng($tmp);
    }elseif($mime === "image/webp"){
        $src = imagecreatefromwebp($tmp);
    }else{
        $src = false;
    }

    if(!$src){
        $results[] = [
            "success" => false,
            "name" => $originalName,
            "message" => "Görsel işlenemedi."
        ];
        continue;
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

    $filename = "post_" . date("Ymd_His") . "_" . rand(1000,9999) . "_" . $i . ".jpg";
    $target = $uploadDir . $filename;

    if(!imagejpeg($dst, $target, 85)){
        imagedestroy($src);
        imagedestroy($dst);

        $results[] = [
            "success" => false,
            "name" => $originalName,
            "message" => "JPG kaydedilemedi."
        ];
        continue;
    }

    imagedestroy($src);
    imagedestroy($dst);

    $url = "https://admin.ozgurozbebit.com.tr/uploads/posts/" . $filename;

    $results[] = [
        "success" => true,
        "name" => $originalName,
        "image_url" => $url,
        "mime" => $mime
    ];
}

$successful = array_values(array_filter($results, function($r){
    return !empty($r["success"]) && !empty($r["image_url"]);
}));

out([
    "success" => count($successful) > 0,
    "message" => count($successful)." görsel başarıyla yüklendi.",
    "images" => $successful,
    "results" => $results
]);