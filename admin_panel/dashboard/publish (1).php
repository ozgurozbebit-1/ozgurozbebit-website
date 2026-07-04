<?php
session_start();

if(!isset($_SESSION["user_id"])){
    header("Location: ../index.php");
    exit;
}

require_once "../config/database.php";

$jobs = $pdo->query("
    SELECT *
    FROM publish_jobs
    ORDER BY created_at DESC
    LIMIT 100
")->fetchAll(PDO::FETCH_ASSOC);

$accounts = $pdo->query("
    SELECT *
    FROM social_accounts
    ORDER BY platform ASC
")->fetchAll(PDO::FETCH_ASSOC);

$totalPending = $pdo->query("SELECT COUNT(*) FROM publish_jobs WHERE status='pending'")->fetchColumn();
$totalPublished = $pdo->query("SELECT COUNT(*) FROM publish_jobs WHERE status='published'")->fetchColumn();
$totalFailed = $pdo->query("SELECT COUNT(*) FROM publish_jobs WHERE status='failed'")->fetchColumn();
$totalPublishing = $pdo->query("SELECT COUNT(*) FROM publish_jobs WHERE status='publishing'")->fetchColumn();

function e($str){
    return htmlspecialchars($str ?? "", ENT_QUOTES, "UTF-8");
}

function statusBadge($status){
    if($status === "published"){
        return "<span class='badge success'>Yayınlandı</span>";
    }
    if($status === "failed"){
        return "<span class='badge danger'>Hata</span>";
    }
    if($status === "publishing"){
        return "<span class='badge warning'>Yayınlanıyor</span>";
    }
    return "<span class='badge pending'>Bekliyor</span>";
}
?>
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>V25 Otomatik Yayın Merkezi</title>

<style>
body{
    margin:0;
    font-family:Arial, sans-serif;
    background:#f3f8f8;
    color:#123;
}
.header{
    background:white;
    padding:22px 32px;
    border-bottom:1px solid #dbecec;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.logo{
    font-size:22px;
    font-weight:bold;
    color:#073b3a;
}
.back{
    text-decoration:none;
    background:#e7f4f4;
    color:#073b3a;
    padding:10px 16px;
    border-radius:10px;
    font-weight:bold;
}
.container{
    padding:30px;
    max-width:1300px;
    margin:auto;
}
.hero{
    background:linear-gradient(135deg,#073b3a,#0f766e);
    color:white;
    padding:28px;
    border-radius:22px;
    margin-bottom:25px;
    box-shadow:0 10px 30px rgba(0,0,0,.12);
}
.hero h1{
    margin:0 0 10px;
    font-size:30px;
}
.hero p{
    margin:0;
    opacity:.92;
    line-height:1.5;
}
.stats{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:18px;
    margin-bottom:25px;
}
.card{
    background:white;
    padding:22px;
    border-radius:18px;
    box-shadow:0 4px 14px rgba(0,0,0,.06);
}
.card h3{
    margin:0 0 8px;
    color:#40615f;
    font-size:15px;
}
.card .num{
    font-size:34px;
    font-weight:bold;
    color:#073b3a;
}
.section-title{
    margin:35px 0 15px;
    font-size:22px;
    color:#073b3a;
}
.platforms{
    display:grid;
    grid-template-columns:repeat(5,1fr);
    gap:15px;
    margin-bottom:25px;
}
.platform{
    background:white;
    border-radius:18px;
    padding:20px;
    box-shadow:0 4px 14px rgba(0,0,0,.06);
    text-align:center;
}
.platform .icon{
    font-size:28px;
    margin-bottom:8px;
}
.platform strong{
    display:block;
    margin-bottom:8px;
    color:#073b3a;
}
.platform small{
    color:#607d7b;
}
.actions{
    display:flex;
    gap:12px;
    margin:20px 0 30px;
    flex-wrap:wrap;
}
.btn{
    border:0;
    cursor:pointer;
    padding:13px 18px;
    border-radius:12px;
    font-weight:bold;
    font-size:14px;
    text-decoration:none;
    display:inline-block;
}
.btn-primary{
    background:#073b3a;
    color:white;
}
.btn-secondary{
    background:#e7f4f4;
    color:#073b3a;
}
.btn-danger{
    background:#ffe5e5;
    color:#9f1239;
}
.btn-small{
    padding:8px 11px;
    font-size:12px;
}
.form-row{
    display:grid;
    grid-template-columns:1fr 2fr;
    gap:15px;
    margin-bottom:12px;
}
label{
    font-weight:bold;
    color:#073b3a;
    display:block;
    margin-bottom:6px;
}
select,input,textarea{
    width:100%;
    padding:12px;
    border-radius:10px;
    border:1px solid #cfe5e5;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}
textarea{
    min-height:120px;
}
.table-wrap{
    background:white;
    border-radius:20px;
    box-shadow:0 4px 14px rgba(0,0,0,.06);
    overflow:auto;
}
table{
    width:100%;
    border-collapse:collapse;
    min-width:900px;
}
th{
    text-align:left;
    background:#eef8f8;
    color:#073b3a;
    padding:14px;
    font-size:14px;
}
td{
    padding:14px;
    border-top:1px solid #edf3f3;
    vertical-align:top;
    font-size:14px;
}
.post-text{
    max-width:420px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.badge{
    display:inline-block;
    padding:6px 10px;
    border-radius:999px;
    font-size:12px;
    font-weight:bold;
}
.success{
    background:#dcfce7;
    color:#166534;
}
.danger{
    background:#ffe4e6;
    color:#9f1239;
}
.warning{
    background:#fef3c7;
    color:#92400e;
}
.pending{
    background:#e0f2fe;
    color:#075985;
}
.empty{
    padding:35px;
    text-align:center;
    color:#607d7b;
}
.notice{
    background:#ecfeff;
    border:1px solid #bae6fd;
    color:#075985;
    padding:14px;
    border-radius:14px;
    margin-bottom:20px;
    font-weight:bold;
}
@media(max-width:900px){
    .stats,
    .platforms,
    .form-row{
        grid-template-columns:1fr 1fr;
    }
    .header{
        flex-direction:column;
        gap:12px;
        align-items:flex-start;
    }
}
@media(max-width:600px){
    .stats,
    .platforms,
    .form-row{
        grid-template-columns:1fr;
    }
    .container{
        padding:18px;
    }
}
</style>
</head>

<body>

<div class="header">
    <div class="logo">Özgür Özbebit Dijital İçerik Merkezi</div>
    <a class="back" href="index.php">← Dashboard</a>
</div>

<div class="container">

    <div class="hero">
        <h1>🚀 V25 Otomatik Yayın Merkezi</h1>
        <p>
            Facebook, LinkedIn ve X için hazırlanan içeriklerin yayın kuyruğunu yönetir.
            Instagram entegrasyonu Meta izin süreci nedeniyle şimdilik park edildi.
        </p>
    </div>

    <?php if(isset($_GET["success"]) && $_GET["success"] === "job_created"): ?>
        <div class="notice">✅ Test yayını kuyruğa eklendi.</div>
    <?php endif; ?>

    <?php if(isset($_GET["error"]) && $_GET["error"] === "empty"): ?>
        <div class="notice">⚠️ Platform ve paylaşım metni zorunludur.</div>
    <?php endif; ?>

    <div class="stats">
        <div class="card">
            <h3>Bekleyen</h3>
            <div class="num"><?= e($totalPending) ?></div>
        </div>

        <div class="card">
            <h3>Yayınlanıyor</h3>
            <div class="num"><?= e($totalPublishing) ?></div>
        </div>

        <div class="card">
            <h3>Yayınlanan</h3>
            <div class="num"><?= e($totalPublished) ?></div>
        </div>

        <div class="card">
            <h3>Hatalı</h3>
            <div class="num"><?= e($totalFailed) ?></div>
        </div>
    </div>

    <h2 class="section-title">Platform Bağlantıları</h2>

    <div class="platforms">
        <?php
        $defaultPlatforms = [
            "facebook" => ["Facebook", "📘"],
            "linkedin" => ["LinkedIn", "💼"],
            "x" => ["X", "𝕏"],
            "instagram" => ["Instagram", "📸"],
            "youtube" => ["YouTube", "▶️"]
        ];

        foreach($defaultPlatforms as $key => $p):
            $found = null;
            foreach($accounts as $acc){
                if(strtolower($acc["platform"]) === $key){
                    $found = $acc;
                    break;
                }
            }
        ?>
            <div class="platform">
                <div class="icon"><?= $p[1] ?></div>
                <strong><?= e($p[0]) ?></strong>

                <?php if($found): ?>
                    <small>Bağlı: <?= e($found["account_name"] ?: "Hesap") ?></small>
                    <br><br>
                    <span class="badge success">Aktif</span>
                <?php else: ?>
                    <small>Henüz bağlantı yok</small>
                    <br><br>
                    <span class="badge pending">Kurulum Bekliyor</span>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>

    <div class="actions">
        <button class="btn btn-primary" onclick="multiPublish()">
    🚀 Tüm Platformlara Yayınla
</button>

        <button class="btn btn-secondary" onclick="window.location.href='social_accounts.php'">
            🔗 Hesapları Bağla
        </button>

        <button class="btn btn-secondary" onclick="location.reload()">
            🔄 Kuyruğu Yenile
        </button>

        <button class="btn btn-danger" onclick="alert('V25.7 ile aktif olacak: Hatalı yayınları yeniden dene')">
            ♻️ Hatalıları Yeniden Dene
        </button>
    </div>

    <div class="card" style="margin-bottom:25px;">
        <h2>🧪 Test Yayını Oluştur</h2>

        <form method="post" action="../api/create_test_publish_job.php">

            <div class="form-row">
                <div>
                    <label>Platform</label>
                    <select name="platform" required>
                        <option value="">Seçiniz</option>
                        <option value="facebook">Facebook</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="x">X</option>
                    </select>
                </div>

                <div>
                    <label>Görsel URL</label>
                    <input type="text" name="image_url" placeholder="Varsa görsel linki">
                </div>
            </div>

            <label>Paylaşım Metni</label>
            <textarea name="post_text" required>Bu bir V25 test paylaşımıdır.</textarea>

            <br><br>

            <button class="btn btn-primary" type="submit">
                ➕ Yayın Kuyruğuna Ekle
            </button>
        </form>
    </div>

    <h2 class="section-title">Yayın Kuyruğu</h2>

    <div class="table-wrap">
        <?php if(count($jobs) > 0): ?>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Platform</th>
                        <th>Metin</th>
                        <th>Görsel</th>
                        <th>Durum</th>
                        <th>Yayın Tarihi</th>
                        <th>Hata</th>
                        <th>İşlem</th>
                    </tr>
                </thead>

                <tbody>
                    <?php foreach($jobs as $job): ?>
                        <tr>
                            <td>#<?= e($job["id"]) ?></td>
                            <td><?= e(ucfirst($job["platform"])) ?></td>
                            <td class="post-text" title="<?= e($job["post_text"]) ?>">
                                <?= e($job["post_text"]) ?>
                            </td>
                            <td>
                                <?php if(!empty($job["image_url"])): ?>
                                    <a href="<?= e($job["image_url"]) ?>" target="_blank">Görsel</a>
                                <?php else: ?>
                                    —
                                <?php endif; ?>
                            </td>
                            <td><?= statusBadge($job["status"]) ?></td>
                            <td><?= e($job["published_at"] ?: $job["scheduled_at"] ?: "—") ?></td>
                            <td><?= e($job["error_message"] ?: "—") ?></td>
                            <td>
                                <?php if($job["status"] !== "published"): ?>
                                    <a class="btn btn-primary btn-small"
                                       href="../api/publish_now.php?job_id=<?= e($job["id"]) ?>"
                                       target="_blank">
                                        🚀 Yayınla
                                    </a>
                                    <a class="btn btn-secondary btn-small"
   href="../api/publish_multi.php?post_text=<?= urlencode($job["post_text"]) ?>&image_url=<?= urlencode($job["image_url"] ?? "") ?>"
   target="_blank">
    🚀 FB + LinkedIn
</a>
                                <?php else: ?>
                                    ✅
                                <?php endif; ?>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php else: ?>
            <div class="empty">
                Henüz yayın kuyruğunda içerik yok.<br>
                Yukarıdaki test formundan Facebook, LinkedIn veya X için deneme yayını oluşturabilirsin.
            </div>
        <?php endif; ?>
    </div>

</div>
<script>

function multiPublish(){

    let postText = prompt("Yayınlanacak metni gir:");

    if(!postText){
        return;
    }

    let url =
        "../api/publish_multi.php?post_text=" +
        encodeURIComponent(postText);

    window.open(url,"_blank");

}

</script>
</body>
</html>