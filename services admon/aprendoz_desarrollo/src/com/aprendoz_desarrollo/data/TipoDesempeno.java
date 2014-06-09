
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoDesempeno
 *  12/07/2011 16:52:37
 * 
 */
public class TipoDesempeno {

    private Integer idTipoDesempeno;
    private String tipoDesempeno;
    private Set<com.aprendoz_desarrollo.data.Actividad> actividads = new HashSet<com.aprendoz_desarrollo.data.Actividad>();

    public TipoDesempeno() {
    }

    public TipoDesempeno(Integer idTipoDesempeno, String tipoDesempeno) {
        this.idTipoDesempeno = idTipoDesempeno;
        this.tipoDesempeno = tipoDesempeno;
    }

    public TipoDesempeno(Integer idTipoDesempeno, String tipoDesempeno, Set<com.aprendoz_desarrollo.data.Actividad> actividads) {
        this.idTipoDesempeno = idTipoDesempeno;
        this.tipoDesempeno = tipoDesempeno;
        this.actividads = actividads;
    }

    public Integer getIdTipoDesempeno() {
        return idTipoDesempeno;
    }

    public void setIdTipoDesempeno(Integer idTipoDesempeno) {
        this.idTipoDesempeno = idTipoDesempeno;
    }

    public String getTipoDesempeno() {
        return tipoDesempeno;
    }

    public void setTipoDesempeno(String tipoDesempeno) {
        this.tipoDesempeno = tipoDesempeno;
    }

    public Set<com.aprendoz_desarrollo.data.Actividad> getActividads() {
        return actividads;
    }

    public void setActividads(Set<com.aprendoz_desarrollo.data.Actividad> actividads) {
        this.actividads = actividads;
    }

}
