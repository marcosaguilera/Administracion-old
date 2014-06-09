
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Nacionalidades
 *  08/16/2013 09:24:24
 * 
 */
public class Nacionalidades {

    private Integer idNacionalidad;
    private String nacionalidad;

    public Nacionalidades() {
    }

    public Nacionalidades(Integer idNacionalidad, String nacionalidad) {
        this.idNacionalidad = idNacionalidad;
        this.nacionalidad = nacionalidad;
    }

    public Integer getIdNacionalidad() {
        return idNacionalidad;
    }

    public void setIdNacionalidad(Integer idNacionalidad) {
        this.idNacionalidad = idNacionalidad;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

}
