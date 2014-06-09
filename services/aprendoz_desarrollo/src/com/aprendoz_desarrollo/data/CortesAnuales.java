
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.CortesAnuales
 *  08/16/2013 09:24:25
 * 
 */
public class CortesAnuales {

    private Integer idCorte;
    private Integer numeroCorte;
    private String mescorte;
    private Date fechaInicio;
    private Date fechaFin;
    private Integer syIdSy;
    private String ordenNominal;

    public CortesAnuales() {
    }

    public CortesAnuales(Integer idCorte, Integer numeroCorte, String mescorte, Date fechaInicio, Date fechaFin, Integer syIdSy, String ordenNominal) {
        this.idCorte = idCorte;
        this.numeroCorte = numeroCorte;
        this.mescorte = mescorte;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.syIdSy = syIdSy;
        this.ordenNominal = ordenNominal;
    }

    public Integer getIdCorte() {
        return idCorte;
    }

    public void setIdCorte(Integer idCorte) {
        this.idCorte = idCorte;
    }

    public Integer getNumeroCorte() {
        return numeroCorte;
    }

    public void setNumeroCorte(Integer numeroCorte) {
        this.numeroCorte = numeroCorte;
    }

    public String getMescorte() {
        return mescorte;
    }

    public void setMescorte(String mescorte) {
        this.mescorte = mescorte;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

    public String getOrdenNominal() {
        return ordenNominal;
    }

    public void setOrdenNominal(String ordenNominal) {
        this.ordenNominal = ordenNominal;
    }

}
