
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.SesionNivel
 *  08/16/2013 09:24:24
 * 
 */
public class SesionNivel {

    private Integer idSesionNivel;
    private Nivel nivel;
    private Sy sy;
    private Integer numeroSesion;
    private Date horaInicio;
    private Date horaFin;
    private Integer dia;

    public SesionNivel() {
    }

    public SesionNivel(Integer idSesionNivel, Integer numeroSesion, Date horaInicio, Date horaFin, Integer dia) {
        this.idSesionNivel = idSesionNivel;
        this.numeroSesion = numeroSesion;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.dia = dia;
    }

    public SesionNivel(Integer idSesionNivel, Nivel nivel, Sy sy, Integer numeroSesion, Date horaInicio, Date horaFin, Integer dia) {
        this.idSesionNivel = idSesionNivel;
        this.nivel = nivel;
        this.sy = sy;
        this.numeroSesion = numeroSesion;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.dia = dia;
    }

    public Integer getIdSesionNivel() {
        return idSesionNivel;
    }

    public void setIdSesionNivel(Integer idSesionNivel) {
        this.idSesionNivel = idSesionNivel;
    }

    public Nivel getNivel() {
        return nivel;
    }

    public void setNivel(Nivel nivel) {
        this.nivel = nivel;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Integer getNumeroSesion() {
        return numeroSesion;
    }

    public void setNumeroSesion(Integer numeroSesion) {
        this.numeroSesion = numeroSesion;
    }

    public Date getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(Date horaInicio) {
        this.horaInicio = horaInicio;
    }

    public Date getHoraFin() {
        return horaFin;
    }

    public void setHoraFin(Date horaFin) {
        this.horaFin = horaFin;
    }

    public Integer getDia() {
        return dia;
    }

    public void setDia(Integer dia) {
        this.dia = dia;
    }

}
