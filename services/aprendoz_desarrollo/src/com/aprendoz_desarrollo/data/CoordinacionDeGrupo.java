
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.CoordinacionDeGrupo
 *  08/16/2013 09:24:24
 * 
 */
public class CoordinacionDeGrupo {

    private Integer idCoordinacionDeGrupo;
    private Curso curso;
    private Sy sy;
    private Persona persona;

    public CoordinacionDeGrupo() {
    }

    public CoordinacionDeGrupo(Integer idCoordinacionDeGrupo) {
        this.idCoordinacionDeGrupo = idCoordinacionDeGrupo;
    }

    public CoordinacionDeGrupo(Integer idCoordinacionDeGrupo, Curso curso, Sy sy, Persona persona) {
        this.idCoordinacionDeGrupo = idCoordinacionDeGrupo;
        this.curso = curso;
        this.sy = sy;
        this.persona = persona;
    }

    public Integer getIdCoordinacionDeGrupo() {
        return idCoordinacionDeGrupo;
    }

    public void setIdCoordinacionDeGrupo(Integer idCoordinacionDeGrupo) {
        this.idCoordinacionDeGrupo = idCoordinacionDeGrupo;
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
