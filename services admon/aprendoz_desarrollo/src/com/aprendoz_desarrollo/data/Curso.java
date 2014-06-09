
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Curso
 *  12/07/2011 16:52:37
 * 
 */
public class Curso {

    private Integer idCurso;
    private String curso;
    private Grado grado;
    private Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs = new HashSet<com.aprendoz_desarrollo.data.InscCursoAsig>();
    private Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos = new HashSet<com.aprendoz_desarrollo.data.InscAlumCurso>();
    private Set<com.aprendoz_desarrollo.data.Sesion> sesions = new HashSet<com.aprendoz_desarrollo.data.Sesion>();

    public Curso() {
    }

    public Curso(Integer idCurso, String curso) {
        this.idCurso = idCurso;
        this.curso = curso;
    }

    public Curso(Integer idCurso, String curso, Grado grado, Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs, Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos, Set<com.aprendoz_desarrollo.data.Sesion> sesions) {
        this.idCurso = idCurso;
        this.curso = curso;
        this.grado = grado;
        this.inscCursoAsigs = inscCursoAsigs;
        this.inscAlumCursos = inscAlumCursos;
        this.sesions = sesions;
    }

    public Integer getIdCurso() {
        return idCurso;
    }

    public void setIdCurso(Integer idCurso) {
        this.idCurso = idCurso;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public Grado getGrado() {
        return grado;
    }

    public void setGrado(Grado grado) {
        this.grado = grado;
    }

    public Set<com.aprendoz_desarrollo.data.InscCursoAsig> getInscCursoAsigs() {
        return inscCursoAsigs;
    }

    public void setInscCursoAsigs(Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs) {
        this.inscCursoAsigs = inscCursoAsigs;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumCurso> getInscAlumCursos() {
        return inscAlumCursos;
    }

    public void setInscAlumCursos(Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos) {
        this.inscAlumCursos = inscAlumCursos;
    }

    public Set<com.aprendoz_desarrollo.data.Sesion> getSesions() {
        return sesions;
    }

    public void setSesions(Set<com.aprendoz_desarrollo.data.Sesion> sesions) {
        this.sesions = sesions;
    }

}
