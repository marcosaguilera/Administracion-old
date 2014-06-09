
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoTransporte
 *  08/16/2013 09:24:25
 * 
 */
public class TipoTransporte {

    private Integer idtipoTransporte;
    private String tipoTransporte;
    private String descripcion;
    private Set<com.aprendoz_desarrollo.data.Rutas> rutases = new HashSet<com.aprendoz_desarrollo.data.Rutas>();

    public TipoTransporte() {
    }

    public TipoTransporte(Integer idtipoTransporte, String tipoTransporte, String descripcion) {
        this.idtipoTransporte = idtipoTransporte;
        this.tipoTransporte = tipoTransporte;
        this.descripcion = descripcion;
    }

    public TipoTransporte(Integer idtipoTransporte, String tipoTransporte, String descripcion, Set<com.aprendoz_desarrollo.data.Rutas> rutases) {
        this.idtipoTransporte = idtipoTransporte;
        this.tipoTransporte = tipoTransporte;
        this.descripcion = descripcion;
        this.rutases = rutases;
    }

    public Integer getIdtipoTransporte() {
        return idtipoTransporte;
    }

    public void setIdtipoTransporte(Integer idtipoTransporte) {
        this.idtipoTransporte = idtipoTransporte;
    }

    public String getTipoTransporte() {
        return tipoTransporte;
    }

    public void setTipoTransporte(String tipoTransporte) {
        this.tipoTransporte = tipoTransporte;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<com.aprendoz_desarrollo.data.Rutas> getRutases() {
        return rutases;
    }

    public void setRutases(Set<com.aprendoz_desarrollo.data.Rutas> rutases) {
        this.rutases = rutases;
    }

}
