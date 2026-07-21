<?php
    // เชื่อมต่อฐานข้อมูล
    require_once('db_con.php');

    // กำหนด และอนุญาต header
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: OPTIONS, GET, POST, PUT, DELETE");
    header("Access-Control-Allow-Headers: Authorization, Content-Type");

    // กำนหนดเวลา ให้เป็นเวลาของไทย
    date_default_timezone_set("Asia/Bangkok");

    $path = $_SERVER['REQUEST_URI'];
    $method = $_SERVER['REQUEST_METHOD'];
    $headers = getallheaders();
    $user_token = $headers['Authorization'] ?? $headers['authorization'] ?? "";

    // แก้ไข ERROR CORS
    if($method === 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    // ยิง API SIGN UP สำหรับสมัครสมาชิก
    if(strpos($path,"/api/sign_up") !== false && $method === 'POST') {
        // ดึงโค้ด Register.php
        require_once('route/api/sign_up.php');
        exit();
    }

    // ยิง API SIGN IN สำหรับเข้าสู่ระบบ
    if(strpos($path,"/api/sign_in") !== false && $method === "POST") {
        // ดึงโค้ด Login.php
        require_once('route/api/sign_in.php');
        exit();
    }

    http_response_code(404);
    echo json_encode([
        'success' => false,
        'message' => "ERROR 404: Not Found",
    ]);
    exit();
?>