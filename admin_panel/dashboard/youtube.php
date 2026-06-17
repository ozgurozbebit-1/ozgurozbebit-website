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
<title>YouTube İçerik Fabrikası V10</title>

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
button.secondary{background:#e6f3f3;color:#123}
.output{min-height:360px;background:#fbffff;border:1px solid #dbecec;border-radius:12px;padding:18px;white-space:pre-wrap;line-height:1.6}
.tip{background:#eefafa;padding:14px;border-radius:12px;line-height:1.6}
</style>
</head>

<body>

<div class="header">
    <div class="logo">📺 YouTube İçerik Fabrikası</div>
    <div>
        Hoş geldin, <?php echo htmlspecialchars($_SESSION["user_name"] ?? "Kullanıcı"); ?>
        <span class="badge">V10 Viral</span>
    </div>
</div>

<div class="layout">

<div class="sidebar">
    <div class="menu">
        <a href="index.php">🤖 İçerik Üret</a>
        <a href="calendar.php">📅 İçerik Takvimi</a>
        <a href="planner.php">🗓️ 30 Günlük Plan</a>
        <a href="drafts.php">📝 Taslaklar</a>
        <a href="image.php">🎨 Görsel Oluştur</a>
        <a class="active" href="youtube.php">📺 YouTube İçerikleri</a>
        <a href="#">📰 Blog Yazıları</a>
        <a href="analytics.php">📊 Analitik</a>
        <a href="settings.php">⚙️ Ayarlar</a>
        <a href="../auth/logout.php">🚪 Çıkış</a>
    </div>
</div>

<div class="main">

<div class="card">
    <h2>YouTube İçerik Paketi Üret</h2>

    <label>Konu</label>
    <input id="topic" placeholder="Örn: Panik atak kalp krizi değildir">

    <label>Video tipi</label>
    <select id="videoType">
        <option>YouTube Shorts</option>
        <option>Uzun Video</option>
        <option>Hasta Bilgilendirme Videosu</option>
        <option>Soru-Cevap Videosu</option>
        <option>Reels / Shorts Ortak Kullanım</option>
    </select>

    <label>Ton</label>
    <select id="tone">
        <option>Sakin, bilimsel ve anlaşılır</option>
        <option>Kısa, net ve dikkat çekici</option>
        <option>Profesyonel hekim dili</option>
        <option>Hasta ve hasta yakınına açıklayıcı</option>
    </select>

    <label>Süre</label>
    <select id="duration">
        <option>45 saniye</option>
        <option>60 saniye</option>
        <option>3 dakika</option>
        <option>5 dakika</option>
        <option>8-10 dakika</option>
    </select>

    <label>İçerik Stratejisi</label>
    <select id="strategy">
        <option>Standart</option>
        <option>Viral Büyüme</option>
        <option>SEO Odaklı</option>
        <option>Hasta Eğitimi</option>
        <option>Uzman Marka Oluşturma</option>
    </select>

    <button onclick="generateYoutubePackage()">🚀 V10 YouTube Paketi Üret</button>
    <button class="secondary" onclick="fillExample()">Örnek Doldur</button>
</div>

<div class="card">
    <h2>Üretilen YouTube Paketi</h2>
    <div id="output" class="output">YouTube içerik paketi burada görünecek...</div>
    <br>
    <button onclick="copyOutput()">📋 Paketi Kopyala</button>
</div>

<div class="card">
    <h2>Kullanım Notu</h2>
    <div class="tip">
        V10 Viral YouTube Motoru; başlık, thumbnail, SEO açıklama, hashtag, shorts senaryosu,
        video akışı, sabit yorum, Canva thumbnail promptu ve seçilen stratejiye göre büyüme önerileri üretir.
        Sağlık içeriklerinde tanı/tedavi garantisi, korkutucu dil ve mucize vaadi kullanılmamalıdır.
    </div>
</div>

</div>
</div>

<script>
function fillExample(){
    document.getElementById("topic").value = "Panik atak kalp krizi değildir";
}

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

async function generateYoutubePackage(){

    const topic = document.getElementById("topic").value || "Panik atak kalp krizi değildir";
    const videoType = document.getElementById("videoType").value;
    const tone = document.getElementById("tone").value;
    const duration = document.getElementById("duration").value;
    const strategy = document.getElementById("strategy").value;
    const output = document.getElementById("output");

    output.innerText = "🚀 V10 YouTube paketi OpenAI ile hazırlanıyor, lütfen bekleyin...";

    try{

        const response = await fetch("../api/generate_youtube.php",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                topic:topic,
                videoType:videoType,
                tone:tone,
                duration:duration,
                strategy:strategy
            })
        });

        const data = await readJsonSafely(response);

        if(data.success && data.content){

            output.innerText = data.content;

        }else{

            output.innerText =
                "Hata:\n\n" +
                JSON.stringify(data,null,2);

        }

    }catch(error){

        output.innerText =
            "Bağlantı hatası:\n\n" +
            error.message;

    }
}

function copyOutput(){
    const text = document.getElementById("output").innerText;

    if(text.trim() === "" || text.includes("YouTube içerik paketi burada")){
        alert("Kopyalanacak içerik yok.");
        return;
    }

    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    temp.setSelectionRange(0, 999999);
    document.execCommand("copy");
    document.body.removeChild(temp);

    alert("YouTube paketi panoya kopyalandı ✅");
}
</script>

</body>
</html>