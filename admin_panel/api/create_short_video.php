<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();

header('Content-Type: application/json; charset=utf-8');

if(!isset($_SESSION["user_id"])){
    echo json_encode([
        "success" => false,
        "message" => "Oturum bulunamadı."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);
if(!is_array($input)){ $input = []; }

$imageUrl = trim($input["image_url"] ?? "");

if($imageUrl === ""){
    echo json_encode([
        "success" => false,
        "message" => "Görsel URL boş."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$rootDir = realpath(__DIR__ . "/..");

$videoDir = $rootDir . "/uploads/videos";
$tempDir  = $rootDir . "/uploads/temp";

if(!is_dir($videoDir)){
    mkdir($videoDir, 0755, true);
}

if(!is_dir($tempDir)){
    mkdir($tempDir, 0755, true);
}

$uniq = "short_" . date("Ymd_His") . "_" . bin2hex(random_bytes(4));

$tempImage = $tempDir . "/" . $uniq . ".jpg";
$outputVideo = $videoDir . "/" . $uniq . ".mp4";

function failJson($message){
    echo json_encode([
        "success" => false,
        "message" => $message
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

function getBaseUrl(){
    $https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');
    $scheme = $https ? "https" : "http";
    $host = $_SERVER['HTTP_HOST'] ?? "";
    return $scheme . "://" . $host;
}

function normalizeLocalPath($url, $rootDir){
    if(strpos($url, "http://") === 0 || strpos($url, "https://") === 0){
        $parts = parse_url($url);
        $path = $parts["path"] ?? "";
    } else {
        $path = $url;
    }

    $path = strtok($path, "?");
    $path = ltrim($path, "/");

    $fullPath = realpath($rootDir . "/" . $path);

    if($fullPath && file_exists($fullPath)){
        return $fullPath;
    }

    return null;
}

$localImagePath = normalizeLocalPath($imageUrl, $rootDir);

if($localImagePath){
    $tempImage = $localImagePath;
} else {
    $imageData = @file_get_contents($imageUrl);

    if($imageData === false || strlen($imageData) < 1000){
        failJson("Görsel indirilemedi.");
    }

    file_put_contents($tempImage, $imageData);
}

$ffmpeg = "ffmpeg";

$filter = "scale=1080:1920:force_original_aspect_ratio=increase,"
        . "crop=1080:1920,"
        . "zoompan=z='min(zoom+0.0015,1.12)':d=250:s=1080x1920:fps=25,"
        . "format=yuv420p";

function shellArgSafe($value){
    return "'" . str_replace("'", "'\\''", $value) . "'";
}

$cmd = $ffmpeg
    . " -y"
    . " -loop 1"
    . " -i " . shellArgSafe($tempImage)
    . " -t 10"
    . " -vf " . shellArgSafe($filter)
    . " -c:v libx264"
    . " -pix_fmt yuv420p"
    . " -movflags +faststart"
    . " " . shellArgSafe($outputVideo)
    . " 2>&1";

$output = [];
$returnCode = 0;
exec($cmd, $output, $returnCode);
echo "<pre>";
print_r($output);
echo "</pre>";
exit;

if($returnCode !== 0 || !file_exists($outputVideo)){
    echo json_encode([
        "success" => false,
        "message" => "Video oluşturulamadı.",
        "debug" => implode("\n", $output)
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$videoUrl = getBaseUrl() . "/uploads/videos/" . basename($outputVideo);

echo json_encode([
    "success" => true,
    "message" => "Short video oluşturuldu.",
    "video_url" => $videoUrl,
    "video_path" => "uploads/videos/" . basename($outputVideo)
], JSON_UNESCAPED_UNICODE);
exit;