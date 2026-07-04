<?php
session_start();
if(!isset($_SESSION["user_id"])){
    header("Location: ../index.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Ayarlar V13</title>
<style>
body{margin:0;font-family:Arial;background:#f3f8f8;color:#123}
.header{background:white;padding:20px 30px;border-bottom:1px solid #dbecec;display:flex;justify-content:space-between}
.logo{font-size:22px;font-weight:bold;color:#073b3a}
.badge{background:#d7f4f2;color:#078080;padding:8px 14px;border-radius:20px;font-weight:bold}
.layout{display:flex}.sidebar{width:250px;padding:25px}.main{flex:1;padding:25px}
.menu a{display:block;background:white;padding:16px;margin-bottom:12px;border-radius:12px;text-decoration:none;color:#123;font-weight:bold}
.menu a.active{background:#078080;color:white}
.card{background:white;padding:22px;border-radius:14px;margin-bottom:20px}
input,textarea{width:100%;padding:13px;margin-top:8px;margin-bottom:15px;border:1px solid #cfe3e3;border-radius:10px;box-sizing:border-box}
button{background:#078080;color:white;border:0;padding:13px 18px;border-radius:10px;font-weight:bold}
</style>
</head>
<body>

<div class="header">
<div class="logo">⚙️ Ayarlar</div>
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
<a href="analytics.php">📊 Analitik</a>
<a class="active" href="settings.php">⚙️ Ayarlar</a>
<a href="../auth/logout.php">🚪 Çıkış</a>
</div>
</div>

<div class="main">
<div class="card">
<h2>Marka Ayarları</h2>
<label>Marka adı</label>
<input value="Uzm. Dr. Özgür Özbebit">

<label>Uzmanlık</label>
<input value="Psikiyatri Uzmanı">

<label>Renk paleti</label>
<input value="Turkuaz, beyaz, lacivert">

<label>Marka tonu</label>
<textarea>Sakin, bilimsel, güven veren, etik ve anlaşılır.</textarea>

<button>Kaydet</button>
</div>
</div>
</div>

</body>
</html>