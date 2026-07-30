<?php
    ini_set('display_errors',0);
    error_reporting(0);
    
    $path = $_SERVER['REQUEST_URI'];
    $method = $_SERVER['REQUEST_METHOD'];
    $headers = getallheaders();
    $user_token = $headers['Authorization'] ?? $headers['authorization'] ?? "";
?>