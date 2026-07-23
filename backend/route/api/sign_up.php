<?php
    $get_data = json_decode(file_get_contents("php://input"),true);

    $username = $get_data['username'];
    $email = $get_data['email'];
    $password = $get_data['password'];
    $term = $get_data['term'];

    if(!$term) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => "Please accept term of service", 
        ]);
        exit();
    }

    if($username === "" || $email === "" || $password === "") {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => "Please Insert All Field",
        ]);
        exit();
    }

    $stmt = $pdo->prepare("SELECT email FROM users WHERE email = ?");
    $stmt->execute([
        $email,
    ]);

    $users = $stmt->fetch(PDO::FETCH_ASSOC);

    if($email === $users['email']) {
        http_response_code(403);
        echo json_encode([
            'success' => false,
            'message' => "This email are use. Please use another email",
        ]);
        exit();
    }
 
    $token = bin2hex(random_bytes(32));
    $role = "Customer";

    $user_password = password_hash($password, PASSWORD_DEFAULT);

    $stmt_signup = $pdo->prepare("INSERT INTO users (username, email, password, token, role) VALUES (?, ?, ?, ?, ?)");
    $stmt_signup->execute([
        $username,
        $email,
        $user_password,
        $token,
        $role,
    ]);

    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => "Signup Success"
    ]);
    exit();
?>