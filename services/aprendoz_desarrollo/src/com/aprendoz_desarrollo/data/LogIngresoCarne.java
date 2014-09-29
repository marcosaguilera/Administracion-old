
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.LogIngresoCarne
 *  06/12/2014 18:46:46
 * 
 */
public class LogIngresoCarne {

    private Integer idLogIngresoCarne;
    private TipoFalla tipoFalla;
    private Persona persona;
    private Date fechaCreacion;
    private Date fechaActualizacion;

    public LogIngresoCarne() {
    }

    public LogIngresoCarne(Integer idLogIngresoCarne, Date fechaCreacion, Date fechaActualizacion) {
        this.idLogIngresoCarne = idLogIngresoCarne;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public LogIngresoCarne(Integer idLogIngresoCarne, TipoFalla tipoFalla, Persona persona, Date fechaCreacion, Date fechaActualizacion) {
        this.idLogIngresoCarne = idLogIngresoCarne;
        this.tipoFalla = tipoFalla;
        this.persona = persona;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public Integer getIdLogIngresoCarne() {
        return idLogIngresoCarne;
    }

    public void setIdLogIngresoCarne(Integer idLogIngresoCarne) {
        this.idLogIngresoCarne = idLogIngresoCarne;
    }

    public TipoFalla getTipoFalla() {
        return tipoFalla;
    }

    public void setTipoFalla(TipoFalla tipoFalla) {
        this.tipoFalla = tipoFalla;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }

}
