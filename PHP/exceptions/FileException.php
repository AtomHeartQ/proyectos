<?php

class FileException extends Exception
{
    public function __construct($message = "", $code = 0, Throwable $previous = null)
    {
        $this->message = "Error al leer el fichero";
        parent::__construct($message, $code, $previous);
    }
}
