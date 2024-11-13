<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $number = htmlspecialchars($_POST['number']);
    $message = htmlspecialchars($_POST['msg']);
    $to = "tengkurafi79@gmail.com"; // Ganti dengan alamat email Anda
    $subject = "New Message from Contact Form";

    $body = "Name: $name\nEmail: $email\nPhone Number: $number\n\nMessage:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href = 'contact.html';</script>";
    } else {
        echo "<script>alert('Message failed to send. Please try again later.'); window.location.href = 'contact.html';</script>";
    }
}
?>
