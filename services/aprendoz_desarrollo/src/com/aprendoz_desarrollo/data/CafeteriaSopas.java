
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.CafeteriaSopas
 *  08/16/2013 09:24:25
 * 
 */
public class CafeteriaSopas {

    private Integer idSopas;
    private String sopas;
    private String descripcion;
    private String image;

    public CafeteriaSopas() {
    }

    public CafeteriaSopas(Integer idSopas, String sopas, String descripcion, String image) {
        this.idSopas = idSopas;
        this.sopas = sopas;
        this.descripcion = descripcion;
        this.image = image;
    }

    public Integer getIdSopas() {
        return idSopas;
    }

    public void setIdSopas(Integer idSopas) {
        this.idSopas = idSopas;
    }

    public String getSopas() {
        return sopas;
    }

    public void setSopas(String sopas) {
        this.sopas = sopas;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
