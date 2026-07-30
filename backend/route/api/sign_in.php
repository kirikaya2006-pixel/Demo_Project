<?php
    $get_data = json_decode(file_get_contents("php://input"),true);

    $email = $get_data['email'];
    $password = $get_data['password'];

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if($user && password_verify($password, $user['password'])){
        $new_token = bin2hex(random_bytes(32));
        $add_token = $pdo->prepare("UPDATE users SET token = ? WHERE email = ?");
        $add_token->execute([
            $new_token,
            $email,
        ]);

        echo json_encode([
            'success' => "true",
            'message' => "Login Success",
            'data' => [
                'token' => $new_token,
                'username' => $user['username'],
                'email' => $email,
                'role' => $user['role'],
            ],
        ]);
        http_response_code(200);
        exit();
    }

    echo json_encode([
        'success' => false,
        'message' => "Invalid Email or Password",
    ]);
    http_response_code(400);
    exit();
?>