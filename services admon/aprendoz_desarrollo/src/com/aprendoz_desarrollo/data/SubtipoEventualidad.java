
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.SubtipoEventualidad
 *  12/07/2011 16:52:37
 * 
 */
public class SubtipoEventualidad {

    private Integer idSubtipoEventualidad;
    private String subtipoEventualidad;
    private TipoEventualidad tipoEventualidad;
    private Set<com.aprendoz_desarrollo.data.Eventualidades> eventualidadeses = new HashSet<com.aprendoz_desarrollo.data.Eventualidades>();

    public SubtipoEventualidad() {
    }

    public SubtipoEventualidad(Integer idSubtipoEventualidad, String subtipoEventualidad) {
        this.idSubtipoEventualidad = idSubtipoEventualidad;
        this.subtipoEventualidad = subtipoEventualidad;
    }

    public SubtipoEventualidad(Integer idSubtipoEventualidad, String subtipoEventualidad, TipoEventualidad tipoEventualidad, Set<com.aprendoz_desarrollo.data.Eventualidades> eventualidadeses) {
        this.idSubtipoEventualidad = idSubtipoEventualidad;
        this.subtipoEventualidad = subtipoEventualidad;
        this.tipoEventualidad = tipoEventualidad;
        this.eventualidadeses = eventualidadeses;
    }

    public Integer getIdSubtipoEventualidad() {
        return idSubtipoEventualidad;
    }

    public void setIdSubtipoEventualidad(Integer idSubtipoEventualidad) {
        this.idSubtipoEventualidad = idSubtipoEventualidad;
    }

    public String getSubtipoEventualidad() {
        return subtipoEventualidad;
    }

    public void setSubtipoEventualidad(String subtipoEventualidad) {
        this.subtipoEventualidad = subtipoEventualidad;
    }

    public TipoEventualidad getTipoEventualidad() {
        return tipoEventualidad;
    }

    public void setTipoEventualidad(TipoEventualidad tipoEventualidad) {
        this.tipoEventualidad = tipoEventualidad;
    }

    public Set<com.aprendoz_desarrollo.data.Eventualidades> getEventualidadeses() {
        return eventualidadeses;
    }

    public void setEventualidadeses(Set<com.aprendoz_desarrollo.data.Eventualidades> eventualidadeses) {
        this.eventualidadeses = eventualidadeses;
    }

}
