<?php
$jsonFilePath = 'users.json';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $formType = $_POST['formType'];

    if ($formType == "signIn") {
        $emailOrUsername = $_POST['emailOrUsername'];
        $password = $_POST['password'];

        $userData = json_decode(file_get_contents($jsonFilePath), true);

        $foundUser = false;
        foreach ($userData as $user) {
            if (($user['email'] == $emailOrUsername || $user['username'] == $emailOrUsername) && password_verify($password, $user['password'])) {
                $foundUser = true;
                break;
            }
        }

        if ($foundUser) {
            // Redirect to index.html after successful login
            header('Location: page2.html');
            exit();
        } else {
            echo "Invalid credentials!";
            exit();
        }
    } elseif ($formType == "signUp") {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Validate inputs (you can add more validation)
        if (empty($username) || empty($email) || empty($password)) {
            echo "All fields are required!";
            exit();
        }

        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $userData = json_decode(file_get_contents($jsonFilePath), true) ?: [];

        foreach ($userData as $user) {
            if ($user['username'] == $username || $user['email'] == $email) {
                echo "Username or email already exists!";
                exit();
            }
        }

        $newUser = ['username' => $username, 'email' => $email, 'password' => $hashedPassword];
        $userData[] = $newUser;

        file_put_contents($jsonFilePath, json_encode($userData));

        // Redirect to index.html after successful signup
        header('Location: page2.html');
        exit();
    }
}
?>
