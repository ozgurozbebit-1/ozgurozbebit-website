<?php
session_start();

if(!isset($_SESSION["user_id"])){
    header("Location: ../index.php");
    exit;
}

require_once "../config/meta.php";

$scope = "pages_show_list,pages_manage_posts,pages_read_engagement,instagram_basic,instagram_content_publish";

$url = "https://www.facebook.com/v20.0/dialog/oauth?"
    . "client_id=" . urlencode(META_APP_ID)
    . "&redirect_uri=" . urlencode(META_REDIRECT_URI)
    . "&scope=" . urlencode($scope)
    . "&response_type=code"
    . "&auth_type=rerequest";

header("Location: " . $url);
exit;