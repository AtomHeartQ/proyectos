<?php

class Vehiculo
{
    var $matricula;
    var $combustible;
    var $numRuedas;
    var $numKilometro;
    var $tipo;
    var $marca;
    var $modelo;

    function __construct($tipo, $marca, $modelo)
    {
        $this->marca = $marca;
        $this->modelo = $modelo;
        $this->tipo = $tipo;
    }

    function mover(int $distancia): void
    {
    }

    function repostar()
    {
    }

    function pasarITV()
    {
    }

    function generarHTML()
    {
        echo "<h1>El tipo es {$this->tipo}</h1>";
        echo "<p>La marca es {$this->marca} y el modelo es {$this->modelo}</p>";
    }
}
