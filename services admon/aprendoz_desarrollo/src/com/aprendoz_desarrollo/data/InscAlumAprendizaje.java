
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.InscAlumAprendizaje
 *  12/07/2011 16:52:37
 * 
 */
public class InscAlumAprendizaje {

    private Integer idInscAlumAprendizaje;
    private Date fechaLogro;
    private String calificacion;
    private Float calificacionNum;
    private String comentario;
    private Date fechaIngreso;
    private Persona persona;
    private Aprendizaje aprendizaje;
    private Set<com.aprendoz_desarrollo.data.Calificaciones> calificacioneses = new HashSet<com.aprendoz_desarrollo.data.Calificaciones>();
    private Set<com.aprendoz_desarrollo.data.HistorialCalificaciones> historialCalificacioneses = new HashSet<com.aprendoz_desarrollo.data.HistorialCalificaciones>();

    public InscAlumAprendizaje() {
    }

    public InscAlumAprendizaje(Integer idInscAlumAprendizaje, Date fechaLogro, String calificacion, Float calificacionNum, String comentario, Date fechaIngreso) {
        this.idInscAlumAprendizaje = idInscAlumAprendizaje;
        this.fechaLogro = fechaLogro;
        this.calificacion = calificacion;
        this.calificacionNum = calificacionNum;
        this.comentario = comentario;
        this.fechaIngreso = fechaIngreso;
    }

    public InscAlumAprendizaje(Integer idInscAlumAprendizaje, Date fechaLogro, String calificacion, Float calificacionNum, String comentario, Date fechaIngreso, Persona persona, Aprendizaje aprendizaje, Set<com.aprendoz_desarrollo.data.Calificaciones> calificacioneses, Set<com.aprendoz_desarrollo.data.HistorialCalificaciones> historialCalificacioneses) {
        this.idInscAlumAprendizaje = idInscAlumAprendizaje;
        this.fechaLogro = fechaLogro;
        this.calificacion = calificacion;
        this.calificacionNum = calificacionNum;
        this.comentario = comentario;
        this.fechaIngreso = fechaIngreso;
        this.persona = persona;
        this.aprendizaje = aprendizaje;
        this.calificacioneses = calificacioneses;
        this.historialCalificacioneses = historialCalificacioneses;
    }

    public Integer getIdInscAlumAprendizaje() {
        return idInscAlumAprendizaje;
    }

    public void setIdInscAlumAprendizaje(Integer idInscAlumAprendizaje) {
        this.idInscAlumAprendizaje = idInscAlumAprendizaje;
    }

    public Date getFechaLogro() {
        return fechaLogro;
    }

    public void setFechaLogro(Date fechaLogro) {
        this.fechaLogro = fechaLogro;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

    public Float getCalificacionNum() {
        return calificacionNum;
    }

    public void setCalificacionNum(Float calificacionNum) {
        this.calificacionNum = calificacionNum;
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

    public Set<com.aprendoz_desarrollo.data.Calificaciones> getCalificacioneses() {
        return calificacioneses;
    }

    public void setCalificacioneses(Set<com.aprendoz_desarrollo.data.Calificaciones> calificacioneses) {
        this.calificacioneses = calificacioneses;
    }

    public Set<com.aprendoz_desarrollo.data.HistorialCalificaciones> getHistorialCalificacioneses() {
        return historialCalificacioneses;
    }

    public void setHistorialCalificacioneses(Set<com.aprendoz_desarrollo.data.HistorialCalificaciones> historialCalificacioneses) {
        this.historialCalificacioneses = historialCalificacioneses;
    }

}
