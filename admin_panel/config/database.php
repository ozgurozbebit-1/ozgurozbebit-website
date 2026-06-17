<?php

$host = "localhost";
$dbname = "u2729492_ozgur_ai";
$username = "u2729492_ozgur_admin";
$password = "Yusuf__2010__ilayda";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password
    );

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci");

} catch (PDOException $e) {

    die("Veritabanı bağlantı hatası: " . $e->getMessage());

}