<!-- process_form.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Sesuaikan alamat email penerima
    $to = "alamat@email.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    // Kirim email
    mail($to, $subject, $message, $headers);

    // Redirect ke halaman terima kasih
    header("Location: thank_you.html");
    exit();
}
?>
Buat halaman terima kasih (optional):
html
Copy code
<!-- thank_you.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You</title>
</head>
<body>
    <h1>Thank You!</h1>
    <p>Your message has been successfully sent. We will get back to you soon.</p>
</body>
</html>