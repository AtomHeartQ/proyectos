<?php

$user = $_POST['usuario'];
$password = $_POST['contraseña'];

$archivo = $_FILES["archivo"];

print_r($archivo);

//echo file_get_contents($archivo['tmp_name']);

copy($archivo['tmp_name'], 'imagen.jpg');

echo "<img src='imagen.jpg'>";
//echo "El usuario es $user y la contraseña es $password";
