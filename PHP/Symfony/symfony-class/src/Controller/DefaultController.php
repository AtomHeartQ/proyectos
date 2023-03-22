<?php

namespace App\Controller;

use Persona;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/index")
     */
    public function index()
    {
        return $this->render('base.html.twig');
    }

    /**
     * @Route("/user/{nombre}/{edad}")
     */
    public function user($nombre, $edad)
    {
        return $this->render(
            'user/user.html.twig',
            ['name' => $nombre, 'age' => $edad, 'mascotas' => ['bigotitos', 'pecas', 'pececillo']]
        );
    }

    /**
     * @Route("/hola/{persona}")
     */
    public function saludar($persona, $mensaje)
    {
        $mensaje = ucfirst($mensaje);
        //return new Response("Hola, $persona, desde Symfony! $mensaje");
        //return $this->render('base.html.twig');
        return $this->render('saludo.html.twig', ['name' => $persona]);
    }

    /**
     * @Route("/contact")
     */
    public function showFormContact()
    {
        return new Response("Deje su forma de contacto");
    }

    /**
     * @Route("/api/movies")
     */
    public function listadoPeliculas()
    {
        $peliculas = ['titulo' => 'joker', 'titulo' => 'avengers', 'titulo' => '...'];

        return new Response(json_encode($peliculas));
    }
}
