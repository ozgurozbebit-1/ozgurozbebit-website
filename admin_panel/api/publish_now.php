<?php
session_start();

require_once "../config/database.php";
require_once "linkedin_publish.php";

header("Content-Type: application/json; charset=utf-8");

function jsonOut($arr){
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    exit;
}

function curlPost($url, $data, $headers = []){
    $ch = curl_init($url);

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $data,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_TIMEOUT => 90
    ]);

    $response = curl_exec($ch);
    $error = curl_error($ch);
    $http = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    curl_close($ch);

    return [
        "http" => $http,
        "response" => $response,
        "error" => $error,
        "json" => json_decode($response, true)
    ];
}

function curlGet($url){
    $ch = curl_init($url);

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 60
    ]);

    $response = curl_exec($ch);
    $error = curl_error($ch);
    $http = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    curl_close($ch);

    return [
        "http" => $http,
        "response" => $response,
        "error" => $error,
        "json" => json_decode($response, true)
    ];
}

function instagramPublishImage($pdo, $postText, $imageUrl){
    if($imageUrl === ""){
        throw new Exception("Instagram için image_url zorunlu.");
    }

    $stmt = $pdo->prepare("
        SELECT *
        FROM social_accounts
        WHERE platform='facebook'
        AND (status='active' OR status=1)
        ORDER BY id DESC
        LIMIT 1
    ");
    $stmt->execute();
    $fb = $stmt->fetch(PDO::FETCH_ASSOC);

    if(!$fb){
        throw new Exception("Instagram için aktif Facebook hesabı bulunamadı.");
    }

    $pageId = $fb["page_id"] ?? "";
    $pageToken =
        $fb["page_access_token"]
        ?? $fb["page_token"]
        ?? "";

    if(!$pageId || !$pageToken){
        throw new Exception("Instagram için Facebook page_id veya page_token eksik.");
    }

    $pageUrl = "https://graph.facebook.com/v23.0/" . $pageId .
        "?fields=instagram_business_account{id,username}" .
        "&access_token=" . urlencode($pageToken);

    $pageRes = curlGet($pageUrl);

    $igId = $pageRes["json"]["instagram_business_account"]["id"] ?? "";

    if(!$igId){
        throw new Exception("Instagram Business ID alınamadı: " . ($pageRes["response"] ?: $pageRes["error"]));
    }

    $containerUrl = "https://graph.facebook.com/v23.0/" . $igId . "/media";

    $containerRes = curlPost($containerUrl, [
        "image_url" => $imageUrl,
        "caption" => $postText,
        "access_token" => $pageToken
    ]);

    if($containerRes["http"] < 200 || $containerRes["http"] >= 300){
        throw new Exception("Instagram container HTTP ".$containerRes["http"]." - ".($containerRes["response"] ?: $containerRes["error"]));
    }

    $creationId = $containerRes["json"]["id"] ?? "";

    if(!$creationId){
        throw new Exception("Instagram media container oluşturulamadı: " . ($containerRes["response"] ?: $containerRes["error"]));
    }

    sleep(8);

    $publishUrl = "https://graph.facebook.com/v23.0/" . $igId . "/media_publish";

    $publishRes = curlPost($publishUrl, [
        "creation_id" => $creationId,
        "access_token" => $pageToken
    ]);

    if($publishRes["http"] < 200 || $publishRes["http"] >= 300){
        throw new Exception("Instagram publish HTTP ".$publishRes["http"]." - ".($publishRes["response"] ?: $publishRes["error"]));
    }

    $postId = $publishRes["json"]["id"] ?? "";

    if(!$postId){
        throw new Exception("Instagram post ID alınamadı: " . ($publishRes["response"] ?: $publishRes["error"]));
    }

    return $postId;
}

$jobId = intval($_POST["job_id"] ?? $_GET["job_id"] ?? 0);

if($jobId <= 0){
    jsonOut(["success"=>false, "message"=>"job_id eksik"]);
}

$stmt = $pdo->prepare("SELECT * FROM publish_jobs WHERE id=? LIMIT 1");
$stmt->execute([$jobId]);
$job = $stmt->fetch(PDO::FETCH_ASSOC);

if(!$job){
    jsonOut(["success"=>false, "message"=>"Yayın işi bulunamadı"]);
}

$platform = strtolower(trim($job["platform"] ?? ""));
$postText = trim($job["post_text"] ?? "");
$imageUrl = trim($job["image_url"] ?? "");

if($platform === ""){
    jsonOut(["success"=>false, "message"=>"Platform boş"]);
}

if($postText === ""){
    jsonOut(["success"=>false, "message"=>"Post metni boş"]);
}

if($platform !== "instagram"){
    $stmt = $pdo->prepare("
        SELECT *
        FROM social_accounts
        WHERE platform=? 
        AND (status='active' OR status=1)
        ORDER BY id DESC
        LIMIT 1
    ");
    $stmt->execute([$platform]);
    $account = $stmt->fetch(PDO::FETCH_ASSOC);

    if(!$account){
        jsonOut(["success"=>false, "message"=>"Bu platform için aktif hesap yok: ".$platform]);
    }
}else{
    $account = null;
}

$pdo->prepare("
    UPDATE publish_jobs
    SET status='publishing', error_message=NULL
    WHERE id=?
")->execute([$jobId]);

try {

    if($platform === "facebook"){

        $pageId = $account["page_id"] ?? "";
        $token = $account["page_token"] ?? "";

        if(!$pageId || !$token){
            throw new Exception("Facebook page_id veya page_token eksik.");
        }

        if($imageUrl){
            $url = "https://graph.facebook.com/v20.0/".$pageId."/photos";
            $data = [
                "url" => $imageUrl,
                "caption" => $postText,
                "access_token" => $token
            ];
        } else {
            $url = "https://graph.facebook.com/v20.0/".$pageId."/feed";
            $data = [
                "message" => $postText,
                "access_token" => $token
            ];
        }

        $res = curlPost($url, $data);

        if($res["http"] < 200 || $res["http"] >= 300){
            throw new Exception("Facebook HTTP ".$res["http"]." - ".($res["response"] ?: $res["error"]));
        }

        $postId = $res["json"]["id"] ?? "";

        $pdo->prepare("
            UPDATE publish_jobs
            SET status='published', platform_post_id=?, published_at=NOW()
            WHERE id=?
        ")->execute([$postId, $jobId]);

        jsonOut(["success"=>true, "message"=>"Facebook yayını başarılı", "post_id"=>$postId]);
    }

    if($platform === "linkedin"){

        $token = $account["access_token"] ?? "";
        $author = $account["account_id"] ?? "";

        if(!$token || !$author){
            throw new Exception("LinkedIn access_token veya account_id eksik.");
        }

        if($imageUrl !== ""){
            $postId = linkedinPublishImage($token, $author, $postText, $imageUrl);
        }else{
            $postId = linkedinPublishText($token, $author, $postText);
        }

        $pdo->prepare("
            UPDATE publish_jobs
            SET status='published', platform_post_id=?, published_at=NOW()
            WHERE id=?
        ")->execute([$postId, $jobId]);

        jsonOut(["success"=>true, "message"=>"LinkedIn yayını başarılı", "post_id"=>$postId]);
    }

    if($platform === "instagram"){

        $postId = instagramPublishImage($pdo, $postText, $imageUrl);

        $pdo->prepare("
            UPDATE publish_jobs
            SET status='published', platform_post_id=?, published_at=NOW()
            WHERE id=?
        ")->execute([$postId, $jobId]);

        jsonOut(["success"=>true, "message"=>"Instagram yayını başarılı", "post_id"=>$postId]);
    }

    if($platform === "x"){

        $token = $account["access_token"] ?? "";

        if(!$token){
            throw new Exception("X access_token eksik.");
        }

        $url = "https://api.twitter.com/2/tweets";

        $payload = [
            "text" => $postText
        ];

        $res = curlPost(
            $url,
            json_encode($payload, JSON_UNESCAPED_UNICODE),
            [
                "Authorization: Bearer ".$token,
                "Content-Type: application/json"
            ]
        );

        if($res["http"] < 200 || $res["http"] >= 300){
            throw new Exception("X HTTP ".$res["http"]." - ".($res["response"] ?: $res["error"]));
        }

        $postId = $res["json"]["data"]["id"] ?? "";

        $pdo->prepare("
            UPDATE publish_jobs
            SET status='published', platform_post_id=?, published_at=NOW()
            WHERE id=?
        ")->execute([$postId, $jobId]);

        jsonOut(["success"=>true, "message"=>"X yayını başarılı", "post_id"=>$postId]);
    }

    throw new Exception("Desteklenmeyen platform: ".$platform);

} catch(Exception $e){

    $pdo->prepare("
        UPDATE publish_jobs
        SET status='failed', error_message=?
        WHERE id=?
    ")->execute([$e->getMessage(), $jobId]);

    jsonOut([
        "success"=>false,
        "message"=>"Yayın başarısız",
        "error"=>$e->getMessage()
    ]);
}