<?php
    $get_data = json_decode(file_get_contents("php://input"),true);

    $email = $get_data['email'];
    $password = $get_data['password'];

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([
        $email,
    ]);
    
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if($user && password_verify($password, $user['password'])){
        echo json_encode([
            'success' => "true",
            'message' => "Login Success",
        ]);
        http_response_code(200);
        exit();
    } else {
        echo json_encode([
            'success' => false,
            'message' => "Invalid Email or Password",
        ]);
        http_response_code(400);
        exit();
    }
?>