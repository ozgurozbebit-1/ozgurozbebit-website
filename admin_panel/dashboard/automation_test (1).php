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
<title>Tek Tuş Otomasyon Merkezi</title>
<style>
:root{
--bg:#eef4f7;
--ink:#0f172a;
--muted:#64748b;
--line:#d7e4e8;
--white:#ffffff;
--teal:#009688;
--teal2:#00b3a4;
--navy:#062a3d;
--navy2:#0b3f5c;
--purple:#7c3aed;
--pink:#db2777;
--green:#16a34a;
--shadow:0 22px 55px rgba(15,23,42,.10);
--shadow2:0 10px 28px rgba(15,23,42,.08);
--radius:22px;
}
*{box-sizing:border-box}
body{
margin:0;
font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
color:var(--ink);
background:
radial-gradient(circle at 18% 0%, rgba(0,150,136,.16), transparent 28%),
radial-gradient(circle at 96% 16%, rgba(124,58,237,.12), transparent 30%),
linear-gradient(135deg,#f8fbfc 0%,#eaf3f6 100%);
}
/* TOP BAR */
.header{
height:76px;
padding:0 28px;
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;
top:0;
z-index:50;
background:rgba(255,255,255,.82);
backdrop-filter:blur(18px);
border-bottom:1px solid rgba(215,228,232,.85);
box-shadow:0 8px 28px rgba(15,23,42,.06);
}
.logo{
font-size:22px;
font-weight:950;
letter-spacing:-.45px;
color:#063b3a;
}
.badge{
display:inline-flex;
align-items:center;
margin-left:10px;
padding:9px 14px;
border-radius:999px;
font-weight:950;
color:#053b3b;
background:linear-gradient(135deg,#b8fff5,#e8fffb);
border:1px solid rgba(0,150,136,.22);
}
/* LAYOUT */
.layout{
display:flex;
align-items:flex-start;
}
.sidebar{
width:278px;
min-width:278px;
height:calc(100vh - 76px);
position:sticky;
top:76px;
padding:20px 14px;
overflow:auto;
background:linear-gradient(180deg,#071f2d 0%,#0a3448 100%);
box-shadow:18px 0 38px rgba(7,31,45,.14);
}
.menu{
padding:0;
}
.menu a{
display:flex;
align-items:center;
gap:11px;
padding:15px 15px;
margin-bottom:8px;
border-radius:16px;
text-decoration:none;
color:rgba(255,255,255,.78);
font-weight:850;
line-height:1.25;
white-space:normal;
border:1px solid transparent;
transition:.18s ease;
}
.menu a:hover{
background:rgba(255,255,255,.08);
color:#fff;
transform:translateX(3px);
}
.menu a.active{
color:#052526;
background:linear-gradient(135deg,#7fffea,#30dccd);
border-color:rgba(255,255,255,.35);
box-shadow:0 14px 32px rgba(0,179,164,.25);
}
.main{
flex:1;
padding:30px;
max-width:1540px;
}
/* CARDS */
.card{
position:relative;
background:rgba(255,255,255,.90);
border:1px solid rgba(215,228,232,.9);
border-radius:var(--radius);
padding:24px;
margin-bottom:24px;
box-shadow:var(--shadow2);
overflow:hidden;
}
.card:hover{
box-shadow:var(--shadow);
}
/* HERO FIRST CARD */
.main > .card:first-child{
min-height:245px;
padding:30px;
color:#fff;
background:
linear-gradient(135deg,rgba(6,42,61,.96),rgba(0,150,136,.92)),
radial-gradient(circle at 80% 10%,rgba(255,255,255,.22),transparent 28%);
border:0;
box-shadow:0 28px 68px rgba(6,42,61,.22);
}
.main > .card:first-child:before{
content:"";
position:absolute;
width:360px;
height:360px;
right:-100px;
top:-140px;
border-radius:50%;
background:rgba(255,255,255,.12);
}
.main > .card:first-child:after{
content:"";
position:absolute;
width:220px;
height:220px;
right:140px;
bottom:-150px;
border-radius:50%;
background:rgba(255,255,255,.10);
}
.main > .card:first-child h2{
color:#fff;
font-size:30px;
letter-spacing:-.7px;
position:relative;
z-index:1;
}
.main > .card:first-child .tip{
position:relative;
z-index:1;
max-width:920px;
background:rgba(255,255,255,.12);
color:#eafffb;
border:1px solid rgba(255,255,255,.18);
backdrop-filter:blur(8px);
}
.main > .card:first-child label{
color:#d9fffa;
position:relative;
z-index:1;
}
.main > .card:first-child input{
position:relative;
z-index:1;
background:rgba(255,255,255,.96);
border:0;
min-height:52px;
font-size:16px;
}
.main > .card:first-child button{
position:relative;
z-index:1;
}
/* TYPOGRAPHY */
h2{
margin:0 0 17px;
color:#102a43;
font-size:22px;
font-weight:950;
letter-spacing:-.35px;
}
label{
display:block;
margin:8px 0 0;
color:#153c4a;
font-weight:900;
}
.tip{
background:#eefafa;
border:1px solid #d7eeee;
color:#23464e;
padding:15px 16px;
border-radius:16px;
line-height:1.65;
}
/* FORM */
input,textarea{
width:100%;
padding:15px 16px;
margin-top:9px;
margin-bottom:16px;
border:1px solid #cddfe4;
border-radius:15px;
background:#fbfeff;
color:#0f172a;
font-size:14px;
outline:none;
transition:.18s ease;
}
textarea{
min-height:115px;
resize:vertical;
}
input:focus,textarea:focus{
border-color:var(--teal);
box-shadow:0 0 0 5px rgba(0,150,136,.13);
background:#fff;
}
/* BUTTONS */
button{
border:0;
padding:13px 18px;
border-radius:15px;
color:#fff;
font-weight:950;
cursor:pointer;
margin-right:8px;
margin-bottom:8px;
background:linear-gradient(135deg,var(--teal),var(--teal2));
box-shadow:0 12px 24px rgba(0,150,136,.22);
transition:.16s ease;
}
button:hover{
transform:translateY(-2px);
box-shadow:0 18px 34px rgba(0,150,136,.28);
}
button:active{
transform:translateY(0);
}
button.smart{
background:linear-gradient(135deg,#6d28d9,#a855f7);
box-shadow:0 12px 26px rgba(124,58,237,.28);
}
button.brand{
background:linear-gradient(135deg,#063f5c,#0b6b91);
box-shadow:0 12px 26px rgba(6,63,92,.26);
}
button.publish{
background:linear-gradient(135deg,#15803d,#22c55e);
box-shadow:0 12px 26px rgba(22,163,74,.25);
}
button.story{
background:linear-gradient(135deg,#be185d,#ec4899);
box-shadow:0 12px 26px rgba(219,39,119,.25);
}
/* OUTPUTS */
.output{
min-height:165px;
background:#fbfeff;
border:1px solid #d6e6ea;
border-radius:18px;
padding:18px;
white-space:pre-wrap;
line-height:1.65;
color:#18323c;
box-shadow:inset 0 1px 0 rgba(255,255,255,.9);
}
.compactOutput{
min-height:145px;
max-height:270px;
overflow:auto;
font-size:13px;
}
/* DASHBOARD GRID */
.topGrid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:22px;
margin-bottom:24px;
}
.topGrid .card{
min-height:260px;
margin-bottom:0;
}
.topGrid .card:before{
content:"";
position:absolute;
left:0;
top:0;
width:100%;
height:5px;
background:linear-gradient(90deg,var(--teal),var(--purple));
}
.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:22px;
}
.statusLine{
padding:12px 14px;
border-radius:14px;
background:#f8fafc;
border:1px solid #e2e8f0;
margin-bottom:9px;
font-weight:800;
}
.ok{background:#dcfce7;color:#166534;border-color:#bbf7d0}
.wait{background:#fef9c3;color:#854d0e;border-color:#fde68a}
.bad{background:#fee2e2;color:#991b1b;border-color:#fecaca}
.platformBox{
background:
linear-gradient(135deg,rgba(6,42,61,.97),rgba(0,150,136,.92)),
radial-gradient(circle at 90% 0%,rgba(255,255,255,.18),transparent 28%);
border:0;
border-radius:22px;
padding:20px;
margin-top:18px;
color:white;
box-shadow:0 22px 44px rgba(6,42,61,.18);
}
.platformBox strong{
display:block;
font-size:18px;
margin-bottom:14px;
letter-spacing:-.2px;
}
.platformBox label{
display:inline-flex;
align-items:center;
justify-content:center;
gap:10px;
min-width:150px;
min-height:54px;
padding:13px 16px;
margin:0 10px 12px 0;
font-weight:950;
border-radius:16px;
background:rgba(255,255,255,.12);
border:1px solid rgba(255,255,255,.20);
color:#f4fffd;
cursor:pointer;
box-shadow:inset 0 1px 0 rgba(255,255,255,.12);
transition:.16s ease;
}
.platformBox label:hover{
transform:translateY(-1px);
background:rgba(255,255,255,.18);
}
.platformBox input[type="checkbox"]{
width:22px !important;
height:22px !important;
margin:0 !important;
accent-color:#22c55e;
cursor:pointer;
}
.platformBox label:has(input[value="facebook"]){
background:linear-gradient(135deg,rgba(24,119,242,.76),rgba(24,119,242,.42));
}
.platformBox label:has(input[value="instagram"]){
background:linear-gradient(135deg,rgba(219,39,119,.78),rgba(124,58,237,.48));
}
.platformBox label:has(input[value="linkedin"]){
background:linear-gradient(135deg,rgba(10,102,194,.78),rgba(6,63,92,.52));
}
.platformBox button.publish{
width:100%;
min-height:58px;
margin-top:8px;
font-size:15px;
border-radius:18px;
background:linear-gradient(135deg,#22c55e,#10b981);
box-shadow:0 18px 34px rgba(16,185,129,.28);
}
/* Görsel alanı düzeni */
.imageActionRow{
display:grid;
grid-template-columns:1fr 1fr;
gap:18px;
margin:24px 0 20px;
}
.premiumActionBtn{
width:100%;
min-height:72px;
margin:0 !important;
display:flex;
align-items:center;
justify-content:center;
border-radius:22px;
font-size:20px;
font-weight:950;
cursor:pointer;
transition:.22s ease;
color:white;
border:0;
text-align:center;
box-shadow:0 20px 45px rgba(0,0,0,.14);
}
.createBtn{
background:linear-gradient(135deg,#0b4f74,#1380b9);
}
.uploadBtn{
background:linear-gradient(135deg,#009688,#00c4b3);
}
.createBtn:hover,
.uploadBtn:hover{
transform:translateY(-3px);
box-shadow:0 30px 60px rgba(0,0,0,.18);
}
.uploadBtn input{
display:none;
}
.visualSettingsCard{
align-self:start;
}
.visualSettingsCard .tip{
margin:0;
}
.visualButtonRow{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:13px;
margin-top:17px;
}
.visualButtonRow button{
width:100%;
min-height:58px;
margin:0 !important;
border-radius:17px;
}
@media(max-width:1200px){
.imageActionRow,
.visualButtonRow{
grid-template-columns:1fr;
}
}
.preview img{
max-width:100%;
border-radius:20px;
border:1px solid #d6e6ea;
margin-top:16px;
box-shadow:var(--shadow2);
}
.download{
display:inline-block;
margin-top:12px;
padding:13px 17px;
border-radius:15px;
color:#fff;
text-decoration:none;
font-weight:950;
background:linear-gradient(135deg,var(--teal),var(--teal2));
box-shadow:0 12px 24px rgba(0,150,136,.22);
}
.download.secondary{background:linear-gradient(135deg,#063f5c,#0b6b91)}
.download.story{background:linear-gradient(135deg,#be185d,#ec4899)}
::-webkit-scrollbar{width:10px;height:10px}
::-webkit-scrollbar-track{background:#e7f1f4}
::-webkit-scrollbar-thumb{background:#8fbfc4;border-radius:999px}
@media(max-width:1200px){
.topGrid{grid-template-columns:1fr}
.grid{grid-template-columns:1fr}
}
@media(max-width:900px){
.header{height:auto;position:relative;display:block;padding:18px}
.layout{display:block}
.sidebar{width:auto;min-width:auto;height:auto;position:relative;top:auto;padding:14px;background:#071f2d}
.main{padding:16px}
.main > .card:first-child{min-height:auto}
button{width:100%;margin-right:0}
}
/* Scroll kontrollü çıktı kutuları */
#contentResult{
max-height:520px;
min-height:360px;
overflow-y:auto;
overflow-x:hidden;
padding-right:22px;
}
#visualResult{
max-height:92px;
min-height:92px;
overflow-y:auto;
overflow-x:hidden;
padding-right:22px;
}
#contentResult::-webkit-scrollbar,
#visualResult::-webkit-scrollbar{
width:12px;
}
#contentResult::-webkit-scrollbar-track,
#visualResult::-webkit-scrollbar-track{
background:#eef7f7;
border-radius:999px;
}
#contentResult::-webkit-scrollbar-thumb,
#visualResult::-webkit-scrollbar-thumb{
background:linear-gradient(180deg,#00b3a4,#0b6b91);
border-radius:999px;
border:3px solid #eef7f7;
}
#contentResult,
#visualResult{
scrollbar-width:thin;
scrollbar-color:#0b6b91 #eef7f7;
}
/* 10 satır scroll ve yayın kokpiti taşıma */
#contentResult,
#shortsResult{
max-height:300px;
min-height:300px;
overflow-y:auto;
overflow-x:hidden;
padding-right:22px;
}
#contentResult::-webkit-scrollbar,
#shortsResult::-webkit-scrollbar{
width:12px;
}
#contentResult::-webkit-scrollbar-track,
#shortsResult::-webkit-scrollbar-track{
background:#eef7f7;
border-radius:999px;
}
#contentResult::-webkit-scrollbar-thumb,
#shortsResult::-webkit-scrollbar-thumb{
background:linear-gradient(180deg,#00b3a4,#0b6b91);
border-radius:999px;
border:3px solid #eef7f7;
}
#contentResult,
#shortsResult{
scrollbar-width:thin;
scrollbar-color:#0b6b91 #eef7f7;
}
.visualSettingsCard .platformBox{
margin-top:18px;
}
/* Hero açıklama kaldırıldı, üst kart kompaktlaştırıldı */
.main > .card:first-child{
min-height:190px;
}
/* Premium sağ üst kullanıcı alanı */
.welcomeUser{
display:flex;
align-items:center;
gap:8px;
font-size:18px;
font-weight:700;
color:#5b6b7b;
}
.userName{
font-size:23px;
font-weight:950;
color:#16324f;
letter-spacing:.2px;
text-shadow:0 1px 2px rgba(0,0,0,.08);
}
/* V40 Sekmeli Sonuç Merkezi */
.resultTabsCard{padding:0;overflow:hidden}
.tabsHeader{display:flex;gap:10px;flex-wrap:wrap;padding:18px;background:linear-gradient(135deg,#fff,#f7fbfc);border-bottom:1px solid #d7e4e8}
.tabBtn{background:#f3f8fa;color:#16324f;box-shadow:none;border:1px solid #d7e4e8;min-height:48px;margin:0!important;padding:12px 18px;border-radius:999px}
.tabBtn:hover{transform:translateY(-1px);background:#eaf7f7;box-shadow:0 10px 22px rgba(15,23,42,.08)}
.tabBtn.active{background:linear-gradient(135deg,#062a3d,#0b6b91);color:#fff;border-color:transparent;box-shadow:0 14px 28px rgba(6,42,61,.20)}
.tabPane{display:none;padding:24px}
.tabPane.active{display:block}
.tabPane h2{margin-bottom:18px}
.tabTwoColumn{display:grid;grid-template-columns:1fr 1fr;gap:22px;align-items:start}
.tabSectionTitle{font-size:13px;letter-spacing:.12em;color:#64748b;font-weight:950;text-transform:uppercase;margin-bottom:6px}
.resultTabsCard .output{margin-top:0}
button.smart,button.story{background:linear-gradient(135deg,#063f5c,#0b6b91);box-shadow:0 12px 26px rgba(6,63,92,.22)}
.topGrid .card:before{background:linear-gradient(90deg,#0b6b91,#00b3a4)}
@media(max-width:1200px){.tabTwoColumn{grid-template-columns:1fr}}
@media(max-width:900px){.tabsHeader{display:grid;grid-template-columns:1fr 1fr}.tabBtn{width:100%}}
/* V50.1 FINAL: Sekmeler büyük, görsel aksiyon butonları küçük */
.tabsHeader{
gap:16px!important;
padding:22px 24px!important;
}
.tabBtn{
min-height:72px!important;
padding:18px 30px!important;
font-size:19px!important;
font-weight:900!important;
border-radius:22px!important;
letter-spacing:-.15px!important;
display:inline-flex!important;
align-items:center!important;
justify-content:center!important;
}
.tabBtn.active{
transform:translateY(-2px)!important;
box-shadow:0 14px 30px rgba(6,42,61,.22)!important;
}
.imageActionRow{
grid-template-columns:repeat(2,minmax(0,1fr))!important;
gap:14px!important;
margin:16px 0 14px!important;
max-width:820px!important;
}
.premiumActionBtn{
min-height:40px!important;
height:40px!important;
border-radius:13px!important;
font-size:14px!important;
font-weight:750!important;
padding:0 16px!important;
box-shadow:0 8px 18px rgba(15,23,42,.08)!important;
}
.premiumActionBtn:hover{
transform:translateY(-1px)!important;
box-shadow:0 10px 22px rgba(15,23,42,.10)!important;
}
@media(max-width:900px){
.tabsHeader{
grid-template-columns:1fr 1fr!important;
gap:12px!important;
}
.tabBtn{
min-height:64px!important;
font-size:18px!important;
padding:15px 18px!important;
}
.imageActionRow{
grid-template-columns:1fr!important;
max-width:none!important;
}
}
/* V50.4 FINAL: Carousel geri yükleme + yayın sonuç paneli */
.carouselPreviewGrid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(140px,1fr));
gap:14px;
margin-top:16px;
}
.carouselPreviewGrid img{
width:100%;
max-width:190px;
border-radius:16px;
border:1px solid #d6e6ea;
box-shadow:0 10px 24px rgba(15,23,42,.08);
}
.carouselDownloadAllBtn{
display:inline-flex;
align-items:center;
justify-content:center;
min-height:46px;
margin-top:14px;
margin-right:10px;
padding:0 18px;
border-radius:14px;
color:#fff;
text-decoration:none;
font-weight:850;
font-size:14px;
background:linear-gradient(135deg,#063f5c,#0b6b91);
box-shadow:0 10px 22px rgba(6,63,92,.18);
}
.carouselSlideDownload{
display:inline-flex;
align-items:center;
justify-content:center;
min-height:36px;
margin-top:8px;
padding:0 12px;
border-radius:11px;
color:#fff;
text-decoration:none;
font-weight:800;
font-size:12px;
background:linear-gradient(135deg,#0f766e,#14b8a6);
}
.carouselPreviewGrid > div{
text-align:center;
}
.carouselSlideText{
background:#f8fbfc;
border:1px solid #d7e4e8;
border-radius:14px;
padding:12px 14px;
margin:8px 0;
font-size:13px;
line-height:1.45;
color:#18323c;
}
.publishResultPanel{
margin-top:16px;
display:none;
}
.publishResultPanel.active{
display:block;
}
.publishResultCard{
border-radius:16px;
padding:13px 15px;
margin-top:10px;
border:1px solid #d7e4e8;
background:rgba(255,255,255,.92);
color:#102a43;
font-weight:850;
box-shadow:0 8px 20px rgba(15,23,42,.06);
}
.publishResultCard.ok{
border-color:#bbf7d0;
background:#ecfdf5;
color:#166534;
}
.publishResultCard.bad{
border-color:#fecaca;
background:#fef2f2;
color:#991b1b;
}
.publishResultCard small{
display:block;
margin-top:6px;
font-weight:650;
color:inherit;
opacity:.86;
line-height:1.4;
}
.visualButtonRow{
grid-template-columns:repeat(3,1fr)!important;
gap:14px!important;
}
.visualButtonRow button{
min-height:60px!important;
font-size:17px!important;
font-weight:700!important;
border-radius:14px!important;
letter-spacing:.2px!important;
padding:0 18px!important;
}
button:focus,
button:focus-visible{
outline:none!important;
}
@media(max-width:1200px){
.visualButtonRow{
grid-template-columns:repeat(2,1fr)!important;
}
}
@media(max-width:760px){
.visualButtonRow{
grid-template-columns:1fr!important;
}
}

/* V41.1 Threads Motoru */
.threadsGrid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:18px;
    align-items:start;
}
.threadsBoxTitle{
    font-weight:950;
    color:#102a43;
    margin:0 0 8px;
}
#threadsShortResult,
#threadsLongResult,
#threadsSeriesResult{
    max-height:300px;
    min-height:300px;
    overflow-y:auto;
    overflow-x:hidden;
    padding-right:22px;
}
#threadsShortResult::-webkit-scrollbar,
#threadsLongResult::-webkit-scrollbar,
#threadsSeriesResult::-webkit-scrollbar{width:12px;}
#threadsShortResult::-webkit-scrollbar-track,
#threadsLongResult::-webkit-scrollbar-track,
#threadsSeriesResult::-webkit-scrollbar-track{background:#eef7f7;border-radius:999px;}
#threadsShortResult::-webkit-scrollbar-thumb,
#threadsLongResult::-webkit-scrollbar-thumb,
#threadsSeriesResult::-webkit-scrollbar-thumb{
    background:linear-gradient(180deg,#00b3a4,#0b6b91);
    border-radius:999px;
    border:3px solid #eef7f7;
}
#threadsShortResult,
#threadsLongResult,
#threadsSeriesResult{scrollbar-width:thin;scrollbar-color:#0b6b91 #eef7f7;}
button.threads{
    background:linear-gradient(135deg,#111827,#374151);
    box-shadow:0 12px 26px rgba(17,24,39,.22);
}
.threadsActionRow{
    margin-top:18px;
    display:flex;
    flex-wrap:wrap;
    gap:10px;
}
.threadsActionRow button{
    margin:0!important;
}
@media(max-width:1200px){.threadsGrid{grid-template-columns:1fr;}}

.threadsSocialBlock{
    margin-top:24px;
    padding-top:22px;
    border-top:1px solid #d7e4e8;
}

</style>
</head>
<body>
<div class="header">
<div class="logo">ÖZBEBİT Otomasyon Merkezi</div>
<div class="welcomeUser">
Hoş geldin,
<span class="userName">
<?php echo htmlspecialchars($_SESSION["user_name"] ?? "Kullanıcı"); ?>
</span>
</div>
</div>
<div class="layout">
<div class="sidebar">
<div class="menu">
<a href="index.php"> İçerik Üret</a>
<a href="calendar.php"> İçerik Takvimi</a>
<a href="planner.php"> 30 Günlük Plan</a>
<a href="drafts.php"> Taslaklar</a>
<a href="image.php"> Görsel Oluştur</a>
<a href="video.php"> Short Video Merkezi</a>
<a class="active" href="automation.php"> Tek Tuş Otomasyon</a>
<a href="youtube.php"> YouTube İçerikleri</a>
<a href="blog.php"> Blog Yazıları</a>
<a href="analytics.php"> Analitik</a>
<a href="settings.php"> Ayarlar</a>
<a href="../auth/logout.php"> Çıkış</a>
</div>
</div>
<div class="main">
<div class="card">
<h2>Sosyal Medya Üretim</h2>
<label>İçerik konusu</label>
<input id="autoTopic" placeholder="Örn: Depresyon nedir?">
<button type="button" id="runAutomationBtn" class="smart">Tek Tuş Üret
</button>
<button type="button" onclick="copyAllAutomation()">Tüm Paketi Kopyala
</button>
</div>
<div class="topGrid">
<div class="card">
<h2> İçerik Hafızası / Tekrar Kontrol</h2>
<button type="button" class="brand" onclick="checkContentMemory()">Hafızada Kontrol Et
</button>
<div id="memoryCheckResult" class="output compactOutput">
Henüz hafıza kontrolü yapılmadı.
</div>
</div>
<div class="card">
<h2> Konu Analiz Motoru</h2>
<button type="button" class="brand" onclick="analyzeTopic()">Konuyu Analiz Et
</button>
<div id="topicAnalysisResult" class="output compactOutput">
Henüz konu analizi yapılmadı.
</div>
</div>
<div class="card">
<h2> Araştırma Merkezi</h2>
<button type="button" class="brand" onclick="researchTopic()">Araştırma Yap
</button>
<button type="button" class="smart" onclick="generateFromResearch()">Araştırmaya Göre İçerik Üret
</button>
<div id="researchResult" class="output compactOutput">
Henüz araştırma yapılmadı.
</div>
</div>
</div>
<div class="card resultTabsCard">
<div class="tabsHeader">
<button type="button" class="tabBtn active" onclick="showTab('status', this)">Durum</button>
<button type="button" class="tabBtn" onclick="showTab('content', this)">İçerik</button>
<button type="button" class="tabBtn" onclick="showTab('social', this)">Sosyal</button>
<button type="button" class="tabBtn" onclick="showTab('shorts', this)">Shorts</button>
<button type="button" class="tabBtn" onclick="showTab('visual', this)">Görsel</button>
<button type="button" class="tabBtn" onclick="showTab('publish', this)">Yayın</button>
</div>
<div id="tab-status" class="tabPane active">
<div class="tabSectionTitle">PROCESS</div>
<h2> İşlem Durumu</h2>
<div id="statusContent" class="output compactOutput">Henüz işlem başlamadı.</div>
</div>
<div id="tab-content" class="tabPane">
<div class="tabSectionTitle">CONTENT</div>
<h2> İçerik Paketi</h2>
<div id="contentResult" class="output">İçerik paketi burada görünecek.</div>
</div>
<div id="tab-social" class="tabPane">
<div class="tabSectionTitle">SOCIAL</div>
<h2> Sosyal Medya Metni</h2>
<div id="socialResult" class="output compactOutput">Sosyal medya metni burada görünecek.</div>
<div class="threadsSocialBlock">
    <div class="tabSectionTitle">THREADS</div>
    <h2>Threads İçerikleri</h2>
<div class="threadsGrid">
    <div>
        <div class="threadsBoxTitle">Kısa Threads</div>
        <div id="threadsShortResult" class="output compactOutput">Kısa Threads metni burada görünecek.</div>
    </div>
    <div>
        <div class="threadsBoxTitle">Uzun Threads</div>
        <div id="threadsLongResult" class="output compactOutput">Uzun Threads metni burada görünecek.</div>
    </div>
    <div>
        <div class="threadsBoxTitle">Thread Dizisi</div>
        <div id="threadsSeriesResult" class="output compactOutput">5 parçalık thread dizisi burada görünecek.</div>
    </div>
</div>
<div class="threadsActionRow">
    <button type="button" class="threads" onclick="generateThreadsContent()">Threads Üret</button>
    <button type="button" onclick="copyThreadsContent('short')">Kısa Metni Kopyala</button>
    <button type="button" onclick="copyThreadsContent('long')">Uzun Metni Kopyala</button>
    <button type="button" onclick="copyThreadsContent('series')">Diziyi Kopyala</button>
</div>
</div>
</div>

</div>
<div id="tab-shorts" class="tabPane">
<div class="tabSectionTitle">VIDEO</div>
<h2> YouTube Shorts Paketi</h2>
<div id="shortsResult" class="output">Shorts paketi burada görünecek.</div>
</div>
<div id="tab-visual" class="tabPane">
<div class="tabSectionTitle">VISUAL</div>
<h2> Görsel / Story / Yayın Alanı</h2>
<div id="visualResult" class="output">Görsel prompt burada görünecek.</div>
<div class="imageActionRow">
<button type="button" class="premiumActionBtn createBtn" onclick="generateAutomationImage()"> Görsel Oluştur</button>
<label class="premiumActionBtn uploadBtn">Görsel Yükle
<input type="file" id="automationManualImage" accept="image/jpeg,image/png,image/webp" onchange="uploadAutomationManualImage()" hidden>
</label>
</div>
<div id="imageStatus" class="tip">AI görsel üretildiğinde burada görünecek.</div>
<div id="imagePreview" class="preview"></div>
</div>
<div id="tab-publish" class="tabPane">
<div class="tabSectionTitle">PUBLISH</div>
<h2> Görsel Yazı Ayarları ve Yayın</h2>
<div class="tabTwoColumn">
<div class="tip visualSettingsBox">
<label> Alt başlık</label>
<textarea id="automationSubtitle" placeholder="Boş bırakırsan AI alt başlık üretir."></textarea>
<label> Görsel ortasına yazılacak metin</label>
<textarea id="automationMiddleText" placeholder="Örn:
Obsesyon: İstenmeyen düşünceler
Kompulsiyon: Tekrarlayan davranışlar"></textarea>
<div class="visualButtonRow">
<button type="button" class="smart" onclick="generateAutomationSubtitle()">Alt Başlık Üret</button>
<button type="button" class="brand" onclick="brandAutomationImage()">Kurumsallaştır</button>
<button type="button" class="story" onclick="createAutomationStoryImage()">Story Görseli Oluştur</button>
<button type="button" class="brand" onclick="createAutomationCarousel()">Instagram Carousel</button>
<button type="button" class="publish" onclick="publishAutomationCarousel()">Carousel Yayınla</button>
</div>
</div>
<div class="platformBox">
<strong> Yayın Kokpiti</strong>
<label><input type="checkbox" class="publishPlatform" value="facebook" checked style="width:auto;"> Facebook</label>
<label><input type="checkbox" class="publishPlatform" value="instagram" checked style="width:auto;"> Instagram</label>
<label><input type="checkbox" class="publishPlatform" value="linkedin" checked style="width:auto;"> LinkedIn</label><label><input type="checkbox" class="publishPlatform" value="threads" checked style="width:auto;"> Threads</label>
<button type="button" class="publish" onclick="publishAutomationPost()">Seçili Platformlara Yayınla</button>
<div id="publishResultPanel" class="publishResultPanel"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<script>
let automationImageUrl = "";
let automationBrandedImageUrl = "";
let automationStoryImageUrl = "";
let automationSubtitle = "";
let automationCarouselImageUrls = [];
let automationCarouselSlides = [];
let automationThreadsContent = "";
function htmlEscape(text){
return String(text)
.replace(/&/g, "&amp;")
.replace(/</g, "&lt;")
.replace(/>/g, "&gt;")
.replace(/"/g, "&quot;")
.replace(/'/g, "&#039;");
}
function makeAbsoluteUrl(url){
url = (url || "").trim();
if(url === "") return "";
if(url.startsWith("http://") || url.startsWith("https://")) return url;
if(url.startsWith("/")) return window.location.origin + url;
return window.location.origin + "/" + url.replace(/^(\.\.\/)+/, "");
}
function setStatus(lines){
const box = document.getElementById("statusContent");
if(!box){
console.log("statusContent bulunamadı", lines);
return;
}
box.innerHTML = lines.map(function(item){
return `<div class="statusLine ${item.className || ""}">${htmlEscape(item.text)}</div>`;
}).join("");
}
function showTab(tabId, button){
document.querySelectorAll(".tabPane").forEach(function(pane){
pane.classList.remove("active");
});
document.querySelectorAll(".tabBtn").forEach(function(btn){
btn.classList.remove("active");
});
const target = document.getElementById("tab-" + tabId);
if(target){
target.classList.add("active");
}
if(button){
button.classList.add("active");
}
}
async function runAutomation(){
const topic = document.getElementById("autoTopic").value.trim();
if(topic === ""){
alert("Önce içerik konusu yaz.");
return;
}
setStatus([
{text:"Tek tuş üret başlatılıyor: " + topic, className:"wait"},
{text:"Ön kontrol yapılıyor...", className:"wait"}
]);
let canContinue = true;
try{
canContinue = await checkDuplicateBeforeGenerate(topic);
}catch(error){
console.log("Tekrar kontrol atlandı:", error.message);
canContinue = true;
}
if(!canContinue){
setStatus([{text:"Üretim kullanıcı tarafından iptal edildi.", className:"bad"}]);
return;
}
automationImageUrl = "";
automationBrandedImageUrl = "";
automationStoryImageUrl = "";
automationSubtitle = "";
document.getElementById("imageStatus").innerText = "AI görsel üretildiğinde burada görünecek.";
document.getElementById("imagePreview").innerHTML = "";
document.getElementById("automationSubtitle").value = "";
document.getElementById("automationMiddleText").value = "";
document.getElementById("contentResult").innerText = " İçerik paketi hazırlanıyor...";
document.getElementById("socialResult").innerText = " Sosyal medya metni hazırlanıyor...";
document.getElementById("shortsResult").innerText = " Shorts paketi hazırlanıyor...";
document.getElementById("visualResult").innerText = " Görsel prompt hazırlanıyor...";
    resetThreadsBoxes("Threads içerikleri hazırlanıyor...");
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
    await generateThreadsContent();
await saveContentMemory(topic, "", "", "automation");
setStatus([
{text:"Tamamlandı: " + topic, className:"ok"},
{text:"İçerik paketi hazır ", className:"ok"},
{text:"Sosyal medya metni hazır ", className:"ok"},
{text:"Shorts paketi hazır ", className:"ok"},
{text:"Görsel prompt hazır ", className:"ok"},
{text:"Threads içerikleri hazır ", className:"ok"},
{text:"Şimdi Görsel Oluştur  Kurumsallaştır  Story Oluştur  Yayınla ", className:"wait"}
]);
}
async function generateAutoContent(topic){
const box = document.getElementById("contentResult");
try{
const response = await fetch("../api/generate.php",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({topic:topic,title:topic})
});
const text = await response.text();
let data;
try{ data = JSON.parse(text); }
catch(e){
box.innerText = "JSON olmayan cevap geldi:\n\n" + text.substring(0,2000);
return;
}
if(data.success){
box.innerText = data.content || data.text || data.result || JSON.stringify(data,null,2);
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
try{ data = JSON.parse(text); }
catch(e){
box.innerText = "JSON olmayan cevap geldi:\n\n" + text.substring(0,2000);
return;
}
if(data.success){
box.innerText = data.copy || data.social_copy || data.text || data.caption || JSON.stringify(data,null,2);
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
body:JSON.stringify({topic:topic})
});
const text = await response.text();
let data;
try{ data = JSON.parse(text); }
catch(e){
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
body:JSON.stringify({title:topic})
});
const text = await response.text();
let data;
try{ data = JSON.parse(text); }
catch(e){
box.innerText = "JSON olmayan cevap geldi:\n\n" + text.substring(0,2000);
return;
}
if(data.success){
box.innerText = data.concept || data.visual_prompt || data.prompt || JSON.stringify(data,null,2);
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
if(visualPrompt === "" || visualPrompt.includes("Görsel prompt burada") || visualPrompt.includes("hazırlanıyor") || visualPrompt.includes("üretilemedi") || visualPrompt.includes("Bağlantı hatası")){
alert("Önce Tek Tuş Üret ile görsel prompt oluştur.");
return;
}
automationImageUrl = "";
automationBrandedImageUrl = "";
automationStoryImageUrl = "";
status.innerText = " AI görsel üretiliyor, lütfen bekleyin...";
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
- Sol üstte başlık eklenebilmesi için temiz boş alan bırak.
- Alt marka bandı için en altta sade ve sakin alan bırak.
- Görsel temiz, ferah, etik ve profesyonel olsun.
- Korkutucu, dramatik, damgalayıcı veya manipülatif olmasın.
- Tanı veya tedavi garantisi çağrıştırmasın.
- Görselde yazı, harf, slogan, tabela, logo, marka adı, watermark, imza olmasın.
NEGATİF KURALLAR:
no text, no letters, no words, no typography, no captions, no logo, no watermark, no signature, no brand name, no random characters.
İNSAN GÖRSELİ KURALI:
- Öncelik insan içermeyen metaforik, sinematik, estetik görsellerdir.
- Minimal obje, doğa metaforu, ışık, yol, pencere, masa, defter, ağaç, su, gölge gibi semboller tercih edilir.
- İnsan figürü zorunlu değildir; mümkünse insan figürü kullanma.
- İnsan kullanılacaksa sadece gerçek fotoğraf kalitesinde, doğal, anatomik olarak doğru ve estetik görünmelidir.
- Robotik, plastik, bozuk yüzlü, tuhaf elli, cansız bakışlı, uncanny valley, CGI insan, 3D avatar veya oyuncak bebek görünümü kesinlikle olmasın.
- Gerçekçi insan üretilemiyorsa insan yerine metaforik obje veya doğa sahnesi kullan.`;
try{
const response = await fetch("../api/generate_image.php",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({prompt:finalPrompt})
});
const text = await response.text();
let data;
try{ data = JSON.parse(text); }
catch(e){
status.innerText = "JSON olmayan cevap geldi:\n\n" + text.substring(0,2000);
return;
}
if(data.success && data.image_url){
automationImageUrl = data.image_url;
status.innerText = " AI görsel başarıyla üretildi. Şimdi Kurumsallaştır butonuna basabilirsin.";
preview.innerHTML =
'<img src="' + data.image_url + '" alt="AI Görsel">' +
'<br><a class="download" href="' + data.image_url + '" download> Yazısız Görseli İndir</a>';
setStatus([
{text:"Yazısız AI görsel üretildi ", className:"ok"},
{text:"Şimdi Kurumsallaştır butonuna basabilirsin ", className:"wait"}
]);
}else{
status.innerText = "Görsel üretilemedi:\n\n" + JSON.stringify(data,null,2);
}
}catch(error){
status.innerText = "Bağlantı hatası:\n\n" + error.message;
}
}
async function generateAutomationSubtitle(){
const topic = document.getElementById("autoTopic").value.trim();
const subtitleBox = document.getElementById("automationSubtitle");
if(topic === ""){
alert("Önce konu yaz.");
return "";
}
subtitleBox.value = " Alt başlık üretiliyor...";
try{
const response = await fetch("../api/generate_subtitle.php",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({title:topic})
});
const text = await response.text();
let data;
try{ data = JSON.parse(text); }
catch(e){
subtitleBox.value = "";
alert("JSON olmayan cevap geldi:\n\n" + text.substring(0,1000));
return "";
}
if(data.success && data.subtitle){
automationSubtitle = data.subtitle;
subtitleBox.value = data.subtitle;
return data.subtitle;
}else{
subtitleBox.value = "";
alert("Alt başlık üretilemedi:\n\n" + JSON.stringify(data,null,2));
return "";
}
}catch(error){
subtitleBox.value = "";
alert("Bağlantı hatası:\n\n" + error.message);
return "";
}
}
async function brandAutomationImage(){
const topic = document.getElementById("autoTopic").value.trim();
const status = document.getElementById("imageStatus");
const preview = document.getElementById("imagePreview");
if(topic === ""){
alert("Önce konu yaz.");
return;
}
if(automationImageUrl === ""){
alert("Önce AI görsel oluştur.");
return;
}
let subtitle = document.getElementById("automationSubtitle").value.trim();
const middleText = document.getElementById("automationMiddleText").value.trim();
if(subtitle === "" || subtitle.includes("üretiliyor")){
subtitle = await generateAutomationSubtitle();
}
if(subtitle === ""){
subtitle = "Ruh sağlığı hakkında güvenilir ve bilgilendirici içerik.";
}
status.innerText = " Kurumsal görsel hazırlanıyor, lütfen bekleyin...";
try{
const response = await fetch("../api/brand_image.php",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
image_url: automationImageUrl,
title: topic,
subtitle: subtitle,
middle_text: middleText
})
});
const text = await response.text();
let data;
try{ data = JSON.parse(text); }
catch(e){
status.innerText = "JSON olmayan cevap geldi:\n\n" + text.substring(0,2000);
return;
}
if(data.success && data.image_url){
automationBrandedImageUrl = data.image_url;
status.innerText = " Kurumsal görsel başarıyla oluşturuldu. Artık story oluşturabilir veya yayınlayabilirsin.";
preview.innerHTML =
'<img src="' + data.image_url + '" alt="Kurumsal Görsel">' +
'<br><a class="download secondary" href="' + data.image_url + '" download> Kurumsal Görseli İndir</a>' +
'<br><br><a class="download" href="' + automationImageUrl + '" download> Yazısız Orijinali İndir</a>';
setStatus([
{text:"Kurumsal görsel hazır ", className:"ok"},
{text:"Story oluşturabilir veya 4 platforma yayınlayabilirsin ", className:"wait"}
]);
}else{
status.innerText = "Kurumsallaştırma hatası:\n\n" + JSON.stringify(data,null,2);
}
}catch(error){
status.innerText = "Bağlantı hatası:\n\n" + error.message;
}
}
async function createAutomationStoryImage(){
const topic = document.getElementById("autoTopic").value.trim();
const status = document.getElementById("imageStatus");
const preview = document.getElementById("imagePreview");
if(topic === ""){
alert("Önce konu yaz.");
return;
}
const sourceImage = automationImageUrl;
if(sourceImage === ""){
alert("Önce AI görsel oluştur ve tercihen kurumsallaştır.");
return;
}
let subtitle = document.getElementById("automationSubtitle").value.trim();
const middleText = document.getElementById("automationMiddleText").value.trim();
if(subtitle === "" || subtitle.includes("üretiliyor")){
subtitle = await generateAutomationSubtitle();
}
if(subtitle === ""){
subtitle = "Ruh sağlığı hakkında güvenilir ve bilgilendirici içerik.";
}
status.innerText = " Story görseli hazırlanıyor, lütfen bekleyin...";
try{
const response = await fetch("../api/brand_story.php",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
image_url: sourceImage,
title: topic,
subtitle: subtitle,
middle_text: middleText
})
});
const text = await response.text();
let data;
try{ data = JSON.parse(text); }
catch(e){
status.innerText = "JSON olmayan cevap geldi:\n\n" + text.substring(0,2000);
return;
}
if(data.success && data.image_url){
automationStoryImageUrl = data.image_url;
status.innerText = " Story görseli başarıyla oluşturuldu.";
preview.innerHTML +=
'<hr style="margin:22px 0;border:0;border-top:1px solid #dbecec;">' +
'<div class="tip"><strong> Story Görseli Hazır</strong><br>Instagram/Facebook Story için indirip manuel paylaşabilirsin.</div>' +
'<img src="' + data.image_url + '" alt="Story Görseli">' +
'<br><a class="download story" href="' + data.image_url + '" download> Story Görselini İndir</a>';
setStatus([
{text:"Story görseli hazır ", className:"ok"},
{text:"Feed otomatik yayınlanabilir, Story manuel paylaşılabilir ", className:"wait"}
]);
}else{
status.innerText = "Story görseli oluşturma hatası:\n\n" + JSON.stringify(data,null,2);
}
}catch(error){
status.innerText = "Bağlantı hatası:\n\n" + error.message;
}
}
function extractPlatformText(platform){
    function cleanText(text){
        return String(text || "")
            .replace(/^Başlık\s*:\s*.*(\r?\n)+/i, "")
            .replace(/^Baslik\s*:\s*.*(\r?\n)+/i, "")
            .replace(/\n{3,}/g, "\n\n")
            .trim();
    }

    function invalid(text){
        text = String(text || "").trim();
        return text === "" ||
            text.includes("burada görünecek") ||
            text.includes("hazırlanıyor") ||
            text.includes("üretilemedi") ||
            text.includes("Bağlantı hatası") ||
            text.includes("JSON olmayan cevap") ||
            text.includes("API JSON dönmedi");
    }

    function firstGood(){
        for(let i=0; i<arguments.length; i++){
            const txt = cleanText(arguments[i]);
            if(!invalid(txt)){ return txt; }
        }
        return "";
    }

    function sectionBetween(text, starts, stops){
        text = String(text || "");
        for(const start of starts){
            const startRegex = new RegExp(start, "i");
            const m = startRegex.exec(text);
            if(!m){ continue; }
            let part = text.slice(m.index + m[0].length);
            let cut = part.length;
            for(const stop of stops){
                const stopRegex = new RegExp(stop, "i");
                const sm = stopRegex.exec(part);
                if(sm && sm.index < cut){ cut = sm.index; }
            }
            part = part.slice(0, cut).trim();
            if(!invalid(part)){ return cleanText(part); }
        }
        return "";
    }

    function ensureHashtags(text, defaults){
        text = cleanText(text);
        if(/#[\p{L}\p{N}_]+/u.test(text)){ return text; }
        return (text + "\n\n" + defaults).trim();
    }

    function enrichIfTooShort(text, topic, platform){
        text = cleanText(text);
        const plain = text.replace(/#[\p{L}\p{N}_]+/gu, "").trim();
        if(plain.length >= 180){ return text; }

        let extra = "";
        if(platform === "linkedin"){
            extra = topic + " konusunda farkındalık, kişinin yaşadığı belirtileri daha doğru anlamasına ve gerektiğinde profesyonel destek aramasına yardımcı olabilir. Bu içerik tanı koymak için değil, ruh sağlığı okuryazarlığını artırmak için hazırlanmıştır.";
        }else{
            extra = topic + " hakkında kısa ama önemli bir hatırlatma: Belirtileri tek başına yorumlamak yerine, kişinin günlük yaşamını ne kadar etkilediğine bakmak gerekir. Gerekirse bir uzmandan destek almak en sağlıklı yoldur.";
        }
        return (text + "\n\n" + extra).trim();
    }

    const content = document.getElementById("contentResult")?.innerText || "";
    const social = document.getElementById("socialResult")?.innerText || "";
    const topic = document.getElementById("autoTopic")?.value.trim() || "";

    if(platform === "threads"){
        const shortBox = document.getElementById("threadsShortResult");
        const shortText = shortBox ? shortBox.innerText.trim() : "";
        return firstGood(shortText, social, topic);
    }

    if(platform === "instagram"){
        const ig = sectionBetween(content,
            ["(?:^|\\n)\\s*(?:1\\.?\\s*)?INSTAGRAM(?:\\s+POSTU|\\s+METNİ|\\s+METNI)?\\s*:?"],
            ["(?:^|\\n)\\s*(?:2\\.?\\s*)?FACEBOOK", "(?:^|\\n)\\s*(?:3\\.?\\s*)?LINKEDIN", "(?:^|\\n)\\s*THREADS", "(?:^|\\n)\\s*SHORTS", "(?:^|\\n)\\s*GÖRSEL"]
        );
        return ensureHashtags(enrichIfTooShort(firstGood(ig, social, topic), topic, "instagram"), "#psikiyatri #ruhsagligi #ozgurozbebit");
    }

    if(platform === "facebook"){
        const fb = sectionBetween(content,
            ["(?:^|\\n)\\s*(?:2\\.?\\s*)?FACEBOOK(?:\\s+POSTU|\\s+METNİ|\\s+METNI)?\\s*:?"],
            ["(?:^|\\n)\\s*(?:3\\.?\\s*)?LINKEDIN", "(?:^|\\n)\\s*INSTAGRAM", "(?:^|\\n)\\s*THREADS", "(?:^|\\n)\\s*SHORTS", "(?:^|\\n)\\s*GÖRSEL"]
        );
        return ensureHashtags(enrichIfTooShort(firstGood(fb, social, topic), topic, "facebook"), "#psikiyatri #ruhsagligi #ozgurozbebit");
    }

    if(platform === "linkedin"){
        const li = sectionBetween(content,
            ["(?:^|\\n)\\s*(?:3\\.?|5\\.?)?\\s*LINKEDIN(?:\\s+YAZISI|\\s+POSTU|\\s+METNİ|\\s+METNI)?\\s*:?"],
            ["(?:^|\\n)\\s*FACEBOOK", "(?:^|\\n)\\s*INSTAGRAM", "(?:^|\\n)\\s*THREADS", "(?:^|\\n)\\s*SHORTS", "(?:^|\\n)\\s*GÖRSEL", "(?:^|\\n)\\s*HASHTAG"]
        );
        return ensureHashtags(enrichIfTooShort(firstGood(li, social, topic), topic, "linkedin"), "#psikiyatri #ruhsagligi #mentalhealth #ozgurozbebit");
    }

    return topic;
}
async function publishAutomationPost(){
const selectedPlatforms = Array.from(document.querySelectorAll(".publishPlatform:checked"))
.map(function(el){ return el.value; });

if(selectedPlatforms.length === 0){
alert("En az bir platform seçmelisin.");
return;
}

const rawImageUrl = automationBrandedImageUrl !== "" ? automationBrandedImageUrl : automationImageUrl;
const imageUrl = makeAbsoluteUrl(rawImageUrl);

const normalPlatforms = selectedPlatforms.filter(function(platform){
return platform !== "threads";
});

const hasThreads = selectedPlatforms.includes("threads");

if(normalPlatforms.length > 0 && imageUrl === ""){
alert("Facebook / Instagram / LinkedIn yayını için görsel zorunlu. Önce görsel üret ve kurumsallaştır.");
return;
}

const platformTexts = {
facebook: extractPlatformText("facebook"),
instagram: extractPlatformText("instagram"),
linkedin: extractPlatformText("linkedin"),
threads: extractPlatformText("threads")
};
if(platformTexts.instagram.length > 2000){
    platformTexts.instagram =
        platformTexts.instagram.substring(0,1900) +
        "\n\n#psikiyatri #ruhsağlığı";
}

if(normalPlatforms.length > 0 && !automationBrandedImageUrl){
if(!confirm("Kurumsal görsel yok. Yazısız AI görsel ile yayınlamak istiyor musun?")){
return;
}
}

if(!confirm("Seçili platformlara yayınlansın mı?\n\n" + selectedPlatforms.join(" + "))){
return;
}

const status = document.getElementById("imageStatus");
status.innerText = "Seçili platformlara yayınlanıyor...";

let combinedResult = {
success:true,
message:"Yayın işlemi tamamlandı.",
summary:[]
};

try{

if(normalPlatforms.length > 0){
const formData = new FormData();
formData.append("post_text", platformTexts.instagram || platformTexts.facebook || platformTexts.linkedin || "");
formData.append("image_url", imageUrl);
formData.append("platforms", JSON.stringify(normalPlatforms));
formData.append("platform_texts", JSON.stringify(platformTexts));

const response = await fetch("../api/publish_multi.php",{
method:"POST",
body:formData
});

const text = await response.text();
let data;

try{
data = JSON.parse(text);
}catch(e){
alert("publish_multi.php JSON olmayan cevap verdi:\n\n" + text.substring(0,1500));
return;
}

if(data && data.success === false){
combinedResult.success = false;
}

if(data && Array.isArray(data.summary)){
data.summary.forEach(function(item){
combinedResult.summary.push(item);
});
}else if(data && Array.isArray(data.results)){
data.results.forEach(function(item){
const responseObj = item.response || {};
combinedResult.summary.push({
platform:item.platform || "platform",
success: responseObj.success === true || item.success === true,
message: responseObj.message || responseObj.error || item.error || ""
});
});
}else{
combinedResult.summary.push({
platform:"multi",
success:data && data.success === true,
message:(data && (data.message || data.error)) ? (data.message || data.error) : "Facebook / Instagram / LinkedIn yanıtı alındı."
});
}
}

if(hasThreads){
    let threadsText = platformTexts.threads || platformTexts.instagram || platformTexts.facebook || platformTexts.linkedin || document.getElementById("autoTopic").value.trim();

    let threadsImageUrl =
        automationBrandedImageUrl ||
        automationImageUrl ||
        document.getElementById("brandedImagePreview")?.src ||
        document.getElementById("automationBrandedImage")?.src ||
        document.getElementById("automationImagePreview")?.src ||
        "";
if(threadsImageUrl.startsWith("../")){
    threadsImageUrl = threadsImageUrl.replace("../", "https://admin.ozgurozbebit.com.tr/");
}

if(threadsImageUrl.startsWith("/")){
    threadsImageUrl = "https://admin.ozgurozbebit.com.tr" + threadsImageUrl;
}
   
    const response = await fetch("../api/publish_threads.php", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            text: threadsText,
            image_url: threadsImageUrl
        })
    });

    const text = await response.text();
    let data;

    try{
        data = JSON.parse(text);
    }catch(e){
        combinedResult.success = false;
        combinedResult.summary.push({
            platform:"threads",
            success:false,
            message:"publish_threads.php JSON olmayan cevap verdi: " + text.substring(0,500)
        });
        data = null;
    }

if(data){
combinedResult.summary.push({
platform:"threads",
success:data.success === true,
message:data.message || data.error || data.raw || "",
post_id:data.post_id || ""
});

if(data.success !== true){
combinedResult.success = false;
}
}
}

status.innerText = combinedResult.success ? "Seçili platformlara yayın tamamlandı." : "Bazı platformlarda yayın hatası oluştu.";

setStatus([
{text: combinedResult.success ? "Yayın işlemi tamamlandı" : "Yayın işleminde bazı hatalar oluştu", className: combinedResult.success ? "ok" : "bad"},
{text:"Facebook / Instagram / LinkedIn / Threads sonuçları aşağıda", className:"wait"}
]);

renderPublishResult(combinedResult, "Platform Yayın Sonucu");

}catch(error){
alert("Bağlantı hatası:\n\n" + error.message);
}
}

function renderPublishResult(data, title){
const panel = document.getElementById("publishResultPanel");
if(!panel){ return; }
panel.classList.add("active");
let html = '<div class="publishResultCard ' + (data && data.success ? 'ok' : 'bad') + '">';
html += htmlEscape(title || "Yayın sonucu");
html += '<small>' + htmlEscape((data && (data.message || data.error)) ? (data.message || data.error) : "") + '</small>';
html += '</div>';
if(data && Array.isArray(data.summary)){
data.summary.forEach(function(item){
const ok = item.success ? "ok" : "bad";
html += '<div class="publishResultCard ' + ok + '">';
html += htmlEscape((item.platform || "platform").toUpperCase() + " — " + (item.success ? "Başarılı" : "Hata"));
html += '<small>' + htmlEscape(item.message || item.error || "") + '</small>';
if(item.post_id){
html += '<small>Post ID: ' + htmlEscape(item.post_id) + '</small>';
}
if(item.image_url){
html += '<small>Görsel: ' + htmlEscape(item.image_url) + '</small>';
}
html += '</div>';
});
}else if(data && Array.isArray(data.results)){
data.results.forEach(function(item){
const response = item.response || {};
const ok = response.success === true || item.success === true;
html += '<div class="publishResultCard ' + (ok ? "ok" : "bad") + '">';
html += htmlEscape((item.platform || "platform").toUpperCase() + " — " + (ok ? "Başarılı" : "Hata"));
html += '<small>' + htmlEscape(response.message || response.error || item.error || "") + '</small>';
html += '</div>';
});
}else if(data && data.post_id){
html += '<div class="publishResultCard ok">Post ID<small>' + htmlEscape(data.post_id) + '</small></div>';
}
panel.innerHTML = html;
}
function cleanCarouselSlideText(text){
text = String(text || "").trim();
text = text.replace(/\*\*/g, "");
text = text.replace(/^[-–—\s]*\d+[\.\)]\s*/gm, "");
text = text.replace(/^[-–—\s]*(Başlık|Baslik|Alt Başlık|Alt Baslik|Açıklama|Aciklama|Metin|Konu|Slayt|Slide|Ekran)\s*\d*\s*:\s*/gmi, "");
text = text.replace(/[^\S\r\n]{2,}/g, " ");
return text.trim();
}
async function createAutomationCarousel(){
const topic = document.getElementById("autoTopic").value.trim();
const status = document.getElementById("imageStatus");
const preview = document.getElementById("imagePreview");
if(topic === ""){
alert("Önce konu yaz.");
return;
}
const sourceImage = automationImageUrl;
if(sourceImage === ""){
alert("Carousel için önce görsel oluştur veya görsel yükle.");
return;
}
const contentText = document.getElementById("contentResult").innerText || "";
const researchText = document.getElementById("researchResult").innerText || "";
status.innerText = "Instagram carousel slayt metinleri hazırlanıyor...";
try{
const directorResponse = await fetch("../api/generate_carousel_director.php",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
topic:topic,
content:contentText,
research:researchText
})
});
const directorText = await directorResponse.text();
let directorData;
try{ directorData = JSON.parse(directorText); }
catch(e){
status.innerText = "Carousel Director JSON dönmedi:\n\n" + directorText.substring(0,1500);
return;
}
if(!directorData.success || !Array.isArray(directorData.slides)){
status.innerText = "Carousel metni üretilemedi:\n\n" + JSON.stringify(directorData,null,2);
return;
}
automationCarouselSlides = directorData.slides
.map(cleanCarouselSlideText)
.filter(function(x){ return x !== ""; })
.slice(0,5);
if(automationCarouselSlides.length < 2){
status.innerText = "Carousel için yeterli slayt metni oluşmadı.";
return;
}
status.innerText = "Carousel görselleri oluşturuluyor...";
const carouselResponse = await fetch("../api/generate_instagram_carousel.php",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
image_url:sourceImage,
title:topic,
slides:automationCarouselSlides
})
});
const carouselText = await carouselResponse.text();
let carouselData;
try{ carouselData = JSON.parse(carouselText); }
catch(e){
status.innerText = "Carousel API JSON dönmedi:\n\n" + carouselText.substring(0,1500);
return;
}
if(!carouselData.success || !Array.isArray(carouselData.image_urls)){
status.innerText = "Carousel görselleri oluşturulamadı:\n\n" + JSON.stringify(carouselData,null,2);
return;
}
automationCarouselImageUrls = carouselData.image_urls;
let slidesHtml = '<div class="tip"><strong>Instagram Carousel hazır</strong><br>' + automationCarouselImageUrls.length + ' slayt oluşturuldu.</div>';
automationCarouselSlides.forEach(function(slide, index){
slidesHtml += '<div class="carouselSlideText"><strong>' + (index + 1) + '/' + automationCarouselSlides.length + '</strong> ' + htmlEscape(slide) + '</div>';
});
slidesHtml += '<button type="button" class="carouselDownloadAllBtn" onclick="downloadAutomationCarouselImages()">Tüm Carousel Görsellerini İndir</button>';
slidesHtml += '<div class="carouselPreviewGrid">';
automationCarouselImageUrls.forEach(function(url, index){
const safeUrl = htmlEscape(url);
slidesHtml +=
'<div>' +
'<img src="' + safeUrl + '" alt="Carousel Slayt ' + (index + 1) + '">' +
'<a class="carouselSlideDownload" href="' + safeUrl + '" download="carousel_' + (index + 1) + '.jpg">Slayt ' + (index + 1) + ' İndir</a>' +
'</div>';
});
slidesHtml += '</div>';
preview.innerHTML +=
'<hr style="margin:22px 0;border:0;border-top:1px solid #dbecec;">' +
slidesHtml;
status.innerText = "Carousel hazır. Şimdi Carousel Yayınla butonuna basabilirsin.";
setStatus([
{text:"Instagram carousel hazır ", className:"ok"},
{text:automationCarouselImageUrls.length + " carousel slaytı oluşturuldu.", className:"ok"},
{text:"Yayınlamak için Carousel Yayınla butonuna basabilirsin.", className:"wait"}
]);
}catch(error){
status.innerText = "Carousel bağlantı hatası:\n\n" + error.message;
}
}
function downloadAutomationCarouselImages(){
if(!Array.isArray(automationCarouselImageUrls) || automationCarouselImageUrls.length === 0){
alert("Önce Instagram Carousel oluştur.");
return;
}
automationCarouselImageUrls.forEach(function(url, index){
setTimeout(function(){
const a = document.createElement("a");
a.href = url;
a.download = "carousel_" + (index + 1) + ".jpg";
a.style.display = "none";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
}, index * 350);
});
}
async function publishAutomationCarousel(){
    const status = document.getElementById("imageStatus");

    if(!Array.isArray(automationCarouselImageUrls) || automationCarouselImageUrls.length < 2){
        alert("Önce Instagram Carousel oluştur.");
        return;
    }

    const postText = extractPlatformText("instagram");

    if(!confirm("Instagram carousel yayınlansın mı?")){
        return;
    }

    status.innerText = "Instagram carousel yayınlanıyor...";

    const formData = new FormData();
    formData.append("post_text", postText);
    formData.append("image_urls", JSON.stringify(automationCarouselImageUrls.map(makeAbsoluteUrl)));

    try{
        const response = await fetch("../api/publish_instagram_carousel.php",{
            method:"POST",
            body:formData
        });

        const text = await response.text();

        let data;
        try{
            data = JSON.parse(text);
        }catch(e){
            alert("Carousel API JSON dönmedi:\n\n" + text.substring(0,2000));
            return;
        }

        alert("CAROUSEL CEVABI:\n\n" + JSON.stringify(data,null,2).substring(0,3000));

        status.innerText = data.success
            ? "Instagram carousel yayınlandı."
            : "Carousel yayınlanamadı:\n\n" + JSON.stringify(data,null,2);

        renderPublishResult(data, "Instagram Carousel Yayın Sonucu");

    }catch(error){
        alert("Carousel bağlantı hatası:\n\n" + error.message);
    }
}
function resetThreadsBoxes(message){
const shortBox = document.getElementById("threadsShortResult");
const longBox = document.getElementById("threadsLongResult");
const seriesBox = document.getElementById("threadsSeriesResult");
if(shortBox){ shortBox.innerText = message || "Kısa Threads metni burada görünecek."; }
if(longBox){ longBox.innerText = message || "Uzun Threads metni burada görünecek."; }
if(seriesBox){ seriesBox.innerText = message || "5 parçalık thread dizisi burada görünecek."; }
}

function isValidThreadsText(text){
text = String(text || "").trim();
return text !== "" &&
    !text.includes("Threads metni burada") &&
    !text.includes("Threads içerikleri hazırlanıyor") &&
    !text.includes("hazırlanıyor") &&
    !text.includes("üretilemedi") &&
    !text.includes("Bağlantı hatası") &&
    !text.includes("API JSON dönmedi");
}

function renderThreadSeries(series){
if(Array.isArray(series)){
    return series.map(function(item, index){
        return (index + 1) + "/" + series.length + "\n" + String(item || "").trim();
    }).join("\n\n");
}
return String(series || "").trim();
}

async function generateThreadsContent(){
const topic = document.getElementById("autoTopic").value.trim();
const shortBox = document.getElementById("threadsShortResult");
const longBox = document.getElementById("threadsLongResult");
const seriesBox = document.getElementById("threadsSeriesResult");

if(!shortBox || !longBox || !seriesBox){
    alert("Threads alanı bulunamadı.");
    return "";
}
if(topic === ""){
    alert("Önce konu yaz.");
    return "";
}

const contentText = document.getElementById("contentResult") ? document.getElementById("contentResult").innerText : "";
resetThreadsBoxes("Threads içerikleri hazırlanıyor...");

try{
    const response = await fetch("../api/generate_threads_content.php",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            topic:topic,
            content:contentText
        })
    });

    const text = await response.text();
    let data;
    try{ data = JSON.parse(text); }
    catch(e){
        resetThreadsBoxes("Threads API JSON dönmedi:\n\n" + text.substring(0,1500));
        return "";
    }

    if(data.success){
        const shortText = data.short_content || data.short || data.content || data.text || "";
        const longText = data.long_content || data.long || "";
        const seriesText = renderThreadSeries(data.thread_series || data.series || data.thread || "");

        automationThreadsContent = shortText;
        shortBox.innerText = shortText || "Kısa Threads metni boş geldi.";
        longBox.innerText = longText || "Uzun Threads metni boş geldi.";
        seriesBox.innerText = seriesText || "Thread dizisi boş geldi.";
        return shortText;
    }

    resetThreadsBoxes("Threads metni üretilemedi:\n\n" + JSON.stringify(data,null,2));
    return "";
}catch(error){
    resetThreadsBoxes("Threads bağlantı hatası:\n\n" + error.message);
    return "";
}
}

function copyThreadsContent(type){
type = type || "short";
let boxId = "threadsShortResult";
if(type === "long"){ boxId = "threadsLongResult"; }
if(type === "series"){ boxId = "threadsSeriesResult"; }

const box = document.getElementById(boxId);
const text = box ? box.innerText.trim() : "";
if(!isValidThreadsText(text)){
    alert("Önce Threads metni üret.");
    return;
}

const temp = document.createElement("textarea");
temp.value = text;
document.body.appendChild(temp);
temp.select();
temp.setSelectionRange(0, 999999);
document.execCommand("copy");
document.body.removeChild(temp);
alert("Threads metni panoya kopyalandı");
}

function copyAllAutomation(){
const topic = document.getElementById("autoTopic").value.trim();
const content = document.getElementById("contentResult").innerText;
const social = document.getElementById("socialResult").innerText;
const shorts = document.getElementById("shortsResult").innerText;
const visual = document.getElementById("visualResult").innerText;
const image = automationImageUrl;
const brandedImage = automationBrandedImageUrl;
const storyImage = automationStoryImageUrl;
const carouselImages = Array.isArray(automationCarouselImageUrls) ? automationCarouselImageUrls.join("\n") : "";
const threadsShort = document.getElementById("threadsShortResult") ? document.getElementById("threadsShortResult").innerText.trim() : "";
const threadsLong = document.getElementById("threadsLongResult") ? document.getElementById("threadsLongResult").innerText.trim() : "";
const threadsSeries = document.getElementById("threadsSeriesResult") ? document.getElementById("threadsSeriesResult").innerText.trim() : "";
const all =
` TEK TUŞ ÜRETİM PAKETİ
Konu:
${topic}
İÇERİK PAKETİ

${content}
SOSYAL MEDYA METNİ

${social}
YOUTUBE SHORTS PAKETİ

${shorts}
GÖRSEL PROMPT

${visual}
AI GÖRSEL

${image || "Henüz görsel üretilmedi."}
KURUMSAL GÖRSEL

${brandedImage || "Henüz kurumsal görsel oluşturulmadı."}
STORY GÖRSELİ

${storyImage || "Henüz story görseli oluşturulmadı."}
THREADS KISA

${threadsShort || "Henüz Threads kısa metni oluşturulmadı."}
THREADS UZUN

${threadsLong || "Henüz Threads uzun metni oluşturulmadı."}
THREAD DİZİSİ

${threadsSeries || "Henüz Thread dizisi oluşturulmadı."}
INSTAGRAM CAROUSEL

${carouselImages || "Henüz carousel oluşturulmadı."}`;
const temp = document.createElement("textarea");
temp.value = all;
document.body.appendChild(temp);
temp.select();
temp.setSelectionRange(0, 999999);
document.execCommand("copy");
document.body.removeChild(temp);
alert("Tüm paket panoya kopyalandı ");
}
async function uploadAutomationManualImage(){
const input = document.getElementById("automationManualImage");
const status = document.getElementById("imageStatus");
const preview = document.getElementById("imagePreview");
if(!input.files || input.files.length === 0){
alert("Önce görsel seç.");
return;
}
const formData = new FormData();
formData.append("image", input.files[0]);
status.innerText = " Görsel yükleniyor...";
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
status.innerText = "JSON olmayan cevap geldi:\n\n" + text.substring(0,1500);
return;
}
if(data.success && data.image_url){
automationImageUrl = data.image_url;
automationBrandedImageUrl = "";
automationStoryImageUrl = "";
status.innerText = " Kendi görselin yüklendi. Şimdi Kurumsallaştır veya Yayınla.";
preview.innerHTML =
'<img src="' + data.image_url + '" alt="Yüklenen Görsel">' +
'<br><a class="download" href="' + data.image_url + '" download> Görseli İndir</a>';
}else{
status.innerText = "Yükleme hatası:\n\n" + JSON.stringify(data,null,2);
}
}catch(error){
status.innerText = "Bağlantı hatası:\n\n" + error.message;
}
}
async function analyzeTopic(){
const topic = document.getElementById("autoTopic").value.trim();
if(topic === ""){
alert("Önce konu yaz.");
return;
}
const resultBox = document.getElementById("topicAnalysisResult");
resultBox.innerHTML = " Konu analiz ediliyor...";
try{
const response = await fetch("../api/analyze_topic.php",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({topic:topic})
});
const text = await response.text();
if(!text || text.trim() === ""){
resultBox.innerHTML =
" API boş cevap döndü. analyze_topic.php içinde PHP hatası olabilir.";
return;
}
let data;
try{
data = JSON.parse(text);
}catch(e){
resultBox.innerHTML =
" API JSON dönmedi:<br><br><pre>" +
htmlEscape(text.substring(0,2000)) +
"</pre>";
return;
}
if(!data.success){
resultBox.innerHTML =
" " + (data.message || "Analiz başarısız.") +
"<br><br><pre>" + htmlEscape(JSON.stringify(data,null,2)) + "</pre>";
return;
}
resultBox.innerHTML = `
<b>Kategori:</b> ${htmlEscape(data.category || "")}<br><br>
<b>Neden:</b> ${htmlEscape(data.reason || "")}<br><br>
<b>Araştırma Gerekli mi:</b> ${data.research_needed ? "Evet" : "Hayır"}<br><br>
<b>Arama Sorgusu:</b> ${htmlEscape(data.search_query || topic)}<br><br>
<b>Güvenli Varsayım:</b> ${htmlEscape(data.safe_assumption || "")}<br><br>
<b>Önerilen İçerik:</b> ${htmlEscape(data.recommended_content || "")}<br><br>
<b>Platform:</b> ${htmlEscape(data.recommended_platform || "")}
`;
}catch(error){
resultBox.innerHTML = " Bağlantı hatası: " + htmlEscape(error.message);
}
}
async function researchTopic(){
const topic = document.getElementById("autoTopic").value.trim();
const researchBox = document.getElementById("researchResult");
if(topic === ""){
alert("Önce konu yaz.");
return;
}
const analysisText = document.getElementById("topicAnalysisResult").innerText || "";
let searchQuery = topic;
const match = analysisText.match(/Arama Sorgusu:\s*(.+)/i);
if(match && match[1]){
searchQuery = match[1].trim();
}
researchBox.innerText = " Araştırma hazırlanıyor...";
try{
const response = await fetch("../api/research_topic.php",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
topic: topic,
search_query: searchQuery
})
});
const text = await response.text();
if(!text || text.trim() === ""){
researchBox.innerText = " API boş cevap döndü.";
return;
}
let data;
try{
data = JSON.parse(text);
}catch(e){
researchBox.innerText = " API JSON dönmedi:\n\n" + text.substring(0,2000);
return;
}
if(!data.success){
researchBox.innerText = " Araştırma başarısız:\n\n" + JSON.stringify(data,null,2);
return;
}
const knownFacts = Array.isArray(data.known_facts)
? data.known_facts.map((x,i)=> (i+1) + ". " + x).join("\n")
: "";
const missingInfo = Array.isArray(data.missing_info)
? data.missing_info.map((x,i)=> (i+1) + ". " + x).join("\n")
: "";
const expertiseAreas = Array.isArray(data.expertise_areas)
? data.expertise_areas.map((x,i)=> (i+1) + ". " + x).join("\n")
: "";
researchBox.innerText =
` ARAŞTIRMA SONUCU
Konu:
${data.topic || topic}
Arama Sorgusu:
${data.search_query || searchQuery}
Araştırma Özeti:
${data.research_summary || ""}
Bilinenler:
${knownFacts}
Eksik Bilgiler:
${missingInfo}
Uzmanlık Alanları:
${expertiseAreas}
İçerik Açısı:
${data.content_angle || ""}
Önerilen Post Konusu:
${data.suggested_post_topic || ""}
Risk Notu:
${data.risk_note || ""}`;
}catch(error){
researchBox.innerText = " Bağlantı hatası:\n\n" + error.message;
}
}
function hasPlatformPackage(text){
text = (text || "").toUpperCase();
return (
text.includes("INSTAGRAM POSTU") ||
text.includes("INSTAGRAM CAROUSEL") ||
text.includes("INSTAGRAM STORY") ||
text.includes("REELS SENARYOSU") ||
text.includes("LINKEDIN YAZISI")
);
}
async function repairResearchContentIfNeeded(topic){
const contentText = document.getElementById("contentResult").innerText || "";
if(hasPlatformPackage(contentText)){
return;
}
document.getElementById("statusContent").innerHTML =
'<div class="statusLine wait"> Araştırmaya göre içerik tek paragraf geldi.</div>' +
'<div class="statusLine wait">Platform paket formatı korunuyor...</div>' +
'<div class="statusLine wait">Instagram / Carousel / Story / Reels / LinkedIn paketi yeniden üretiliyor...</div>';
await generateAutoContent(topic);
const fixedText = document.getElementById("contentResult").innerText || "";
if(hasPlatformPackage(fixedText)){
document.getElementById("statusContent").innerHTML =
'<div class="statusLine ok"> Platform paket formatı düzeltildi.</div>' +
'<div class="statusLine ok">Instagram Postu / Carousel / Story / Reels / LinkedIn bölümleri hazır.</div>';
}else{
document.getElementById("statusContent").innerHTML =
'<div class="statusLine bad"> Platform paket formatı yine oluşmadı.</div>' +
'<div class="statusLine bad">Bu durumda generate.php promptu ayrıca güçlendirilmeli.</div>';
}
}
async function generateFromResearch(){
const topic = document.getElementById("autoTopic").value.trim();
if(topic === ""){
alert("Önce konu yaz.");
return;
}
const canContinue = await checkDuplicateBeforeGenerate(topic);
if(!canContinue){
return;
}
const researchText = document.getElementById("researchResult").innerText || "";
if(
researchText.trim() === "" ||
researchText.includes("Henüz araştırma yapılmadı") ||
researchText.includes("hazırlanıyor")
){
alert("Önce Araştırma Yap.");
return;
}
document.getElementById("contentResult").innerText =
" Araştırmaya göre içerik paketi hazırlanıyor...";
document.getElementById("socialResult").innerText =
" Araştırmaya göre sosyal medya metni hazırlanıyor...";
try{
const response = await fetch("../api/generate_from_research.php",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
topic: topic,
research: researchText
})
});
const text = await response.text();
if(!text || text.trim() === ""){
document.getElementById("contentResult").innerText =
" API boş cevap döndü.";
return;
}
let data;
try{
data = JSON.parse(text);
}catch(e){
document.getElementById("contentResult").innerText =
" API JSON dönmedi:\n\n" + text.substring(0,2000);
return;
}
if(!data.success){
document.getElementById("contentResult").innerText =
" İçerik üretilemedi:\n\n" + JSON.stringify(data,null,2);
return;
}
document.getElementById("contentResult").innerText =
typeof data.content_package === "object"
? JSON.stringify(data.content_package, null, 2)
: (data.content_package || "");
await repairResearchContentIfNeeded(topic);
await saveContentMemory(
topic,
data.profession || "",
Array.isArray(data.expertise_areas)
? data.expertise_areas.join(", ")
: "",
"research"
);
document.getElementById("socialResult").innerText =
typeof data.social_copy === "object"
? JSON.stringify(data.social_copy, null, 2)
: (data.social_copy || "");
if(data.visual_prompt){
document.getElementById("visualResult").innerText =
data.visual_prompt;
}
}catch(error){
document.getElementById("contentResult").innerText =
" Bağlantı hatası:\n\n" + error.message;
}
}
async function saveContentMemory(topic, mainCategory="", subCategory="", platform="automation"){
if(!topic || topic.trim() === ""){
return;
}
try{
await fetch("../api/save_content_memory.php",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
topic: topic,
main_category: mainCategory,
sub_category: subCategory,
platform: platform
})
});
}catch(error){
console.log("Content memory kayıt hatası:", error.message);
}
}
async function checkDuplicateBeforeGenerate(topic){
if(!topic || topic.trim() === ""){
return true;
}
try{
const response = await fetch("../api/check_content_memory.php",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
topic: topic
})
});
const data = await response.json();
const matches = Array.isArray(data.matches)
? data.matches
: (Array.isArray(data.results) ? data.results : []);
const count = Number(data.count || matches.length || 0);
const found = Boolean(data.found || count > 0);
if(data.success && found && count > 0){
let msg = " Bu konu daha önce işlendi.\n\n";
msg += "Benzer içerik sayısı: " + count + "\n";
if(matches.length > 0){
msg += "Son içerik: " + (matches[0].created_at || "Tarih yok") + "\n";
msg += "Konu: " + (matches[0].topic || "") + "\n";
msg += "Kategori: " + (matches[0].main_category || "") + "\n";
}
msg += "\nYine de devam etmek istiyor musunuz?";
return confirm(msg);
}
return true;
}catch(error){
console.log("Otomatik tekrar kontrol hatası:", error.message);
return true;
}
}
async function checkContentMemory(){
const topic = document.getElementById("autoTopic").value.trim();
const box = document.getElementById("memoryCheckResult");
if(topic === ""){
alert("Önce konu yaz.");
return;
}
box.innerText = " Hafıza taranıyor...";
try{
const response = await fetch("../api/check_content_memory.php",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({topic: topic})
});
const data = await response.json();
if(!data.success){
box.innerText = " " + (data.message || "Hata oluştu.");
return;
}
const matches = Array.isArray(data.matches) ? data.matches : [];
const count = Number(data.count || matches.length || 0);
if(count === 0){
box.innerText = " Bu konu daha önce işlenmemiş görünüyor.";
return;
}
let html = " Benzer içerikler bulundu (" + count + " adet)\n\n";
matches.forEach(function(item,index){
html += (index+1) + ". " + (item.topic || "Konu yok") + "\n";
if(item.created_at){
html += "Tarih: " + item.created_at + "\n";
}
if(item.main_category){
html += "Kategori: " + item.main_category + "\n";
}
if(item.sub_category){
html += "Alt kategori: " + item.sub_category + "\n";
}
html += "\n";
});
box.innerText = html;
}catch(error){
box.innerText = " Bağlantı hatası: " + error.message;
}
}
function useSuggestedTopic(encodedTopic){
const topic = decodeURIComponent(encodedTopic || "");
document.getElementById("autoTopic").value = topic;
document.getElementById("autoTopic").focus();
}
/* V50.5 CLICK SAFETY: Inline/JS bind yedeği */
window.runAutomation = runAutomation;
window.generateAutomationImage = generateAutomationImage;
window.brandAutomationImage = brandAutomationImage;
window.createAutomationStoryImage = createAutomationStoryImage;
window.createAutomationCarousel = createAutomationCarousel;
window.downloadAutomationCarouselImages = downloadAutomationCarouselImages;
window.publishAutomationCarousel = publishAutomationCarousel;
window.publishAutomationPost = publishAutomationPost;
window.generateThreadsContent = generateThreadsContent;
window.copyThreadsContent = copyThreadsContent;
document.addEventListener("DOMContentLoaded", function(){
const runBtn = document.getElementById("runAutomationBtn");
if(runBtn){
runBtn.addEventListener("click", function(e){
e.preventDefault();
runAutomation();
});
}
});
window.addEventListener("error", function(e){
try{
setStatus([{text:"JavaScript hata yakaladı: " + (e.message || "Bilinmeyen hata"), className:"bad"}]);
}catch(err){}
});
window.addEventListener("unhandledrejection", function(e){
try{
const msg = e.reason && e.reason.message ? e.reason.message : String(e.reason || "Bilinmeyen promise hatası");
setStatus([{text:"İşlem hatası: " + msg, className:"bad"}]);
}catch(err){}
});
</script>
</body>
</html>
