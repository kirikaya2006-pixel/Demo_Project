<?php
    $get_data = json_decode(file_get_contents("php://input"),true);

    if(!$get_data) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => "No Data Send",
        ]);
        exit();
    }

    $token = bin2hex(random_bytes(32));
    $role = "Customer";

    $user_password = password_hash($get_data['password']);

    $stmt = $pdo->prepare("INSERT INTO users (username, email, password, token, role) VALUES (?, ?, ?, ?, ?");
    $stmt->execute([
        $get_data['username'],
        $get_data['email'],
        $user_password,
        $token,
        $role,
    ]);
?>