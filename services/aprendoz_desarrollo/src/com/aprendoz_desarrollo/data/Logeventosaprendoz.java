
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.Logeventosaprendoz
 *  08/16/2013 09:24:25
 * 
 */
public class Logeventosaprendoz {

    private Integer idLogEventos;
    private Persona persona;
    private Date hora;
    private Date fecha;
    private String accion;
    private String tabla;

    public Logeventosaprendoz() {
    }

    public Logeventosaprendoz(Integer idLogEventos, Date hora, Date fecha, String accion, String tabla) {
        this.idLogEventos = idLogEventos;
        this.hora = hora;
        this.fecha = fecha;
        this.accion = accion;
        this.tabla = tabla;
    }

    public Logeventosaprendoz(Integer idLogEventos, Persona persona, Date hora, Date fecha, String accion, String tabla) {
        this.idLogEventos = idLogEventos;
        this.persona = persona;
        this.hora = hora;
        this.fecha = fecha;
        this.accion = accion;
        this.tabla = tabla;
    }

    public Integer getIdLogEventos() {
        return idLogEventos;
    }

    public void setIdLogEventos(Integer idLogEventos) {
        this.idLogEventos = idLogEventos;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Date getHora() {
        return hora;
    }

    public void setHora(Date hora) {
        this.hora = hora;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getAccion() {
        return accion;
    }

    public void setAccion(String accion) {
        this.accion = accion;
    }

    public String getTabla() {
        return tabla;
    }

    public void setTabla(String tabla) {
        this.tabla = tabla;
    }

}
