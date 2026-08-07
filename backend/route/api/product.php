<?php
    if(!$username) {
        http_response_code(403);
        echo json_encode([
           'success' => false,
           'message' => "Passport Not Found",
        ]);
        exit();
    }

    $stmt = $pdo->prepare("SELECT * FROM products");
    $stmt->execute();

    $flower_db = $stmt->fetch(PDO::FETCH_ASSOC);

    if(!$flower_db) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
        ]);
        exit();
    }

    $flower_name = $flower_db['name'];
    $flower_type = $flower_db['flower_type'];
    $flower_image = $flower_db['image'];
    $flower_description = $flower_db['description'];

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'data' => [
            "flower_name" => $flower_name,
            "flower_type" => $flower_type,
            "flower_image" => $flower_image,
            "flower_description" => $flower_description,
        ],
    ]);
    exit();
?>