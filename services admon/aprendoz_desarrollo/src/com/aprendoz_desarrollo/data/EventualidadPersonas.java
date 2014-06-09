
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.EventualidadPersonas
 *  12/07/2011 16:52:37
 * 
 */
public class EventualidadPersonas {

    private Integer idEventualidadPersonas;
    private Eventualidades eventualidades;
    private Persona persona;

    public EventualidadPersonas() {
    }

    public EventualidadPersonas(Integer idEventualidadPersonas) {
        this.idEventualidadPersonas = idEventualidadPersonas;
    }

    public EventualidadPersonas(Integer idEventualidadPersonas, Eventualidades eventualidades, Persona persona) {
        this.idEventualidadPersonas = idEventualidadPersonas;
        this.eventualidades = eventualidades;
        this.persona = persona;
    }

    public Integer getIdEventualidadPersonas() {
        return idEventualidadPersonas;
    }

    public void setIdEventualidadPersonas(Integer idEventualidadPersonas) {
        this.idEventualidadPersonas = idEventualidadPersonas;
    }

    public Eventualidades getEventualidades() {
        return eventualidades;
    }

    public void setEventualidades(Eventualidades eventualidades) {
        this.eventualidades = eventualidades;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
