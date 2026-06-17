<?php

function smartVisualTitle($title){

    $originalTitle = trim($title);

    $key = mb_strtolower($originalTitle, "UTF-8");
    $key = str_replace(["?", "!", ".", ",", ":", ";"], "", $key);

    if(strpos($key, "depresyon") !== false && strpos($key, "belirti") !== false){
        return "Depresyon Belirtileri";
    }

    if(strpos($key, "anksiyete") !== false && strpos($key, "belirti") !== false){
        return "Anksiyete Belirtileri";
    }

    if(strpos($key, "okb") !== false && strpos($key, "belirti") !== false){
        return "OKB Belirtileri";
    }

    if(strpos($key, "dehb") !== false && strpos($key, "belirti") !== false){
        return "DEHB Belirtileri";
    }

    if(strpos($key, "bipolar") !== false && strpos($key, "belirti") !== false){
        return "Bipolar Belirtileri";
    }

    if(strpos($key, "depresyon") !== false && strpos($key, "nedir") !== false){
        return "Depresyon Nedir?";
    }

    if(strpos($key, "anksiyete") !== false && strpos($key, "nedir") !== false){
        return "Anksiyete Nedir?";
    }

    if(strpos($key, "okb") !== false && strpos($key, "nedir") !== false){
        return "OKB Nedir?";
    }

    if(strpos($key, "dehb") !== false && strpos($key, "nedir") !== false){
        return "DEHB Nedir?";
    }

    if(strpos($key, "bipolar") !== false && strpos($key, "nedir") !== false){
        return "Bipolar Bozukluk Nedir?";
    }

    if(mb_strlen($originalTitle, "UTF-8") > 38){
        return mb_substr($originalTitle, 0, 35, "UTF-8") . "...";
    }

    return $originalTitle;
}