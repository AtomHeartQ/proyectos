<?php
require_once "PasswordValidator.php";

$password = new PasswordValidator('admin');

if ($password->isValid()) {
    echo "La contraseña es válida";
} else {
    echo "La contraseña no es váida";
}
