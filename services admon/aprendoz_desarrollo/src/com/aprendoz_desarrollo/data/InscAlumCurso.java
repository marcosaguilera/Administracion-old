
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.InscAlumCurso
 *  12/07/2011 16:52:37
 * 
 */
public class InscAlumCurso {

    private Integer idInscAlumCurso;
    private Integer calificacion;
    private String califChar;
    private Date fechaMatricula;
    private Curso curso;
    private Sy sy;
    private Persona persona;

    public InscAlumCurso() {
    }

    public InscAlumCurso(Integer idInscAlumCurso, Integer calificacion, String califChar, Date fechaMatricula) {
        this.idInscAlumCurso = idInscAlumCurso;
        this.calificacion = calificacion;
        this.califChar = califChar;
        this.fechaMatricula = fechaMatricula;
    }

    public InscAlumCurso(Integer idInscAlumCurso, Integer calificacion, String califChar, Date fechaMatricula, Curso curso, Sy sy, Persona persona) {
        this.idInscAlumCurso = idInscAlumCurso;
        this.calificacion = calificacion;
        this.califChar = califChar;
        this.fechaMatricula = fechaMatricula;
        this.curso = curso;
        this.sy = sy;
        this.persona = persona;
    }

    public Integer getIdInscAlumCurso() {
        return idInscAlumCurso;
    }

    public void setIdInscAlumCurso(Integer idInscAlumCurso) {
        this.idInscAlumCurso = idInscAlumCurso;
    }

    public Integer getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(Integer calificacion) {
        this.calificacion = calificacion;
    }

    public String getCalifChar() {
        return califChar;
    }

    public void setCalifChar(String califChar) {
        this.califChar = califChar;
    }

    public Date getFechaMatricula() {
        return fechaMatricula;
    }

    public void setFechaMatricula(Date fechaMatricula) {
        this.fechaMatricula = fechaMatricula;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
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

}
