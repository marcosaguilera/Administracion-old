
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.InscCursoAsig
 *  08/16/2013 09:24:25
 * 
 */
public class InscCursoAsig {

    private Long idInscCursoAsig;
    private Curso curso;
    private Asignatura asignatura;
    private Persona persona;
    private Periodo periodo;

    public InscCursoAsig() {
    }

    public InscCursoAsig(Long idInscCursoAsig) {
        this.idInscCursoAsig = idInscCursoAsig;
    }

    public InscCursoAsig(Long idInscCursoAsig, Curso curso, Asignatura asignatura, Persona persona, Periodo periodo) {
        this.idInscCursoAsig = idInscCursoAsig;
        this.curso = curso;
        this.asignatura = asignatura;
        this.persona = persona;
        this.periodo = periodo;
    }

    public Long getIdInscCursoAsig() {
        return idInscCursoAsig;
    }

    public void setIdInscCursoAsig(Long idInscCursoAsig) {
        this.idInscCursoAsig = idInscCursoAsig;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Asignatura getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Asignatura asignatura) {
        this.asignatura = asignatura;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Periodo getPeriodo() {
        return periodo;
    }

    public void setPeriodo(Periodo periodo) {
        this.periodo = periodo;
    }

}
