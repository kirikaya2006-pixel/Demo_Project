<?php
    if(!$username) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
        ]);
        exit();
    }

    $token = bin2hex(random_bytes(32));
    $new_token = $pdo->prepare("UPDATE users SET token = ? WHERE token = ?");
    $new_token->execute([
        $token,
        $user_token,
    ]);
    http_response_code(200);
    echo json_encode([
        'success' => true,
    ]);
    exit();
?>