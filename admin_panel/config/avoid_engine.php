<?php

function getAvoidRules($title){

    $title = mb_strtolower($title, "UTF-8");

    $rules = [];

    $globalAvoid = [
        "sad man sitting in therapy room",
        "doctor patient consultation scene",
        "crying face close-up",
        "brain icon",
        "heart rhythm line",
        "EKG line",
        "medical emergency scene",
        "cheap stock photo style",
        "overdramatic facial expression",
        "written text inside image",
        "logo or watermark inside AI image"
    ];

    if(strpos($title, "depresyon") !== false){
        $rules = [
            "lonely sad man on couch",
            "dark room crying person",
            "black and white dramatic depression cliché",
            "therapist hand reaching toward patient"
        ];
    }

    if(strpos($title, "anksiyete") !== false){
        $rules = [
            "person holding chest",
            "panic attack heart attack visual",
            "EKG or heart monitor",
            "screaming face",
            "chaotic spiral around head"
        ];
    }

    if(strpos($title, "okb") !== false){
        $rules = [
            "person washing hands repeatedly",
            "dirty hands close-up",
            "germs cartoon",
            "exaggerated cleaning supplies"
        ];
    }

    if(strpos($title, "dehb") !== false){
        $rules = [
            "messy desk cliché",
            "child running wildly",
            "cartoon brain lightning",
            "chaotic colorful icons"
        ];
    }

    return array_merge($globalAvoid, $rules);
}