
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.OtrasMetas
 *  12/07/2011 16:52:37
 * 
 */
public class OtrasMetas {

    private Integer idOtraMeta;
    private String meta;
    private Date fecha;
    private Boolean logrado;
    private Integer idSyIdIdSy;
    private Subtopico subtopico;

    public OtrasMetas() {
    }

    public OtrasMetas(Integer idOtraMeta, String meta, Date fecha, Boolean logrado, Integer idSyIdIdSy) {
        this.idOtraMeta = idOtraMeta;
        this.meta = meta;
        this.fecha = fecha;
        this.logrado = logrado;
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public OtrasMetas(Integer idOtraMeta, String meta, Date fecha, Boolean logrado, Integer idSyIdIdSy, Subtopico subtopico) {
        this.idOtraMeta = idOtraMeta;
        this.meta = meta;
        this.fecha = fecha;
        this.logrado = logrado;
        this.idSyIdIdSy = idSyIdIdSy;
        this.subtopico = subtopico;
    }

    public Integer getIdOtraMeta() {
        return idOtraMeta;
    }

    public void setIdOtraMeta(Integer idOtraMeta) {
        this.idOtraMeta = idOtraMeta;
    }

    public String getMeta() {
        return meta;
    }

    public void setMeta(String meta) {
        this.meta = meta;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Boolean getLogrado() {
        return logrado;
    }

    public void setLogrado(Boolean logrado) {
        this.logrado = logrado;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Subtopico getSubtopico() {
        return subtopico;
    }

    public void setSubtopico(Subtopico subtopico) {
        this.subtopico = subtopico;
    }

}
