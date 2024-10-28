<?php
// process_card.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the data from the POST request
    $videoSource = $_POST['videoSource'] ?? '';
    $title = $_POST['title'] ?? '';
    $description = $_POST['description'] ?? '';
    $thumbnail = $_POST['thumbnail'] ?? '';

    // Store the data in session
    session_start();
    $_SESSION['card_data'] = [
        'videoSource' => $videoSource,
        'title' => $title,
        'description' => $description,
        'thumbnail' => $thumbnail
    ];

    // Redirect to open-letter page
    header('Location: open-letter.blade.php');
    exit();
}
