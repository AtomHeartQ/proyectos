<?php
require_once "Vehiculo.php";

class Patinete extends Vehiculo
{
    protected $tipoCargador;
    protected $tipoPatinete;
    protected $alturaManillar;

    /**
     * Get the value of tipoCargador
     */
    public function getTipoCargador()
    {
        return $this->tipoCargador;
    }

    /**
     * Set the value of tipoCargador
     *
     * @return  self
     */
    public function setTipoCargador($tipoCargador)
    {
        $this->tipoCargador = $tipoCargador;

        return $this;
    }

    /**
     * Get the value of tipoPatinete
     */
    public function getTipoPatinete()
    {
        return $this->tipoPatinete;
    }

    /**
     * Set the value of tipoPatinete
     *
     * @return  self
     */
    public function setTipoPatinete($tipoPatinete)
    {
        $this->tipoPatinete = $tipoPatinete;

        return $this;
    }

    /**
     * Get the value of alturaManillar
     */
    public function getAlturaManillar()
    {
        return $this->alturaManillar;
    }

    /**
     * Set the value of alturaManillar
     *
     * @return  self
     */
    public function setAlturaManillar($alturaManillar)
    {
        $this->alturaManillar = $alturaManillar;

        return $this;
    }
}
