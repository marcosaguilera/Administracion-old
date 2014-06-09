
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Recurso
 *  12/07/2011 16:52:37
 * 
 */
public class Recurso {

    private Integer idRecurso;
    private String recurso;
    private byte[] documento;
    private String ubicacion;
    private Integer idSyIdIdSy;
    private Subtopico subtopico;
    private TipoRecurso tipoRecurso;

    public Recurso() {
    }

    public Recurso(Integer idRecurso, String recurso, String ubicacion, Integer idSyIdIdSy) {
        this.idRecurso = idRecurso;
        this.recurso = recurso;
        this.ubicacion = ubicacion;
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Recurso(Integer idRecurso, String recurso, byte[] documento, String ubicacion, Integer idSyIdIdSy, Subtopico subtopico, TipoRecurso tipoRecurso) {
        this.idRecurso = idRecurso;
        this.recurso = recurso;
        this.documento = documento;
        this.ubicacion = ubicacion;
        this.idSyIdIdSy = idSyIdIdSy;
        this.subtopico = subtopico;
        this.tipoRecurso = tipoRecurso;
    }

    public Integer getIdRecurso() {
        return idRecurso;
    }

    public void setIdRecurso(Integer idRecurso) {
        this.idRecurso = idRecurso;
    }

    public String getRecurso() {
        return recurso;
    }

    public void setRecurso(String recurso) {
        this.recurso = recurso;
    }

    public byte[] getDocumento() {
        return documento;
    }

    public void setDocumento(byte[] documento) {
        this.documento = documento;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
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

    public TipoRecurso getTipoRecurso() {
        return tipoRecurso;
    }

    public void setTipoRecurso(TipoRecurso tipoRecurso) {
        this.tipoRecurso = tipoRecurso;
    }

}
