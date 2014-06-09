
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoSolicitud
 *  08/16/2013 09:24:24
 * 
 */
public class TipoSolicitud {

    private Integer idTipoSolicitud;
    private String solicitud;
    private Set<com.aprendoz_desarrollo.data.Novedades> novedadeses = new HashSet<com.aprendoz_desarrollo.data.Novedades>();

    public TipoSolicitud() {
    }

    public TipoSolicitud(Integer idTipoSolicitud, String solicitud) {
        this.idTipoSolicitud = idTipoSolicitud;
        this.solicitud = solicitud;
    }

    public TipoSolicitud(Integer idTipoSolicitud, String solicitud, Set<com.aprendoz_desarrollo.data.Novedades> novedadeses) {
        this.idTipoSolicitud = idTipoSolicitud;
        this.solicitud = solicitud;
        this.novedadeses = novedadeses;
    }

    public Integer getIdTipoSolicitud() {
        return idTipoSolicitud;
    }

    public void setIdTipoSolicitud(Integer idTipoSolicitud) {
        this.idTipoSolicitud = idTipoSolicitud;
    }

    public String getSolicitud() {
        return solicitud;
    }

    public void setSolicitud(String solicitud) {
        this.solicitud = solicitud;
    }

    public Set<com.aprendoz_desarrollo.data.Novedades> getNovedadeses() {
        return novedadeses;
    }

    public void setNovedadeses(Set<com.aprendoz_desarrollo.data.Novedades> novedadeses) {
        this.novedadeses = novedadeses;
    }

}
