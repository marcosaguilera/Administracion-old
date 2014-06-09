
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.InscCoordinadoresCurso
 *  08/16/2013 09:24:24
 * 
 */
public class InscCoordinadoresCurso {

    private Integer idInscCoordinadoresCurso;
    private Curso curso;
    private Sy sy;
    private Persona persona;
    private String grupo;

    public InscCoordinadoresCurso() {
    }

    public InscCoordinadoresCurso(Integer idInscCoordinadoresCurso, String grupo) {
        this.idInscCoordinadoresCurso = idInscCoordinadoresCurso;
        this.grupo = grupo;
    }

    public InscCoordinadoresCurso(Integer idInscCoordinadoresCurso, Curso curso, Sy sy, Persona persona, String grupo) {
        this.idInscCoordinadoresCurso = idInscCoordinadoresCurso;
        this.curso = curso;
        this.sy = sy;
        this.persona = persona;
        this.grupo = grupo;
    }

    public Integer getIdInscCoordinadoresCurso() {
        return idInscCoordinadoresCurso;
    }

    public void setIdInscCoordinadoresCurso(Integer idInscCoordinadoresCurso) {
        this.idInscCoordinadoresCurso = idInscCoordinadoresCurso;
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

    public String getGrupo() {
        return grupo;
    }

    public void setGrupo(String grupo) {
        this.grupo = grupo;
    }

}
