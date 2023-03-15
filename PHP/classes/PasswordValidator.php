<?php

class PasswordValidator
{

    private $miContraseña;

    public function __construct($miContraseña)
    {

        $this->miContraseña = $miContraseña;
    }

    public function isValid()
    {
        $caracteres = ['.', ',', '-', '_', ';'];

        foreach ($caracteres as $caracter) {
            if (str_contains($this->miContraseña, $caracter) && strlen($this->miContraseña) >= 8) {
                return true;
            }
        }
        return false;
    }
}
