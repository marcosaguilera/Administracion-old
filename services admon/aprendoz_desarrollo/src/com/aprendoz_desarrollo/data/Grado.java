
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Grado
 *  12/07/2011 16:52:37
 * 
 */
public class Grado {

    private Integer idGrado;
    private String grado;
    private String grade;
    private Nivel nivel;
    private Set<com.aprendoz_desarrollo.data.Asignatura> asignaturas = new HashSet<com.aprendoz_desarrollo.data.Asignatura>();
    private Set<com.aprendoz_desarrollo.data.Curso> cursos = new HashSet<com.aprendoz_desarrollo.data.Curso>();

    public Grado() {
    }

    public Grado(Integer idGrado, String grado, String grade) {
        this.idGrado = idGrado;
        this.grado = grado;
        this.grade = grade;
    }

    public Grado(Integer idGrado, String grado, String grade, Nivel nivel, Set<com.aprendoz_desarrollo.data.Asignatura> asignaturas, Set<com.aprendoz_desarrollo.data.Curso> cursos) {
        this.idGrado = idGrado;
        this.grado = grado;
        this.grade = grade;
        this.nivel = nivel;
        this.asignaturas = asignaturas;
        this.cursos = cursos;
    }

    public Integer getIdGrado() {
        return idGrado;
    }

    public void setIdGrado(Integer idGrado) {
        this.idGrado = idGrado;
    }

    public String getGrado() {
        return grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public Nivel getNivel() {
        return nivel;
    }

    public void setNivel(Nivel nivel) {
        this.nivel = nivel;
    }

    public Set<com.aprendoz_desarrollo.data.Asignatura> getAsignaturas() {
        return asignaturas;
    }

    public void setAsignaturas(Set<com.aprendoz_desarrollo.data.Asignatura> asignaturas) {
        this.asignaturas = asignaturas;
    }

    public Set<com.aprendoz_desarrollo.data.Curso> getCursos() {
        return cursos;
    }

    public void setCursos(Set<com.aprendoz_desarrollo.data.Curso> cursos) {
        this.cursos = cursos;
    }

}
