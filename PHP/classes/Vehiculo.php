<?php

class Vehiculo
{
    protected $combustible;
    protected $numRuedas;
    protected $numKilometro;
    protected $tipo;
    protected $marca;
    protected $modelo;

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
