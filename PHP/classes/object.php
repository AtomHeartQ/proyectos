<?php

$miCoche = new Vehiculo('coche', 'Hyundai', 'i30');
echo $miCoche->marca;
$miCoche->generarHTML();

$miMoto = new Vehiculo('moto', 'sdads', 'asadsasd');
echo $miMoto->marca;
$miMoto->generarHTML();

$otroCoche = new Vehiculo('coche', 'adsasd', 'sadads');
echo $otroCoche->marca;
$otroCoche->generarHTML();
