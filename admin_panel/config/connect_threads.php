<?php
session_start();

if(!isset($_SESSION["user_id"])){
    header("Location: ../index.php");
    exit;
}

require_once "../config/threads.php";

$scope = "threads_basic,threads_content_publish";

$url = THREADS_AUTH_URL . "?"
    . "client_id=" . urlencode(THREADS_APP_ID)
    . "&redirect_uri=" . urlencode(THREADS_REDIRECT_URI)
    . "&scope=" . urlencode($scope)
    . "&response_type=code";

header("Location: " . $url);
exit;