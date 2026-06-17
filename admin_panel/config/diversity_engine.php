<?php

function getDiversityHints($title){

    $title = mb_strtolower($title, "UTF-8");

    if(strpos($title,"depres") !== false){

        $groups = [

            "nature" => [
                "misty forest path",
                "new leaf after winter",
                "rain ending at sunrise"
            ],

            "fine_art" => [
                "single violin string",
                "empty stage under soft light",
                "unfinished painting"
            ],

            "object" => [
                "extinguished candle with faint smoke",
                "empty picture frame",
                "half-open notebook"
            ],

            "architecture" => [
                "light entering through old window",
                "long corridor toward daylight",
                "open door in dark wall"
            ]
        ];

        $keys = array_keys($groups);

        return $groups[$keys[array_rand($keys)]];
    }

    if(strpos($title,"anksiy") !== false){

        $groups = [

            "nature" => [
                "storm moving away from coast",
                "clouds opening to blue sky",
                "wind calming over water"
            ],

            "object" => [
                "untangling threads",
                "organized desk after chaos",
                "compass finding direction"
            ],

            "architecture" => [
                "narrow passage opening to large space",
                "bridge over fog",
                "quiet illuminated hallway"
            ]
        ];

        $keys = array_keys($groups);

        return $groups[$keys[array_rand($keys)]];
    }

    return [
        "premium editorial composition",
        "unique visual interpretation",
        "avoid repetitive metaphors"
    ];
}