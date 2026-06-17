<?php
session_start();

if(!isset($_SESSION["user_id"])){
    header("Location: ../index.php");
    exit;
}

require_once "../config/database.php";

function e($v){
    return htmlspecialchars($v ?? "", ENT_QUOTES, "UTF-8");
}

if($_SERVER["REQUEST_METHOD"] === "POST"){

    $platform = trim($_POST["platform"] ?? "");
    $account_name = trim($_POST["account_name"] ?? "");
    $access_token = trim($_POST["access_token"] ?? "");
    $refresh_token = trim($_POST["refresh_token"] ?? "");
    $page_id = trim($_POST["page_id"] ?? "");
    $account_id = trim($_POST["account_id"] ?? "");

    if($platform !== ""){
        $stmt = $pdo->prepare("
            INSERT INTO social_accounts 
            (platform, account_name, access_token, refresh_token, page_id, account_id, status)
            VALUES (?, ?, ?, ?, ?, ?, 1)
        ");
        $stmt->execute([
            $platform,
            $account_name,
            $access_token,
            $refresh_token,
            $page_id,
            $account_id
        ]);
    }

    header("Location: social_accounts.php");
    exit;
}

if(isset($_GET["delete"])){
    $id = intval($_GET["delete"]);
    $stmt = $pdo->prepare("DELETE FROM social_accounts WHERE id=?");
    $stmt->execute([$id]);

    header("Location: social_accounts.php");
    exit;
}

$accounts = $pdo->query("
    SELECT *
    FROM social_accounts
    ORDER BY created_at DESC
")->fetchAll(PDO::FETCH_ASSOC);

$platforms = [
    "facebook" => "Facebook",
    "linkedin" => "LinkedIn",
    "x" => "X",
    "instagram" => "Instagram",
    "youtube" => "YouTube"
];
?>
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>V25.2 Platform Hesap Bağlantıları</title>

<style>
body{
    margin:0;
    font-family:Arial,sans-serif;
    background:#f3f8f8;
    color:#123;
}
.header{
    background:white;
    padding:20px 30px;
    border-bottom:1px solid #dbecec;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.logo{
    font-size:20px;
    font-weight:bold;
    color:#073b3a;
}
.header a{
    background:#e7f4f4;
    color:#073b3a;
    padding:10px 14px;
    border-radius:10px;
    text-decoration:none;
    font-weight:bold;
}
.container{
    max-width:1100px;
    margin:auto;
    padding:30px;
}
.hero{
    background:linear-gradient(135deg,#073b3a,#0f766e);
    color:white;
    padding:25px;
    border-radius:22px;
    margin-bottom:25px;
}
.hero h1{
    margin:0 0 8px;
}
.card{
    background:white;
    padding:24px;
    border-radius:18px;
    box-shadow:0 4px 14px rgba(0,0,0,.06);
    margin-bottom:25px;
}
.quick-connect{
    display:flex;
    gap:12px;
    flex-wrap:wrap;
    margin-bottom:20px;
}
.quick-btn{
    display:inline-block;
    padding:12px 16px;
    border-radius:12px;
    color:white;
    text-decoration:none;
    font-weight:bold;
}
.quick-linkedin{background:#0A66C2;}
.quick-facebook{background:#1877F2;}
.quick-x{background:#111;}
.quick-disabled{
    background:#94a3b8;
    cursor:not-allowed;
}
.grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:15px;
}
label{
    font-weight:bold;
    color:#073b3a;
    display:block;
    margin-bottom:6px;
}
input,select,textarea{
    width:100%;
    padding:12px;
    border:1px solid #cfe5e5;
    border-radius:10px;
    box-sizing:border-box;
}
textarea{
    min-height:90px;
}
button{
    margin-top:15px;
    background:#073b3a;
    color:white;
    border:0;
    padding:13px 18px;
    border-radius:12px;
    font-weight:bold;
    cursor:pointer;
}
table{
    width:100%;
    border-collapse:collapse;
}
th,td{
    padding:13px;
    border-bottom:1px solid #edf3f3;
    text-align:left;
    vertical-align:top;
}
th{
    background:#eef8f8;
    color:#073b3a;
}
.badge{
    background:#dcfce7;
    color:#166534;
    padding:6px 10px;
    border-radius:999px;
    font-size:12px;
    font-weight:bold;
}
.delete{
    color:#9f1239;
    text-decoration:none;
    font-weight:bold;
}
.note{
    background:#fff7ed;
    border:1px solid #fed7aa;
    color:#92400e;
    padding:14px;
    border-radius:12px;
    margin-bottom:20px;
    line-height:1.5;
}
.success-note{
    background:#ecfdf5;
    border:1px solid #bbf7d0;
    color:#166534;
    padding:14px;
    border-radius:12px;
    margin-bottom:20px;
    font-weight:bold;
}
.token-preview{
    max-width:260px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    color:#607d7b;
    font-size:12px;
}
.small{
    color:#607d7b;
    font-size:13px;
    line-height:1.5;
}
@media(max-width:800px){
    .grid{grid-template-columns:1fr;}
}
</style>
</head>

<body>

<div class="header">
    <div class="logo">Özgür Özbebit Dijital İçerik Merkezi</div>
    <a href="publish.php">← Yayın Merkezi</a>
</div>

<div class="container">

    <div class="hero">
        <h1>🔗 V25.2 Platform Hesap Bağlantıları</h1>
        <p>Facebook, LinkedIn, X, Instagram ve YouTube hesap bilgilerini burada yöneteceğiz.</p>
    </div>

    <?php if(isset($_GET["linkedin"]) && $_GET["linkedin"] === "connected"): ?>
        <div class="success-note">
            ✅ LinkedIn bağlantısı başarıyla kaydedildi.
        </div>
    <?php endif; ?>

    <div class="note">
        Bu ekran manuel token bağlantı merkezidir. Facebook, LinkedIn ve X için Page ID / Account ID ve Access Token bilgileri buradan kaydedilir.
        LinkedIn için aşağıdaki otomatik bağlantı butonunu kullanabilirsin.
    </div>

    <div class="card">
        <h2>Hızlı Bağlantılar</h2>

        <div class="quick-connect">
            <a class="quick-btn quick-linkedin" href="../api/connect_linkedin.php">
                💼 LinkedIn Bağla
            </a>

            <a class="quick-btn quick-facebook" href="../api/connect_meta.php">
                📘 Facebook Bağla
            </a>

            <a class="quick-btn quick-x" href="javascript:void(0)" onclick="alert('X OAuth bağlantısı V25.5 ile eklenecek. Şimdilik manuel token girilecek.')">
                𝕏 X Bağla
            </a>

            <a class="quick-btn quick-disabled" href="javascript:void(0)" onclick="alert('Instagram Meta izin süreci nedeniyle şimdilik park edildi.')">
                📸 Instagram Park Edildi
            </a>
        </div>

        <div class="small">
            LinkedIn butonu gerçek OAuth bağlantısı açar. Facebook ve X için şimdilik manuel token veya sonraki OAuth modülü kullanılacak.
        </div>
    </div>

    <div class="card">
        <h2>Yeni Hesap Bağlantısı Ekle</h2>

        <form method="post">
            <div class="grid">
                <div>
                    <label>Platform</label>
                    <select name="platform" required>
                        <option value="">Seçiniz</option>
                        <?php foreach($platforms as $key=>$name): ?>
                            <option value="<?= e($key) ?>"><?= e($name) ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>

                <div>
                    <label>Hesap Adı</label>
                    <input type="text" name="account_name" placeholder="@drozgurozbebit">
                </div>

                <div>
                    <label>Page ID / Sayfa ID</label>
                    <input type="text" name="page_id" placeholder="Facebook Page ID veya LinkedIn Organization ID">
                </div>

                <div>
                    <label>Account ID</label>
                    <input type="text" name="account_id" placeholder="LinkedIn URN / X User ID / Instagram Business ID">
                </div>
            </div>

            <label style="margin-top:15px;">Access Token</label>
            <textarea name="access_token" placeholder="Platform access token buraya"></textarea>

            <label style="margin-top:15px;">Refresh Token</label>
            <textarea name="refresh_token" placeholder="Varsa refresh token buraya"></textarea>

            <button type="submit">💾 Hesabı Kaydet</button>
        </form>
    </div>

    <div class="card">
        <h2>Kayıtlı Hesaplar</h2>

        <?php if(count($accounts)>0): ?>
            <table>
                <thead>
                    <tr>
                        <th>Platform</th>
                        <th>Hesap</th>
                        <th>Page ID</th>
                        <th>Account ID</th>
                        <th>Token</th>
                        <th>Durum</th>
                        <th>İşlem</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($accounts as $acc): ?>
                        <tr>
                            <td><?= e(ucfirst($acc["platform"])) ?></td>
                            <td><?= e($acc["account_name"]) ?></td>
                            <td><?= e($acc["page_id"]) ?></td>
                            <td><?= e($acc["account_id"]) ?></td>
                            <td>
                                <?php if(!empty($acc["access_token"])): ?>
                                    <div class="token-preview"><?= e(substr($acc["access_token"],0,18)) ?>...</div>
                                <?php else: ?>
                                    —
                                <?php endif; ?>
                            </td>
                            <td><span class="badge">Aktif</span></td>
                            <td>
                                <a class="delete" href="?delete=<?= e($acc["id"]) ?>" onclick="return confirm('Silinsin mi?')">Sil</a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php else: ?>
            Henüz kayıtlı hesap yok.
        <?php endif; ?>
    </div>

</div>

</body>
</html>