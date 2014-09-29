
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.SeguridadPersonasAccesos
 *  06/12/2014 18:46:46
 * 
 */
public class SeguridadPersonasAccesos {

    private Integer idSeguridadPersonasAccesos;
    private Persona persona;
    private Byte accesoTemp;
    private Date createdDate;
    private Date updatedDate;
    private String asignadoPor;

    public SeguridadPersonasAccesos() {
    }

    public SeguridadPersonasAccesos(Integer idSeguridadPersonasAccesos, Byte accesoTemp, Date createdDate, Date updatedDate, String asignadoPor) {
        this.idSeguridadPersonasAccesos = idSeguridadPersonasAccesos;
        this.accesoTemp = accesoTemp;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.asignadoPor = asignadoPor;
    }

    public SeguridadPersonasAccesos(Integer idSeguridadPersonasAccesos, Persona persona, Byte accesoTemp, Date createdDate, Date updatedDate, String asignadoPor) {
        this.idSeguridadPersonasAccesos = idSeguridadPersonasAccesos;
        this.persona = persona;
        this.accesoTemp = accesoTemp;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.asignadoPor = asignadoPor;
    }

    public Integer getIdSeguridadPersonasAccesos() {
        return idSeguridadPersonasAccesos;
    }

    public void setIdSeguridadPersonasAccesos(Integer idSeguridadPersonasAccesos) {
        this.idSeguridadPersonasAccesos = idSeguridadPersonasAccesos;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Byte getAccesoTemp() {
        return accesoTemp;
    }

    public void setAccesoTemp(Byte accesoTemp) {
        this.accesoTemp = accesoTemp;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getAsignadoPor() {
        return asignadoPor;
    }

    public void setAsignadoPor(String asignadoPor) {
        this.asignadoPor = asignadoPor;
    }

}
