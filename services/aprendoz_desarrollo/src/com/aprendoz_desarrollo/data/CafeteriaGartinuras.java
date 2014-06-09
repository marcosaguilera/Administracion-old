
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.CafeteriaGartinuras
 *  08/16/2013 09:24:24
 * 
 */
public class CafeteriaGartinuras {

    private Integer idGarnituras;
    private String garnitura;
    private String descripcion;
    private String imageLink;

    public CafeteriaGartinuras() {
    }

    public CafeteriaGartinuras(Integer idGarnituras, String garnitura, String descripcion, String imageLink) {
        this.idGarnituras = idGarnituras;
        this.garnitura = garnitura;
        this.descripcion = descripcion;
        this.imageLink = imageLink;
    }

    public Integer getIdGarnituras() {
        return idGarnituras;
    }

    public void setIdGarnituras(Integer idGarnituras) {
        this.idGarnituras = idGarnituras;
    }

    public String getGarnitura() {
        return garnitura;
    }

    public void setGarnitura(String garnitura) {
        this.garnitura = garnitura;
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
