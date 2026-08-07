<?php
    if(!$username) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
        ]);
        exit();
    }

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'data' => [
            $username,
        ],
    ]);
    exit();
?>