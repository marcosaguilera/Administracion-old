
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.BimestreSy
 *  08/16/2013 09:24:24
 * 
 */
public class BimestreSy {

    private Integer idBimSy;
    private Sy sy;
    private Integer bimestre;
    private Date fechaInicio;
    private Date fechaFin;

    public BimestreSy() {
    }

    public BimestreSy(Integer idBimSy, Integer bimestre, Date fechaInicio, Date fechaFin) {
        this.idBimSy = idBimSy;
        this.bimestre = bimestre;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

    public BimestreSy(Integer idBimSy, Sy sy, Integer bimestre, Date fechaInicio, Date fechaFin) {
        this.idBimSy = idBimSy;
        this.sy = sy;
        this.bimestre = bimestre;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

    public Integer getIdBimSy() {
        return idBimSy;
    }

    public void setIdBimSy(Integer idBimSy) {
        this.idBimSy = idBimSy;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Integer getBimestre() {
        return bimestre;
    }

    public void setBimestre(Integer bimestre) {
        this.bimestre = bimestre;
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

}
