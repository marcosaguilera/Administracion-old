
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.InscComentariosAlumnos
 *  06/12/2014 18:46:46
 * 
 */
public class InscComentariosAlumnos {

    private Integer idComentarioEstudiante;
    private Sy sy;
    private Persona persona;
    private Integer numeroBimestre;
    private String comentario;
    private Date fechaActual;

    public InscComentariosAlumnos() {
    }

    public InscComentariosAlumnos(Integer idComentarioEstudiante, Integer numeroBimestre, String comentario, Date fechaActual) {
        this.idComentarioEstudiante = idComentarioEstudiante;
        this.numeroBimestre = numeroBimestre;
        this.comentario = comentario;
        this.fechaActual = fechaActual;
    }

    public InscComentariosAlumnos(Integer idComentarioEstudiante, Sy sy, Persona persona, Integer numeroBimestre, String comentario, Date fechaActual) {
        this.idComentarioEstudiante = idComentarioEstudiante;
        this.sy = sy;
        this.persona = persona;
        this.numeroBimestre = numeroBimestre;
        this.comentario = comentario;
        this.fechaActual = fechaActual;
    }

    public Integer getIdComentarioEstudiante() {
        return idComentarioEstudiante;
    }

    public void setIdComentarioEstudiante(Integer idComentarioEstudiante) {
        this.idComentarioEstudiante = idComentarioEstudiante;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Integer getNumeroBimestre() {
        return numeroBimestre;
    }

    public void setNumeroBimestre(Integer numeroBimestre) {
        this.numeroBimestre = numeroBimestre;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Date getFechaActual() {
        return fechaActual;
    }

    public void setFechaActual(Date fechaActual) {
        this.fechaActual = fechaActual;
    }

}
