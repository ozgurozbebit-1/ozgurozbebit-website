<?php

session_start();

$brand = $_GET["brand"] ?? "ozgur";

$_SESSION["brand"] = $brand;

if($brand=="selale"){
    header("Location: ../dashboard/automation_selale.php");
    exit;
}

header("Location: ../dashboard/automation.php");
exit;