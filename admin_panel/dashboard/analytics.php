<?php
session_start();
if(!isset($_SESSION["user_id"])){
    header("Location: ../index.php");
    exit;
}
require_once "../config/database.php";

$total = $pdo->query("SELECT COUNT(*) FROM content_projects")->fetchColumn();
$draft = $pdo->query("SELECT COUNT(*) FROM content_projects WHERE status='draft'")->fetchColumn();
$published = $pdo->query("SELECT COUNT(*) FROM content_projects WHERE status='published'")->fetchColumn();
$approved = $pdo->query("SELECT COUNT(*) FROM content_projects WHERE status='approved'")->fetchColumn();
?>

<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Analitik V13</title>
<style>
body{margin:0;font-family:Arial;background:#f3f8f8;color:#123}
.header{background:white;padding:20px 30px;border-bottom:1px solid #dbecec;display:flex;justify-content:space-between}
.logo{font-size:22px;font-weight:bold;color:#073b3a}
.badge{background:#d7f4f2;color:#078080;padding:8px 14px;border-radius:20px;font-weight:bold}
.layout{display:flex}.sidebar{width:250px;padding:25px}.main{flex:1;padding:25px}
.menu a{display:block;background:white;padding:16px;margin-bottom:12px;border-radius:12px;text-decoration:none;color:#123;font-weight:bold}
.menu a.active{background:#078080;color:white}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.stat{background:white;padding:25px;border-radius:14px;font-size:18px;font-weight:bold}
.stat span{float:right;font-size:30px;color:#078080}
.card{background:white;padding:22px;border-radius:14px;margin-top:20px}
</style>
</head>
<body>

<div class="header">
<div class="logo">📊 Analitik</div>
<div>Hoş geldin, <?php echo htmlspecialchars($_SESSION["user_name"] ?? "Kullanıcı"); ?> <span class="badge">V13</span></div>
</div>

<div class="layout">
<div class="sidebar">
<div class="menu">
<a href="index.php">🤖 İçerik Üret</a>
<a href="calendar.php">📅 İçerik Takvimi</a>
<a href="planner.php">🗓️ 30 Günlük Plan</a>
<a href="drafts.php">📝 Taslaklar</a>
<a href="image.php">🎨 Görsel Oluştur</a>
<a href="youtube.php">📺 YouTube İçerikleri</a>
<a href="blog.php">📰 Blog Yazıları</a>
<a class="active" href="analytics.php">📊 Analitik</a>
<a href="settings.php">⚙️ Ayarlar</a>
<a href="../auth/logout.php">🚪 Çıkış</a>
</div>
</div>

<div class="main">
<div class="stats">
<div class="stat">📦 Toplam <span><?php echo $total; ?></span></div>
<div class="stat">📅 Taslak <span><?php echo $draft; ?></span></div>
<div class="stat">✅ Onaylanan <span><?php echo $approved; ?></span></div>
<div class="stat">📱 Yayınlanan <span><?php echo $published; ?></span></div>
</div>

<div class="card">
<h2>Analitik Merkezi</h2>
<p>V13 ile temel içerik istatistikleri aktif. Sonraki sürümde platform bazlı dağılım, haftalık üretim grafiği ve performans takibi eklenecek.</p>
</div>
</div>
</div>

</body>
</html>