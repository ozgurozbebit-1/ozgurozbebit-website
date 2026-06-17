<?php
session_start();

if(!isset($_SESSION["user_id"])){
    header("Location: ../index.php");
    exit;
}

require_once "../config/database.php";

$stmt = $pdo->query("
    SELECT id, day_no, topic, format, status, created_at
    FROM content_planner
    ORDER BY day_no ASC
");

$plans = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>30 Günlük İçerik Planı</title>

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
input,select,textarea{width:100%;padding:13px;margin-top:8px;margin-bottom:15px;border:1px solid #cfe3e3;border-radius:10px;box-sizing:border-box}
button{background:#078080;color:white;border:0;padding:13px 18px;border-radius:10px;font-weight:bold;cursor:pointer;margin-right:8px}
button.danger{background:#dc2626}
button.blue{background:#2563eb}
.output{min-height:220px;background:#fbffff;border:1px solid #dbecec;border-radius:12px;padding:18px;white-space:pre-wrap;line-height:1.6}
table{width:100%;border-collapse:collapse;background:white}
th,td{padding:14px;border-bottom:1px solid #e1eeee;text-align:left;vertical-align:top}
th{background:#eefafa}
.status{padding:6px 10px;border-radius:12px;background:#e6f3f3;font-weight:bold}
.smallBtn{padding:9px 12px;font-size:13px}
.copyBtn{background:#0f766e;margin-top:12px}
</style>
</head>

<body>

<div class="header">
    <div class="logo">🗓️ 30 Günlük İçerik Planlama Motoru</div>
    <div>
        Hoş geldin, <?php echo htmlspecialchars($_SESSION["user_name"] ?? "Kullanıcı"); ?>
        <span class="badge">V8.7</span>
    </div>
</div>

<div class="layout">

<div class="sidebar">
    <div class="menu">
        <a href="index.php">🤖 İçerik Üret</a>
        <a href="calendar.php">📅 İçerik Takvimi</a>
        <a class="active" href="planner.php">🗓️ 30 Günlük Plan</a>
        <a href="drafts.php">📝 Taslaklar</a>
        <a href="image.php">🎨 Görsel Oluştur</a>
        <a href="youtube.php">📺 YouTube İçerikleri</a>
        <a href="#">📰 Blog Yazıları</a>
        <a href="analytics.php">📊 Analitik</a>
        <a href="settings.php">⚙️ Ayarlar</a>
        <a href="../auth/logout.php">🚪 Çıkış</a>
    </div>
</div>

<div class="main">

<div class="card">
    <h2>30 Günlük Psikiyatri İçerik Planı Oluştur</h2>

    <label>Ana tema</label>
    <input id="theme" value="Psikiyatri, ruh sağlığı, farkındalık ve hasta bilgilendirme">

    <label>Hedef platform</label>
    <select id="platform">
        <option>Instagram, LinkedIn, X, Blog, Reels, YouTube Shorts</option>
        <option>Instagram ağırlıklı</option>
        <option>LinkedIn ağırlıklı</option>
        <option>Blog ve SEO ağırlıklı</option>
        <option>Reels ve Shorts ağırlıklı</option>
    </select>

    <label>Ton</label>
    <select id="tone">
        <option>Sakin, bilimsel ve anlaşılır</option>
        <option>Profesyonel ve kurumsal</option>
        <option>Hasta ve hasta yakınına açıklayıcı</option>
        <option>Kısa, net ve sosyal medya dostu</option>
    </select>

    <button onclick="generatePlan()">30 Günlük Plan Oluştur</button>
    <button onclick="createMonthlyPlan()" class="blue">🗓️ 30 Günlük Takvim Oluştur</button>
    <button onclick="generateAllPlans()">🚀 Tüm Planları Üret</button>
</div>

<div class="card">
    <h2>Üretilen İçerik / İşlem Sonucu</h2>
    <div id="output" class="output">Takvimden “İçeriği Üret” veya “Tüm Planları Üret” butonuna basınca sonuç burada görünecek...</div>
    <button class="copyBtn" onclick="copyGeneratedContent()">📋 İçeriği kopyala</button>
</div>

<div class="card">
    <h2>Oluşturulan 30 Günlük Takvim</h2>

    <?php if(count($plans) == 0): ?>
        <p>Henüz plan oluşturulmadı.</p>
    <?php else: ?>

    <table>
        <tr>
            <th>Gün</th>
            <th>Konu</th>
            <th>Format</th>
            <th>Durum</th>
            <th>İşlem</th>
        </tr>

        <?php foreach($plans as $plan): ?>
        <tr>
            <td><?php echo htmlspecialchars($plan["day_no"]); ?></td>
            <td><?php echo htmlspecialchars($plan["topic"]); ?></td>
            <td><?php echo htmlspecialchars($plan["format"]); ?></td>
            <td><span class="status"><?php echo htmlspecialchars($plan["status"]); ?></span></td>
            <td>
                <button class="smallBtn" onclick="generateFromPlan(<?php echo (int)$plan['id']; ?>)">
                    🚀 İçeriği Üret
                </button>
            </td>
        </tr>
        <?php endforeach; ?>
    </table>

    <?php endif; ?>
</div>

</div>
</div>

<script>
async function readJsonSafely(response){
    const text = await response.text();

    if(!text || text.trim() === ""){
        throw new Error("Sunucudan boş cevap geldi. PHP dosyasında fatal error olabilir.");
    }

    try{
        return JSON.parse(text);
    }catch(e){
        throw new Error("JSON olmayan cevap geldi:\n\n" + text.substring(0, 1500));
    }
}

async function generatePlan(){
    const theme = document.getElementById("theme").value;
    const platform = document.getElementById("platform").value;
    const tone = document.getElementById("tone").value;
    const output = document.getElementById("output");

    output.innerText = "30 günlük plan hazırlanıyor, lütfen bekleyin...";

    try{
        const response = await fetch("../api/generate.php", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                topic: "30 günlük içerik planı: " + theme + ". Platform: " + platform + ". Ton: " + tone,
                series: "30 Günlük İçerik Planı",
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
        alert("Bağlantı hatası: " + error.message);
    }
}

async function createMonthlyPlan(){
    const output = document.getElementById("output");

    if(!confirm("Yeni 30 günlük takvim oluşturulsun mu?")){
        return;
    }

    output.innerText = "30 günlük takvim veritabanına oluşturuluyor...";

    try{
        const response = await fetch("../api/create_plan.php", {
            method: "POST"
        });

        const data = await readJsonSafely(response);

        if(data.success){
            output.innerText = data.message + " ✅";
            alert(data.message);
            location.reload();
        }else{
            output.innerText = JSON.stringify(data, null, 2);
            alert("Hata: " + (data.message || "Bilinmeyen hata"));
        }

    }catch(error){
        output.innerText = "Bağlantı hatası: " + error.message;
        alert("Bağlantı hatası: " + error.message);
    }
}

async function generateFromPlan(id){
    if(!confirm("Bu içerik oluşturulup taslaklara kaydedilsin mi?")){
        return;
    }

    const output = document.getElementById("output");
    output.innerText = "İçerik oluşturuluyor ve taslaklara kaydediliyor...";

    try{
        const response = await fetch("../api/generate_from_plan.php", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id: id})
        });

        const data = await readJsonSafely(response);

        if(data.success){
            output.innerText =
                "✅ İçerik oluşturuldu ve taslaklara kaydedildi.\n\n" +
                "Taslak ID: " + data.project_id + "\n\n" +
                "-------------------------\n\n" +
                data.content;

            alert("İçerik oluşturuldu ve taslaklara kaydedildi ✅");
            location.reload();
        }else{
            output.innerText = JSON.stringify(data, null, 2);
            alert("Hata: " + (data.message || "Bilinmeyen hata"));
        }

    }catch(error){
        output.innerText = "Bağlantı hatası: " + error.message;
        alert("Bağlantı hatası: " + error.message);
    }
}

async function generateAllPlans(){
    if(!confirm("Planned durumundaki tüm içerikler üretilecek ve taslaklara kaydedilecek. Devam edilsin mi?")){
        return;
    }

    const output = document.getElementById("output");
    output.innerText = "Tüm planlar üretiliyor. Bu işlem birkaç dakika sürebilir...";

    try{
        const response = await fetch("../api/generate_all_plans.php", {
            method: "POST",
            headers: {"Content-Type": "application/json"}
        });

        const data = await readJsonSafely(response);

        if(data.success){
            output.innerText =
                "✅ " + data.message + "\n\n" +
                "Üretilen içerik sayısı: " + data.created_count + "\n" +
                "Hata sayısı: " + data.error_count + "\n\n" +
                JSON.stringify(data.created, null, 2);

            alert(data.message);
            location.reload();
        }else{
            output.innerText = JSON.stringify(data, null, 2);
            alert("Hata: " + (data.message || "Bilinmeyen hata"));
        }

    }catch(error){
        output.innerText = "Bağlantı hatası: " + error.message;
        alert("Bağlantı hatası: " + error.message);
    }
}

function copyGeneratedContent(){
    const text = document.getElementById("output").innerText;

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