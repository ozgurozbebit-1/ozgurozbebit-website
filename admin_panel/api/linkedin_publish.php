<?php

function linkedinCurl($url, $method, $headers = [], $body = null){
    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_TIMEOUT, 90);
    curl_setopt($ch, CURLOPT_HEADER, true);

    if($body !== null){
        curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
    }

    $raw = curl_exec($ch);
    $error = curl_error($ch);
    $http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);

    curl_close($ch);

    $rawHeaders = substr($raw, 0, $headerSize);
    $response = substr($raw, $headerSize);

    $headersOut = [];
    foreach(explode("\r\n", $rawHeaders) as $line){
        if(strpos($line, ":") !== false){
            [$k, $v] = explode(":", $line, 2);
            $headersOut[strtolower(trim($k))] = trim($v);
        }
    }

    return [
        "http" => $http,
        "response" => $response,
        "headers" => $headersOut,
        "error" => $error,
        "json" => json_decode($response, true)
    ];
}

function linkedinNormalizeAuthor($author){
    if(strpos($author, "urn:li:person:") !== 0 && strpos($author, "urn:li:organization:") !== 0){
        return "urn:li:person:" . $author;
    }
    return $author;
}

function linkedinPublishText($token, $author, $text){
    $author = linkedinNormalizeAuthor($author);

    $payload = [
        "author" => $author,
        "lifecycleState" => "PUBLISHED",
        "specificContent" => [
            "com.linkedin.ugc.ShareContent" => [
                "shareCommentary" => [
                    "text" => $text
                ],
                "shareMediaCategory" => "NONE"
            ]
        ],
        "visibility" => [
            "com.linkedin.ugc.MemberNetworkVisibility" => "PUBLIC"
        ]
    ];

    $res = linkedinCurl(
        "https://api.linkedin.com/v2/ugcPosts",
        "POST",
        [
            "Authorization: Bearer ".$token,
            "Content-Type: application/json",
            "X-Restli-Protocol-Version: 2.0.0"
        ],
        json_encode($payload, JSON_UNESCAPED_UNICODE)
    );

    if($res["http"] < 200 || $res["http"] >= 300){
        throw new Exception("LinkedIn text HTTP ".$res["http"]." - ".($res["response"] ?: $res["error"]));
    }

    return $res["json"]["id"] ?? ($res["headers"]["x-restli-id"] ?? "");
}

function linkedinPublishImage($token, $author, $text, $imageUrl){
    $author = linkedinNormalizeAuthor($author);

    $initPayload = [
        "initializeUploadRequest" => [
            "owner" => $author
        ]
    ];

    $init = linkedinCurl(
        "https://api.linkedin.com/rest/images?action=initializeUpload",
        "POST",
        [
            "Authorization: Bearer ".$token,
            "Content-Type: application/json",
            "LinkedIn-Version: 202506",
            "X-Restli-Protocol-Version: 2.0.0"
        ],
        json_encode($initPayload, JSON_UNESCAPED_UNICODE)
    );

    if($init["http"] < 200 || $init["http"] >= 300){
        throw new Exception("LinkedIn image init HTTP ".$init["http"]." - ".($init["response"] ?: $init["error"]));
    }

    $uploadUrl = $init["json"]["value"]["uploadUrl"] ?? "";
    $imageUrn = $init["json"]["value"]["image"] ?? "";

    if(!$uploadUrl || !$imageUrn){
        throw new Exception("LinkedIn image uploadUrl veya image URN alınamadı: ".$init["response"]);
    }

    $parsedPath = parse_url($imageUrl, PHP_URL_PATH);
    $localPath = $_SERVER["DOCUMENT_ROOT"] . $parsedPath;

    if($parsedPath && file_exists($localPath)){
        $imageBinary = file_get_contents($localPath);
    }else{
        $imageBinary = @file_get_contents($imageUrl);
    }

    if($imageBinary === false || strlen($imageBinary) < 100){
        throw new Exception("Görsel okunamadı: ".$imageUrl);
    }

    $upload = linkedinCurl(
        $uploadUrl,
        "PUT",
        [
            "Authorization: Bearer ".$token,
            "Content-Type: application/octet-stream"
        ],
        $imageBinary
    );

    if($upload["http"] < 200 || $upload["http"] >= 300){
        throw new Exception("LinkedIn image upload HTTP ".$upload["http"]." - ".($upload["response"] ?: $upload["error"]));
    }

    $postPayload = [
        "author" => $author,
        "commentary" => $text,
        "visibility" => "PUBLIC",
        "distribution" => [
            "feedDistribution" => "MAIN_FEED",
            "targetEntities" => [],
            "thirdPartyDistributionChannels" => []
        ],
        "content" => [
            "media" => [
                "id" => $imageUrn
            ]
        ],
        "lifecycleState" => "PUBLISHED",
        "isReshareDisabledByAuthor" => false
    ];

    $post = linkedinCurl(
        "https://api.linkedin.com/rest/posts",
        "POST",
        [
            "Authorization: Bearer ".$token,
            "Content-Type: application/json",
            "LinkedIn-Version: 202506",
            "X-Restli-Protocol-Version: 2.0.0"
        ],
        json_encode($postPayload, JSON_UNESCAPED_UNICODE)
    );

    if($post["http"] < 200 || $post["http"] >= 300){
        throw new Exception("LinkedIn image post HTTP ".$post["http"]." - ".($post["response"] ?: $post["error"]));
    }

    return
        $post["json"]["id"]
        ?? $post["json"]["value"]["id"]
        ?? $post["headers"]["x-restli-id"]
        ?? $imageUrn;
}