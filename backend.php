<?php
// Симулюємо навантаження на сервер
usleep(500000); // 0.5 сек затримки
echo json_encode(["status" => "success", "message" => "Backend is working!"]);
?>
