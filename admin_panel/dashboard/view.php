<?php
session_start();

if(!isset($_SESSION["user_id"])){
    header("Location: ../index.php");
    exit;
}

require_once "../config/database.php";

$id = intval($_GET["id"] ?? 0);

$stmt = $pdo->prepare("
SELECT *
FROM content_projects
WHERE id = ?
LIMIT 1
");

$stmt->execute([$id]);
$item = $stmt->fetch(PDO::FETCH_ASSOC);

if(!$item){
    die("İçerik bulunamadı.");
}
?>

<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>İçerik Görüntüle</title>

<style>
body{margin:0;font-family:Arial,sans-serif;background:#f3f8f8;color:#123}
.header{background:white;padding:20px 30px;border-bottom:1px solid #dbecec;display:flex;justify-content:space-between;align-items:center}
.logo{font-size:22px;font-weight:bold;color:#073b3a}
.badge{background:#d7f4f2;color:#078080;padding:8px 14px;border-radius:20px;font-weight:bold}
.layout{display:flex}
.sidebar{width:250px;padding:25px}
.menu a{display:block;background:white;padding:16px;margin-bottom:12px;border-radius:12px;text-decoration:none;color:#123;font-weight:bold}
.menu a.active{background:#078080;color:white}
.main{flex:1;padding:25px}
.card{background:white;padding:22px;border-radius:14px;margin-bottom:20px}
.content{white-space:pre-wrap;line-height:1.7;background:#fbffff;border:1px solid #dbecec;border-radius:12px;padding:18px}
.btn{display:inline-block;background:#078080;color:white;padding:10px 14px;border-radius:8px;text-decoration:none;font-weight:bold;margin-right:8px}
</style>
</head>

<body>

<div class="header">
    <div class="logo">📄 İçerik Detayı</div>
    <div>
        Hoş geldin, <?php echo htmlspecialchars($_SESSION["user_name"]); ?>
        <span class="badge">V5.1</span>
    </div>
</div>

<div class="layout">

<div class="sidebar">
    <div class="menu">
        <a href="index.php">🤖 İçerik Üret</a>
        <a class="active" href="calendar.php">📅 İçerik Takvimi</a>
        <a href="#">🎨 Görsel Oluştur</a>
        <a href="#">📺 YouTube İçerikleri</a>
        <a href="#">📰 Blog Yazıları</a>
        <a href="#">📊 Analitik</a>
        <a href="#">⚙️ Ayarlar</a>
        <a href="../auth/logout.php">🚪 Çıkış</a>
    </div>
</div>

<div class="main">

<div class="card">
    <h2><?php echo htmlspecialchars($item["title"]); ?></h2>
    <p><b>Durum:</b> <?php echo htmlspecialchars($item["status"]); ?></p>
    <p><b>Tarih:</b> <?php echo htmlspecialchars($item["created_at"]); ?></p>

    <a class="btn" href="calendar.php">← Listeye dön</a>
</div>

<div class="card">
    <h2>İçerik</h2>
    <button class="btn" onclick="copyContent()">📋 Tüm içeriği kopyala</button>
<br><br>

<div id="contentBox" class="content"><?php echo htmlspecialchars($item["topic"]); ?></div>
</div>

</div>
</div>
<script>
function copyContent(){
    const text = document.getElementById("contentBox").innerText;

    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);

    temp.select();
    temp.setSelectionRange(0, 999999);

    document.execCommand("copy");

    document.body.removeChild(temp);

    alert("İçerik panoya kopyalandı ✅");
}
</script>
</body>
</html>