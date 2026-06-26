<?php
session_start();
require_once 'config/database.php';

$error = "";

if($_SERVER["REQUEST_METHOD"]=="POST"){

    $email = trim($_POST["email"] ?? "");
    $password = trim($_POST["password"] ?? "");

    $stmt = $pdo->prepare("
        SELECT * FROM users
        WHERE email=?
        AND password=?
        LIMIT 1
    ");

    $stmt->execute([$email,$password]);
    $user = $stmt->fetch();

    if($user){
        $_SESSION["user_id"] = $user["id"];
        $_SESSION["user_name"] = $user["name"];

        header("Location: dashboard/index.php");
        exit;
    }else{
        $error = "E-posta veya şifre hatalı.";
    }
}
?>

<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Özgür Özbebit Dijital İçerik Merkezi</title>

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
    display:flex;
    align-items:center;
    justify-content:center;
    padding:32px;
}

.login-shell{
    width:min(1120px,100%);
    min-height:620px;
    display:grid;
    grid-template-columns:1.1fr .9fr;
    gap:34px;
    padding:42px;
    border:1px solid rgba(255,255,255,.12);
    border-radius:30px;
    background:rgba(255,255,255,.07);
    box-shadow:0 35px 90px rgba(0,0,0,.35);
    backdrop-filter:blur(22px);
    position:relative;
    overflow:hidden;
}

.login-shell:before{
    content:"";
    position:absolute;
    width:440px;
    height:440px;
    border-radius:50%;
    background:linear-gradient(135deg,#22d3ee,#7c3aed);
    opacity:.22;
    right:38%;
    bottom:-160px;
    filter:blur(4px);
}

.brand{
    position:relative;
    z-index:1;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}

.logo-row{
    display:flex;
    align-items:center;
    gap:16px;
}

.logo{
    width:58px;
    height:58px;
    border-radius:18px;
    display:grid;
    place-items:center;
    background:linear-gradient(135deg,#22d3ee,#2563eb);
    font-size:30px;
    box-shadow:0 18px 40px rgba(34,211,238,.25);
}

.logo-text strong{
    display:block;
    font-size:28px;
    line-height:1.1;
}

.logo-text span{
    display:block;
    margin-top:5px;
    color:#b9c7d8;
    font-weight:600;
}

.hero h1{
    margin:0;
    font-size:clamp(44px,5vw,68px);
    line-height:.95;
    letter-spacing:-2.5px;
}

.hero h1 span{
    background:linear-gradient(90deg,#22d3ee,#8b5cf6);
    -webkit-background-clip:text;
    color:transparent;
}

.hero p{
    max-width:560px;
    margin:26px 0 0;
    color:#cbd5e1;
    font-size:19px;
    line-height:1.7;
}

.features{
    display:flex;
    gap:18px;
    flex-wrap:wrap;
}

.feature{
    min-width:145px;
    padding:16px;
    border-radius:20px;
    background:rgba(255,255,255,.08);
    border:1px solid rgba(255,255,255,.1);
}

.feature b{
    display:block;
    font-size:15px;
}

.feature span{
    display:block;
    margin-top:6px;
    color:#aebdd0;
    font-size:13px;
    line-height:1.4;
}

.login-card{
    position:relative;
    z-index:1;
    align-self:center;
    padding:38px;
    border-radius:28px;
    border:1px solid rgba(255,255,255,.13);
    background:rgba(10,25,45,.72);
    box-shadow:0 28px 80px rgba(0,0,0,.36);
    backdrop-filter:blur(18px);
}

.lock{
    width:64px;
    height:64px;
    border-radius:20px;
    display:grid;
    place-items:center;
    background:linear-gradient(135deg,rgba(34,211,238,.22),rgba(124,58,237,.25));
    font-size:30px;
    margin-bottom:22px;
}

.login-card h2{
    margin:0;
    font-size:32px;
    letter-spacing:-1px;
}

.login-card p{
    margin:10px 0 30px;
    color:#b8c5d6;
}

.field{
    margin-bottom:20px;
}

.field label{
    display:block;
    margin-bottom:9px;
    color:#cbd5e1;
    font-size:14px;
    font-weight:800;
}

.field input{
    width:100%;
    height:56px;
    border:1px solid rgba(255,255,255,.14);
    border-radius:16px;
    background:rgba(255,255,255,.07);
    color:#fff;
    outline:none;
    padding:0 16px;
    font-size:16px;
    transition:.2s;
}

.field input:focus{
    border-color:#38bdf8;
    box-shadow:0 0 0 4px rgba(56,189,248,.14);
    background:rgba(255,255,255,.1);
}

.field input::placeholder{
    color:#718096;
}

.login-btn{
    width:100%;
    height:58px;
    border:0;
    border-radius:18px;
    margin-top:4px;
    background:linear-gradient(90deg,#06b6d4,#2563eb,#7c3aed);
    color:white;
    font-size:17px;
    font-weight:900;
    cursor:pointer;
    box-shadow:0 20px 45px rgba(37,99,235,.32);
    transition:.18s;
}

.login-btn:hover{
    transform:translateY(-1px);
    box-shadow:0 24px 55px rgba(37,99,235,.42);
}

.error{
    margin-bottom:18px;
    padding:13px 15px;
    border-radius:14px;
    background:rgba(239,68,68,.14);
    border:1px solid rgba(248,113,113,.35);
    color:#fecaca;
    font-weight:800;
}

.footer-note{
    margin-top:24px;
    text-align:center;
    color:#8fa2ba;
    font-size:13px;
    line-height:1.5;
}

@media(max-width:900px){
    .login-shell{
        grid-template-columns:1fr;
        padding:28px;
    }

    .brand{
        gap:34px;
    }

    .hero h1{
        font-size:44px;
    }
}
</style>
</head>

<body>

<div class="login-shell">

    <section class="brand">
        <div class="logo-row">
            <div class="logo">🧠</div>
            <div class="logo-text">
                <strong>Özgür Özbebit</strong>
                <span>Dijital İçerik Merkezi V3</span>
            </div>
        </div>

        <div class="hero">
            <h1>Tek Tuşla<br><span>Akıllı İçerik.</span></h1>
            <p>
                İçerik üretimi, görsel hazırlama, story tasarımı ve sosyal medya yayın akışını tek merkezden yönetin.
            </p>
        </div>

        <div class="features">
            <div class="feature">
                <b>⚡ Hızlı</b>
                <span>Tek tuş üretim akışı</span>
            </div>
            <div class="feature">
                <b>🎨 Premium</b>
                <span>Kurumsal görsel dil</span>
            </div>
            <div class="feature">
                <b>🚀 Otomasyon</b>
                <span>Sosyal medya merkezi</span>
            </div>
        </div>
    </section>

    <section class="login-card">
        <div class="lock">🔐</div>

        <h2>Admin Girişi</h2>
        <p>Hesabınıza giriş yaparak TOM paneline devam edin.</p>

        <?php if($error): ?>
            <div class="error"><?php echo htmlspecialchars($error); ?></div>
        <?php endif; ?>

        <form method="POST">
            <div class="field">
                <label>E-posta Adresi</label>
                <input type="email" name="email" placeholder="ornek@mail.com" required>
            </div>

            <div class="field">
                <label>Şifre</label>
                <input type="password" name="password" placeholder="••••••••" required>
            </div>

            <button class="login-btn" type="submit">
                Sisteme Giriş Yap →
            </button>
        </form>

        <div class="footer-note">
            BeBiT & BeBiT yazılım · Güvenli yönetim paneli
        </div>
    </section>

</div>

</body>
</html>