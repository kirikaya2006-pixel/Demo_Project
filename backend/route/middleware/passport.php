<?php
    $stmt = $pdo->prepare("SELECT username, role FROM users WHERE token = ?");
    $stmt->execute([$user_token]);

    $user_DB = $stmt->fetch(PDO::FETCH_ASSOC);

    if(!$user_DB) {
        http_response_code(403);
        echo json_encode([
            "success" => false,
            "message" => "Token Not Found",
        ]);
        exit();
    }

    $username = $user_DB['username'];
    $role = $user_DB['role'];
?>