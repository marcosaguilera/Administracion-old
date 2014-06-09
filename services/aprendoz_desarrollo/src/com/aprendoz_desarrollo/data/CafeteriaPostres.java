
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.CafeteriaPostres
 *  08/16/2013 09:24:24
 * 
 */
public class CafeteriaPostres {

    private Integer idPostres;
    private String postre;
    private String descripcion;
    private String imageLink;

    public CafeteriaPostres() {
    }

    public CafeteriaPostres(Integer idPostres, String postre, String descripcion, String imageLink) {
        this.idPostres = idPostres;
        this.postre = postre;
        this.descripcion = descripcion;
        this.imageLink = imageLink;
    }

    public Integer getIdPostres() {
        return idPostres;
    }

    public void setIdPostres(Integer idPostres) {
        this.idPostres = idPostres;
    }

    public String getPostre() {
        return postre;
    }

    public void setPostre(String postre) {
        this.postre = postre;
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
