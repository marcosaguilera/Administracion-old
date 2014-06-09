
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Sesion
 *  12/07/2011 16:52:37
 * 
 */
public class Sesion {

    private Integer idSesion;
    private Date fecha;
    private Integer numeroSesion;
    private Curso curso;
    private Asignatura asignatura;
    private Set<com.aprendoz_desarrollo.data.Asistencia> asistencias = new HashSet<com.aprendoz_desarrollo.data.Asistencia>();

    public Sesion() {
    }

    public Sesion(Integer idSesion, Date fecha, Integer numeroSesion) {
        this.idSesion = idSesion;
        this.fecha = fecha;
        this.numeroSesion = numeroSesion;
    }

    public Sesion(Integer idSesion, Date fecha, Integer numeroSesion, Curso curso, Asignatura asignatura, Set<com.aprendoz_desarrollo.data.Asistencia> asistencias) {
        this.idSesion = idSesion;
        this.fecha = fecha;
        this.numeroSesion = numeroSesion;
        this.curso = curso;
        this.asignatura = asignatura;
        this.asistencias = asistencias;
    }

    public Integer getIdSesion() {
        return idSesion;
    }

    public void setIdSesion(Integer idSesion) {
        this.idSesion = idSesion;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Integer getNumeroSesion() {
        return numeroSesion;
    }

    public void setNumeroSesion(Integer numeroSesion) {
        this.numeroSesion = numeroSesion;
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

    public Set<com.aprendoz_desarrollo.data.Asistencia> getAsistencias() {
        return asistencias;
    }

    public void setAsistencias(Set<com.aprendoz_desarrollo.data.Asistencia> asistencias) {
        this.asistencias = asistencias;
    }

}
