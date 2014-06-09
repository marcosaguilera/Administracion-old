
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.CafeteriaProteina
 *  08/16/2013 09:24:24
 * 
 */
public class CafeteriaProteina {

    private Integer idProteinas;
    private String proteina;
    private String descripcion;
    private String imageLink;

    public CafeteriaProteina() {
    }

    public CafeteriaProteina(Integer idProteinas, String proteina, String descripcion, String imageLink) {
        this.idProteinas = idProteinas;
        this.proteina = proteina;
        this.descripcion = descripcion;
        this.imageLink = imageLink;
    }

    public Integer getIdProteinas() {
        return idProteinas;
    }

    public void setIdProteinas(Integer idProteinas) {
        this.idProteinas = idProteinas;
    }

    public String getProteina() {
        return proteina;
    }

    public void setProteina(String proteina) {
        this.proteina = proteina;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

}
