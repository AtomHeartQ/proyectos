<?php
require_once "Poligono.php";

class Rectangulo extends Poligono
{
    protected $base;
    protected $altura;

    function __construct($base, $altura)
    {
        $this->base = $base;
        $this->altura = $altura;
    }

    public function calcularArea()
    {
        return ($this->base * $this->altura);
    }
}
