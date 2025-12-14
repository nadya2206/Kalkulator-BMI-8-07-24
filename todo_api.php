<?php
session_start();
include "koneksi.php";

header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    echo json_encode([]);
    exit;
}

$user_id = $_SESSION['user_id'];

if (isset($_GET['action']) && $_GET['action'] === 'load') {
    $q = mysqli_query($conn, "SELECT * FROM todos WHERE user_id=$user_id");
    $tasks = [];

    while ($row = mysqli_fetch_assoc($q)) {
        $tasks[] = [
            "id" => (int)$row['id'],
            "text" => $row['task'],
            "completed" => (bool)$row['completed'],
            "priority" => "High"
        ];
    }

    echo json_encode($tasks);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['action']) && $data['action'] === 'save') {

    mysqli_query($conn, "DELETE FROM todos WHERE user_id=$user_id");

    $savedTasks = [];

    foreach ($data['tasks'] as $t) {
        $text = mysqli_real_escape_string($conn, $t['text']);
        $completed = $t['completed'] ? 1 : 0;

        mysqli_query($conn,
            "INSERT INTO todos (user_id, task, completed)
             VALUES ($user_id, '$text', $completed)"
        );

        $insertId = mysqli_insert_id($conn);

        $savedTasks[] = [
            "id" => $insertId,
            "text" => $text,
            "completed" => (bool)$completed,
            "priority" => "High"
        ];
    }

    echo json_encode($savedTasks);
    exit;
}
