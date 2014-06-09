
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoPeriodo
 *  12/07/2011 16:52:37
 * 
 */
public class TipoPeriodo {

    private Integer idTipoPeriodo;
    private String tipoPeriodo;
    private Set<com.aprendoz_desarrollo.data.Periodo> periodos = new HashSet<com.aprendoz_desarrollo.data.Periodo>();

    public TipoPeriodo() {
    }

    public TipoPeriodo(Integer idTipoPeriodo, String tipoPeriodo) {
        this.idTipoPeriodo = idTipoPeriodo;
        this.tipoPeriodo = tipoPeriodo;
    }

    public TipoPeriodo(Integer idTipoPeriodo, String tipoPeriodo, Set<com.aprendoz_desarrollo.data.Periodo> periodos) {
        this.idTipoPeriodo = idTipoPeriodo;
        this.tipoPeriodo = tipoPeriodo;
        this.periodos = periodos;
    }

    public Integer getIdTipoPeriodo() {
        return idTipoPeriodo;
    }

    public void setIdTipoPeriodo(Integer idTipoPeriodo) {
        this.idTipoPeriodo = idTipoPeriodo;
    }

    public String getTipoPeriodo() {
        return tipoPeriodo;
    }

    public void setTipoPeriodo(String tipoPeriodo) {
        this.tipoPeriodo = tipoPeriodo;
    }

    public Set<com.aprendoz_desarrollo.data.Periodo> getPeriodos() {
        return periodos;
    }

    public void setPeriodos(Set<com.aprendoz_desarrollo.data.Periodo> periodos) {
        this.periodos = periodos;
    }

}
