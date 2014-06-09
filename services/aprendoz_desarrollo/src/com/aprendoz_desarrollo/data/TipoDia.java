
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoDia
 *  08/16/2013 09:24:24
 * 
 */
public class TipoDia {

    private Integer idTipoDia;
    private String tipoDia;
    private String descripcion;
    private Set<com.aprendoz_desarrollo.data.Cronograma> cronogramas = new HashSet<com.aprendoz_desarrollo.data.Cronograma>();

    public TipoDia() {
    }

    public TipoDia(Integer idTipoDia, String tipoDia, String descripcion) {
        this.idTipoDia = idTipoDia;
        this.tipoDia = tipoDia;
        this.descripcion = descripcion;
    }

    public TipoDia(Integer idTipoDia, String tipoDia, String descripcion, Set<com.aprendoz_desarrollo.data.Cronograma> cronogramas) {
        this.idTipoDia = idTipoDia;
        this.tipoDia = tipoDia;
        this.descripcion = descripcion;
        this.cronogramas = cronogramas;
    }

    public Integer getIdTipoDia() {
        return idTipoDia;
    }

    public void setIdTipoDia(Integer idTipoDia) {
        this.idTipoDia = idTipoDia;
    }

    public String getTipoDia() {
        return tipoDia;
    }

    public void setTipoDia(String tipoDia) {
        this.tipoDia = tipoDia;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<com.aprendoz_desarrollo.data.Cronograma> getCronogramas() {
        return cronogramas;
    }

    public void setCronogramas(Set<com.aprendoz_desarrollo.data.Cronograma> cronogramas) {
        this.cronogramas = cronogramas;
    }

}
