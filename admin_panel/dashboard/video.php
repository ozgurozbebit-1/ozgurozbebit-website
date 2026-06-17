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
<title>Short Video Merkezi V28.3</title>

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
input,textarea{width:100%;padding:13px;margin-top:8px;margin-bottom:15px;border:1px solid #cfe3e3;border-radius:10px;box-sizing:border-box}
button{background:#078080;color:white;border:0;padding:13px 18px;border-radius:10px;font-weight:bold;cursor:pointer;margin-right:8px;margin-bottom:8px}
button.smart{background:#8b5cf6;color:white}
.tip{background:#eefafa;padding:14px;border-radius:12px;line-height:1.6}
.output{min-height:220px;background:#fbffff;border:1px solid #dbecec;border-radius:12px;padding:18px;white-space:pre-wrap;line-height:1.6}
.download{display:inline-block;margin-top:12px;background:#078080;color:white;text-decoration:none;padding:12px 16px;border-radius:10px;font-weight:bold}
.titleGrid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:15px}
.titleOption{background:#fff;border:1px solid #dbecec;border-radius:12px;padding:14px;cursor:pointer;font-weight:bold}
.titleOption:hover{background:#eefafa}
.titleOption.active{border:2px solid #078080;background:#e9fbfa}
.selectedTitleBox{background:#f5f3ff;border:1px solid #ddd6fe;border-radius:12px;padding:14px;margin-top:15px;font-weight:bold;color:#4c1d95}

@media(max-width:900px){
    .layout{display:block}
    .sidebar{width:auto}
}
</style>
</head>

<body>

<div class="header">
    <div class="logo">🎬 Short Video Merkezi</div>
    <div>
        Hoş geldin, <?php echo htmlspecialchars($_SESSION["user_name"] ?? "Kullanıcı"); ?>
        <span class="badge">V28.3</span>
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
        <a class="active" href="video.php">🎬 Short Video Merkezi</a>
        <a href="youtube.php">📺 YouTube İçerikleri</a>
        <a href="blog.php">📰 Blog Yazıları</a>
        <a href="analytics.php">📊 Analitik</a>
        <a href="settings.php">⚙️ Ayarlar</a>
        <a href="../auth/logout.php">🚪 Çıkış</a>
    </div>
</div>

<div class="main">

<div class="card">
    <h2>🎬 V28.3 Akıllı Short Video Hazırlık Merkezi</h2>

    <div class="tip">
        MP4 videonu yükle. Sistem OpenAI ile YouTube Shorts paketi üretir. Alternatif başlıklardan birini tıklayarak seçebilirsin.
    </div>

    <br>

    <label>Video konusu</label>
    <input id="shortTopic" placeholder="Örn: Panik atak kalp krizi değildir">

    <label>MP4 Short Video Yükle</label>
    <input type="file" id="shortVideoFile" accept="video/mp4">

    <button type="button" onclick="uploadShortVideo()">📤 MP4 Yükle</button>
    <button type="button" class="smart" onclick="generateShortsPackage()">📺 Akıllı Shorts Paketi Hazırla</button>
    <button type="button" onclick="copyFinalPackage()">📋 Final Paketi Kopyala</button>

    <div id="shortVideoStatus" class="tip" style="margin-top:15px;">
        Henüz video yüklenmedi.
    </div>

    <div id="shortVideoPreview" style="margin-top:20px;"></div>
</div>

<div class="card">
    <h2>🎯 Başlık Seçim Sistemi</h2>
    <div id="selectedTitleBox" class="selectedTitleBox">
        Seçilen başlık henüz yok.
    </div>
    <div id="titleOptionsBox" class="titleGrid">
        Akıllı Shorts paketi üretildiğinde başlık seçenekleri burada görünecek.
    </div>
</div>

<div class="card">
    <h2>📺 YouTube Shorts Paketi</h2>
    <div id="shortsPackageResult" class="output">
        YouTube Shorts başlığı, açıklaması ve hashtagleri burada görünecek.
    </div>
</div>

<div class="card">
    <h2>Kullanım Notu</h2>
    <div class="tip">
        Videoyu Mac üzerinde FFmpeg ile oluşturup buraya MP4 olarak yükleyebilirsin. Sonraki aşamada bu paket YouTube Shorts yayınlama sistemine bağlanacak.
    </div>
</div>

</div>
</div>

<script>
let currentShortVideoUrl = "";
let currentShortsData = null;
let selectedShortsTitle = "";

function htmlEscape(text){
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

async function uploadShortVideo(){
    const fileInput = document.getElementById("shortVideoFile");
    const status = document.getElementById("shortVideoStatus");
    const preview = document.getElementById("shortVideoPreview");

    if(!fileInput.files || fileInput.files.length === 0){
        alert("Önce MP4 video seç.");
        return;
    }

    const formData = new FormData();
    formData.append("video", fileInput.files[0]);

    status.innerText = "📤 Video yükleniyor...";

    try{
        const response = await fetch("../api/upload_short_video.php",{
            method:"POST",
            body:formData
        });

        const text = await response.text();
        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            status.innerText =
                "JSON olmayan cevap geldi.\n\n" +
                "HTTP Status: " + response.status + "\n\n" +
                "RAW CEVAP:\n" + text.substring(0,3000);
            return;
        }

        if(data.success){
            currentShortVideoUrl = data.video_url;
            status.innerText = "✅ Video yüklendi.";

            preview.innerHTML = `
                <video controls style="width:100%;max-width:420px;border-radius:14px;">
                    <source src="${data.video_url}" type="video/mp4">
                </video>
                <br><br>
                <a class="download" href="${data.video_url}" download>⬇️ MP4 İndir</a>
            `;

            renderFinalPackage();
        }else{
            status.innerText = "❌ " + data.message;
        }

    }catch(error){
        status.innerText = "Bağlantı hatası: " + error.message;
    }
}

async function generateShortsPackage(){
    const topic = document.getElementById("shortTopic").value.trim();
    const box = document.getElementById("shortsPackageResult");
    const titleBox = document.getElementById("titleOptionsBox");
    const selectedBox = document.getElementById("selectedTitleBox");

    if(topic === ""){
        alert("Önce video konusu yaz.");
        return;
    }

    box.innerText = "🧠 Akıllı Shorts paketi hazırlanıyor...";
    titleBox.innerHTML = "Başlık seçenekleri hazırlanıyor...";
    selectedBox.innerText = "Seçilen başlık henüz yok.";

    try{
        const response = await fetch("../api/generate_shorts_package.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                topic:topic,
                video_url:currentShortVideoUrl
            })
        });

        const text = await response.text();
        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            box.innerText =
                "JSON olmayan cevap geldi.\n\n" +
                "HTTP Status: " + response.status + "\n\n" +
                "RAW CEVAP:\n" + text.substring(0,3000);
            return;
        }

        if(!data.success){
            box.innerText =
                "Shorts paketi üretilemedi:\n\n" +
                JSON.stringify(data,null,2);
            return;
        }

        currentShortsData = data;
        selectedShortsTitle = data.main_title || "";

        renderTitleOptions();
        renderFinalPackage();

    }catch(error){
        box.innerText = "Bağlantı hatası:\n\n" + error.message;
    }
}

function renderTitleOptions(){
    const titleBox = document.getElementById("titleOptionsBox");
    const selectedBox = document.getElementById("selectedTitleBox");

    if(!currentShortsData){
        titleBox.innerHTML = "Başlık verisi yok.";
        return;
    }

    const titles = Array.isArray(currentShortsData.title_options) ? currentShortsData.title_options : [];
    const allTitles = [];

    if(currentShortsData.main_title){
        allTitles.push(currentShortsData.main_title);
    }

    titles.forEach(function(t){
        if(t && !allTitles.includes(t)){
            allTitles.push(t);
        }
    });

    selectedBox.innerText = "✅ Seçilen Başlık: " + (selectedShortsTitle || "Henüz seçilmedi");

    let html = "";

    allTitles.forEach(function(title, index){
        const active = title === selectedShortsTitle ? " active" : "";
        html += `
            <div class="titleOption${active}" onclick="selectShortsTitle(${index})">
                ${index + 1}. ${htmlEscape(title)}
            </div>
        `;
    });

    titleBox.innerHTML = html || "Başlık seçeneği bulunamadı.";
}

function selectShortsTitle(index){
    if(!currentShortsData){
        return;
    }

    const titles = Array.isArray(currentShortsData.title_options) ? currentShortsData.title_options : [];
    const allTitles = [];

    if(currentShortsData.main_title){
        allTitles.push(currentShortsData.main_title);
    }

    titles.forEach(function(t){
        if(t && !allTitles.includes(t)){
            allTitles.push(t);
        }
    });

    selectedShortsTitle = allTitles[index] || selectedShortsTitle;

    renderTitleOptions();
    renderFinalPackage();
}

function renderFinalPackage(){
    const box = document.getElementById("shortsPackageResult");

    if(!currentShortsData){
        box.innerText = "YouTube Shorts başlığı, açıklaması ve hashtagleri burada görünecek.";
        return;
    }

    const hashtags = Array.isArray(currentShortsData.hashtags) ? currentShortsData.hashtags.join(" ") : "";
    const tags = Array.isArray(currentShortsData.youtube_tags) ? currentShortsData.youtube_tags.join(", ") : "";

    box.innerText =
`📺 V28.3 SEÇİLMİŞ YOUTUBE SHORTS PAKETİ

Seçilen Başlık:
${selectedShortsTitle || currentShortsData.main_title || ""}

Açıklama:
${currentShortsData.description || ""}

Hashtagler:
${hashtags}

YouTube Etiketleri:
${tags}

Sabit Yorum:
${currentShortsData.pinned_comment || ""}

Video:
${currentShortVideoUrl || "Henüz video yüklenmedi."}`;
}

function copyFinalPackage(){
    const box = document.getElementById("shortsPackageResult");
    const text = box.innerText || "";

    if(text.trim() === "" || text.includes("burada görünecek")){
        alert("Kopyalanacak paket yok.");
        return;
    }

    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    temp.setSelectionRange(0, 999999);
    document.execCommand("copy");
    document.body.removeChild(temp);

    alert("Final Shorts paketi panoya kopyalandı ✅");
}
</script>

</body>
</html>