<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

echo "<pre>";

echo "PHP çalışıyor ✅\n\n";

echo "shell_exec durumu:\n";
if(function_exists("shell_exec")){
    echo "shell_exec var ✅\n\n";
} else {
    echo "shell_exec yok ❌\n\n";
}

echo "exec durumu:\n";
if(function_exists("exec")){
    echo "exec var ✅\n\n";
} else {
    echo "exec yok ❌\n\n";
}

echo "FFmpeg test:\n";
$output = shell_exec("ffmpeg -version 2>&1");
var_dump($output);

echo "\nWhich ffmpeg:\n";
$which = shell_exec("which ffmpeg 2>&1");
var_dump($which);

echo "\n/usr/bin/ffmpeg test:\n";
$usr = shell_exec("/usr/bin/ffmpeg -version 2>&1");
var_dump($usr);

echo "\n/usr/local/bin/ffmpeg test:\n";
$local = shell_exec("/usr/local/bin/ffmpeg -version 2>&1");
var_dump($local);

echo "</pre>";