<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

if(!isset($_SESSION["user_id"])){
    echo json_encode([
        "success" => false,
        "message" => "Oturum bulunamadı."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$ffmpeg = "/opt/homebrew/bin/ffmpeg";

$root = realpath(__DIR__ . "/..");

$slideDir = $root . "/uploads/slideshows";
$videoDir = $root . "/uploads/videos";

if(!is_dir($slideDir)){
    mkdir($slideDir, 0775, true);
}

if(!is_dir($videoDir)){
    mkdir($videoDir, 0775, true);
}

$images = glob($slideDir . "/*.{jpg,jpeg,png,webp}", GLOB_BRACE);

if(!$images || count($images) === 0){
    echo json_encode([
        "success" => false,
        "message" => "uploads/slideshows klasöründe görsel bulunamadı."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

sort($images);

$listFile = $videoDir . "/slideshow_" . time() . ".txt";
$outputFile = $videoDir . "/short_" . time() . ".mp4";

$listContent = "";

foreach($images as $image){
    $safePath = str_replace("'", "'\\''", $image);
    $listContent .= "file '" . $safePath . "'\n";
    $listContent .= "duration 2.5\n";
}

$lastImage = end($images);
$safeLast = str_replace("'", "'\\''", $lastImage);
$listContent .= "file '" . $safeLast . "'\n";

file_put_contents($listFile, $listContent);

$cmd =
    escapeshellcmd($ffmpeg) .
    " -y -f concat -safe 0 -i " . escapeshellarg($listFile) .
    " -vf " . escapeshellarg(
        "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,format=yuv420p"
    ) .
    " -r 30 -c:v libx264 -pix_fmt yuv420p " .
    escapeshellarg($outputFile) .
    " 2>&1";

$result = shell_exec($cmd);

if(!file_exists($outputFile)){
    echo json_encode([
        "success" => false,
        "message" => "Video oluşturulamadı.",
        "debug" => $result,
        "cmd" => $cmd
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$videoUrl = "../uploads/videos/" . basename($outputFile);

echo json_encode([
    "success" => true,
    "message" => "Short video başarıyla oluşturuldu.",
    "video_url" => $videoUrl,
    "image_count" => count($images)
], JSON_UNESCAPED_UNICODE);
exit;