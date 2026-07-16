<?php
    try{
        $pdo = new pdo("mysql:host=localhost; dbname=flowershop; charset=utf8mb4","root","");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        http_response_code(500);
        die(json_encode([
            'success' => false,
            'message' => "Connection Fail: " . $e->getMessage(),
        ]));
    }
?>