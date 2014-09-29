
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.SeguridadPermisosModulos
 *  06/12/2014 18:46:45
 * 
 */
public class SeguridadPermisosModulos {

    private Integer idGlobalPermisosModulos;
    private String nombreModulo;
    private Boolean activo;
    private Date fechaCreacion;
    private Date fechaActualizacion;

    public SeguridadPermisosModulos() {
    }

    public SeguridadPermisosModulos(Integer idGlobalPermisosModulos, String nombreModulo, Boolean activo, Date fechaCreacion, Date fechaActualizacion) {
        this.idGlobalPermisosModulos = idGlobalPermisosModulos;
        this.nombreModulo = nombreModulo;
        this.activo = activo;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public Integer getIdGlobalPermisosModulos() {
        return idGlobalPermisosModulos;
    }

    public void setIdGlobalPermisosModulos(Integer idGlobalPermisosModulos) {
        this.idGlobalPermisosModulos = idGlobalPermisosModulos;
    }

    public String getNombreModulo() {
        return nombreModulo;
    }

    public void setNombreModulo(String nombreModulo) {
        this.nombreModulo = nombreModulo;
    }

    public Boolean getActivo() {
        return activo;
    }

    public void setActivo(Boolean activo) {
        this.activo = activo;
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
