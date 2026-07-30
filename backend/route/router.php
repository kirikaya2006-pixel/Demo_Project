<?php
    $routes = [
        "/api/sign_in" => [
            "file" => "route/api/sign_in.php",
            "auth" => false,
        ],

        "/api/sign_up" => [
            "file" => "route/api/sign_up.php",
            "auth" => false,
        ],
    ];

    $route = $routes[$path] ?? NULL;

    if ($route) {
        if ($route['auth']) {
            require_once("route/middleware/passport.php");
        }

        require_once($route["file"]);
        exit();
    }

    http_response_code(404);
    echo json_encode([
        'success' => false,
        'message' => "404 NOT FOUND",
    ]);
    exit();
?>