<?php

function getLightingStyle($title){

    $title = mb_strtolower($title, "UTF-8");

    $rules = [

        "depresyon" => [
            "soft overcast lighting",
            "low contrast",
            "subtle fog atmosphere"
        ],

        "anksiyete" => [
            "directional cinematic lighting",
            "sharp but elegant shadows",
            "controlled tension contrast"
        ],

        "okb" => [
            "clean studio lighting",
            "balanced symmetrical light",
            "sterile calm atmosphere"
        ],

        "dehb" => [
            "dynamic daylight",
            "energetic visual rhythm",
            "clear vivid contrast"
        ],

        "bipolar" => [
            "dual tone lighting",
            "contrast between shadow and warm highlights",
            "cinematic emotional balance"
        ],

        "travma" => [
            "soft healing light",
            "warm recovery atmosphere",
            "gentle golden highlights"
        ],

        "panik" => [
            "tight directional light",
            "subtle high tension shadows",
            "controlled dramatic contrast"
        ],

        "uyku" => [
            "soft night light",
            "calm blue atmosphere",
            "low visual noise"
        ],

        "stres" => [
            "compressed lighting",
            "subtle shadow tension",
            "cool controlled contrast"
        ]
    ];

    foreach($rules as $keyword => $lighting){
        if(strpos($title, $keyword) !== false){
            return $lighting;
        }
    }

    return [
        "soft cinematic lighting",
        "premium calm atmosphere",
        "balanced contrast"
    ];
}