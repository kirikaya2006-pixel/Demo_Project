<?php
    $stmt = $pdo->prepare("SELECT username, role FROM users WHERE token = ?");
    $stmt->execute([$user_token]);

    $user_DB = $stmt->fetch(PDO::FETCH_ASSOC);

    if(!$user_DB) {
        http_response_code(400);
        echo json_encode([
            "success" => false,
        ]);
        exit();
    }

    $username = $user_DB['username'];
    $role = $user_DB['role'];
?>