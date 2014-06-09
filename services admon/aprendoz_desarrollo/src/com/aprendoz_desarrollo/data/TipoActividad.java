
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoActividad
 *  12/07/2011 16:52:37
 * 
 */
public class TipoActividad {

    private Integer idTipoActividad;
    private String tipoActividad;
    private Set<com.aprendoz_desarrollo.data.Actividad> actividads = new HashSet<com.aprendoz_desarrollo.data.Actividad>();

    public TipoActividad() {
    }

    public TipoActividad(Integer idTipoActividad, String tipoActividad) {
        this.idTipoActividad = idTipoActividad;
        this.tipoActividad = tipoActividad;
    }

    public TipoActividad(Integer idTipoActividad, String tipoActividad, Set<com.aprendoz_desarrollo.data.Actividad> actividads) {
        this.idTipoActividad = idTipoActividad;
        this.tipoActividad = tipoActividad;
        this.actividads = actividads;
    }

    public Integer getIdTipoActividad() {
        return idTipoActividad;
    }

    public void setIdTipoActividad(Integer idTipoActividad) {
        this.idTipoActividad = idTipoActividad;
    }

    public String getTipoActividad() {
        return tipoActividad;
    }

    public void setTipoActividad(String tipoActividad) {
        this.tipoActividad = tipoActividad;
    }

    public Set<com.aprendoz_desarrollo.data.Actividad> getActividads() {
        return actividads;
    }

    public void setActividads(Set<com.aprendoz_desarrollo.data.Actividad> actividads) {
        this.actividads = actividads;
    }

}
