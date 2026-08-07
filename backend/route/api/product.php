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

    $flower_db = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if(!$flower_db) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
        ]);
        exit();
    }

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'data' => $flower_db,
    ]);
    exit();
?>