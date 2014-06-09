
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.InscAlumActividad
 *  12/07/2011 16:52:37
 * 
 */
public class InscAlumActividad {

    private Integer idInscAlumActividad;
    private Boolean logrado;
    private Date fecha;
    private String comentario;
    private Actividad actividad;
    private Persona persona;

    public InscAlumActividad() {
    }

    public InscAlumActividad(Integer idInscAlumActividad, Boolean logrado, Date fecha, String comentario) {
        this.idInscAlumActividad = idInscAlumActividad;
        this.logrado = logrado;
        this.fecha = fecha;
        this.comentario = comentario;
    }

    public InscAlumActividad(Integer idInscAlumActividad, Boolean logrado, Date fecha, String comentario, Actividad actividad, Persona persona) {
        this.idInscAlumActividad = idInscAlumActividad;
        this.logrado = logrado;
        this.fecha = fecha;
        this.comentario = comentario;
        this.actividad = actividad;
        this.persona = persona;
    }

    public Integer getIdInscAlumActividad() {
        return idInscAlumActividad;
    }

    public void setIdInscAlumActividad(Integer idInscAlumActividad) {
        this.idInscAlumActividad = idInscAlumActividad;
    }

    public Boolean getLogrado() {
        return logrado;
    }

    public void setLogrado(Boolean logrado) {
        this.logrado = logrado;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Actividad getActividad() {
        return actividad;
    }

    public void setActividad(Actividad actividad) {
        this.actividad = actividad;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
