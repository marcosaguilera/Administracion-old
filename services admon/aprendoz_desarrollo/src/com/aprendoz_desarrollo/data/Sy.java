
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Sy
 *  12/07/2011 16:52:37
 * 
 */
public class Sy {

    private Integer idSy;
    private String schoolYear;
    private Set<com.aprendoz_desarrollo.data.Asignatura> asignaturas = new HashSet<com.aprendoz_desarrollo.data.Asignatura>();
    private Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos = new HashSet<com.aprendoz_desarrollo.data.InscAlumCurso>();
    private Set<com.aprendoz_desarrollo.data.InscDocAsig> inscDocAsigs = new HashSet<com.aprendoz_desarrollo.data.InscDocAsig>();
    private Set<com.aprendoz_desarrollo.data.Periodo> periodos = new HashSet<com.aprendoz_desarrollo.data.Periodo>();

    public Sy() {
    }

    public Sy(Integer idSy, String schoolYear) {
        this.idSy = idSy;
        this.schoolYear = schoolYear;
    }

    public Sy(Integer idSy, String schoolYear, Set<com.aprendoz_desarrollo.data.Asignatura> asignaturas, Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos, Set<com.aprendoz_desarrollo.data.InscDocAsig> inscDocAsigs, Set<com.aprendoz_desarrollo.data.Periodo> periodos) {
        this.idSy = idSy;
        this.schoolYear = schoolYear;
        this.asignaturas = asignaturas;
        this.inscAlumCursos = inscAlumCursos;
        this.inscDocAsigs = inscDocAsigs;
        this.periodos = periodos;
    }

    public Integer getIdSy() {
        return idSy;
    }

    public void setIdSy(Integer idSy) {
        this.idSy = idSy;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    public Set<com.aprendoz_desarrollo.data.Asignatura> getAsignaturas() {
        return asignaturas;
    }

    public void setAsignaturas(Set<com.aprendoz_desarrollo.data.Asignatura> asignaturas) {
        this.asignaturas = asignaturas;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumCurso> getInscAlumCursos() {
        return inscAlumCursos;
    }

    public void setInscAlumCursos(Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos) {
        this.inscAlumCursos = inscAlumCursos;
    }

    public Set<com.aprendoz_desarrollo.data.InscDocAsig> getInscDocAsigs() {
        return inscDocAsigs;
    }

    public void setInscDocAsigs(Set<com.aprendoz_desarrollo.data.InscDocAsig> inscDocAsigs) {
        this.inscDocAsigs = inscDocAsigs;
    }

    public Set<com.aprendoz_desarrollo.data.Periodo> getPeriodos() {
        return periodos;
    }

    public void setPeriodos(Set<com.aprendoz_desarrollo.data.Periodo> periodos) {
        this.periodos = periodos;
    }

}
