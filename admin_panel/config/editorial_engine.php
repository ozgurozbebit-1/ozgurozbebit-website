<?php

function getEditorialStyle($title){

    $title = mb_strtolower($title,"UTF-8");

    if(strpos($title,"depres") !== false){
        return "fine art photography";
    }

    if(strpos($title,"anksiy") !== false){
        return "cinematic psychological photography";
    }

    if(strpos($title,"okb") !== false){
        return "minimal geometric photography";
    }

    if(strpos($title,"dehb") !== false){
        return "modern dynamic editorial photography";
    }

    if(strpos($title,"bipolar") !== false){
        return "dual tone editorial photography";
    }

    return "premium editorial photography";
}