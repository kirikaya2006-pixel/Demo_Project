<?php

    $stmt = $pdo->prepare("SELECT token FROM users WHERE token = ?");
    $stmt->execute([$user_token]);

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {

        http_response_code(403);

        echo json_encode([
            "success" => false,
            "message" => "Token not found"
        ]);

        exit();

    }

    http_response_code(200);

    echo json_encode([
        "success" => true,
        "message" => "Token found & valid"
    ]);

exit();