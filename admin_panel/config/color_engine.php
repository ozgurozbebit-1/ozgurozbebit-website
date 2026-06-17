<?php

function getColorPalette($title){

    $title = mb_strtolower($title, "UTF-8");

    $rules = [

        "depresyon" => [
            "muted navy blue",
            "soft gray",
            "fog atmosphere"
        ],

        "anksiyete" => [
            "storm gray",
            "deep teal",
            "cold blue"
        ],

        "okb" => [
            "sterile white",
            "steel blue",
            "minimal gray"
        ],

        "dehb" => [
            "vibrant orange",
            "electric blue",
            "bright cyan"
        ],

        "bipolar" => [
            "deep purple",
            "midnight blue",
            "gold accents"
        ]
    ];

    foreach($rules as $keyword => $palette){

        if(strpos($title, $keyword) !== false){
            return $palette;
        }
    }

    return [
        "natural colors",
        "balanced tones",
        "cinematic palette"
    ];
}