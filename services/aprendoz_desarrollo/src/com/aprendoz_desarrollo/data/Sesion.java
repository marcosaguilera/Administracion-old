
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Sesion
 *  08/16/2013 09:24:24
 * 
 */
public class Sesion {

    private Integer idSesion;
    private Curso curso;
    private Asignatura asignatura;
    private Date fecha;
    private Integer numeroSesion;
    private Boolean impartida;
    private String comentario;
    private Date horaInicio;
    private Date horaFin;
    private Set<com.aprendoz_desarrollo.data.Asistencia> asistencias = new HashSet<com.aprendoz_desarrollo.data.Asistencia>();

    public Sesion() {
    }

    public Sesion(Integer idSesion, Date fecha, Integer numeroSesion, Boolean impartida, String comentario, Date horaInicio, Date horaFin) {
        this.idSesion = idSesion;
        this.fecha = fecha;
        this.numeroSesion = numeroSesion;
        this.impartida = impartida;
        this.comentario = comentario;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
    }

    public Sesion(Integer idSesion, Curso curso, Asignatura asignatura, Date fecha, Integer numeroSesion, Boolean impartida, String comentario, Date horaInicio, Date horaFin, Set<com.aprendoz_desarrollo.data.Asistencia> asistencias) {
        this.idSesion = idSesion;
        this.curso = curso;
        this.asignatura = asignatura;
        this.fecha = fecha;
        this.numeroSesion = numeroSesion;
        this.impartida = impartida;
        this.comentario = comentario;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.asistencias = asistencias;
    }

    public Integer getIdSesion() {
        return idSesion;
    }

    public void setIdSesion(Integer idSesion) {
        this.idSesion = idSesion;
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

    public Boolean getImpartida() {
        return impartida;
    }

    public void setImpartida(Boolean impartida) {
        this.impartida = impartida;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Date getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(Date horaInicio) {
        this.horaInicio = horaInicio;
    }

    public Date getHoraFin() {
        return horaFin;
    }

    public void setHoraFin(Date horaFin) {
        this.horaFin = horaFin;
    }

    public Set<com.aprendoz_desarrollo.data.Asistencia> getAsistencias() {
        return asistencias;
    }

    public void setAsistencias(Set<com.aprendoz_desarrollo.data.Asistencia> asistencias) {
        this.asistencias = asistencias;
    }

}
