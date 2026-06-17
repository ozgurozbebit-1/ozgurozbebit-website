<?php
session_start();
require_once 'config/database.php';

if($_SERVER["REQUEST_METHOD"]=="POST"){

$email=$_POST["email"];
$password=$_POST["password"];

$stmt=$pdo->prepare("
SELECT * FROM users
WHERE email=?
AND password=?
LIMIT 1
");

$stmt->execute([$email,$password]);

$user=$stmt->fetch();

if($user){

$_SESSION["user_id"]=$user["id"];
$_SESSION["user_name"]=$user["name"];

header("Location: dashboard/index.php");
exit;

}else{

echo "<script>alert('Hatalı giriş');</script>";

}

}
?>

<!DOCTYPE html>

<html lang="tr">
<head>
<meta charset="utf-8">
<title>Özgür Özbebit Dijital İçerik Merkezi</title>

<style>

body{
font-family:Arial;
background:#f4f6f9;
margin:0;
padding:0;
}

.header{
background:#0f766e;
color:white;
padding:20px;
font-size:24px;
font-weight:bold;
}

.container{
padding:40px;
}

.card{
background:white;
padding:30px;
border-radius:12px;
box-shadow:0 0 10px rgba(0,0,0,.08);
max-width:600px;
}

input{
width:100%;
padding:12px;
margin-top:10px;
margin-bottom:15px;
box-sizing:border-box;
}

button{
background:#0f766e;
color:white;
border:none;
padding:12px 20px;
cursor:pointer;
border-radius:8px;
}

</style>

</head>
<body>

<div class="header">
🧠 Özgür Özbebit Dijital İçerik Merkezi V3
</div>

<div class="container">

<div class="card">

<h2>Admin Girişi</h2>

<form method="POST">

<label>E-Posta</label> <input type="email" name="email">

<label>Şifre</label> <input type="password" name="password">

<button type="submit">
Giriş Yap
</button>

</form>

</div>

</div>

</body>
</html>
