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
<title>V29.2 Tek Tuş Otomasyon Merkezi</title>

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
button.brand{background:#063f5c;color:white}
.tip{background:#eefafa;padding:14px;border-radius:12px;line-height:1.6}
.output{min-height:160px;background:#fbffff;border:1px solid #dbecec;border-radius:12px;padding:18px;white-space:pre-wrap;line-height:1.6}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.statusLine{padding:10px 12px;border-radius:10px;background:#f8fafc;border:1px solid #e2e8f0;margin-bottom:8px}
.ok{background:#dcfce7;color:#166534}
.wait{background:#fef9c3;color:#854d0e}
.bad{background:#fee2e2;color:#991b1b}
.preview img{max-width:100%;border-radius:14px;border:1px solid #dbecec;margin-top:15px}
.download{display:inline-block;margin-top:12px;background:#078080;color:white;text-decoration:none;padding:12px 16px;border-radius:10px;font-weight:bold}

@media(max-width:900px){
    .layout{display:block}
    .sidebar{width:auto}
    .grid{grid-template-columns:1fr}
}
</style>
</head>

<body>

<div class="header">
    <div class="logo">🚀 Tek Tuş Otomasyon Merkezi</div>
    <div>
        Hoş geldin, <?php echo htmlspecialchars($_SESSION["user_name"] ?? "Kullanıcı"); ?>
        <span class="badge">V29.2</span>
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
        <a href="video.php">🎬 Short Video Merkezi</a>
        <a class="active" href="automation.php">🚀 Tek Tuş Otomasyon</a>
        <a href="youtube.php">📺 YouTube İçerikleri</a>
        <a href="blog.php">📰 Blog Yazıları</a>
        <a href="analytics.php">📊 Analitik</a>
        <a href="settings.php">⚙️ Ayarlar</a>
        <a href="../auth/logout.php">🚪 Çıkış</a>
    </div>
</div>

<div class="main">

<div class="card">
    <h2>🚀 V29.2 Tek Tuş Üretim Merkezi</h2>

    <div class="tip">
        Konuyu gir. Sistem içerik paketi, sosyal medya metni, YouTube Shorts paketi ve görsel promptu hazırlar. Sonra aynı ekrandan AI görsel oluşturabilirsin.
    </div>

    <br>

    <label>İçerik konusu</label>
    <input id="autoTopic" placeholder="Örn: Depresyon nedir?">

    <button type="button" class="smart" onclick="runAutomation()">
        🚀 Tek Tuş Üret
    </button>

    <button type="button" onclick="copyAllAutomation()">
        📋 Tüm Paketi Kopyala
    </button>
</div>

<div class="card">
    <h2>⚙️ İşlem Durumu</h2>
    <div id="statusContent" class="output">
        Henüz işlem başlamadı.
    </div>
</div>

<div class="grid">

    <div class="card">
        <h2>📄 İçerik Paketi</h2>
        <div id="contentResult" class="output">
            İçerik paketi burada görünecek.
        </div>
    </div>

    <div class="card">
        <h2>📱 Sosyal Medya Metni</h2>
        <div id="socialResult" class="output">
            Sosyal medya metni burada görünecek.
        </div>
    </div>

    <div class="card">
        <h2>📺 YouTube Shorts Paketi</h2>
        <div id="shortsResult" class="output">
            Shorts paketi burada görünecek.
        </div>
    </div>

    <div class="card">
        <h2>🖼️ Görsel Prompt / AI Görsel</h2>
        <div id="visualResult" class="output">
            Görsel prompt burada görünecek.
        </div>

        <br>

        <button type="button" class="brand" onclick="generateAutomationImage()">
            🎨 Görsel Oluştur
        </button>

        <div id="imageStatus" class="tip">
            AI görsel üretildiğinde burada görünecek.
        </div>

        <div id="imagePreview" class="preview"></div>
    </div>

</div>

</div>
</div>

<script>
let automationImageUrl = "";

function htmlEscape(text){
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function setStatus(lines){
    const box = document.getElementById("statusContent");
    box.innerHTML = lines.map(function(item){
        return `<div class="statusLine ${item.className || ""}">${htmlEscape(item.text)}</div>`;
    }).join("");
}

async function runAutomation(){
    const topic = document.getElementById("autoTopic").value.trim();

    if(topic === ""){
        alert("Önce içerik konusu yaz.");
        return;
    }

    automationImageUrl = "";
    document.getElementById("imageStatus").innerText = "AI görsel üretildiğinde burada görünecek.";
    document.getElementById("imagePreview").innerHTML = "";

    document.getElementById("contentResult").innerText = "📄 İçerik paketi hazırlanıyor...";
    document.getElementById("socialResult").innerText = "📱 Sosyal medya metni hazırlanıyor...";
    document.getElementById("shortsResult").innerText = "📺 Shorts paketi hazırlanıyor...";
    document.getElementById("visualResult").innerText = "🖼️ Görsel prompt hazırlanıyor...";

    setStatus([
        {text:"Başladı: " + topic, className:"wait"},
        {text:"İçerik paketi hazırlanıyor...", className:"wait"},
        {text:"Sosyal medya metni hazırlanıyor...", className:"wait"},
        {text:"Shorts paketi hazırlanıyor...", className:"wait"},
        {text:"Görsel prompt hazırlanıyor...", className:"wait"}
    ]);

    await generateAutoContent(topic);
    await generateAutoSocial(topic);
    await generateAutoShorts(topic);
    await generateAutoVisualConcept(topic);

    setStatus([
        {text:"Tamamlandı: " + topic, className:"ok"},
        {text:"İçerik paketi hazır ✅", className:"ok"},
        {text:"Sosyal medya metni hazır ✅", className:"ok"},
        {text:"Shorts paketi hazır ✅", className:"ok"},
        {text:"Görsel prompt hazır ✅", className:"ok"},
        {text:"Şimdi Görsel Oluştur butonuna basabilirsin 🎨", className:"wait"}
    ]);
}

async function generateAutoContent(topic){
    const box = document.getElementById("contentResult");

    try{
        const response = await fetch("../api/generate.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                topic:topic,
                title:topic
            })
        });

        const text = await response.text();
        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            box.innerText = "JSON olmayan cevap geldi:\n\n" + text.substring(0,2000);
            return;
        }

        if(data.success){
            box.innerText =
                data.content ||
                data.text ||
                data.result ||
                JSON.stringify(data,null,2);
        }else{
            box.innerText = "İçerik üretilemedi:\n\n" + JSON.stringify(data,null,2);
        }

    }catch(error){
        box.innerText = "Bağlantı hatası:\n\n" + error.message;
    }
}

async function generateAutoSocial(topic){
    const box = document.getElementById("socialResult");

    try{
        const response = await fetch("../api/generate_social_copy.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                platform:"Instagram",
                topic:topic,
                title:topic,
                cta:"Daha fazla ruh sağlığı içeriği için takip edebilirsiniz.",
                hashtags:["#psikiyatri","#ruhsagligi","#ozgurozbebit"]
            })
        });

        const text = await response.text();
        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            box.innerText = "JSON olmayan cevap geldi:\n\n" + text.substring(0,2000);
            return;
        }

        if(data.success){
            box.innerText =
                data.copy ||
                data.social_copy ||
                data.text ||
                data.caption ||
                JSON.stringify(data,null,2);
        }else{
            box.innerText = "Sosyal medya metni üretilemedi:\n\n" + JSON.stringify(data,null,2);
        }

    }catch(error){
        box.innerText = "Bağlantı hatası:\n\n" + error.message;
    }
}

async function generateAutoShorts(topic){
    const box = document.getElementById("shortsResult");

    try{
        const response = await fetch("../api/generate_shorts_package.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                topic:topic
            })
        });

        const text = await response.text();
        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            box.innerText = "JSON olmayan cevap geldi:\n\n" + text.substring(0,2000);
            return;
        }

        if(!data.success){
            box.innerText = "Shorts paketi üretilemedi:\n\n" + JSON.stringify(data,null,2);
            return;
        }

        const hashtags = Array.isArray(data.hashtags) ? data.hashtags.join(" ") : "";
        const tags = Array.isArray(data.youtube_tags) ? data.youtube_tags.join(", ") : "";
        const titles = Array.isArray(data.title_options) ? data.title_options : [];

        let titleList = "";
        titles.forEach(function(t, i){
            titleList += (i+1) + ". " + t + "\n";
        });

        box.innerText =
`Ana Başlık:
${data.main_title || ""}

Alternatif Başlıklar:
${titleList}

Açıklama:
${data.description || ""}

Hashtagler:
${hashtags}

YouTube Etiketleri:
${tags}

Sabit Yorum:
${data.pinned_comment || ""}`;

    }catch(error){
        box.innerText = "Bağlantı hatası:\n\n" + error.message;
    }
}

async function generateAutoVisualConcept(topic){
    const box = document.getElementById("visualResult");

    try{
        const response = await fetch("../api/generate_visual_concept.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                title:topic
            })
        });

        const text = await response.text();
        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            box.innerText = "JSON olmayan cevap geldi:\n\n" + text.substring(0,2000);
            return;
        }

        if(data.success){
            box.innerText =
                data.concept ||
                data.visual_prompt ||
                data.prompt ||
                JSON.stringify(data,null,2);
        }else{
            box.innerText = "Görsel konsept üretilemedi:\n\n" + JSON.stringify(data,null,2);
        }

    }catch(error){
        box.innerText = "Bağlantı hatası:\n\n" + error.message;
    }
}

async function generateAutomationImage(){
    const topic = document.getElementById("autoTopic").value.trim();
    const visualPrompt = document.getElementById("visualResult").innerText.trim();
    const status = document.getElementById("imageStatus");
    const preview = document.getElementById("imagePreview");

    if(topic === ""){
        alert("Önce konu yaz.");
        return;
    }

    if(
        visualPrompt === "" ||
        visualPrompt.includes("Görsel prompt burada") ||
        visualPrompt.includes("hazırlanıyor") ||
        visualPrompt.includes("üretilemedi") ||
        visualPrompt.includes("Bağlantı hatası")
    ){
        alert("Önce Tek Tuş Üret ile görsel prompt oluştur.");
        return;
    }

    status.innerText = "🖼️ AI görsel üretiliyor, lütfen bekleyin...";
    preview.innerHTML = "";

    const finalPrompt =
`Profesyonel psikiyatri kliniği için modern, sade, güven veren ve yazısız sosyal medya görseli oluştur.

KONU:
${topic}

GÖRSEL KONSEPT:
${visualPrompt}

TASARIM KURALLARI:
- Kare format, 1024x1024.
- Premium sağlık markası estetiği.
- Fotoğraf gerçekçi, sinematik, minimal obje, doğa metaforu veya premium illüstrasyon olabilir.
- İnsan figürü zorunlu değildir.
- Konunun psikolojik anlamına uygun özgün metafor kullan.
- Aynı karakteri, aynı terapi odasını, aynı klişe sağlık görselini tekrar etme.
- Sol üstte başlık eklenebilmesi için temiz boş alan bırak.
- Alt marka bandı için en altta sade ve sakin alan bırak.
- Görsel temiz, ferah, etik ve profesyonel olsun.
- Korkutucu, dramatik, damgalayıcı veya manipülatif olmasın.
- Tanı veya tedavi garantisi çağrıştırmasın.

ÇOK ÖNEMLİ:
- Görselde kesinlikle yazı olmasın.
- Harf, kelime, slogan, tabela, logo, marka adı, watermark, imza olmasın.
- Türkçe veya İngilizce hiçbir metin üretme.

NEGATİF KURALLAR:
no text, no letters, no words, no typography, no captions, no logo, no watermark, no signature, no brand name, no random characters`;

    try{
        const response = await fetch("../api/generate_image.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                prompt:finalPrompt
            })
        });

        const text = await response.text();
        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            status.innerText = "JSON olmayan cevap geldi:\n\n" + text.substring(0,2000);
            return;
        }

        if(data.success && data.image_url){
            automationImageUrl = data.image_url;

            status.innerText = "✅ AI görsel başarıyla üretildi.";

            preview.innerHTML =
                '<img src="' + data.image_url + '" alt="AI Görsel">' +
                '<br><a class="download" href="' + data.image_url + '" download>⬇️ Yazısız Görseli İndir</a>';

            setStatus([
                {text:"Görsel üretildi ✅", className:"ok"},
                {text:"Bir sonraki aşama: Kurumsallaştır entegrasyonu 🏷️", className:"wait"}
            ]);

        }else{
            status.innerText = "Görsel üretilemedi:\n\n" + JSON.stringify(data,null,2);
        }

    }catch(error){
        status.innerText = "Bağlantı hatası:\n\n" + error.message;
    }
}

function copyAllAutomation(){
    const topic = document.getElementById("autoTopic").value.trim();
    const content = document.getElementById("contentResult").innerText;
    const social = document.getElementById("socialResult").innerText;
    const shorts = document.getElementById("shortsResult").innerText;
    const visual = document.getElementById("visualResult").innerText;
    const image = automationImageUrl;

    const all =
`🚀 V29.2 TEK TUŞ ÜRETİM PAKETİ

Konu:
${topic}

━━━━━━━━━━━━━━━━━━━━
📄 İÇERİK PAKETİ
━━━━━━━━━━━━━━━━━━━━
${content}

━━━━━━━━━━━━━━━━━━━━
📱 SOSYAL MEDYA METNİ
━━━━━━━━━━━━━━━━━━━━
${social}

━━━━━━━━━━━━━━━━━━━━
📺 YOUTUBE SHORTS PAKETİ
━━━━━━━━━━━━━━━━━━━━
${shorts}

━━━━━━━━━━━━━━━━━━━━
🖼️ GÖRSEL PROMPT
━━━━━━━━━━━━━━━━━━━━
${visual}

━━━━━━━━━━━━━━━━━━━━
🎨 AI GÖRSEL
━━━━━━━━━━━━━━━━━━━━
${image || "Henüz görsel üretilmedi."}`;

    const temp = document.createElement("textarea");
    temp.value = all;
    document.body.appendChild(temp);
    temp.select();
    temp.setSelectionRange(0, 999999);
    document.execCommand("copy");
    document.body.removeChild(temp);

    alert("Tüm V29.2 paketi panoya kopyalandı ✅");
}
</script>

</body>
</html>