<?php
session_start();

if(!isset($_SESSION["user_id"])){
    header("Location: ../index.php");
    exit;
}

require_once "../config/database.php";

if(isset($_GET["delete"])){
    $id = intval($_GET["delete"]);

    $stmt = $pdo->prepare("DELETE FROM content_projects WHERE id = ?");
    $stmt->execute([$id]);

    header("Location: drafts.php");
    exit;
}

if(isset($_GET["status"]) && isset($_GET["id"])){
    $id = intval($_GET["id"]);
    $status = trim($_GET["status"]);

    $allowed = ["draft", "planned", "published", "archived"];

    if(in_array($status, $allowed)){
        $stmt = $pdo->prepare("UPDATE content_projects SET status = ? WHERE id = ?");
        $stmt->execute([$status, $id]);
    }

    header("Location: drafts.php");
    exit;
}

$stmt = $pdo->query("
    SELECT id, title, topic, content, platform, status, created_at
    FROM content_projects
    ORDER BY created_at DESC
");

$drafts = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Taslaklar Merkezi</title>

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
table{width:100%;border-collapse:collapse;background:white}
th,td{padding:14px;border-bottom:1px solid #e1eeee;text-align:left;vertical-align:top}
th{background:#eefafa}
.status{padding:6px 10px;border-radius:12px;background:#e6f3f3;font-weight:bold;display:inline-block}
.btn{display:inline-block;padding:8px 10px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:bold;margin:2px}
.view{background:#078080;color:white}
.delete{background:#dc2626;color:white}
.plan{background:#2563eb;color:white}
.publish{background:#16a34a;color:white}
.archive{background:#6b7280;color:white}
.contentBox{background:#fbffff;border:1px solid #dbecec;border-radius:12px;padding:15px;white-space:pre-wrap;line-height:1.6;margin-top:10px;display:none}
.platform{font-size:13px;color:#0f766e;font-weight:bold}
.date{font-size:12px;color:#667}
</style>

<script>
function toggleContent(id){
    const box = document.getElementById("content-" + id);
    if(box.style.display === "block"){
        box.style.display = "none";
    }else{
        box.style.display = "block";
    }
}

function confirmDelete(id){
    if(confirm("Bu taslak silinsin mi?")){
        window.location.href = "drafts.php?delete=" + id;
    }
}

function copyContent(id){
    const text = document.getElementById("content-" + id).innerText;

    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    temp.setSelectionRange(0, 999999);
    document.execCommand("copy");
    document.body.removeChild(temp);

    alert("İçerik panoya kopyalandı ✅");
}
</script>
</head>

<body>

<div class="header">
    <div class="logo">📝 Taslaklar Merkezi</div>
    <div>
        Hoş geldin, <?php echo htmlspecialchars($_SESSION["user_name"] ?? "Kullanıcı"); ?>
        <span class="badge">V8.6</span>
    </div>
</div>

<div class="layout">

<div class="sidebar">
    <div class="menu">
        <a href="index.php">🤖 İçerik Üret</a>
        <a href="calendar.php">📅 İçerik Takvimi</a>
        <a href="planner.php">🗓️ 30 Günlük Plan</a>
        <a class="active" href="drafts.php">📝 Taslaklar</a>
        <a href="image.php">🎨 Görsel Oluştur</a>
        <a href="youtube.php">📺 YouTube İçerikleri</a>
        <a href="#">📰 Blog Yazıları</a>
        <a href="analytics.php">📊 Analitik</a>
        <a href="settings.php">⚙️ Ayarlar</a>
        <a href="../auth/logout.php">🚪 Çıkış</a>
    </div>
</div>

<div class="main">

<div class="card">
    <h2>Oluşturulan Taslaklar</h2>

    <?php if(count($drafts) == 0): ?>
        <p>Henüz taslak içerik yok.</p>
    <?php else: ?>

    <table>
        <tr>
            <th>ID</th>
            <th>Başlık</th>
            <th>Platform</th>
            <th>Durum</th>
            <th>Tarih</th>
            <th>İşlem</th>
        </tr>

        <?php foreach($drafts as $draft): ?>
        <?php
            $fullContent = $draft["content"] ?: $draft["topic"];
        ?>
        <tr>
            <td><?php echo (int)$draft["id"]; ?></td>

            <td>
                <strong><?php echo htmlspecialchars($draft["title"]); ?></strong>
                <div class="contentBox" id="content-<?php echo (int)$draft["id"]; ?>">
<?php echo htmlspecialchars($fullContent); ?>
                </div>
            </td>

            <td>
                <span class="platform">
                    <?php echo htmlspecialchars($draft["platform"] ?: "Genel"); ?>
                </span>
            </td>

            <td>
                <span class="status">
                    <?php echo htmlspecialchars($draft["status"]); ?>
                </span>
            </td>

            <td>
                <span class="date">
                    <?php echo htmlspecialchars($draft["created_at"]); ?>
                </span>
            </td>

            <td>
                <a href="javascript:void(0)" class="btn view" onclick="toggleContent(<?php echo (int)$draft["id"]; ?>)">👁 Gör</a>
                <a href="javascript:void(0)" class="btn view" onclick="copyContent(<?php echo (int)$draft["id"]; ?>)">📋 Kopyala</a>
                <a href="drafts.php?id=<?php echo (int)$draft["id"]; ?>&status=planned" class="btn plan">📅 Planla</a>
                <a href="drafts.php?id=<?php echo (int)$draft["id"]; ?>&status=published" class="btn publish">✅ Yayınlandı</a>
                <a href="drafts.php?id=<?php echo (int)$draft["id"]; ?>&status=archived" class="btn archive">📦 Arşivle</a>
                <a href="javascript:void(0)" class="btn delete" onclick="confirmDelete(<?php echo (int)$draft["id"]; ?>)">🗑 Sil</a>
            </td>
        </tr>
        <?php endforeach; ?>
    </table>

    <?php endif; ?>
</div>

</div>
</div>

</body>
</html>