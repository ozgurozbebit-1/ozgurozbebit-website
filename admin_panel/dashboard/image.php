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
<title>Görsel Fabrikası V24</title>

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
button{background:#078080;color:white;border:0;padding:13px 18px;border-radius:10px;font-weight:bold;cursor:pointer;margin-right:8px;margin-bottom:8px}
button.secondary{background:#e6f3f3;color:#123}
button.brand{background:#063f5c;color:white}
button.smart{background:#8b5cf6;color:white}
button.quality{background:#f59e0b;color:white}
.output{min-height:420px;background:#fbffff;border:1px solid #dbecec;border-radius:12px;padding:18px;white-space:pre-wrap;line-height:1.6}
.tip{background:#eefafa;padding:14px;border-radius:12px;line-height:1.6}
.preview img{max-width:100%;border-radius:14px;border:1px solid #dbecec;margin-top:15px}
.download{display:inline-block;margin-top:12px;background:#078080;color:white;text-decoration:none;padding:12px 16px;border-radius:10px;font-weight:bold}
.download.secondary{background:#063f5c}
.subtitleBox{background:#f6fffe;border:1px solid #dbecec;border-radius:12px;padding:14px;margin-top:12px;font-weight:bold;color:#063f5c}
.customSubtitleBox{background:#fbffff;border:1px dashed #b7dede;border-radius:12px;padding:14px;margin-top:12px}
.customSubtitleBox label{font-weight:bold;color:#063f5c}
.customSubtitleBox textarea{min-height:72px;resize:vertical;margin-bottom:0}

.titleContainer{
    min-height:auto !important;
    padding:10px !important;
}

.titleGrid{
    display:grid;
    grid-template-columns:1fr;
    gap:12px;
}

.titleOption{
    background:white;
    border:1px solid #dbecec;
    border-radius:12px;
    padding:16px !important;
    margin-bottom:0 !important;
    cursor:pointer;
    transition:0.2s;
    min-height:auto !important;
}
.titleOption:hover{background:#eefafa;transform:scale(1.01)}
.titleOption.active{border:2px solid #078080;background:#e9fbfa}
.titleLabel{font-size:13px;font-weight:bold;color:#078080;margin-bottom:6px}
.titleText{font-size:18px;font-weight:bold;color:#123;line-height:1.4}
.aiPick{display:inline-block;background:#8b5cf6;color:white;padding:4px 8px;border-radius:10px;font-size:12px;margin-left:6px}
.titleContainer,
.titleGrid,
.titleOption,
.titleLabel,
.titleText{
    white-space:normal !important;
}

.titleContainer{
    min-height:auto !important;
    padding:10px !important;
}

.titleGrid{
    display:grid;
    grid-template-columns:1fr;
    gap:10px;
}

.titleOption{
    min-height:auto !important;
    height:auto !important;
    padding:12px 16px !important;
    margin:0 !important;
    line-height:1.35 !important;
}

.titleLabel{
    margin:0 0 4px 0 !important;
    line-height:1.2 !important;
}

.titleText{
    margin:0 !important;
    line-height:1.3 !important;
}

.qualityBox{
    background:#fffaf0;
    border:1px solid #fde3a7;
    border-radius:14px;
    padding:18px;
    line-height:1.6;
}

.qualityScore{
    font-size:42px;
    font-weight:bold;
    color:#063f5c;
    margin-bottom:6px;
}

.qualityStatus{
    display:inline-block;
    padding:8px 14px;
    border-radius:20px;
    font-weight:bold;
    margin-bottom:14px;
}

.qualityStatus.excellent{background:#dcfce7;color:#166534}
.qualityStatus.good{background:#fef9c3;color:#854d0e}
.qualityStatus.weak{background:#ffedd5;color:#9a3412}
.qualityStatus.bad{background:#fee2e2;color:#991b1b}

.qualityGrid{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:12px;
    margin-top:15px;
}

.qualityCol{
    background:white;
    border:1px solid #f3e4bd;
    border-radius:12px;
    padding:14px;
}

.qualityCol h4{
    margin:0 0 8px 0;
    color:#063f5c;
}

.qualityCol ul{
    margin:0;
    padding-left:18px;
}


.viralBox{
    background:#fff7ed;
    border:1px solid #fed7aa;
    border-radius:14px;
    padding:18px;
    line-height:1.6;
}

.viralScore{
    font-size:42px;
    font-weight:bold;
    color:#7c2d12;
    margin-bottom:6px;
}

.viralStatus{
    display:inline-block;
    padding:8px 14px;
    border-radius:20px;
    font-weight:bold;
    margin-bottom:14px;
}

.viralStatus.excellent{background:#ffedd5;color:#9a3412}
.viralStatus.good{background:#dcfce7;color:#166534}
.viralStatus.weak{background:#fef9c3;color:#854d0e}
.viralStatus.bad{background:#fee2e2;color:#991b1b}

.platformBox{
    background:#f8fafc;
    border:1px solid #cbd5e1;
    border-radius:14px;
    padding:18px;
    line-height:1.6;
}

.platformHeader{
    display:flex;
    flex-wrap:wrap;
    gap:14px;
    align-items:center;
    margin-bottom:14px;
}

.platformBest{
    font-size:30px;
    font-weight:bold;
    color:#0f172a;
}

.platformStatus{
    display:inline-block;
    padding:8px 14px;
    border-radius:20px;
    font-weight:bold;
}

.platformStatus.excellent{background:#dcfce7;color:#166534}
.platformStatus.good{background:#e0f2fe;color:#075985}
.platformStatus.weak{background:#fef9c3;color:#854d0e}
.platformStatus.bad{background:#fee2e2;color:#991b1b}

.platformGrid{
    display:grid;
    grid-template-columns:repeat(5,1fr);
    gap:12px;
    margin-top:15px;
}

.platformCard{
    background:white;
    border:1px solid #dbeafe;
    border-radius:12px;
    padding:14px;
}

.platformName{
    font-weight:bold;
    color:#063f5c;
    margin-bottom:8px;
}

.platformScore{
    font-size:28px;
    font-weight:bold;
    color:#0f172a;
    margin-bottom:8px;
}

.platformMini{
    font-size:13px;
    line-height:1.45;
    color:#334155;
}

.platformMini ul{
    margin:6px 0 0 0;
    padding-left:18px;
}


.strategyBox{
    background:#f0fdf4;
    border:1px solid #bbf7d0;
    border-radius:14px;
    padding:18px;
    line-height:1.6;
}

.strategyHeader{
    display:flex;
    flex-wrap:wrap;
    gap:14px;
    align-items:center;
    margin-bottom:14px;
}

.strategyBest{
    font-size:30px;
    font-weight:bold;
    color:#14532d;
}

.strategyStatus{
    display:inline-block;
    padding:8px 14px;
    border-radius:20px;
    font-weight:bold;
    background:#dcfce7;
    color:#166534;
}

.strategyGrid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:12px;
    margin-top:15px;
}

.strategyCard{
    background:white;
    border:1px solid #bbf7d0;
    border-radius:12px;
    padding:14px;
}

.strategyLabel{
    font-size:13px;
    font-weight:bold;
    color:#166534;
    margin-bottom:6px;
}

.strategyValue{
    font-size:18px;
    font-weight:bold;
    color:#0f172a;
    line-height:1.4;
}

.hashtagBox{
    margin-top:15px;
    background:white;
    border:1px solid #bbf7d0;
    border-radius:12px;
    padding:14px;
    color:#063f5c;
    font-weight:bold;
    line-height:1.8;
}


.socialCopyBox{
    background:#f5f3ff;
    border:1px solid #ddd6fe;
    border-radius:14px;
    padding:18px;
    line-height:1.6;
}

.socialCopyHeader{
    display:flex;
    flex-wrap:wrap;
    gap:14px;
    align-items:center;
    margin-bottom:14px;
}

.socialCopyBest{
    font-size:30px;
    font-weight:bold;
    color:#4c1d95;
}

.socialCopyStatus{
    display:inline-block;
    padding:8px 14px;
    border-radius:20px;
    font-weight:bold;
    background:#ede9fe;
    color:#5b21b6;
}

.copyTextBox{
    background:white;
    border:1px solid #ddd6fe;
    border-radius:12px;
    padding:16px;
    white-space:pre-wrap;
    line-height:1.7;
    color:#1f2937;
    font-size:16px;
}

.copyActions{
    margin-top:12px;
}

button.copyButton{
    background:#7c3aed;
    color:white;
}


.sharePackageBox{
    background:#fefce8;
    border:1px solid #fde68a;
    border-radius:14px;
    padding:18px;
    line-height:1.6;
}

.sharePackageHeader{
    display:flex;
    flex-wrap:wrap;
    gap:14px;
    align-items:center;
    margin-bottom:14px;
}

.sharePackageBest{
    font-size:30px;
    font-weight:bold;
    color:#713f12;
}

.sharePackageStatus{
    display:inline-block;
    padding:8px 14px;
    border-radius:20px;
    font-weight:bold;
    background:#fef3c7;
    color:#92400e;
}

.packageGrid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:12px;
    margin-top:15px;
}

.packageCard{
    background:white;
    border:1px solid #fde68a;
    border-radius:12px;
    padding:14px;
}

.packageLabel{
    font-size:13px;
    font-weight:bold;
    color:#92400e;
    margin-bottom:6px;
}

.packageValue{
    font-size:16px;
    font-weight:bold;
    color:#0f172a;
    line-height:1.4;
}

.packageTextBox{
    background:white;
    border:1px solid #fde68a;
    border-radius:12px;
    padding:16px;
    white-space:pre-wrap;
    line-height:1.7;
    color:#1f2937;
    font-size:16px;
    margin-top:15px;
}

button.packageButton{
    background:#ca8a04;
    color:white;
}


.multiPlatformBox{
    background:#eff6ff;
    border:1px solid #bfdbfe;
    border-radius:14px;
    padding:18px;
    line-height:1.6;
}

.multiPlatformHeader{
    display:flex;
    flex-wrap:wrap;
    gap:14px;
    align-items:center;
    margin-bottom:14px;
}

.multiPlatformBest{
    font-size:30px;
    font-weight:bold;
    color:#1e3a8a;
}

.multiPlatformStatus{
    display:inline-block;
    padding:8px 14px;
    border-radius:20px;
    font-weight:bold;
    background:#dbeafe;
    color:#1d4ed8;
}

.multiGrid{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:14px;
    margin-top:15px;
}

.multiCard{
    background:white;
    border:1px solid #bfdbfe;
    border-radius:12px;
    padding:14px;
}

.multiName{
    font-size:18px;
    font-weight:bold;
    color:#1e3a8a;
    margin-bottom:8px;
}

.multiMeta{
    font-size:13px;
    color:#334155;
    margin-bottom:8px;
    font-weight:bold;
}

.multiCopy{
    background:#f8fafc;
    border:1px solid #dbeafe;
    border-radius:10px;
    padding:12px;
    white-space:pre-wrap;
    line-height:1.6;
    color:#1f2937;
    font-size:14px;
    min-height:120px;
}

.shortPromptBox{
    background:white;
    border:1px solid #bfdbfe;
    border-radius:12px;
    padding:14px;
    white-space:pre-wrap;
    line-height:1.7;
    color:#1f2937;
    font-size:15px;
    margin-top:15px;
}


@media(max-width:900px){
    .layout{display:block}
    .sidebar{width:auto}
    .qualityGrid{grid-template-columns:1fr}
    .platformGrid{grid-template-columns:1fr}
    .strategyGrid{grid-template-columns:1fr}
    .packageGrid{grid-template-columns:1fr}
    .multiGrid{grid-template-columns:1fr}
}
.smartComment{
    margin-top:15px;
    background:#eefafa;
    border-left:5px solid #078080;
    padding:14px;
    border-radius:10px;
    line-height:1.6;
    color:#063f5c;
    font-weight:500;
}
.carouselSortInfo{
    background:#fff7ed;
    border:1px solid #fed7aa;
    color:#7c2d12;
    padding:12px;
    border-radius:12px;
    margin-top:12px;
    font-weight:bold;
}

.multiSortGrid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:12px;
    margin-top:15px;
}

.multiSortItem{
    border:2px solid #dbecec;
    border-radius:12px;
    padding:10px;
    background:white;
    cursor:grab;
    position:relative;
}

.multiSortItem.dragging{
    opacity:0.45;
}

.multiSortItem img{
    width:100%;
    height:140px;
    object-fit:cover;
    border-radius:10px;
}

.sortBadge{
    position:absolute;
    top:8px;
    left:8px;
    background:#db2777;
    color:white;
    width:30px;
    height:30px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
}

.sortHint{
    font-size:13px;
    color:#475569;
    margin-top:8px;
    text-align:center;
}
.workflowBar{
    display:flex;
    gap:10px;
    flex-wrap:wrap;
    margin-bottom:15px;
}

.workflowToggle{
    background:#0f172a;
    color:white;
    border:0;
    padding:12px 18px;
    border-radius:12px;
    font-weight:bold;
    cursor:pointer;
}

.workflowSection{
    display:none;
    margin-top:10px;
}
</style>
</head>

<body>

<div class="header">
    <div class="logo">🎨 AI Görsel Fabrikası</div>
    <div>
        Hoş geldin, <?php echo htmlspecialchars($_SESSION["user_name"] ?? "Kullanıcı"); ?>
        <span class="badge">V24</span>
    </div>
</div>

<div class="layout">

<div class="sidebar">
    <div class="menu">
        <a href="index.php">🤖 İçerik Üret</a>
        <a href="calendar.php">📅 İçerik Takvimi</a>
        <a href="planner.php">🗓️ 30 Günlük Plan</a>
        <a href="drafts.php">📝 Taslaklar</a>
        <a class="active" href="image.php">🎨 Görsel Oluştur</a>
        <a href="video.php">🎬 Short Video Merkezi</a>
        <a href="youtube.php">📺 YouTube İçerikleri</a>
        <a href="blog.php">📰 Blog Yazıları</a>
        <a href="analytics.php">📊 Analitik</a>
        <a href="settings.php">⚙️ Ayarlar</a>
        <a href="../auth/logout.php">🚪 Çıkış</a>
    </div>
</div>

<div class="main">

<div class="card">
    <h2>Çoklu Platform Görsel Prompt Paketi Üret</h2>

    <label>İçerik konusu</label>
    <input id="topic" placeholder="Örn: Panik atak kalp krizi değildir">

    <label>Ana kullanım amacı</label>
    <select id="purpose">
        <option>Bilgilendirici sosyal medya içeriği</option>
        <option>Hasta eğitimi</option>
        <option>YouTube thumbnail</option>
        <option>Instagram carousel</option>
        <option>Blog kapak görseli</option>
        <option>Uzman marka görünürlüğü</option>
    </select>

    <label>Görsel tarzı</label>
    <select id="style">
        <option>Kurumsal psikiyatri kliniği estetiği</option>
        <option>Minimal tıbbi illüstrasyon</option>
        <option>Turkuaz-beyaz modern sosyal medya tasarımı</option>
        <option>Sakin, güven veren ve sade görsel</option>
        <option>Profesyonel doktor markası görseli</option>
        <option>Bilgilendirici carousel tasarımı</option>
    </select>

    <label>Görsel üretim modu</label>
    <select id="visualMode">
        <option>Metafor motoru otomatik seçsin</option>
        <option>Fotoğraf gerçekçi</option>
        <option>Sinematik doğa metaforu</option>
        <option>Minimal obje fotoğrafı</option>
        <option>Premium illüstrasyon</option>
        <option>Soyut sanat metaforu</option>
    </select>

    <label>Renk paleti</label>
    <select id="colors">
        <option>Turkuaz, beyaz, açık gri</option>
        <option>Lacivert, beyaz, turkuaz</option>
        <option>Pastel mavi, beyaz, açık yeşil</option>
        <option>Beyaz zemin, turkuaz vurgu, koyu yazı</option>
    </select>

    <label>Metin kullanımı</label>
    <select id="textUsage">
        <option>Görselde metin olmasın</option>
        <option>Görselde kısa başlık olsun</option>
        <option>Sadece 3-5 kelimelik vurucu başlık olsun</option>
        <option>Carousel için her slaytta kısa metin alanı olsun</option>
    </select>

    <button type="button" onclick="createPromptPackage()">🎨 Prompt Paketi Üret</button>
    <button type="button" class="secondary" onclick="fillExample()">Örnek Doldur</button>
</div>

<div class="card">
    <h2>🎯 V15 Başlık Seçim Sistemi</h2>

    <div class="tip">
        AI aynı konu için 5 farklı başlık üretir. Beğendiğin başlığa tıklayınca ana konu alanına otomatik yerleşir.
    </div>

    <br>

    <button type="button" class="smart" onclick="generateTitles()">🧠 Başlık Alternatifleri Üret</button>

    <div id="titleOptions" class="output titleContainer" style="margin-top:15px;">
        Başlık alternatifleri burada görünecek...
    </div>
</div>

<div class="card">
    <h2>Oluşturulan Görsel Prompt Paketi</h2>
    <div id="output" class="output">Görsel prompt paketi burada görünecek...</div>
    <br>

    <div class="workflowBar">
        <button type="button" class="workflowToggle" onclick="toggleWorkflow('produceSection')">
            🎨 ÜRET
        </button>

        <button type="button" class="workflowToggle" onclick="toggleWorkflow('analysisSection')">
            📊 ANALİZ
        </button>

        <button type="button" class="workflowToggle" onclick="toggleWorkflow('strategySection')">
            🧠 OPTİMİZE ET
        </button>

        <button type="button" class="workflowToggle" onclick="toggleWorkflow('publishSection')">
            📣 YAYINLA
        </button>
    </div>

    <div id="produceSection" class="workflowSection" style="display:block;">
        <button type="button" onclick="copyPrompt()">📋 Prompt Paketini Kopyala</button>
        <button type="button" onclick="savePrompt()">💾 Promptu Taslağa Kaydet</button>
        <button type="button" class="smart" onclick="generateSubtitle()">🧠 Alt Başlık Üret</button>
        <button type="button" onclick="generateImage()">🖼️ AI Görsel Üret</button>
        <button type="button" class="brand" onclick="brandImage()">🏷️ Kurumsallaştır</button>
    </div>

    <div id="analysisSection" class="workflowSection">
        <button type="button" class="quality" onclick="scoreVisualQuality()">⭐ V18 Kalite Skoru Al</button>
        <button type="button" class="quality" onclick="scoreViralPotential()">🔥 V19 Viral Skor Al</button>
        <button type="button" class="smart" onclick="scorePlatformPotential()">🚀 V20 Platform Analizi</button>
    </div>

    <div id="strategySection" class="workflowSection">
        <button type="button" class="brand" onclick="generatePublishingStrategy()">🧠 V21 Yayın Stratejisi</button>
        <button type="button" class="copyButton" onclick="generateSocialCopy()">✍️ V22 Paylaşım Metni Üret</button>
        <button type="button" class="packageButton" onclick="generateSharePackage()">📦 V23 Paylaşım Paketi Oluştur</button>
        <button type="button" class="smart" onclick="generateMultiPlatformPackage()">🌐 V24 Tüm Platform Paketini Hazırla</button>
    </div>

    <div id="publishSection" class="workflowSection">
        <button type="button" style="background:#00695c;color:white;" onclick="sendToPublishCenter()">
            🚀 V26 Yayın Merkezine Gönder
        </button>
<div class="customSubtitleBox">
    <label>🌐 Yayınlanacak Platformlar</label><br><br>

    <label>
        <input type="checkbox" class="publishPlatform" value="facebook" checked style="width:auto;">
        Facebook
    </label><br>

    <label>
        <input type="checkbox" class="publishPlatform" value="linkedin" checked style="width:auto;">
        LinkedIn
    </label><br>

    <label>
        <input type="checkbox" class="publishPlatform" value="instagram" checked style="width:auto;">
        Instagram
    </label>
</div>
        <button type="button" style="background:#16a34a;color:white;" onclick="publishAllNow()">
            🚀 V27 Tek Tuşla Facebook + LinkedIn + Instagram Yayınla
        </button>

        <button type="button" style="background:#db2777;color:white;" onclick="publishInstagramCarouselNow()">
            🎞️ V29 Instagram Carousel Yayınla
        </button>

        <button type="button" onclick="window.location.href='publish.php'" style="background:#00695c;color:white;">
            🚀 V25.1 Otomatik Yayın Merkezi
        </button>
    </div>

    <div id="subtitlePreview" class="subtitleBox">Akıllı alt başlık burada görünecek.</div>

    <div class="customSubtitleBox">
        <label>✍️ İstersen kendi alt başlığını yaz</label>
        <textarea id="customSubtitle" placeholder="Boş bırakırsan AI tarafından üretilen alt başlık kullanılır."></textarea>
    </div>

    <div class="customSubtitleBox">
        <label>🎯 Görsel ortasına yazılacak metin</label>
        <textarea id="middleText" placeholder="İstersen buraya görselin orta kısmında görünecek açıklama metnini yaz. Örn:
Obsesyon: İstenmeyen düşünceler
Kompulsiyon: Tekrarlayan davranışlar"></textarea>
    </div>
</div>
<div class="card">
    <h2>📷 Kendi Fotoğrafını Yükle</h2>
    <div class="tip">
        Telefon veya bilgisayardan çektiğin fotoğrafı yükleyebilirsin. Kurumsallaştırmak zorunda değilsin. V27 yayınlarken bu fotoğraf kullanılacak.
    </div>

    <br>

    <input type="file" id="manualPostImage" accept="image/*,.heic,.heif">
    <br><br>

<input type="file" id="manualPostImages" accept="image/jpeg,image/png,image/webp" multiple>

<button type="button" class="brand" onclick="uploadMultiplePostImages()">
    🖼️ Çoklu Fotoğraf Yükle
</button>

<div id="multiImageGallery" class="preview"></div>

    <button type="button" class="brand" onclick="uploadManualPostImage()">
        📤 Fotoğrafı Yükle ve Kullan
    </button>
</div>
<div class="card">
    <h2>AI Görsel Önizleme</h2>
    <div id="imageStatus" class="tip">Görsel üretildiğinde burada görünecek.</div>
    <div id="imagePreview" class="preview"></div>
</div>

<div class="card">
    <h2>⭐ V18 Görsel Kalite Skorlama Motoru</h2>
    <div id="qualityResult" class="qualityBox">
        Henüz kalite skoru alınmadı. Görsel üretip kurumsallaştırdıktan sonra skor alabilirsin.
    </div>
</div>

<div class="card">
    <h2>🔥 V19 Viral Potansiyel Tahmin Motoru</h2>
    <div id="viralResult" class="viralBox">
        Henüz viral skor alınmadı. Görsel üretip kurumsallaştırdıktan sonra skor alabilirsin.
    </div>
</div>

<div class="card">
    <h2>🚀 V20 Platform Zekası Motoru</h2>
    <div id="platformResult" class="platformBox">
        Henüz platform analizi yapılmadı. Görsel üretip kurumsallaştırdıktan sonra analiz alabilirsin.
    </div>
</div>

<div class="card">
    <h2>🧠 V21 AI İçerik Direktörü</h2>
    <div id="strategyResult" class="strategyBox">
        Henüz yayın stratejisi oluşturulmadı. Önce V20 Platform Analizi al, sonra V21 strateji üret.
    </div>
</div>


<div class="card">
    <h2>✍️ V22 Platforma Özel Paylaşım Metni Motoru</h2>
    <div id="socialCopyResult" class="socialCopyBox">
        Henüz paylaşım metni oluşturulmadı. Önce V21 Yayın Stratejisi üret, sonra V22 metni oluştur.
    </div>

    <div class="customSubtitleBox">
        <label>✍️ İstersen kendi paylaşım metnini yaz</label>
        <textarea id="customSocialCopy" placeholder="Boş bırakırsan V22 tarafından üretilen paylaşım metni kullanılır."></textarea>
        <br><br>

<button type="button"
        class="copyButton"
        onclick="saveCustomSocialCopy()">
💾 Kendi Paylaşım Metnimi Kullan
</button>
    </div>
</div>

<div class="card">
    <h2>📦 V23 Paylaşım Paketi Merkezi</h2>
    <div id="sharePackageResult" class="sharePackageBox">
        Henüz paylaşım paketi oluşturulmadı. Önce V22 paylaşım metni üret, sonra V23 paket oluştur.
    </div>
</div>

<div class="card">
    <h2>🌐 V24 Tüm Platform Yayın Paketi</h2>
    <div id="multiPlatformResult" class="multiPlatformBox">
        Henüz tüm platform paketi hazırlanmadı. Kurumsal görsel oluştuktan sonra tek tuşla Instagram, Facebook, LinkedIn, X, YouTube ve Short Video paketlerini hazırlayabilirsin.
    </div>
</div>

<div class="card">
    <h2>Kullanım Notu</h2>
    <div class="tip">
        V24 ile sistem artık aynı görsel için Instagram, Facebook, LinkedIn, X, YouTube Community ve Short Video paketlerini tek tuşla hazırlar.
    </div>
</div>

</div>
</div>

<script>
let currentImageUrl = "";
let currentBrandedImageUrl = "";
let currentImageUrls = [];
let currentSubtitle = "";
let loadingInterval = null;
let selectedTitle = "";
let generatedTitles = [];
let currentVisualConcept = "";
let currentBestPlatform = "";
let currentBestScore = 0;
let currentStrategyCta = "";
let currentStrategyHashtags = [];
let currentStrategyTime = "";
let currentStrategyDays = [];
let currentStrategyFormat = "";
let currentSocialCopy = "";

function startLoadingText(baseText){
    const status = document.getElementById("imageStatus");
    let dots = 0;
    clearInterval(loadingInterval);

    loadingInterval = setInterval(function(){
        dots++;
        if(dots > 3){ dots = 0; }
        status.innerText = baseText + ".".repeat(dots);
    }, 450);
}

function stopLoadingText(finalText){
    clearInterval(loadingInterval);
    loadingInterval = null;

    if(finalText){
        document.getElementById("imageStatus").innerText = finalText;
    }
}

function fillExample(){
    document.getElementById("topic").value = "Panik atak nedir?";
}

function htmlEscape(text){
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function arrayToList(items, emptyText){
    if(!Array.isArray(items) || items.length === 0){
        return "<ul><li>" + htmlEscape(emptyText) + "</li></ul>";
    }

    let html = "<ul>";
    items.forEach(function(item){
        html += "<li>" + htmlEscape(item) + "</li>";
    });
    html += "</ul>";

    return html;
}

async function generateTitles(){
    const topic = document.getElementById("topic").value.trim();
    const container = document.getElementById("titleOptions");

    if(topic === ""){
        alert("Önce içerik konusu gir.");
        return;
    }

    container.innerHTML = "🧠 Başlık alternatifleri üretiliyor...";

    try{
        const response = await fetch("../api/generate_title_options.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                title:topic,
                topic:topic
            })
        });

        const text = await response.text();

        if(!text || text.trim() === ""){
            container.innerHTML = "Sunucudan boş cevap geldi.";
            return;
        }

        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            container.innerHTML = "JSON olmayan cevap geldi:<br><br>" + htmlEscape(text.substring(0,1000));
            return;
        }

        let titles = [];

        if(Array.isArray(data.titles)){
            titles = data.titles;
        }else if(Array.isArray(data.options)){
            titles = data.options;
        }else if(Array.isArray(data.title_options)){
            titles = data.title_options;
        }else if(Array.isArray(data.alternatives)){
            titles = data.alternatives;
        }else if(data.result && Array.isArray(data.result)){
            titles = data.result;
        }

        if(titles.length === 0){
            container.innerHTML =
                "Başlık formatı okunamadı:<br><pre>" +
                htmlEscape(JSON.stringify(data,null,2)) +
                "</pre>";
            return;
        }

        generatedTitles = titles;

        const labels = [
            "🔥 Viral",
            "🔬 Bilimsel",
            "❓ Merak Uyandırıcı",
            "❤️ Duygusal",
            "📈 SEO Dostu"
        ];

        let html = '<div class="titleGrid">';

        titles.forEach(function(item,index){
            let titleText = "";
            let labelText = labels[index] || "Başlık";

            if(typeof item === "string"){
                titleText = item;
            }else if(item && typeof item === "object"){
                titleText =
                    item.title ||
                    item.text ||
                    item.heading ||
                    item.baslik ||
                    item.name ||
                    item.value ||
                    "";

                labelText =
                    item.label ||
                    item.type ||
                    item.category ||
                    labelText;
            }

            if(titleText === ""){
                return;
            }

            html += `
                <div class="titleOption" onclick="selectTitleByIndex(${index}, this)">
                    <div class="titleLabel">
                        ${htmlEscape(labelText)}
                        ${index === 0 ? '<span class="aiPick">⭐ AI Önerisi</span>' : ''}
                    </div>
                    <div class="titleText">${htmlEscape(titleText)}</div>
                </div>
            `;
        });

        html += '</div>';

        if(html === '<div class="titleGrid"></div>'){
            container.innerHTML =
                "Başlıklar geldi ama okunabilir başlık alanı bulunamadı:<br><pre>" +
                htmlEscape(JSON.stringify(data,null,2)) +
                "</pre>";
            return;
        }

        container.innerHTML = html;

    }catch(error){
        container.innerHTML = "Bağlantı hatası:<br><br>" + htmlEscape(error.message);
    }
}

function selectTitleByIndex(index, element){
    let item = generatedTitles[index];
    let title = "";

    if(typeof item === "string"){
        title = item;
    }else if(item && typeof item === "object"){
        title =
            item.title ||
            item.text ||
            item.heading ||
            item.baslik ||
            item.name ||
            item.value ||
            "";
    }

    if(title === ""){
        alert("Başlık okunamadı.");
        return;
    }

    selectedTitle = title;
    document.getElementById("topic").value = title;

    document.querySelectorAll(".titleOption").forEach(function(opt){
        opt.classList.remove("active");
    });

    if(element){
        element.classList.add("active");
    }

    currentSubtitle = "";
    document.getElementById("subtitlePreview").innerText = "Akıllı alt başlık burada görünecek.";
    document.getElementById("customSubtitle").value = "";

    alert("Başlık seçildi ✅");
}

function safeSetHTML(id, value){
    const el = document.getElementById(id);
    if(el){ el.innerHTML = value; }
}

function safeSetText(id, value){
    const el = document.getElementById(id);
    if(el){ el.innerText = value; }
}

function safeSetValue(id, value){
    const el = document.getElementById(id);
    if(el){ el.value = value; }
}

function createPromptPackage(){
    try{
        const topic = document.getElementById("topic")?.value || "Panik atak kalp krizi değildir";
        const purpose = document.getElementById("purpose")?.value || "Bilgilendirici sosyal medya içeriği";
        const style = document.getElementById("style")?.value || "Kurumsal psikiyatri kliniği estetiği";
        const visualMode = document.getElementById("visualMode")?.value || "Metafor motoru otomatik seçsin";
        const colors = document.getElementById("colors")?.value || "Turkuaz, beyaz, açık gri";
        const textUsage = document.getElementById("textUsage")?.value || "Görselde metin olmasın";

        currentSubtitle = "";
        currentVisualConcept = "";
        currentBestPlatform = "";
        currentBestScore = 0;
        currentStrategyCta = "";
        currentStrategyHashtags = [];
        currentStrategyTime = "";
        currentStrategyDays = [];
        currentStrategyFormat = "";
        currentSocialCopy = "";

        safeSetText("subtitlePreview", "Akıllı alt başlık burada görünecek.");
        safeSetValue("customSubtitle", "");
        safeSetValue("middleText", "");
        safeSetHTML("qualityResult", "Henüz kalite skoru alınmadı. Görsel üretip kurumsallaştırdıktan sonra skor alabilirsin.");
        safeSetHTML("viralResult", "Henüz viral skor alınmadı. Görsel üretip kurumsallaştırdıktan sonra skor alabilirsin.");
        safeSetHTML("platformResult", "Henüz platform analizi yapılmadı. Görsel üretip kurumsallaştırdıktan sonra analiz alabilirsin.");
        safeSetHTML("strategyResult", "Henüz yayın stratejisi oluşturulmadı. Önce V20 Platform Analizi al, sonra V21 strateji üret.");
        safeSetHTML("socialCopyResult", "Henüz paylaşım metni oluşturulmadı. Önce V21 Yayın Stratejisi üret, sonra V22 metni oluştur.");
        safeSetHTML("sharePackageResult", "Henüz paylaşım paketi oluşturulmadı. Önce V22 paylaşım metni üret, sonra V23 paket oluştur.");
        safeSetHTML("multiPlatformResult", "Henüz tüm platform paketi hazırlanmadı. Kurumsal görsel oluştuktan sonra tek tuşla Instagram, Facebook, LinkedIn, X, YouTube ve Short Video paketlerini hazırlayabilirsin.");

        const prompt = `🎨 V24 GÖRSEL PROMPT PAKETİ

Konu:
${topic}

Ana kullanım amacı:
${purpose}

Görsel tarzı:
${style}

Görsel üretim modu:
${visualMode}

Renk paleti:
${colors}

Metin kullanımı:
${textUsage}

━━━━━━━━━━━━━━━━━━━━

1. ANA AI GÖRSEL ÜRETİM PROMPTU

Profesyonel bir sağlık ve psikiyatri markası için modern, sade ve güven veren bir sosyal medya görseli oluştur.

Konu:
${topic}

Tasarım:
- Kare format, 1024x1024
- Turkuaz, beyaz ve açık gri tonları
- Kurumsal psikiyatri kliniği estetiği
- Görsel stilini konuya göre seç: fotoğraf gerçekçi, sinematik, minimal obje, doğa metaforu veya premium illüstrasyon olabilir.
- Uzm. Dr. Özgür Özbebit markasına uygun profesyonel görünüm
- Konunun psikolojik anlamını analiz et
- Metafor motorundan gelen konsepti kullan
- İnsan figürü zorunlu değildir
- Fotoğraf gerçekçi, doğa metaforu, obje metaforu veya premium illüstrasyon kullanılabilir
- Aynı sahne ve aynı karakter tekrar edilmesin
- Görsel temiz, ferah ve okunabilir olsun
- Sağlık reklamı gibi görünmesin
- Korkutucu, dramatik veya panik yaratan görsel kullanılmasın
- Tanı veya tedavi garantisi çağrıştırmasın
- Görselde yazı, harf, logo, marka adı veya tabela bulunmasın

━━━━━━━━━━━━━━━━━━━━

7. NEGATİF PROMPT

Korkutucu yüz ifadeleri, panik yaratıcı sahneler, dramatik hastane görüntüleri, ilaç kutusu odağı, mucize tedavi algısı, aşırı parlak renkler, karmaşık arka plan, düşük kaliteli tipografi, kalabalık tasarım, reklam dili, garanti tedavi izlenimi, tanı koyan görseller, manipülatif sağlık iddiaları, yazı, harf, kelime, logo, watermark.

━━━━━━━━━━━━━━━━━━━━

8. ETİK GÖRSEL UYARI

Bu görsel paketi genel bilgilendirme amaçlı sağlık içerikleri için hazırlanmıştır. Görseller tanı, tedavi veya kesin sonuç vaadi çağrıştırmamalıdır.`;

        const output = document.getElementById("output");
        if(!output){
            alert("output alanı bulunamadı.");
            return;
        }

        output.innerText = prompt;
        output.scrollIntoView({behavior:"smooth", block:"start"});

    }catch(error){
        alert("Prompt paketi üretim hatası: " + error.message);
    }
}

function copyPrompt(){
    const text = document.getElementById("output").innerText;

    if(text.trim() === "" || text.includes("Görsel prompt paketi burada")){
        alert("Kopyalanacak prompt yok.");
        return;
    }

    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    temp.setSelectionRange(0, 999999);
    document.execCommand("copy");
    document.body.removeChild(temp);

    alert("Prompt paketi panoya kopyalandı ✅");
}

async function savePrompt(){
    const title = (document.getElementById("topic").value || "İsimsiz Görsel") + " - Görsel Prompt Paketi";
    const content = document.getElementById("output").innerText;

    if(content.trim() === "" || content.includes("Görsel prompt paketi burada")){
        alert("Kaydedilecek prompt yok.");
        return;
    }

    try{
        const response = await fetch("../api/save_content.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({title:title, content:content})
        });

        const text = await response.text();

        if(!text || text.trim() === ""){
            alert("Sunucudan boş cevap geldi. save_content.php hata veriyor olabilir.");
            return;
        }

        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            alert("JSON olmayan cevap geldi:\n\n" + text.substring(0, 1000));
            return;
        }

        if(data.success){
            alert("Prompt taslağa kaydedildi. ID: " + data.project_id);
        }else{
            alert("Kayıt hatası: " + JSON.stringify(data));
        }

    }catch(error){
        alert("Bağlantı hatası: " + error.message);
    }
}

async function generateSubtitle(){
    const topic = document.getElementById("topic").value || "Panik atak nedir?";
    const box = document.getElementById("subtitlePreview");

    box.innerText = "🧠 Akıllı alt başlık üretiliyor...";

    try{
        const response = await fetch("../api/generate_subtitle.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({title:topic})
        });

        const text = await response.text();

        if(!text || text.trim() === ""){
            box.innerText = "Sunucudan boş cevap geldi. generate_subtitle.php hata veriyor olabilir.";
            return "";
        }

        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            box.innerText = "JSON olmayan cevap geldi:\n\n" + text.substring(0, 1000);
            return "";
        }

        if(data.success && data.subtitle){
            currentSubtitle = data.subtitle;
            box.innerText = "🧠 " + currentSubtitle;

            const customBox = document.getElementById("customSubtitle");
            if(customBox.value.trim() === ""){
                customBox.placeholder = currentSubtitle;
            }

            return currentSubtitle;
        }else{
            box.innerText = "Alt başlık hatası:\n\n" + JSON.stringify(data, null, 2);
            return "";
        }

    }catch(error){
        box.innerText = "Bağlantı hatası:\n\n" + error.message;
        return "";
    }
}

async function generateImage(){
    const output = document.getElementById("output").innerText;
    const status = document.getElementById("imageStatus");
    const preview = document.getElementById("imagePreview");
    const topic = document.getElementById("topic").value || "Panik atak nedir?";
    const visualMode = document.getElementById("visualMode").value || "Metafor motoru otomatik seçsin";

    if(output.trim() === "" || output.includes("Görsel prompt paketi burada")){
        alert("Önce prompt paketi üretmelisin.");
        return;
    }

    startLoadingText("🧠 Psikiyatrik görsel konsept üretiliyor");
    preview.innerHTML = "";
    document.getElementById("qualityResult").innerHTML = "Görsel yenilendi. Kalite skoru için V18 butonuna basabilirsin.";
    document.getElementById("viralResult").innerHTML = "Görsel yenilendi. Viral skor için V19 butonuna basabilirsin.";
    document.getElementById("platformResult").innerHTML = "Görsel yenilendi. Platform analizi için V20 butonuna basabilirsin.";
    document.getElementById("strategyResult").innerHTML = "Görsel yenilendi. Önce V20 Platform Analizi, sonra V21 Yayın Stratejisi alabilirsin.";
    document.getElementById("socialCopyResult").innerHTML = "Görsel yenilendi. Önce V21 Yayın Stratejisi, sonra V22 Paylaşım Metni üretebilirsin.";
    document.getElementById("sharePackageResult").innerHTML = "Görsel yenilendi. Önce V22 Paylaşım Metni, sonra V23 Paylaşım Paketi oluşturabilirsin.";
    document.getElementById("multiPlatformResult").innerHTML = "Görsel yenilendi. Kurumsallaştırdıktan sonra V24 Tüm Platform Paketini hazırlayabilirsin.";
    currentBestPlatform = "";
    currentBestScore = 0;
    currentStrategyCta = "";
    currentStrategyHashtags = [];
    currentStrategyTime = "";
    currentStrategyDays = [];
    currentStrategyFormat = "";
    currentSocialCopy = "";

    let visualConcept = "";

    try{
        const conceptResponse = await fetch("../api/generate_visual_concept.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({title:topic})
        });

        const conceptText = await conceptResponse.text();

        if(conceptText && conceptText.trim() !== ""){
            try{
                const conceptData = JSON.parse(conceptText);
                if(conceptData.success && conceptData.concept){
                    visualConcept = conceptData.concept;
                }
            }catch(e){
                visualConcept = "";
            }
        }
    }catch(error){
        visualConcept = "";
    }

    if(visualConcept === ""){
        visualConcept = "Konuya özgü soyut ve etik psikolojik metaforlar kullan. Aynı karakteri ve aynı sahneyi tekrar etme.";
    }

    currentVisualConcept = visualConcept;

    startLoadingText("🖼️ Konuya özel yazısız AI görsel üretiliyor, lütfen bekleyin");

    const prompt =
`Profesyonel psikiyatri kliniği için modern, sade ve güven veren yazısız sosyal medya görseli oluştur.

KONU:
${topic}

PSİKİYATRİK GÖRSEL KONSEPT:
${visualConcept}

KULLANICININ GÖRSEL MODU:
${visualMode}

TASARIM KURALLARI:
- Kare format, 1024x1024.
- Turkuaz, beyaz, açık gri ve lacivert tonları.
- Görsel illa çizim olmak zorunda değildir; gerekirse gerçekçi fotoğraf estetiği, sinematik obje fotoğrafı veya doğa metaforu kullanılabilir.
- İnsan figürü zorunlu değildir.
- Basit ikon veya çizgi film estetiğinden kaçın.
- Premium sağlık markası kalitesinde, gerçekçi ve sanatsal görsel üret.
- Kurumsal psikiyatri kliniği estetiği.
- Konunun psikolojik anlamına uygun özgün metafor kullan.
- Her konuda farklı kompozisyon oluştur.
- Aynı karakteri, aynı adamı, aynı terapi odasını tekrar etme.
- Konu panik atak veya kalp çarpıntısı değilse EKG, kalp ritmi veya göğüs tutma sembolü kullanma.
- Kişilik bozuklukları için EKG, kalp krizi, göğüs ağrısı, acil servis metaforu kullanma.
- Görsel temiz, ferah, etik ve profesyonel olsun.
- Sağlık reklamı gibi görünmesin.
- Korkutucu, dramatik, damgalayıcı veya panik yaratan görsel olmasın.
- Tanı veya tedavi garantisi çağrıştırmasın.
- Sol üstte veya uygun boş alanda başlık eklenebilmesi için temiz alan bırak.
- Alt bant için görselin en altında sade alan bırak.

ÇOK ÖNEMLİ:
- Görselde kesinlikle yazı olmasın.
- Harf, kelime, başlık, slogan, tabela, logo, marka adı olmasın.
- Türkçe veya İngilizce hiçbir metin üretme.
- Görsel sadece illüstrasyon, sembol ve arka plan içersin.

NEGATİF KURALLAR:
no text, no letters, no words, no typography, no captions, no logo, no watermark, no signature, no brand name, no misspelled text, no random characters`;

    try{
        const response = await fetch("../api/generate_image.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({prompt:prompt})
        });

        const text = await response.text();

        if(!text || text.trim() === ""){
            stopLoadingText("Sunucudan boş cevap geldi. generate_image.php hata veriyor olabilir.");
            return;
        }

        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            status.innerText = "JSON olmayan cevap geldi:\n\n" + text.substring(0, 1500);
            return;
        }

        if(data.success && data.image_url){
            currentImageUrl = data.image_url;
            currentBrandedImageUrl = "";

            stopLoadingText("✅ Konuya özel yazısız AI görsel başarıyla üretildi. Şimdi Kurumsallaştır butonuna basabilirsin.");

            preview.innerHTML =
                '<div class="tip"><strong>🧠 Görsel Konsept:</strong><br>' + htmlEscape(visualConcept).replace(/\n/g, "<br>") + '</div>' +
                '<img src="' + data.image_url + '" alt="AI Görsel">' +
                '<br><a class="download" href="' + data.image_url + '" download>⬇️ Yazısız Görseli İndir</a>';
        }else{
            status.innerText = "Hata:\n\n" + JSON.stringify(data, null, 2);
        }

    }catch(error){
        status.innerText = "Bağlantı hatası:\n\n" + error.message;
    }
}

async function brandImage(){
    const preview = document.getElementById("imagePreview");
    const topic = document.getElementById("topic").value || "Panik Atak Nedir?";

    if(currentImageUrl === ""){
        alert("Önce AI görsel üretmelisin.");
        return;
    }

    startLoadingText("🏷️ Kurumsal görsel hazırlanıyor, lütfen bekleyin");

    let customSubtitle = document.getElementById("customSubtitle").value.trim();
    let middleTextEl = document.getElementById("middleText");
    let middleText = middleTextEl ? middleTextEl.value.trim() : "";
    let subtitle = customSubtitle !== "" ? customSubtitle : currentSubtitle;

    if(subtitle === ""){
        subtitle = await generateSubtitle();
    }

    if(subtitle === ""){
        subtitle = "Ruh sağlığı hakkında güvenilir ve bilgilendirici içerik.";
    }

    try{
        const response = await fetch("../api/brand_image.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                image_url: currentImageUrl,
                title: topic,
                subtitle: subtitle,
                middle_text: middleText
            })
        });

        const text = await response.text();

        if(!text || text.trim() === ""){
            stopLoadingText("Sunucudan boş cevap geldi. brand_image.php hata veriyor olabilir.");
            return;
        }

        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            stopLoadingText("JSON olmayan cevap geldi:\n\n" + text.substring(0, 1500));
            return;
        }

        if(data.success && data.image_url){
            currentBrandedImageUrl = data.image_url;

            stopLoadingText("✅ Kurumsal görsel başarıyla oluşturuldu. Şimdi analizleri alabilir veya direkt V24 Tüm Platform Paketini hazırlayabilirsin.");

            preview.innerHTML =
                '<img src="' + data.image_url + '" alt="Kurumsal Görsel">' +
                '<br><a class="download secondary" href="' + data.image_url + '" download>⬇️ Kurumsal Görseli İndir</a>' +
                '<br><br><a class="download" href="' + currentImageUrl + '" download>⬇️ Yazısız Orijinali İndir</a>';
        }else{
            stopLoadingText("Hata:\n\n" + JSON.stringify(data, null, 2));
        }

    }catch(error){
        stopLoadingText("Bağlantı hatası:\n\n" + error.message);
    }
}

async function scoreVisualQuality(){
    const box = document.getElementById("qualityResult");
    const topic = document.getElementById("topic").value || "";
    const output = document.getElementById("output").innerText || "";
    const style = document.getElementById("style").value || "";
    const visualMode = document.getElementById("visualMode").value || "";
    const customSubtitle = document.getElementById("customSubtitle").value.trim();
    const subtitle = customSubtitle !== "" ? customSubtitle : currentSubtitle;

    if(output.trim() === "" || output.includes("Görsel prompt paketi burada")){
        alert("Önce prompt paketi üretmelisin.");
        return;
    }

    if(currentImageUrl === "" && currentBrandedImageUrl === ""){
        alert("Önce AI görsel üretmelisin.");
        return;
    }

    box.innerHTML = "⭐ V18 kalite skoru hesaplanıyor...";

    try{
        const response = await fetch("../api/score_visual.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                title: topic,
                subtitle: subtitle,
                image_prompt: output,
                visual_style: style + " | " + visualMode,
                metaphor: currentVisualConcept,
                has_logo: currentBrandedImageUrl !== "",
                has_footer: currentBrandedImageUrl !== "",
                has_overlay: true
            })
        });

        const text = await response.text();

        if(!text || text.trim() === ""){
            box.innerHTML = "Sunucudan boş cevap geldi. score_visual.php hata veriyor olabilir.";
            return;
        }

        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            box.innerHTML = "JSON olmayan cevap geldi:<br><br><pre>" + htmlEscape(text.substring(0, 1500)) + "</pre>";
            return;
        }

        if(!data.success){
            box.innerHTML = "Skorlama hatası:<br><br><pre>" + htmlEscape(JSON.stringify(data, null, 2)) + "</pre>";
            return;
        }

        const level = data.level || "good";
        const score = data.score ?? 0;
        const status = data.status || "Durum belirlenemedi";
        const icon = data.status_icon || "⭐";

        box.innerHTML =
    '<div class="qualityScore">' + htmlEscape(score) + ' / 100</div>' +
    '<div class="qualityStatus ' + htmlEscape(level) + '">' + htmlEscape(icon + " " + status) + '</div>' +

    '<div class="smartComment">' +
    '🧠 <strong>AI Kalite Yorumu:</strong><br>' +
    htmlEscape(data.smart_comment || "") +
    '</div>' +

    '<div class="qualityGrid">' +
                '<div class="qualityCol">' +
                    '<h4>✅ Güçlü Yönler</h4>' +
                    arrayToList(data.strengths, "Güçlü yön bilgisi yok.") +
                '</div>' +
                '<div class="qualityCol">' +
                    '<h4>⚠️ Uyarılar</h4>' +
                    arrayToList(data.warnings, "Belirgin uyarı yok.") +
                '</div>' +
                '<div class="qualityCol">' +
                    '<h4>💡 Öneriler</h4>' +
                    arrayToList(data.suggestions, "Ek öneri yok.") +
                '</div>' +
            '</div>';

    }catch(error){
        box.innerHTML = "Bağlantı hatası:<br><br>" + htmlEscape(error.message);
    }
}
async function scoreViralPotential(){
    const box = document.getElementById("viralResult");
    const topic = document.getElementById("topic").value || "";
    const style = document.getElementById("style").value || "";
    const visualMode = document.getElementById("visualMode").value || "";
    const customSubtitle = document.getElementById("customSubtitle").value.trim();
    const subtitle = customSubtitle !== "" ? customSubtitle : currentSubtitle;

    if(topic.trim() === ""){
        alert("Önce içerik konusu gir.");
        return;
    }

    if(currentImageUrl === "" && currentBrandedImageUrl === ""){
        alert("Önce AI görsel üretmelisin.");
        return;
    }

    box.innerHTML = "🔥 V19 viral potansiyel hesaplanıyor...";

    try{
        const response = await fetch("../api/score_viral.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                title: topic,
                topic: topic,
                subtitle: subtitle,
                metaphor: currentVisualConcept,
                visual_style: style + " | " + visualMode
            })
        });

        const text = await response.text();

        if(!text || text.trim() === ""){
            box.innerHTML = "Sunucudan boş cevap geldi. score_viral.php hata veriyor olabilir.";
            return;
        }

        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            box.innerHTML = "JSON olmayan cevap geldi:<br><br><pre>" + htmlEscape(text.substring(0, 1500)) + "</pre>";
            return;
        }

        if(!data.success){
            box.innerHTML = "Viral skor hatası:<br><br><pre>" + htmlEscape(JSON.stringify(data, null, 2)) + "</pre>";
            return;
        }

        const level = data.level || "good";
        const score = data.score ?? 0;
        const status = data.status || "Durum belirlenemedi";
        const icon = data.status_icon || "🔥";

        box.innerHTML =
            '<div class="viralScore">' + htmlEscape(score) + ' / 100</div>' +
            '<div class="viralStatus ' + htmlEscape(level) + '">' + htmlEscape(icon + " " + status) + '</div>' +

            '<div class="smartComment">' +
            '🧠 <strong>AI Viral Yorumu:</strong><br>' +
            htmlEscape(data.smart_comment || "") +
            '</div>' +

            '<div class="qualityGrid">' +
                '<div class="qualityCol">' +
                    '<h4>✅ Viral Güçler</h4>' +
                    arrayToList(data.strengths, "Güçlü viral unsur yok.") +
                '</div>' +
                '<div class="qualityCol">' +
                    '<h4>⚠️ Riskler</h4>' +
                    arrayToList(data.warnings, "Belirgin risk yok.") +
                '</div>' +
                '<div class="qualityCol">' +
                    '<h4>💡 Viral Öneriler</h4>' +
                    arrayToList(data.suggestions, "Ek öneri yok.") +
                '</div>' +
            '</div>';

    }catch(error){
        box.innerHTML = "Bağlantı hatası:<br><br>" + htmlEscape(error.message);
    }
}

function shortList(items, emptyText, maxItems){
    if(!Array.isArray(items) || items.length === 0){
        return "<ul><li>" + htmlEscape(emptyText) + "</li></ul>";
    }

    let html = "<ul>";
    items.slice(0, maxItems || 2).forEach(function(item){
        html += "<li>" + htmlEscape(item) + "</li>";
    });
    html += "</ul>";

    return html;
}

async function scorePlatformPotential(){
    const box = document.getElementById("platformResult");
    const topic = document.getElementById("topic").value || "";
    const style = document.getElementById("style").value || "";
    const visualMode = document.getElementById("visualMode").value || "";
    const customSubtitle = document.getElementById("customSubtitle").value.trim();
    const subtitle = customSubtitle !== "" ? customSubtitle : currentSubtitle;

    if(topic.trim() === ""){
        alert("Önce içerik konusu gir.");
        return;
    }

    if(currentImageUrl === "" && currentBrandedImageUrl === ""){
        alert("Önce AI görsel üretmelisin.");
        return;
    }

    box.innerHTML = "🚀 V20 platform analizi hesaplanıyor...";

    try{
        const response = await fetch("../api/score_platform.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                title: topic,
                topic: topic,
                subtitle: subtitle,
                metaphor: currentVisualConcept,
                visual_style: style + " | " + visualMode
            })
        });

        const text = await response.text();

        if(!text || text.trim() === ""){
            box.innerHTML = "Sunucudan boş cevap geldi. score_platform.php hata veriyor olabilir.";
            return;
        }

        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            box.innerHTML = "JSON olmayan cevap geldi:<br><br><pre>" + htmlEscape(text.substring(0, 1500)) + "</pre>";
            return;
        }

        if(!data.success){
            box.innerHTML = "Platform analizi hatası:<br><br><pre>" + htmlEscape(JSON.stringify(data, null, 2)) + "</pre>";
            return;
        }

        const level = data.level || "good";
        const bestPlatform = data.best_platform || "Belirlenemedi";
        const bestScore = data.best_score ?? 0;
        const status = data.status || "Durum belirlenemedi";
        const icon = data.status_icon || "🚀";
        currentBestPlatform = bestPlatform;
        currentBestScore = bestScore;
        document.getElementById("strategyResult").innerHTML = "V20 analizi alındı. Şimdi V21 Yayın Stratejisi butonuna basabilirsin.";
        document.getElementById("socialCopyResult").innerHTML = "V20 analizi alındı. Önce V21 Yayın Stratejisi, sonra V22 Paylaşım Metni üretebilirsin.";

        let platformHtml = "";

        if(data.platforms && typeof data.platforms === "object"){
            Object.keys(data.platforms).forEach(function(key){
                const p = data.platforms[key];
                platformHtml +=
                    '<div class="platformCard">' +
                        '<div class="platformName">' + htmlEscape(p.name || key) + '</div>' +
                        '<div class="platformScore">' + htmlEscape(p.score ?? 0) + '</div>' +
                        '<div class="platformMini">' +
                            '<strong>Güç:</strong>' +
                            shortList(p.strengths, "Temel potansiyel mevcut.", 1) +
                            '<strong>Öneri:</strong>' +
                            shortList(p.suggestions, "Mevcut haliyle kullanılabilir.", 1) +
                        '</div>' +
                    '</div>';
            });
        }

        box.innerHTML =
            '<div class="platformHeader">' +
                '<div class="platformBest">🏆 ' + htmlEscape(bestPlatform) + ' · ' + htmlEscape(bestScore) + ' / 100</div>' +
                '<div class="platformStatus ' + htmlEscape(level) + '">' + htmlEscape(icon + " " + status) + '</div>' +
            '</div>' +

            '<div class="smartComment">' +
                '🧠 <strong>AI Platform Yorumu:</strong><br>' +
                htmlEscape(data.smart_comment || "") +
            '</div>' +

            '<div class="platformGrid">' +
                platformHtml +
            '</div>';

    }catch(error){
        box.innerHTML = "Bağlantı hatası:<br><br>" + htmlEscape(error.message);
    }
}


function hashtagsToText(items){
    if(!Array.isArray(items) || items.length === 0){
        return "#psikiyatri #ruhsağlığı #özgürözbebit";
    }
    return items.map(function(item){ return htmlEscape(item); }).join(" ");
}

async function generatePublishingStrategy(){
    const box = document.getElementById("strategyResult");
    const topic = document.getElementById("topic").value || "";

    if(topic.trim() === ""){
        alert("Önce içerik konusu gir.");
        return;
    }

    if(currentImageUrl === "" && currentBrandedImageUrl === ""){
        alert("Önce AI görsel üretmelisin.");
        return;
    }

    if(currentBestPlatform === "" || currentBestScore === 0){
        alert("Önce V20 Platform Analizi almalısın.");
        return;
    }

    box.innerHTML = "🧠 V21 yayın stratejisi oluşturuluyor...";

    try{
        const response = await fetch("../api/generate_strategy.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                best_platform: currentBestPlatform,
                best_score: currentBestScore,
                topic: topic,
                title: topic
            })
        });

        const text = await response.text();

        if(!text || text.trim() === ""){
            box.innerHTML = "Sunucudan boş cevap geldi. generate_strategy.php hata veriyor olabilir.";
            return;
        }

        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            box.innerHTML = "JSON olmayan cevap geldi:<br><br><pre>" + htmlEscape(text.substring(0, 1500)) + "</pre>";
            return;
        }

        if(!data.success){
            box.innerHTML = "Yayın stratejisi hatası:<br><br><pre>" + htmlEscape(JSON.stringify(data, null, 2)) + "</pre>";
            return;
        }

        const days = Array.isArray(data.recommended_days) ? data.recommended_days.join(", ") : "Belirlenemedi";
        const hashtags = hashtagsToText(data.hashtags);
        currentStrategyCta = data.cta || "";
        currentStrategyHashtags = Array.isArray(data.hashtags) ? data.hashtags : [];
        currentStrategyTime = data.recommended_time || "";
        currentStrategyDays = Array.isArray(data.recommended_days) ? data.recommended_days : [];
        currentStrategyFormat = data.recommended_format || "";
        currentSocialCopy = "";
        document.getElementById("socialCopyResult").innerHTML = "V21 stratejisi hazır. Şimdi V22 Paylaşım Metni Üret butonuna basabilirsin.";
        document.getElementById("sharePackageResult").innerHTML = "V21 stratejisi hazır. Önce V22 Paylaşım Metni, sonra V23 Paylaşım Paketi oluşturabilirsin.";

        box.innerHTML =
            '<div class="strategyHeader">' +
                '<div class="strategyBest">🏆 ' + htmlEscape(data.best_platform || currentBestPlatform) + ' · ' + htmlEscape(data.best_score ?? currentBestScore) + ' / 100</div>' +
                '<div class="strategyStatus">🔥 ' + htmlEscape(data.performance || "Performans") + '</div>' +
            '</div>' +

            '<div class="smartComment">' +
                '🧠 <strong>AI Direktör Yorumu:</strong><br>' +
                htmlEscape(data.director_comment || "") +
            '</div>' +

            '<div class="strategyGrid">' +
                '<div class="strategyCard">' +
                    '<div class="strategyLabel">⏰ Önerilen Saat</div>' +
                    '<div class="strategyValue">' + htmlEscape(data.recommended_time || "Belirlenemedi") + '</div>' +
                '</div>' +
                '<div class="strategyCard">' +
                    '<div class="strategyLabel">📅 Önerilen Günler</div>' +
                    '<div class="strategyValue">' + htmlEscape(days) + '</div>' +
                '</div>' +
                '<div class="strategyCard">' +
                    '<div class="strategyLabel">🎯 Format</div>' +
                    '<div class="strategyValue">' + htmlEscape(data.recommended_format || "Tek görsel") + '</div>' +
                '</div>' +
                '<div class="strategyCard">' +
                    '<div class="strategyLabel">📈 Tahmini Erişim</div>' +
                    '<div class="strategyValue">' + htmlEscape(data.reach_score ?? 0) + ' / 100</div>' +
                '</div>' +
            '</div>' +

            '<div class="smartComment">' +
                '📝 <strong>Önerilen CTA:</strong><br>' +
                htmlEscape(data.cta || "Daha fazla ruh sağlığı içeriği için takip edebilirsiniz.") +
            '</div>' +

            '<div class="hashtagBox">' +
                '#️⃣ Hashtag Seti:<br>' + hashtags +
            '</div>';

    }catch(error){
        box.innerHTML = "Bağlantı hatası:<br><br>" + htmlEscape(error.message);
    }
}

function copySocialText(){
    const el = document.getElementById("socialCopyText");
    if(!el){
        alert("Kopyalanacak paylaşım metni yok.");
        return;
    }

    const temp = document.createElement("textarea");
    temp.value = el.innerText;
    document.body.appendChild(temp);
    temp.select();
    temp.setSelectionRange(0, 999999);
    document.execCommand("copy");
    document.body.removeChild(temp);

    alert("Paylaşım metni panoya kopyalandı ✅");
}

async function generateSocialCopy(){
    const box = document.getElementById("socialCopyResult");
    const topic = document.getElementById("topic").value || "";
    const platform = currentBestPlatform || "Instagram";

    if(topic.trim() === ""){
        alert("Önce içerik konusu gir.");
        return;
    }

    if(currentImageUrl === "" && currentBrandedImageUrl === ""){
        alert("Önce AI görsel üretmelisin.");
        return;
    }

    

    box.innerHTML = "✍️ V22 platforma özel paylaşım metni oluşturuluyor...";

    try{
        const response = await fetch("../api/generate_social_copy.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                platform: platform,
                topic: topic,
                title: topic,
                cta: currentStrategyCta,
                hashtags: currentStrategyHashtags
            })
        });

        const text = await response.text();

        if(!text || text.trim() === ""){
            box.innerHTML = "Sunucudan boş cevap geldi. generate_social_copy.php hata veriyor olabilir.";
            return;
        }

        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            box.innerHTML = "JSON olmayan cevap geldi:<br><br><pre>" + htmlEscape(text.substring(0, 1500)) + "</pre>";
            return;
        }

        if(!data.success){
            box.innerHTML = "Paylaşım metni hatası:<br><br><pre>" + htmlEscape(JSON.stringify(data, null, 2)) + "</pre>";
            return;
        }

        currentSocialCopy = data.copy || "";
        document.getElementById("sharePackageResult").innerHTML = "V22 paylaşım metni hazır. Şimdi V23 Paylaşım Paketi Oluştur butonuna basabilirsin.";
        document.getElementById("multiPlatformResult").innerHTML = "V22 paylaşım metni hazır. İstersen V24 ile tüm platform paketini tek tuşla hazırlayabilirsin.";

        box.innerHTML =
            '<div class="socialCopyHeader">' +
                '<div class="socialCopyBest">✍️ ' + htmlEscape(data.platform || platform) + ' Paylaşım Metni</div>' +
                '<div class="socialCopyStatus">Hazır ✅</div>' +
            '</div>' +

            '<div id="socialCopyText" class="copyTextBox">' +
                htmlEscape(data.copy || "") +
            '</div>' +

            '<div class="copyActions">' +
                '<button type="button" class="copyButton" onclick="copySocialText()">📋 Paylaşım Metnini Kopyala</button>' +
            '</div>';

    }catch(error){
        box.innerHTML = "Bağlantı hatası:<br><br>" + htmlEscape(error.message);
    }
}


function copyPackageText(elementId, successMessage){
    const el = document.getElementById(elementId);
    if(!el){
        alert("Kopyalanacak paket bilgisi yok.");
        return;
    }

    const temp = document.createElement("textarea");
    temp.value = el.innerText;
    document.body.appendChild(temp);
    temp.select();
    temp.setSelectionRange(0, 999999);
    document.execCommand("copy");
    document.body.removeChild(temp);

    alert(successMessage || "Paket bilgisi panoya kopyalandı ✅");
}

async function generateSharePackage(){
    const box = document.getElementById("sharePackageResult");
    const topic = document.getElementById("topic").value || "";
    const platform = currentBestPlatform || "Instagram";
    const imageUrl = currentBrandedImageUrl !== "" ? currentBrandedImageUrl : currentImageUrl;

    if(topic.trim() === ""){
        alert("Önce içerik konusu gir.");
        return;
    }

    if(imageUrl === ""){
        alert("Önce AI görsel üretmelisin.");
        return;
    }

    if(currentBestPlatform === "" || currentBestScore === 0){
        alert("Önce V20 Platform Analizi almalısın.");
        return;
    }

    if(currentStrategyCta === "" && (!Array.isArray(currentStrategyHashtags) || currentStrategyHashtags.length === 0)){
        alert("Önce V21 Yayın Stratejisi üretmelisin.");
        return;
    }

    if(currentSocialCopy === ""){
        alert("Önce V22 Paylaşım Metni üretmelisin.");
        return;
    }

    box.innerHTML = "📦 V23 paylaşım paketi hazırlanıyor...";

    try{
        const response = await fetch("../api/generate_share_package.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                platform: platform,
                copy: currentSocialCopy,
                cta: currentStrategyCta,
                image_url: imageUrl,
                recommended_time: currentStrategyTime,
                recommended_days: currentStrategyDays,
                recommended_format: currentStrategyFormat,
                hashtags: currentStrategyHashtags
            })
        });

        const text = await response.text();

        if(!text || text.trim() === ""){
            box.innerHTML = "Sunucudan boş cevap geldi. generate_share_package.php hata veriyor olabilir.";
            return;
        }

        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            box.innerHTML = "JSON olmayan cevap geldi:<br><br><pre>" + htmlEscape(text.substring(0, 1500)) + "</pre>";
            return;
        }

        if(!data.success){
            box.innerHTML = "Paylaşım paketi hatası:<br><br><pre>" + htmlEscape(JSON.stringify(data, null, 2)) + "</pre>";
            return;
        }

        const days = data.recommended_days_text || "Belirlenmedi";
        const hashtags = data.hashtags_text || hashtagsToText(data.hashtags);

        box.innerHTML =
            '<div class="sharePackageHeader">' +
                '<div class="sharePackageBest">📦 ' + htmlEscape(data.platform || platform) + ' Paylaşım Paketi</div>' +
                '<div class="sharePackageStatus">Yayına Hazır ✅</div>' +
            '</div>' +

            '<div class="packageGrid">' +
                '<div class="packageCard">' +
                    '<div class="packageLabel">🏆 Platform</div>' +
                    '<div class="packageValue">' + htmlEscape(data.platform || platform) + '</div>' +
                '</div>' +
                '<div class="packageCard">' +
                    '<div class="packageLabel">⏰ Saat</div>' +
                    '<div class="packageValue">' + htmlEscape(data.recommended_time || "Belirlenmedi") + '</div>' +
                '</div>' +
                '<div class="packageCard">' +
                    '<div class="packageLabel">📅 Günler</div>' +
                    '<div class="packageValue">' + htmlEscape(days) + '</div>' +
                '</div>' +
                '<div class="packageCard">' +
                    '<div class="packageLabel">🎯 Format</div>' +
                    '<div class="packageValue">' + htmlEscape(data.recommended_format || "Tek görsel") + '</div>' +
                '</div>' +
            '</div>' +

            '<div class="smartComment">' +
                '🖼️ <strong>Kullanılacak Görsel:</strong><br>' +
                htmlEscape(data.image_url || imageUrl) +
            '</div>' +

            '<div class="packageTextBox" id="shareCopyText">' +
                htmlEscape(data.copy || "") +
            '</div>' +

            '<div class="hashtagBox" id="shareHashtagText">' +
                '#️⃣ Hashtag Seti:<br>' + htmlEscape(hashtags) +
            '</div>' +

            '<div class="packageTextBox" id="fullSharePackageText">' +
                htmlEscape(data.full_package || "") +
            '</div>' +

            '<div class="copyActions">' +
                '<button type="button" class="copyButton" onclick="copyPackageText(\'shareCopyText\', \'Paylaşım metni kopyalandı ✅\')">📋 Metni Kopyala</button>' +
                '<button type="button" class="copyButton" onclick="copyPackageText(\'shareHashtagText\', \'Hashtagler kopyalandı ✅\')">#️⃣ Hashtagleri Kopyala</button>' +
                '<button type="button" class="packageButton" onclick="copyPackageText(\'fullSharePackageText\', \'Paylaşım paketi kopyalandı ✅\')">📦 Paketi Kopyala</button>' +
            '</div>';

    }catch(error){
        box.innerHTML = "Bağlantı hatası:<br><br>" + htmlEscape(error.message);
    }
}


function copyAnyTextById(elementId, successMessage){
    const el = document.getElementById(elementId);
    if(!el){
        alert("Kopyalanacak metin bulunamadı.");
        return;
    }

    const temp = document.createElement("textarea");
    temp.value = el.innerText;
    document.body.appendChild(temp);
    temp.select();
    temp.setSelectionRange(0, 999999);
    document.execCommand("copy");
    document.body.removeChild(temp);

    alert(successMessage || "Metin panoya kopyalandı ✅");
}

function renderPlatformPackageCard(key, platform){
    const safeKey = String(key).replace(/[^a-zA-Z0-9_]/g, "_");
    const copyId = "multiCopy_" + safeKey;

    return '' +
        '<div class="multiCard">' +
            '<div class="multiName">' + htmlEscape(platform.name || key) + '</div>' +
            '<div class="multiMeta">🎯 ' + htmlEscape(platform.format || "Paylaşım") + ' · ⏰ ' + htmlEscape(platform.recommended_time || "") + '</div>' +
            '<div id="' + copyId + '" class="multiCopy">' + htmlEscape(platform.copy || "") + '</div>' +
            '<div class="copyActions">' +
                '<button type="button" class="copyButton" onclick="copyAnyTextById(\'' + copyId + '\', \'' + htmlEscape((platform.name || "Platform") + " metni kopyalandı ✅") + '\')">📋 Metni Kopyala</button>' +
            '</div>' +
        '</div>';
}

async function generateMultiPlatformPackage(){
    const box = document.getElementById("multiPlatformResult");
    const topic = document.getElementById("topic").value || "";
    const imageUrl = currentBrandedImageUrl !== "" ? currentBrandedImageUrl : currentImageUrl;

    if(topic.trim() === ""){
        alert("Önce içerik konusu gir.");
        return;
    }

    if(imageUrl === ""){
        alert("Önce AI görsel üretip mümkünse kurumsallaştırmalısın.");
        return;
    }

    box.innerHTML = "🌐 V24 tüm platform yayın paketi hazırlanıyor...";

    try{
        const response = await fetch("../api/generate_multi_platform_package.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                topic: topic,
                title: topic,
                image_url: imageUrl,
                cta: currentStrategyCta,
                hashtags: currentStrategyHashtags
            })
        });

        const text = await response.text();

        if(!text || text.trim() === ""){
            box.innerHTML = "Sunucudan boş cevap geldi. generate_multi_platform_package.php hata veriyor olabilir.";
            return;
        }

        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            box.innerHTML = "JSON olmayan cevap geldi:<br><br><pre>" + htmlEscape(text.substring(0, 1500)) + "</pre>";
            return;
        }

        if(!data.success){
            box.innerHTML = "Tüm platform paketi hatası:<br><br><pre>" + htmlEscape(JSON.stringify(data, null, 2)) + "</pre>";
            return;
        }

        let cards = "";
        if(data.platforms && typeof data.platforms === "object"){
            Object.keys(data.platforms).forEach(function(key){
                cards += renderPlatformPackageCard(key, data.platforms[key]);
            });
        }

        box.innerHTML =
            '<div class="multiPlatformHeader">' +
                '<div class="multiPlatformBest">🌐 Tüm Platform Yayın Paketi</div>' +
                '<div class="multiPlatformStatus">Hazır ✅</div>' +
            '</div>' +

            '<div class="smartComment">' +
                '🖼️ <strong>Kullanılacak Görsel:</strong><br>' +
                htmlEscape(data.image_url || imageUrl) +
            '</div>' +

            '<div class="hashtagBox" id="multiHashtagText">' +
                '#️⃣ Ortak Hashtag Seti:<br>' + htmlEscape(data.hashtags_text || "") +
            '</div>' +

            '<div class="multiGrid">' +
                cards +
            '</div>' +

            '<h3>🎬 Short Video Promptu</h3>' +
            '<div id="shortVideoPromptText" class="shortPromptBox">' +
                htmlEscape(data.short_video_prompt || "") +
            '</div>' +

            '<h3>📦 Tam Paket</h3>' +
            '<div id="multiFullPackageText" class="packageTextBox">' +
                htmlEscape(data.full_package || "") +
            '</div>' +

            '<div class="copyActions">' +
                '<button type="button" class="copyButton" onclick="copyAnyTextById(\'multiHashtagText\', \'Hashtag seti kopyalandı ✅\')">#️⃣ Hashtagleri Kopyala</button>' +
                '<button type="button" class="copyButton" onclick="copyAnyTextById(\'shortVideoPromptText\', \'Short video promptu kopyalandı ✅\')">🎬 Short Promptu Kopyala</button>' +
                '<button type="button" class="packageButton" onclick="copyAnyTextById(\'multiFullPackageText\', \'Tüm platform paketi kopyalandı ✅\')">📦 Tüm Paketi Kopyala</button>' +
            '</div>';

    }catch(error){
        box.innerHTML = "Bağlantı hatası:<br><br>" + htmlEscape(error.message);
    }
}

async function sendToPublishCenter(){

    const topic = document.getElementById("topic").value || "";

    const imageUrl =
        currentBrandedImageUrl && currentBrandedImageUrl.trim() !== ""
        ? currentBrandedImageUrl.trim()
        : currentImageUrl.trim();

    const customCopy =
    document.getElementById("customSocialCopy")
    ? document.getElementById("customSocialCopy").value.trim()
    : "";

let postText = "";

if(customCopy !== ""){
    postText = customCopy;
}
else if(currentSocialCopy && currentSocialCopy.trim() !== ""){
    postText = currentSocialCopy.trim();
}
else{
    postText = topic.trim();
}

    if(postText === ""){
        alert("Önce paylaşım metni üret.");
        return;
    }

    if(imageUrl === ""){
        alert("Kurumsal görsel bulunamadı. Önce Görsel Üret ve Kurumsallaştır yap.");
        return;
    }

    try{
        const response = await fetch("../api/send_to_publish_center.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                post_text: postText,
                image_url: imageUrl
            })
        });

        const text = await response.text();
        let data;

        try{
            data = JSON.parse(text);
        }catch(e){
            alert("JSON olmayan cevap:\n\n" + text);
            return;
        }

        if(data.success){
            alert("🚀 Yayın merkezine gönderildi.\n\n" + data.count + " adet yayın oluşturuldu.");
            window.location.href = "publish.php";
        }else{
            alert(data.message || "Gönderim başarısız.");
        }

    }catch(error){
        alert("Bağlantı hatası:\n\n" + error.message);
    }
}
async function publishAllNow(){

    const topic = document.getElementById("topic").value || "";
    const selectedPlatforms = Array.from(document.querySelectorAll(".publishPlatform:checked"))
    .map(function(el){ return el.value; });

if(selectedPlatforms.length === 0){
    alert("En az bir platform seçmelisin.");
    return;
}

    const rawImageUrl =
    currentBrandedImageUrl && currentBrandedImageUrl.trim() !== ""
    ? currentBrandedImageUrl.trim()
    : currentImageUrl.trim();

const imageUrl = makeAbsoluteUrl(rawImageUrl);

const customCopy =
    document.getElementById("customSocialCopy")
    ? document.getElementById("customSocialCopy").value.trim()
    : "";

let postText = "";

if(customCopy !== ""){
    postText = customCopy;
}
else if(currentSocialCopy && currentSocialCopy.trim() !== ""){
    postText = currentSocialCopy.trim();
}
else{
    postText = topic.trim();
}
    if(postText === ""){
        alert("Önce konu veya paylaşım metni üret.");
        return;
    }

    if(imageUrl === ""){
        alert("Instagram için görsel zorunlu. Önce görsel üret ve mümkünse kurumsallaştır.");
        return;
    }

    if(!confirm(selectedPlatforms.join(" + ") + " platformlarına yayınlansın mı?")){
    return;
}

    const oldStatus = document.getElementById("imageStatus").innerText;
    document.getElementById("imageStatus").innerText =
    "🚀 " + selectedPlatforms.join(" + ") + " yayınlanıyor...";

    try{
        const formData = new FormData();
        formData.append("post_text", postText);
        formData.append("image_url", imageUrl);
        formData.append("platforms", JSON.stringify(selectedPlatforms));

        const response = await fetch("../api/publish_multi.php",{
            method:"POST",
            body:formData
        });

        const text = await response.text();

        let data;
        try{
            data = JSON.parse(text);
        }catch(e){
            document.getElementById("imageStatus").innerText = oldStatus;
            alert("JSON olmayan cevap geldi:\n\n" + text.substring(0, 1500));
            return;
        }

        document.getElementById("imageStatus").innerText = "✅ Çoklu yayın işlemi tamamlandı.";

        let msg = "🚀 Çoklu yayın sonucu:\n\n";

        if(data.results && Array.isArray(data.results)){
            data.results.forEach(function(item){
                const ok = item.response && item.response.success;
                msg += (ok ? "✅ " : "❌ ") + item.platform + "\n";

                if(item.response && item.response.message){
                    msg += "   " + item.response.message + "\n";
                }

                if(item.response && item.response.post_id){
                    msg += "   Post ID: " + item.response.post_id + "\n";
                }

                if(item.error){
                    msg += "   Hata: " + item.error + "\n";
                }

                msg += "\n";
            });
        }else{
            msg += JSON.stringify(data, null, 2);
        }

        alert(msg);

    }catch(error){
        document.getElementById("imageStatus").innerText = oldStatus;
        alert("Bağlantı hatası:\n\n" + error.message);
    }
}
function makeAbsoluteUrl(url){
    url = (url || "").trim();

    if(url === ""){
        return "";
    }

    if(url.startsWith("http://") || url.startsWith("https://")){
        return url;
    }

    if(url.startsWith("/")){
        return window.location.origin + url;
    }

    return window.location.origin + "/" + url.replace(/^(\.\.\/)+/, "");
}
function saveCustomSocialCopy(){
    const box = document.getElementById("customSocialCopy");

    if(!box){
        alert("Kendi paylaşım metni alanı bulunamadı.");
        return;
    }

    const text = box.value.trim();

    if(text === ""){
        alert("Önce kendi paylaşım metnini yaz.");
        return;
    }

    currentSocialCopy = text;

    const socialBox = document.getElementById("socialCopyResult");
    if(socialBox){
        socialBox.innerHTML =
            '<div class="socialCopyHeader">' +
                '<div class="socialCopyBest">✍️ Manuel Paylaşım Metni</div>' +
                '<div class="socialCopyStatus">Kullanılacak ✅</div>' +
            '</div>' +
            '<div id="socialCopyText" class="copyTextBox">' +
                htmlEscape(text) +
            '</div>';
    }

    alert("Kendi paylaşım metnin kaydedildi ✅ V27 bunu kullanacak.");
}
function saveCustomSocialCopy(){

    const box = document.getElementById("customSocialCopy");

    if(!box){
        alert("Alan bulunamadı.");
        return;
    }

    const text = box.value.trim();

    if(text === ""){
        alert("Önce paylaşım metni yaz.");
        return;
    }

    currentSocialCopy = text;

    alert("Manuel paylaşım metni kaydedildi ✅");
}
async function uploadManualPostImage(){

    const input = document.getElementById("manualPostImage");
    const preview = document.getElementById("imagePreview");

    if(!input || !input.files || input.files.length === 0){
        alert("Önce bir fotoğraf seç.");
        return;
    }

    const formData = new FormData();
    formData.append("image", input.files[0]);

    document.getElementById("imageStatus").innerText = "📤 Fotoğraf yükleniyor...";

    try{
        const response = await fetch("../api/upload_post_image.php",{
            method:"POST",
            body:formData
        });

        const text = await response.text();

        let data;
        try{
            data = JSON.parse(text);
        }catch(e){
            alert("JSON olmayan cevap geldi:\n\n" + text.substring(0,1500));
            return;
        }

        if(!data.success || !data.image_url){
            alert("Yükleme hatası:\n\n" + JSON.stringify(data, null, 2));
            return;
        }

        currentImageUrl = data.image_url;
        currentBrandedImageUrl = "";

        document.getElementById("imageStatus").innerText = "✅ Kendi fotoğrafın yüklendi. V27 yayınında bu fotoğraf kullanılacak.";

        preview.innerHTML =
            '<img src="' + data.image_url + '" alt="Yüklenen Fotoğraf">' +
            '<br><a class="download" href="' + data.image_url + '" target="_blank">🔗 Fotoğrafı Aç</a>';

        alert("Fotoğraf yüklendi ✅ Artık V22 metin yazıp V27 ile yayınlayabilirsin.");

    }catch(error){
        alert("Bağlantı hatası:\n\n" + error.message);
    }
}
async function uploadMultiplePostImages(){

    const input = document.getElementById("manualPostImages");
    const gallery = document.getElementById("multiImageGallery");
    const preview = document.getElementById("imagePreview");

    if(!input || !input.files || input.files.length === 0){
        alert("Önce bir veya daha fazla fotoğraf seç.");
        return;
    }

    const formData = new FormData();

    for(let i = 0; i < input.files.length; i++){
        formData.append("images[]", input.files[i]);
    }

    document.getElementById("imageStatus").innerText = "🖼️ Fotoğraflar yükleniyor...";

    try{
        const response = await fetch("../api/upload_post_images.php",{
            method:"POST",
            body:formData
        });

        const text = await response.text();

        let data;
        try{
            data = JSON.parse(text);
        }catch(e){
            alert("JSON olmayan cevap geldi:\n\n" + text.substring(0,2000));
            return;
        }

        if(!data.success || !data.images || data.images.length === 0){
            alert("Çoklu yükleme hatası:\n\n" + JSON.stringify(data, null, 2));
            return;
        }

        document.getElementById("imageStatus").innerText =
            "✅ " + data.images.length + " fotoğraf yüklendi. Aşağıdan kullanmak istediğini seç.";

        currentImageUrls = data.images.map(function(img){
    return img.image_url;
});

renderSortableGallery();

        currentImageUrl = data.images[0].image_url;
        currentBrandedImageUrl = "";
currentImageUrls = data.images.map(function(img){
    return img.image_url;
});
        preview.innerHTML =
            '<img src="' + currentImageUrl + '" alt="Seçilen Fotoğraf">' +
            '<br><a class="download" href="' + currentImageUrl + '" target="_blank">🔗 Seçilen Fotoğrafı Aç</a>';

        alert("Fotoğraflar yüklendi ✅ İlk fotoğraf seçildi. İstersen galeriden başka fotoğraf seç.");

    }catch(error){
        alert("Bağlantı hatası:\n\n" + error.message);
    }
}

function useUploadedGalleryImage(url){

    if(!url || url.trim() === ""){
        alert("Fotoğraf URL bulunamadı.");
        return;
    }

    currentImageUrl = url.trim();
    currentBrandedImageUrl = "";

    const preview = document.getElementById("imagePreview");

    document.getElementById("imageStatus").innerText =
        "✅ Seçtiğin fotoğraf V27 yayınında kullanılacak.";

    preview.innerHTML =
        '<img src="' + currentImageUrl + '" alt="Seçilen Fotoğraf">' +
        '<br><a class="download" href="' + currentImageUrl + '" target="_blank">🔗 Seçilen Fotoğrafı Aç</a>';

    alert("Bu fotoğraf seçildi ✅ V27 bunu kullanacak.");
}
async function publishInstagramCarouselNow(){

    const customCopy =
        document.getElementById("customSocialCopy")
        ? document.getElementById("customSocialCopy").value.trim()
        : "";

    const topic = document.getElementById("topic").value || "";

    let postText = "";

    if(customCopy !== ""){
        postText = customCopy;
    }
    else if(currentSocialCopy && currentSocialCopy.trim() !== ""){
        postText = currentSocialCopy.trim();
    }
    else{
        postText = topic.trim();
    }

    if(postText === ""){
        alert("Önce paylaşım metni yaz veya konu gir.");
        return;
    }

    if(!Array.isArray(currentImageUrls) || currentImageUrls.length < 2){
        alert("Carousel için en az 2 fotoğraf yüklemelisin.");
        return;
    }

    if(!confirm(currentImageUrls.length + " fotoğraf Instagram carousel olarak yayınlansın mı?")){
        return;
    }

    document.getElementById("imageStatus").innerText = "🎞️ Instagram carousel yayınlanıyor...";

    try{
        const formData = new FormData();
        formData.append("post_text", postText);
        formData.append("image_urls", JSON.stringify(currentImageUrls));

        const response = await fetch("../api/publish_instagram_carousel.php", {
            method: "POST",
            body: formData
        });

        const text = await response.text();

        let data;
        try{
            data = JSON.parse(text);
        }catch(e){
            alert("JSON olmayan cevap geldi:\n\n" + text.substring(0,3000));
            return;
        }

        if(data.success){
            document.getElementById("imageStatus").innerText =
                "✅ Instagram carousel yayınlandı. Post ID: " + data.post_id;

            alert("Instagram carousel yayınlandı ✅\nPost ID: " + data.post_id);
        }else{
            document.getElementById("imageStatus").innerText =
                "❌ Instagram carousel hatası.";

            alert("Carousel hatası:\n\n" + JSON.stringify(data, null, 2).substring(0,3000));
        }

    }catch(error){
        alert("Bağlantı hatası:\n\n" + error.message);
    }
}
function renderSortableGallery(){
    const gallery = document.getElementById("multiImageGallery");

    if(!gallery){
        return;
    }

    if(!Array.isArray(currentImageUrls) || currentImageUrls.length === 0){
        gallery.innerHTML = "";
        return;
    }

    let html = `
        <div class="carouselSortInfo">
            🎞️ Instagram carousel sırası: Fotoğrafları sürükleyip bırakarak sırayı değiştirebilirsin.
            İlk fotoğraf kapak olarak görünür.
        </div>
        <div id="sortableGallery" class="multiSortGrid">
    `;

    currentImageUrls.forEach(function(url, index){
        html += `
            <div class="multiSortItem" draggable="true" data-index="${index}">
                <div class="sortBadge">${index + 1}</div>
                <img src="${url}">
                <div class="sortHint">Sürükle · ${index + 1}. foto</div>
                <button type="button"
                        style="margin-top:8px;width:100%;background:#16a34a;"
                        onclick="useUploadedGalleryImage('${url}')">
                    ✅ Bu Fotoğrafı Kapak Yap
                </button>
            </div>
        `;
    });

    html += `</div>`;

    gallery.innerHTML = html;
    activateSortableGallery();
}

function activateSortableGallery(){
    const sortable = document.getElementById("sortableGallery");

    if(!sortable){
        return;
    }

    let draggedIndex = null;

    sortable.querySelectorAll(".multiSortItem").forEach(function(item){
        item.addEventListener("dragstart", function(){
            draggedIndex = parseInt(this.dataset.index, 10);
            this.classList.add("dragging");
        });

        item.addEventListener("dragend", function(){
            this.classList.remove("dragging");
        });

        item.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        item.addEventListener("drop", function(e){
            e.preventDefault();

            const targetIndex = parseInt(this.dataset.index, 10);

            if(draggedIndex === null || draggedIndex === targetIndex){
                return;
            }

            const moved = currentImageUrls.splice(draggedIndex, 1)[0];
            currentImageUrls.splice(targetIndex, 0, moved);

            currentImageUrl = currentImageUrls[0] || "";
            currentBrandedImageUrl = "";

            const preview = document.getElementById("imagePreview");
            if(preview && currentImageUrl){
                preview.innerHTML =
                    '<img src="' + currentImageUrl + '" alt="Seçilen Fotoğraf">' +
                    '<br><a class="download" href="' + currentImageUrl + '" target="_blank">🔗 Kapak Fotoğrafı Aç</a>';
            }

            document.getElementById("imageStatus").innerText =
                "✅ Carousel sırası güncellendi. 1. fotoğraf kapak olacak.";

            renderSortableGallery();
        });
    });
}


function toggleWorkflow(id){
    document.querySelectorAll(".workflowSection").forEach(function(section){
        if(section.id === id){
            section.style.display = (section.style.display === "block") ? "none" : "block";
        }else{
            section.style.display = "none";
        }
    });
}

</script>

</body>
</html>