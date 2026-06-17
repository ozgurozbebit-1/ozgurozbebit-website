<?php

require_once 'config/database.php';

echo "<h2>Bağlantı başarılı 🚀</h2>";

$stmt = $pdo->query("SHOW TABLES");

echo "<ul>";

while($row = $stmt->fetch(PDO::FETCH_NUM)) {
    echo "<li>" . $row[0] . "</li>";
}

echo "</ul>";