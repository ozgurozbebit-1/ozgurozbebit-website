<?php
session_start();

if(!isset($_SESSION["user_id"])){
    header("Location: ../index.php");
    exit;
}

require_once "../config/database.php";

$draftCount = $pdo->query("SELECT COUNT(*) FROM content_projects WHERE status='draft'")->fetchColumn();
$approvedCount = $pdo->query("SELECT COUNT(*) FROM content_projects WHERE status='approved'")->fetchColumn();
$publishedCount = $pdo->query("SELECT COUNT(*) FROM content_projects WHERE status='published'")->fetchColumn();
$totalCount = $pdo->query("SELECT COUNT(*) FROM content_projects")->fetchColumn();

$search = trim($_GET["q"] ?? "");

if($search !== ""){
    $stmt = $pdo->prepare("
        SELECT id, title, status, created_at
        FROM content_projects
        WHERE title LIKE ? OR topic LIKE ? OR content LIKE ? OR platform LIKE ?
        ORDER BY id DESC
    ");

    $like = "%" . $search . "%";
    $stmt->execute([$like, $like, $like, $like]);

}else{

    $stmt = $pdo->query("
        SELECT id, title, status, created_at
        FROM content_projects
        ORDER BY id DESC
    ");

}

$items = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>İçerik Takvimi V8.7</title>

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
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:20px}
.stat{background:white;padding:20px;border-radius:14px;font-size:18px;font-weight:bold}
.stat span{float:right;font-size:28px}
table{width:100%;border-collapse:collapse;background:white}
th,td{padding:14px;border-bottom:1px solid #e1eeee;text-align:left}
th{background:#eefafa}
.status{padding:6px 10px;border-radius:12px;background:#e6f3f3;font-weight:bold}
.btn{background:#078080;color:white;padding:8px 12px;border-radius:8px;text-decoration:none;font-size:14px;margin:2px;display:inline-block}
button.btn{border:0;cursor:pointer}
.danger{background:#b91c1c}
.searchBox{margin-bottom:20px;display:flex;gap:10px}
.searchBox input{flex:1;padding:12px;border:1px solid #cfe3e3;border-radius:10px}
.searchBox button{background:#078080;color:white;border:0;padding:12px 18px;border-radius:10px;font-weight:bold}
.searchBox a{background:#e6f3f3;color:#123;text-decoration:none;padding:12px 18px;border-radius:10px;font-weight:bold}
</style>
</head>

<body>

<div class="header">
    <div class="logo">📅 İçerik Takvimi</div>
    <div>
        Hoş geldin, <?php echo htmlspecialchars($_SESSION["user_name"] ?? "Kullanıcı"); ?>
        <span class="badge">V8.7 Canlı</span>
    </div>
</div>

<div class="layout">

<div class="sidebar">
    <div class="menu">
        <a href="index.php">🤖 İçerik Üret</a>
        <a class="active" href="calendar.php">📅 İçerik Takvimi</a>
        <a href="planner.php">🗓️ 30 Günlük Plan</a>
        <a href="drafts.php">📝 Taslaklar</a>
        <a href="image.php">🎨 Görsel Oluştur</a>
        <a href="youtube.php">📺 YouTube İçerikleri</a>
        <a href="#">📰 Blog Yazıları</a>
        <a href="analytics.php">📊 Analitik</a>
        <a href="settings.php">⚙️ Ayarlar</a>
        <a href="../auth/logout.php">🚪 Çıkış</a>
    </div>
</div>

<div class="main">

<div class="stats">
    <div class="stat">📅 Taslak <span><?php echo $draftCount; ?></span></div>
    <div class="stat">✅ Onaylanan <span><?php echo $approvedCount; ?></span></div>
    <div class="stat">📱 Yayınlanan <span><?php echo $publishedCount; ?></span></div>
    <div class="stat">📦 Toplam <span><?php echo $totalCount; ?></span></div>
</div>

<div class="card">
<h2>Kayıtlı İçerikler</h2>

<form method="GET" class="searchBox">
    <input 
        type="text" 
        name="q" 
        placeholder="İçerik ara: uyku, OKB, depresyon..." 
        value="<?php echo htmlspecialchars($search); ?>"
    >

    <button type="submit">Ara</button>

    <a href="calendar.php">Temizle</a>
</form>

<?php if(count($items) == 0): ?>
    <p>Aramanıza uygun içerik bulunamadı.</p>
<?php else: ?>

<table>
<tr>
    <th>ID</th>
    <th>Başlık</th>
    <th>Durum</th>
    <th>Tarih</th>
    <th>İşlem</th>
</tr>

<?php foreach($items as $item): ?>
<tr>
    <td><?php echo (int)$item["id"]; ?></td>
    <td><?php echo htmlspecialchars($item["title"]); ?></td>
    <td><span class="status"><?php echo htmlspecialchars($item["status"]); ?></span></td>
    <td><?php echo htmlspecialchars($item["created_at"]); ?></td>
    <td>
        <a class="btn" href="view.php?id=<?php echo (int)$item["id"]; ?>">Görüntüle</a>
        <button class="btn" onclick="changeStatus(<?php echo (int)$item["id"]; ?>,'approved')">Onayla</button>
        <button class="btn" onclick="changeStatus(<?php echo (int)$item["id"]; ?>,'published')">Yayınlandı</button>
        <button class="btn danger" onclick="deleteContent(<?php echo (int)$item["id"]; ?>)">Sil</button>
    </td>
</tr>
<?php endforeach; ?>

</table>

<?php endif; ?>

</div>

</div>
</div>

<script>
async function readJsonSafely(response){
    const text = await response.text();

    if(!text || text.trim() === ""){
        throw new Error("Sunucudan boş cevap geldi.");
    }

    try{
        return JSON.parse(text);
    }catch(e){
        throw new Error("JSON olmayan cevap geldi:\n\n" + text.substring(0, 1000));
    }
}

async function changeStatus(id,status){
    try{
        const response = await fetch("../api/update_status.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({id:id,status:status})
        });

        const data = await readJsonSafely(response);

        if(data.success){
            alert("Durum güncellendi");
            location.reload();
        }else{
            alert("Hata: " + (data.message || "Bilinmeyen hata"));
        }
    }catch(error){
        alert("Bağlantı hatası: " + error.message);
    }
}

async function deleteContent(id){
    if(!confirm("Bu içeriği silmek istediğine emin misin?")) return;

    try{
        const response = await fetch("../api/delete_content.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({id:id})
        });

        const data = await readJsonSafely(response);

        if(data.success){
            alert("İçerik silindi");
            location.reload();
        }else{
            alert("Silme hatası: " + (data.message || "Bilinmeyen hata"));
        }
    }catch(error){
        alert("Bağlantı hatası: " + error.message);
    }
}
</script>

</body>
</html>