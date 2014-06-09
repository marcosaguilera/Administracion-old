
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.CalificacionFinal
 *  12/07/2011 16:52:37
 * 
 */
public class CalificacionFinal {

    private Integer idCalificacionFinal;
    private Float calificacionNum;
    private String calificacion;
    private Integer idSyIdIdSy;
    private Date fechaLogro;
    private Persona persona;
    private Aprendizaje aprendizaje;

    public CalificacionFinal() {
    }

    public CalificacionFinal(Integer idCalificacionFinal, Float calificacionNum, String calificacion, Integer idSyIdIdSy, Date fechaLogro) {
        this.idCalificacionFinal = idCalificacionFinal;
        this.calificacionNum = calificacionNum;
        this.calificacion = calificacion;
        this.idSyIdIdSy = idSyIdIdSy;
        this.fechaLogro = fechaLogro;
    }

    public CalificacionFinal(Integer idCalificacionFinal, Float calificacionNum, String calificacion, Integer idSyIdIdSy, Date fechaLogro, Persona persona, Aprendizaje aprendizaje) {
        this.idCalificacionFinal = idCalificacionFinal;
        this.calificacionNum = calificacionNum;
        this.calificacion = calificacion;
        this.idSyIdIdSy = idSyIdIdSy;
        this.fechaLogro = fechaLogro;
        this.persona = persona;
        this.aprendizaje = aprendizaje;
    }

    public Integer getIdCalificacionFinal() {
        return idCalificacionFinal;
    }

    public void setIdCalificacionFinal(Integer idCalificacionFinal) {
        this.idCalificacionFinal = idCalificacionFinal;
    }

    public Float getCalificacionNum() {
        return calificacionNum;
    }

    public void setCalificacionNum(Float calificacionNum) {
        this.calificacionNum = calificacionNum;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Date getFechaLogro() {
        return fechaLogro;
    }

    public void setFechaLogro(Date fechaLogro) {
        this.fechaLogro = fechaLogro;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Aprendizaje getAprendizaje() {
        return aprendizaje;
    }

    public void setAprendizaje(Aprendizaje aprendizaje) {
        this.aprendizaje = aprendizaje;
    }

}
