<?php
require_once "FileException.php";

function leerFichero(string $fichero)
{
    $datos = file_get_contents($fichero);

    if ($datos === false) {
        throw new FileException();
    }
    if ($datos == '') {
        throw new Exception("El fichero está vacío");
    }

    return $datos;
}

try {
    leerFichero('ficheroinventado.txt');
} catch (FileException $fileException) {
    echo "Error al leer el fichero";
} catch (\Exception $e) {
    //echo "Ha habido un error: " . $e->getMessage() . " en el fichero " . $e->getFile() .
    //    " y en la línea  " . $e->getLine();
    echo "El fichero está vacío";
}
