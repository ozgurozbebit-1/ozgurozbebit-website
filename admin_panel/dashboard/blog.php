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
<title>Blog Fabrikası V11</title>

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
.output{min-height:420px;background:#fbffff;border:1px solid #dbecec;border-radius:12px;padding:18px;white-space:pre-wrap;line-height:1.6}
.tip{background:#eefafa;padding:14px;border-radius:12px;line-height:1.6}
</style>
</head>

<body>

<div class="header">
    <div class="logo">📰 Blog Fabrikası</div>
    <div>
        Hoş geldin, <?php echo htmlspecialchars($_SESSION["user_name"] ?? "Kullanıcı"); ?>
        <span class="badge">V11 SEO</span>
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
        <a href="youtube.php">📺 YouTube İçerikleri</a>
        <a class="active" href="blog.php">📰 Blog Yazıları</a>
        <a href="analytics.php">📊 Analitik</a>
        <a href="settings.php">⚙️ Ayarlar</a>
        <a href="../auth/logout.php">🚪 Çıkış</a>
    </div>
</div>

<div class="main">

<div class="card">
    <h2>SEO Blog İçerik Paketi Üret</h2>

    <label>Konu</label>
    <input id="topic" placeholder="Örn: Panik atak kalp krizi değildir">

    <label>Hedef kitle</label>
    <select id="audience">
        <option>Hasta ve hasta yakınları</option>
        <option>Genel okuyucu</option>
        <option>Profesyonel sağlık kitlesi</option>
        <option>LinkedIn profesyonel kitlesi</option>
        <option>Google araması yapan kullanıcı</option>
    </select>

    <label>Yazı stili</label>
    <select id="style">
        <option>Sakin, bilimsel ve anlaşılır</option>
        <option>SEO odaklı ama doğal</option>
        <option>Profesyonel hekim dili</option>
        <option>Hasta eğitimine uygun sade dil</option>
        <option>Kurumsal ve güven veren dil</option>
    </select>

    <label>Uzunluk</label>
    <select id="length">
        <option>1000-1500 kelime</option>
        <option selected>1500-2000 kelime</option>
        <option>2000-2500 kelime</option>
        <option>Kısa blog 700-1000 kelime</option>
    </select>

    <button onclick="generateBlogPackage()">📰 AI Blog Paketi Üret</button>
    <button class="secondary" onclick="fillExample()">Örnek Doldur</button>
</div>

<div class="card">
    <h2>Üretilen Blog Paketi</h2>
    <div id="output" class="output">Blog paketi burada görünecek...</div>
    <br>
    <button onclick="copyOutput()">📋 Blog Paketini Kopyala</button>
</div>

<div class="card">
    <h2>Kullanım Notu</h2>
    <div class="tip">
        Bu modül OpenAI ile SEO başlık, meta açıklama, blog yazısı, sık sorulan sorular,
        Google snippet, LinkedIn özeti, Instagram özeti, X paylaşımları ve Canva blog kapak promptu üretir.
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

async function generateBlogPackage(){

    const topic = document.getElementById("topic").value || "Panik atak kalp krizi değildir";
    const audience = document.getElementById("audience").value;
    const style = document.getElementById("style").value;
    const length = document.getElementById("length").value;
    const output = document.getElementById("output");

    output.innerText = "📰 Blog içerik paketi OpenAI ile hazırlanıyor, lütfen bekleyin...";

    try{

        const response = await fetch("../api/generate_blog.php",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                topic:topic,
                audience:audience,
                style:style,
                length:length
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

    if(text.trim() === "" || text.includes("Blog paketi burada")){
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

    alert("Blog paketi panoya kopyalandı ✅");
}
</script>

</body>
</html>