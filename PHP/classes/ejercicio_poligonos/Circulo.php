<?php
require_once "Poligono.php";

class Circulo extends Poligono
{
    protected  $radio;
    function __construct($radio)
    {
        $this->radio = $radio;
    }

    public function calcularArea()
    {
        return (pi() * ($this->radio * $this->radio));
    }
}
