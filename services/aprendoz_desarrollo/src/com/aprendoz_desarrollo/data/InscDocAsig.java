
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.InscDocAsig
 *  12/07/2011 16:52:37
 * 
 */
public class InscDocAsig {

    private Integer idInscDocAsig;
    private Date fechaCreacion;
    private Asignatura asignatura;
    private Sy sy;
    private Persona persona;

    public InscDocAsig() {
    }

    public InscDocAsig(Integer idInscDocAsig, Date fechaCreacion) {
        this.idInscDocAsig = idInscDocAsig;
        this.fechaCreacion = fechaCreacion;
    }

    public InscDocAsig(Integer idInscDocAsig, Date fechaCreacion, Asignatura asignatura, Sy sy, Persona persona) {
        this.idInscDocAsig = idInscDocAsig;
        this.fechaCreacion = fechaCreacion;
        this.asignatura = asignatura;
        this.sy = sy;
        this.persona = persona;
    }

    public Integer getIdInscDocAsig() {
        return idInscDocAsig;
    }

    public void setIdInscDocAsig(Integer idInscDocAsig) {
        this.idInscDocAsig = idInscDocAsig;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Asignatura getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Asignatura asignatura) {
        this.asignatura = asignatura;
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
