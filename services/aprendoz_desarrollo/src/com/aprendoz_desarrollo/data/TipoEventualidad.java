
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoEventualidad
 *  08/16/2013 09:24:25
 * 
 */
public class TipoEventualidad {

    private Integer idTipoEventualidad;
    private String tipoEventualidad;
    private Set<com.aprendoz_desarrollo.data.SubtipoEventualidad> subtipoEventualidads = new HashSet<com.aprendoz_desarrollo.data.SubtipoEventualidad>();

    public TipoEventualidad() {
    }

    public TipoEventualidad(Integer idTipoEventualidad, String tipoEventualidad) {
        this.idTipoEventualidad = idTipoEventualidad;
        this.tipoEventualidad = tipoEventualidad;
    }

    public TipoEventualidad(Integer idTipoEventualidad, String tipoEventualidad, Set<com.aprendoz_desarrollo.data.SubtipoEventualidad> subtipoEventualidads) {
        this.idTipoEventualidad = idTipoEventualidad;
        this.tipoEventualidad = tipoEventualidad;
        this.subtipoEventualidads = subtipoEventualidads;
    }

    public Integer getIdTipoEventualidad() {
        return idTipoEventualidad;
    }

    public void setIdTipoEventualidad(Integer idTipoEventualidad) {
        this.idTipoEventualidad = idTipoEventualidad;
    }

    public String getTipoEventualidad() {
        return tipoEventualidad;
    }

    public void setTipoEventualidad(String tipoEventualidad) {
        this.tipoEventualidad = tipoEventualidad;
    }

    public Set<com.aprendoz_desarrollo.data.SubtipoEventualidad> getSubtipoEventualidads() {
        return subtipoEventualidads;
    }

    public void setSubtipoEventualidads(Set<com.aprendoz_desarrollo.data.SubtipoEventualidad> subtipoEventualidads) {
        this.subtipoEventualidads = subtipoEventualidads;
    }

}
