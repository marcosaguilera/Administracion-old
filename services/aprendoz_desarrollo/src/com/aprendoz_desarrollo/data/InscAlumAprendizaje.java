
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.InscAlumAprendizaje
 *  06/12/2014 18:46:46
 * 
 */
public class InscAlumAprendizaje {

    private Integer idInscAlumAprendizaje;
    private Persona persona;
    private Aprendizaje aprendizaje;
    private Date fechaLogro;
    private String calificacion;
    private Float calificacionNum;
    private String comentario;
    private Date fechaIngreso;
    private String usuario;

    public InscAlumAprendizaje() {
    }

    public InscAlumAprendizaje(Integer idInscAlumAprendizaje, Date fechaLogro, String calificacion, Float calificacionNum, String comentario, Date fechaIngreso, String usuario) {
        this.idInscAlumAprendizaje = idInscAlumAprendizaje;
        this.fechaLogro = fechaLogro;
        this.calificacion = calificacion;
        this.calificacionNum = calificacionNum;
        this.comentario = comentario;
        this.fechaIngreso = fechaIngreso;
        this.usuario = usuario;
    }

    public InscAlumAprendizaje(Integer idInscAlumAprendizaje, Persona persona, Aprendizaje aprendizaje, Date fechaLogro, String calificacion, Float calificacionNum, String comentario, Date fechaIngreso, String usuario) {
        this.idInscAlumAprendizaje = idInscAlumAprendizaje;
        this.persona = persona;
        this.aprendizaje = aprendizaje;
        this.fechaLogro = fechaLogro;
        this.calificacion = calificacion;
        this.calificacionNum = calificacionNum;
        this.comentario = comentario;
        this.fechaIngreso = fechaIngreso;
        this.usuario = usuario;
    }

    public Integer getIdInscAlumAprendizaje() {
        return idInscAlumAprendizaje;
    }

    public void setIdInscAlumAprendizaje(Integer idInscAlumAprendizaje) {
        this.idInscAlumAprendizaje = idInscAlumAprendizaje;
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

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

}
