<?php
session_start();

if(!isset($_SESSION["user_id"])){
    header("Location: ../index.php");
    exit;
}

require_once "../config/database.php";

$draftCount = $pdo->query("SELECT COUNT(*) FROM content_projects WHERE status='draft'")->fetchColumn();
$approvedCount = $pdo->query("SELECT COUNT(*) FROM content_projects WHERE status='approved'")->fetchColumn();
$publishedCount = $pdo->query("SELECT COUNT(*) FROM content_projects WHERE status='published'")->fetchColumn();
$totalCount = $pdo->query("SELECT COUNT(*) FROM content_projects")->fetchColumn();

$monthlyTarget = 40;
?>

<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Özgür Özbebit Dijital İçerik Merkezi V8.7</title>

<style>
body{margin:0;font-family:Arial,sans-serif;background:#f3f8f8;color:#123}
.header{background:white;padding:20px 30px;border-bottom:1px solid #dbecec;display:flex;justify-content:space-between;align-items:center}
.logo{font-size:22px;font-weight:bold;color:#073b3a}
.badge{background:#d7f4f2;color:#078080;padding:8px 14px;border-radius:20px;font-weight:bold}
.layout{display:flex}
.sidebar{width:250px;padding:25px}
.menu a{display:block;background:white;padding:16px;margin-bottom:12px;border-radius:12px;text-decoration:none;color:#123;font-weight:bold}
.menu a.active{background:#078080;color:white}
.note{margin-top:25px;background:white;padding:18px;border-radius:12px;font-size:14px;line-height:1.5}
.main{flex:1;padding:25px}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:20px}
.stat{background:white;padding:20px;border-radius:14px;font-size:18px;font-weight:bold}
.stat span{float:right;font-size:28px}
.grid{display:grid;grid-template-columns:1fr 2fr;gap:20px}
.card{background:white;padding:22px;border-radius:14px;margin-bottom:20px}
input,select,textarea{width:100%;padding:13px;margin-top:8px;margin-bottom:15px;border:1px solid #cfe3e3;border-radius:10px;box-sizing:border-box}
button{background:#078080;color:white;border:0;padding:13px 18px;border-radius:10px;font-weight:bold;cursor:pointer}
button.secondary{background:#e6f3f3;color:#123}
.tags button{margin:5px;background:#e6f3f3;color:#123}
.output{min-height:260px;background:#fbffff;border:1px solid #dbecec;border-radius:12px;padding:18px;white-space:pre-wrap;line-height:1.6}
.quickLinks{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:20px}
.quickLinks a{background:#078080;color:white;text-decoration:none;padding:12px 16px;border-radius:10px;font-weight:bold}
.quickLinks a.secondary{background:#e6f3f3;color:#123}
</style>
</head>

<body>

<div class="header">
    <div class="logo">🧠 Özgür Özbebit Dijital İçerik Merkezi</div>
    <div>
        Hoş geldin, <?php echo htmlspecialchars($_SESSION["user_name"] ?? "Kullanıcı"); ?>
        <span class="badge">V8.7 Canlı</span>
    </div>
</div>

<div class="layout">

<div class="sidebar">
    <div class="menu">
        <a class="active" href="index.php">🤖 İçerik Üret</a>
        <a href="calendar.php">📅 İçerik Takvimi</a>
        <a href="planner_v87.php">🗓️ 30 Günlük Plan</a>
        <a href="drafts.php">📝 Taslaklar</a>
        <a href="image.php">🎨 Görsel Oluştur</a>
        <a href="youtube.php">📺 YouTube İçerikleri</a>
        <a href="blog.php">📰 Blog Yazıları</a>
        <a href="analytics.php">📊 Analitik</a>
        <a href="settings.php">⚙️ Ayarlar</a>
        <a href="../auth/logout.php">🚪 Çıkış</a>
    </div>

    <div class="note">
        <b>Güvenlik notu</b><br><br>
        Bu panel sağlık içeriklerinde tanı/tedavi vaadi vermeyen,
        bilgilendirici ve etik içerikler üretmek için kullanılacaktır.
    </div>
</div>

<div class="main">

<div class="stats">
    <div class="stat">📅 Taslak <span><?php echo $draftCount; ?></span></div>
    <div class="stat">✅ Onaylanan <span><?php echo $approvedCount; ?></span></div>
    <div class="stat">📱 Yayınlanan <span><?php echo $publishedCount; ?></span></div>
    <div class="stat">📦 Toplam <span><?php echo $totalCount; ?></span></div>
</div>

<div class="quickLinks">
    <a href="planner_v87.php">🚀 30 Günlük Plan Motoru</a>
    <a href="drafts.php">📝 Taslaklar Merkezi</a>
    <a href="calendar.php" class="secondary">📅 İçerik Takvimi</a>
</div>

<div class="grid">

    <div class="card">
        <h2>Yeni içerik üret</h2>

        <label>Konu başlığı</label>
        <input id="topic" placeholder="Örn: Panik atak kalp krizi değildir">

        <label>İçerik serisi</label>
        <select id="series">
            <option>Depresyonu Anlamak</option>
            <option>Anksiyete ve Panik</option>
            <option>OKB Gerçekleri</option>
            <option>DEHB Farkındalığı</option>
            <option>Bipolar Bozukluk</option>
            <option>Uyku ve Ruh Sağlığı</option>
        </select>

        <label>Ton</label>
        <select id="tone">
            <option>Sakin, bilimsel ve anlaşılır</option>
            <option>Kısa ve sosyal medya dostu</option>
            <option>Profesyonel LinkedIn dili</option>
            <option>Hasta yakınına açıklayıcı</option>
        </select>

        <button onclick="generateContent()">1 konu → 10 içerik üret</button>
        <button class="secondary" onclick="fillExample()">Örnek doldur</button>
    </div>

    <div class="card">
        <h2>Hazır psikiyatri şablonları</h2>
        <div class="tags">
            <button onclick="setTopic('Depresyon tembellik değildir')">Depresyon</button>
            <button onclick="setTopic('Anksiyete kontrol edilebilir')">Anksiyete</button>
            <button onclick="setTopic('OKB sadece temizlik değildir')">OKB</button>
            <button onclick="setTopic('DEHB erişkinlerde de görülür')">DEHB</button>
            <button onclick="setTopic('Bipolar bozuklukta düzenli takip önemlidir')">Bipolar</button>
            <button onclick="setTopic('Uyku ruh sağlığının temelidir')">Uyku</button>
            <button onclick="setTopic('Panik atak kalp krizi değildir')">Panik Atak</button>
        </div>
    </div>

</div>

<div class="card">
    <h2>Üretilen içerik paketi</h2>
    <div id="output" class="output">İçerik üretildiğinde burada görünecek...</div>
    <br>
    <button onclick="saveDraft()">Taslak olarak kaydet</button>
</div>

</div>
</div>

<script>
function setTopic(text){
    document.getElementById("topic").value = text;
}

function fillExample(){
    document.getElementById("topic").value = "Panik atak kalp krizi değildir";
}

async function readJsonSafely(response){
    const text = await response.text();

    if(!text || text.trim() === ""){
        throw new Error("Sunucudan boş cevap geldi.");
    }

    try{
        return JSON.parse(text);
    }catch(e){
        throw new Error("JSON olmayan cevap geldi:\n\n" + text.substring(0, 1000));
    }
}

async function generateContent(){
    const topic = document.getElementById("topic").value || "Panik atak kalp krizi değildir";
    const series = document.getElementById("series").value || "";
    const tone = document.getElementById("tone").value || "";
    const output = document.getElementById("output");

    output.innerText = "GPT içerik üretiyor, lütfen bekleyin...";

    try{
        const response = await fetch("../api/generate.php", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                topic: topic,
                series: series,
                tone: tone
            })
        });

        const data = await readJsonSafely(response);

        if(data.success && data.content){
            output.innerText = data.content;
        }else{
            output.innerText = JSON.stringify(data, null, 2);
        }

    }catch(error){
        output.innerText = "Bağlantı hatası: " + error.message;
    }
}

async function saveDraft(){
    const title = document.getElementById("topic").value || "İsimsiz İçerik";
    const content = document.getElementById("output").innerText || "";

    if(content.trim() === "" || content.includes("İçerik üretildiğinde")){
        alert("Kaydedilecek içerik yok.");
        return;
    }

    try{
        const response = await fetch("../api/save_content.php", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: title,
                content: content
            })
        });

        const data = await readJsonSafely(response);

        if(data.success){
            alert("Taslak kaydedildi. ID: " + data.project_id);
            location.reload();
        }else{
            alert("Kayıt hatası: " + JSON.stringify(data));
        }

    }catch(error){
        alert("Bağlantı hatası: " + error.message);
    }
}
</script>

</body>
</html>