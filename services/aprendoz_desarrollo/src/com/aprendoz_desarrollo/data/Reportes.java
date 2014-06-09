
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Reportes
 *  08/16/2013 09:24:24
 * 
 */
public class Reportes {

    private Integer idreporte;
    private String codigo;
    private String reporte;
    private String descripcion;
    private String uri;
    private Set<com.aprendoz_desarrollo.data.ReportesDependencias> reportesDependenciases = new HashSet<com.aprendoz_desarrollo.data.ReportesDependencias>();
    private Set<com.aprendoz_desarrollo.data.ReportesTipoPersona> reportesTipoPersonas = new HashSet<com.aprendoz_desarrollo.data.ReportesTipoPersona>();

    public Reportes() {
    }

    public Reportes(Integer idreporte, String codigo, String reporte, String descripcion, String uri) {
        this.idreporte = idreporte;
        this.codigo = codigo;
        this.reporte = reporte;
        this.descripcion = descripcion;
        this.uri = uri;
    }

    public Reportes(Integer idreporte, String codigo, String reporte, String descripcion, String uri, Set<com.aprendoz_desarrollo.data.ReportesDependencias> reportesDependenciases, Set<com.aprendoz_desarrollo.data.ReportesTipoPersona> reportesTipoPersonas) {
        this.idreporte = idreporte;
        this.codigo = codigo;
        this.reporte = reporte;
        this.descripcion = descripcion;
        this.uri = uri;
        this.reportesDependenciases = reportesDependenciases;
        this.reportesTipoPersonas = reportesTipoPersonas;
    }

    public Integer getIdreporte() {
        return idreporte;
    }

    public void setIdreporte(Integer idreporte) {
        this.idreporte = idreporte;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getReporte() {
        return reporte;
    }

    public void setReporte(String reporte) {
        this.reporte = reporte;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public Set<com.aprendoz_desarrollo.data.ReportesDependencias> getReportesDependenciases() {
        return reportesDependenciases;
    }

    public void setReportesDependenciases(Set<com.aprendoz_desarrollo.data.ReportesDependencias> reportesDependenciases) {
        this.reportesDependenciases = reportesDependenciases;
    }

    public Set<com.aprendoz_desarrollo.data.ReportesTipoPersona> getReportesTipoPersonas() {
        return reportesTipoPersonas;
    }

    public void setReportesTipoPersonas(Set<com.aprendoz_desarrollo.data.ReportesTipoPersona> reportesTipoPersonas) {
        this.reportesTipoPersonas = reportesTipoPersonas;
    }

}
