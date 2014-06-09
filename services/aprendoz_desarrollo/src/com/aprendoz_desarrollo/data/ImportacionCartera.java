
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.ImportacionCartera
 *  08/16/2013 09:24:24
 * 
 */
public class ImportacionCartera {

    private Integer idImportacionCartera;
    private String codigo;
    private String mensualidad;
    private String concepto;
    private Float valor;
    private String alumno;
    private String curso;
    private Integer numeroMes;

    public ImportacionCartera() {
    }

    public ImportacionCartera(Integer idImportacionCartera, String codigo, String mensualidad, String concepto, Float valor, String alumno, String curso, Integer numeroMes) {
        this.idImportacionCartera = idImportacionCartera;
        this.codigo = codigo;
        this.mensualidad = mensualidad;
        this.concepto = concepto;
        this.valor = valor;
        this.alumno = alumno;
        this.curso = curso;
        this.numeroMes = numeroMes;
    }

    public Integer getIdImportacionCartera() {
        return idImportacionCartera;
    }

    public void setIdImportacionCartera(Integer idImportacionCartera) {
        this.idImportacionCartera = idImportacionCartera;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getMensualidad() {
        return mensualidad;
    }

    public void setMensualidad(String mensualidad) {
        this.mensualidad = mensualidad;
    }

    public String getConcepto() {
        return concepto;
    }

    public void setConcepto(String concepto) {
        this.concepto = concepto;
    }

    public Float getValor() {
        return valor;
    }

    public void setValor(Float valor) {
        this.valor = valor;
    }

    public String getAlumno() {
        return alumno;
    }

    public void setAlumno(String alumno) {
        this.alumno = alumno;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public Integer getNumeroMes() {
        return numeroMes;
    }

    public void setNumeroMes(Integer numeroMes) {
        this.numeroMes = numeroMes;
    }

}
