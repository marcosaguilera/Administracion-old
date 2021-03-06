
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.Calificaciones
 *  12/07/2011 16:52:37
 * 
 */
public class Calificaciones {

    private Integer idCalificaciones;
    private String calificacion;
    private Integer calificacionNum;
    private Date fechaLogro;
    private String comentario;
    private Date fechaIngreso;
    private InscAlumAprendizaje inscAlumAprendizaje;

    public Calificaciones() {
    }

    public Calificaciones(Integer idCalificaciones, String calificacion, Integer calificacionNum, Date fechaLogro, String comentario, Date fechaIngreso) {
        this.idCalificaciones = idCalificaciones;
        this.calificacion = calificacion;
        this.calificacionNum = calificacionNum;
        this.fechaLogro = fechaLogro;
        this.comentario = comentario;
        this.fechaIngreso = fechaIngreso;
    }

    public Calificaciones(Integer idCalificaciones, String calificacion, Integer calificacionNum, Date fechaLogro, String comentario, Date fechaIngreso, InscAlumAprendizaje inscAlumAprendizaje) {
        this.idCalificaciones = idCalificaciones;
        this.calificacion = calificacion;
        this.calificacionNum = calificacionNum;
        this.fechaLogro = fechaLogro;
        this.comentario = comentario;
        this.fechaIngreso = fechaIngreso;
        this.inscAlumAprendizaje = inscAlumAprendizaje;
    }

    public Integer getIdCalificaciones() {
        return idCalificaciones;
    }

    public void setIdCalificaciones(Integer idCalificaciones) {
        this.idCalificaciones = idCalificaciones;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

    public Integer getCalificacionNum() {
        return calificacionNum;
    }

    public void setCalificacionNum(Integer calificacionNum) {
        this.calificacionNum = calificacionNum;
    }

    public Date getFechaLogro() {
        return fechaLogro;
    }

    public void setFechaLogro(Date fechaLogro) {
        this.fechaLogro = fechaLogro;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Date getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(Date fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public InscAlumAprendizaje getInscAlumAprendizaje() {
        return inscAlumAprendizaje;
    }

    public void setInscAlumAprendizaje(InscAlumAprendizaje inscAlumAprendizaje) {
        this.inscAlumAprendizaje = inscAlumAprendizaje;
    }

}
