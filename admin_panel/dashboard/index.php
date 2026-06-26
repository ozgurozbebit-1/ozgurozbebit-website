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
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>TOM AI İçerik Merkezi</title>

<style>

*{
    box-sizing:border-box;
}

body{
    margin:0;
    min-height:100vh;
    font-family:Inter, Arial, sans-serif;
    background:
        radial-gradient(circle at 20% 20%, rgba(20,184,166,.24), transparent 28%),
        radial-gradient(circle at 80% 70%, rgba(59,130,246,.22), transparent 30%),
        linear-gradient(135deg,#071728 0%,#0b2239 45%,#07111f 100%);
    color:#fff;
    padding:40px;
}

.container{
    max-width:1400px;
    margin:auto;
}

.header{
    text-align:center;
    margin-bottom:50px;
}

.header h1{
    margin:0;
    font-size:64px;
    letter-spacing:-2px;
}

.header p{
    color:#cbd5e1;
    margin-top:12px;
    font-size:22px;
}

.cards{
    display:flex;
    gap:35px;
    justify-content:center;
    flex-wrap:wrap;
}

.card{
    width:560px;
    min-height:620px;

    border-radius:32px;
    padding:45px;

    background:rgba(255,255,255,.07);
    border:1px solid rgba(255,255,255,.12);

    backdrop-filter:blur(22px);

    box-shadow:0 35px 90px rgba(0,0,0,.35);

    text-align:center;

    transition:.25s;
}

.card:hover{
    transform:translateY(-8px);
}

.ozgur{
    border-top:8px solid #2563eb;
}

.selale{
    border-top:8px solid #ec4899;
}

.icon{
    width:120px;
    height:120px;
    border-radius:50%;

    margin:auto;
    margin-bottom:25px;

    display:flex;
    align-items:center;
    justify-content:center;

    font-size:58px;

    background:rgba(255,255,255,.12);

    box-shadow:0 15px 40px rgba(0,0,0,.25);
}

.card h2{
    margin:0;
    font-size:56px;
    letter-spacing:-1px;
}

.line{
    width:90px;
    height:5px;
    border-radius:20px;
    margin:22px auto;
}

.line-blue{
    background:#2563eb;
}

.line-pink{
    background:#ec4899;
}

.card p{
    color:#cbd5e1;
    font-size:20px;
    line-height:1.9;
    margin-bottom:35px;
}

.tags{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:12px;
    margin-bottom:35px;
}

.tag{
    padding:12px 18px;
    border-radius:999px;
    background:rgba(255,255,255,.08);
    border:1px solid rgba(255,255,255,.12);
    color:#dbeafe;
    font-size:14px;
}

.btn{
    display:block;
    width:100%;
    padding:22px;
    border-radius:18px;

    text-decoration:none;
    color:white;

    font-size:22px;
    font-weight:800;

    margin-top:20px;
}

.btn-blue{
    background:linear-gradient(90deg,#06b6d4,#2563eb,#7c3aed);
}

.btn-pink{
    background:linear-gradient(90deg,#ff5ca8,#ec4899,#be185d);
}

.footer{
    text-align:center;
    margin-top:40px;
    color:#94a3b8;
}

@media(max-width:1200px){

    .card{
        width:100%;
        max-width:650px;
    }

    .header h1{
        font-size:46px;
    }

}

</style>

</head>
<body>

<div class="container">

<div class="header">
    <h1>TOM AI İçerik Merkezi</h1>
    <p>Hangi içerik yönetim paneline giriş yapmak istiyorsunuz?</p>
</div>

<div class="cards">

```
<div class="card ozgur">

    <div class="icon">🧠</div>

    <h2>ÖZGÜR TOM</h2>

    <div class="line line-blue"></div>

    <p>
        Psikiyatri, ruh sağlığı, kişisel marka yönetimi,
        sosyal medya içerik üretimi ve otomatik yayın merkezi.
    </p>

    <div class="tags">
        <div class="tag">Psikiyatri</div>
        <div class="tag">Ruh Sağlığı</div>
        <div class="tag">Profesyonel Marka</div>
        <div class="tag">Instagram</div>
        <div class="tag">LinkedIn</div>
        <div class="tag">Threads</div>
    </div>

    <a class="btn btn-blue"
       href="../auth/select_brand.php?brand=ozgur">
       ÖZGÜR TOM Paneline Gir →
    </a>

</div>

<div class="card selale">

    <div class="icon">🌸</div>

    <h2>ŞELALE TOM</h2>

    <div class="line line-pink"></div>

    <p>
        Aile danışmanlığı, ebeveynlik, çocuk gelişimi,
        çift ilişkileri ve sosyal medya içerik merkezi.
    </p>

    <div class="tags">
        <div class="tag">Aile Danışmanlığı</div>
        <div class="tag">Çocuk</div>
        <div class="tag">Çift Terapisi</div>
        <div class="tag">Instagram</div>
        <div class="tag">LinkedIn</div>
        <div class="tag">Threads</div>
    </div>

    <a class="btn btn-pink"
       href="../auth/select_brand.php?brand=selale">
       ŞELALE TOM Paneline Gir →
    </a>

</div>
```

</div>

<div class="footer">
    © 2026 TOM AI İçerik Merkezi
</div>

</div>

</body>
</html>
