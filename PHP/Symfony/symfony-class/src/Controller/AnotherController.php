<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AnotherController
{
    public function showPrueba()
    {
        return new Response("La prueba ha funcionado");
    }

    /**
     * @Route("/esPar/{numero}")
     */
    public function esPar($numero)
    {
        /* if ($numero % 2 = 0) {
            return "Es par";
        } else {
            return "No es par";
        }*/
    }
}
