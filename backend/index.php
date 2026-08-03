<?php
    // เชื่อมต่อฐานข้อมูล
    require_once('config/db_con.php');

    // กำหนด และอนุญาต header
    require_once('config/header.php');

    // กำนหนดเวลา
    require_once('config/time_zone.php');

    // Setting
    require_once('config/setting.php');

    // แก้ไข CORS ERROR PREFLIGHT
    if($method === 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    // ตัวเชื่อม API
    require_once('route/router.php');
?>