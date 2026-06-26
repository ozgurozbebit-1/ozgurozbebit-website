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

body{
    margin:0;
    font-family:Arial, sans-serif;
    background:#f4f7fc;
}

.container{
    max-width:1200px;
    margin:auto;
    padding:50px 20px;
}

.title{
    text-align:center;
    font-size:42px;
    font-weight:700;
    margin-bottom:15px;
}

.subtitle{
    text-align:center;
    color:#666;
    margin-bottom:50px;
}

.cards{
    display:flex;
    gap:30px;
    justify-content:center;
    flex-wrap:wrap;
}

.card{
    width:450px;
    border-radius:25px;
    padding:40px;
    box-sizing:border-box;
    text-align:center;
    background:white;
    box-shadow:0 15px 40px rgba(0,0,0,0.08);
}

.ozgur{
    border-top:8px solid #2f6fff;
}

.selale{
    border-top:8px solid #ff5ca8;
}

.card h2{
    font-size:42px;
    margin-bottom:20px;
}

.card p{
    color:#555;
    line-height:1.7;
    min-height:90px;
}

.btn{
    display:block;
    margin-top:30px;
    padding:18px;
    text-decoration:none;
    color:white;
    border-radius:12px;
    font-weight:bold;
}

.btn-blue{
    background:#2f6fff;
}

.btn-pink{
    background:#ff5ca8;
}

</style>
</head>
<body>

<div class="container">

<div class="title">
TOM AI İçerik Merkezi
</div>

<div class="subtitle">
Hangi panele giriş yapmak istiyorsunuz?
</div>

<div class="cards">

<div class="card ozgur">

<h2>🧠 ÖZGÜR TOM</h2>

<p>
Psikiyatri, ruh sağlığı,
kişisel marka ve sosyal medya içerik merkezi.
</p>

<a href="../auth/select_brand.php?brand=ozgur"
class="btn btn-blue">
Panele Gir
</a>

</div>

<div class="card selale">

<h2>🌸 ŞELALE TOM</h2>

<p>
Aile danışmanlığı,
çocuk gelişimi,
çift ilişkileri içerik merkezi.
</p>

<a href="../auth/select_brand.php?brand=selale"
class="btn btn-pink">
Panele Gir
</a>

</div>

</div>

</div>

</body>
</html>