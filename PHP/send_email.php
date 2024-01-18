<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "your_email@example.com"; // Ganti dengan alamat email Anda
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    // Send email
    mail($to, $subject, $message, $headers);

    // Redirect back to the contact page
    header("Location: index.html");
    exit();
}
?>
