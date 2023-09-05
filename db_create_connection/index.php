<?php
header('Access-Control-Allow-Origin: http://localhost:3002');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Content-Type');

extract($_POST);

if(isset($password) && isset($reEnter)){
    if($password !== $reEnter){
        echo 'Password is uncorrect or not indentical !!!';
        exit();
    }
}

if (empty($username) || empty($email) || empty($operation)) {
    echo 'Your one of all fields is empty!';
    exit();
}

$server = "localhost";
$loginInDB = 'root';
$DBpassword = '';
$dbName = 'react_auth';

// Створення з'єднання з базою даних
$connection = new mysqli($server, $loginInDB, $DBpassword, $dbName);

if ($connection->connect_error) {
    exit('Connection error: ' . $connection->connect_error);
}

// Створення таблиці, якщо вона не існує
$table = "CREATE TABLE IF NOT EXISTS react__table (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(35) NOT NULL UNIQUE
)";

if (!$connection->query($table)) {
    exit('Create table error: ' . $connection->error);
}

if ($operation === 'registration') {
    // Використання підготовленого запиту для вставки даних
    $addUser = "INSERT INTO `react__table` (username, email) VALUES (?, ?)";
    $stmt = $connection->prepare($addUser);

    if ($stmt) {
        $stmt->bind_param("ss", $username, $email);
        if ($stmt->execute()) {
            echo "User data inserted successfully!";
        } else {
            echo "Set user params error: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Prepare statement error: " . $connection->error;
    }
}

if ($operation === 'login') {
    // Виправлено запит і використовуємо підготовлений запит
    $getUser = "SELECT * FROM `react__table` WHERE email = ? AND username = ?";
    $stmt = $connection->prepare($getUser);

    if ($stmt) {
        $stmt->bind_param("ss", $email, $username);
        if ($stmt->execute()) {
            $result = $stmt->get_result();
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo 'All went awesome!!!';
                }
            } else {
                echo "No user found.";
            }
        } else {
            echo "Get user params error: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Prepare statement error: " . $connection->error;
    }
}

$connection->close();

