<?php

$word = $_POST['word'];
$file = $_FILES['archivo'];

$fullText = file_get_contents($file['tmp_name']);

$wordLower = strtolower($word);
$fullTextLower = strtolower($fullText);

$numWords = substr_count($fullTextLower, $wordLower);

echo "La palabra $word aparece $numWords  veces en el texto que has pasado.";
