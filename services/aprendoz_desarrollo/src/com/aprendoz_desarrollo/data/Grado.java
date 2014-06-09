
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Grado
 *  08/16/2013 09:24:24
 * 
 */
public class Grado {

    private Integer idGrado;
    private Nivel nivel;
    private String grado;
    private String grade;
    private String gradoSapiens;
    private Set<com.aprendoz_desarrollo.data.InscAlumArea> inscAlumAreas = new HashSet<com.aprendoz_desarrollo.data.InscAlumArea>();
    private Set<com.aprendoz_desarrollo.data.Asignatura> asignaturas = new HashSet<com.aprendoz_desarrollo.data.Asignatura>();
    private Set<com.aprendoz_desarrollo.data.Costos> costoses = new HashSet<com.aprendoz_desarrollo.data.Costos>();
    private Set<com.aprendoz_desarrollo.data.Curso> cursos = new HashSet<com.aprendoz_desarrollo.data.Curso>();

    public Grado() {
    }

    public Grado(Integer idGrado, String grado, String grade, String gradoSapiens) {
        this.idGrado = idGrado;
        this.grado = grado;
        this.grade = grade;
        this.gradoSapiens = gradoSapiens;
    }

    public Grado(Integer idGrado, Nivel nivel, String grado, String grade, String gradoSapiens, Set<com.aprendoz_desarrollo.data.InscAlumArea> inscAlumAreas, Set<com.aprendoz_desarrollo.data.Asignatura> asignaturas, Set<com.aprendoz_desarrollo.data.Costos> costoses, Set<com.aprendoz_desarrollo.data.Curso> cursos) {
        this.idGrado = idGrado;
        this.nivel = nivel;
        this.grado = grado;
        this.grade = grade;
        this.gradoSapiens = gradoSapiens;
        this.inscAlumAreas = inscAlumAreas;
        this.asignaturas = asignaturas;
        this.costoses = costoses;
        this.cursos = cursos;
    }

    public Integer getIdGrado() {
        return idGrado;
    }

    public void setIdGrado(Integer idGrado) {
        this.idGrado = idGrado;
    }

    public Nivel getNivel() {
        return nivel;
    }

    public void setNivel(Nivel nivel) {
        this.nivel = nivel;
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

    public String getGradoSapiens() {
        return gradoSapiens;
    }

    public void setGradoSapiens(String gradoSapiens) {
        this.gradoSapiens = gradoSapiens;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumArea> getInscAlumAreas() {
        return inscAlumAreas;
    }

    public void setInscAlumAreas(Set<com.aprendoz_desarrollo.data.InscAlumArea> inscAlumAreas) {
        this.inscAlumAreas = inscAlumAreas;
    }

    public Set<com.aprendoz_desarrollo.data.Asignatura> getAsignaturas() {
        return asignaturas;
    }

    public void setAsignaturas(Set<com.aprendoz_desarrollo.data.Asignatura> asignaturas) {
        this.asignaturas = asignaturas;
    }

    public Set<com.aprendoz_desarrollo.data.Costos> getCostoses() {
        return costoses;
    }

    public void setCostoses(Set<com.aprendoz_desarrollo.data.Costos> costoses) {
        this.costoses = costoses;
    }

    public Set<com.aprendoz_desarrollo.data.Curso> getCursos() {
        return cursos;
    }

    public void setCursos(Set<com.aprendoz_desarrollo.data.Curso> cursos) {
        this.cursos = cursos;
    }

}
