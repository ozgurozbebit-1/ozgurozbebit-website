<?php

session_start();

require_once "../config/linkedin.php";

$scope = LINKEDIN_SCOPE;

$url =
"https://www.linkedin.com/oauth/v2/authorization?"
. "response_type=code"
. "&client_id=" . urlencode(LINKEDIN_CLIENT_ID)
. "&redirect_uri=" . urlencode(LINKEDIN_REDIRECT_URI)
. "&scope=" . urlencode($scope);

header("Location: ".$url);
exit;