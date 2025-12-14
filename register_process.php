<?php
include "koneksi.php";

if (isset($_POST['register'])) {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $email = $_POST['email'];
    $cek = mysqli_query($conn, "SELECT * FROM users WHERE username='$username'");
    if (mysqli_num_rows($cek) > 0) {
        header("Location: auth.php?error=username_used&tab=register");
        exit;
    }

    mysqli_query($conn,
      "INSERT INTO users (username, password, email)
       VALUES ('$username', '$password', '$email')"
    );

    header("Location: auth.php?success=register");
}
