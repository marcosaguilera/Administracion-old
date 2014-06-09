
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoDependencia
 *  08/16/2013 09:24:24
 * 
 */
public class TipoDependencia {

    private Integer idtipodependencia;
    private String dependencia;
    private Set<com.aprendoz_desarrollo.data.ReportesDependencias> reportesDependenciases = new HashSet<com.aprendoz_desarrollo.data.ReportesDependencias>();

    public TipoDependencia() {
    }

    public TipoDependencia(Integer idtipodependencia, String dependencia) {
        this.idtipodependencia = idtipodependencia;
        this.dependencia = dependencia;
    }

    public TipoDependencia(Integer idtipodependencia, String dependencia, Set<com.aprendoz_desarrollo.data.ReportesDependencias> reportesDependenciases) {
        this.idtipodependencia = idtipodependencia;
        this.dependencia = dependencia;
        this.reportesDependenciases = reportesDependenciases;
    }

    public Integer getIdtipodependencia() {
        return idtipodependencia;
    }

    public void setIdtipodependencia(Integer idtipodependencia) {
        this.idtipodependencia = idtipodependencia;
    }

    public String getDependencia() {
        return dependencia;
    }

    public void setDependencia(String dependencia) {
        this.dependencia = dependencia;
    }

    public Set<com.aprendoz_desarrollo.data.ReportesDependencias> getReportesDependenciases() {
        return reportesDependenciases;
    }

    public void setReportesDependenciases(Set<com.aprendoz_desarrollo.data.ReportesDependencias> reportesDependenciases) {
        this.reportesDependenciases = reportesDependenciases;
    }

}
