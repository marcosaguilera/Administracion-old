
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.Matricula
 *  08/16/2013 09:24:25
 * 
 */
public class Matricula {

    private Integer idMatricula;
    private Curso curso;
    private Sy sy;
    private Persona persona;
    private Double valorAnual;
    private Integer valorMensual;
    private Date fechaMatricula;
    private String comentario;

    public Matricula() {
    }

    public Matricula(Integer idMatricula, Double valorAnual, Integer valorMensual, Date fechaMatricula, String comentario) {
        this.idMatricula = idMatricula;
        this.valorAnual = valorAnual;
        this.valorMensual = valorMensual;
        this.fechaMatricula = fechaMatricula;
        this.comentario = comentario;
    }

    public Matricula(Integer idMatricula, Curso curso, Sy sy, Persona persona, Double valorAnual, Integer valorMensual, Date fechaMatricula, String comentario) {
        this.idMatricula = idMatricula;
        this.curso = curso;
        this.sy = sy;
        this.persona = persona;
        this.valorAnual = valorAnual;
        this.valorMensual = valorMensual;
        this.fechaMatricula = fechaMatricula;
        this.comentario = comentario;
    }

    public Integer getIdMatricula() {
        return idMatricula;
    }

    public void setIdMatricula(Integer idMatricula) {
        this.idMatricula = idMatricula;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Double getValorAnual() {
        return valorAnual;
    }

    public void setValorAnual(Double valorAnual) {
        this.valorAnual = valorAnual;
    }

    public Integer getValorMensual() {
        return valorMensual;
    }

    public void setValorMensual(Integer valorMensual) {
        this.valorMensual = valorMensual;
    }

    public Date getFechaMatricula() {
        return fechaMatricula;
    }

    public void setFechaMatricula(Date fechaMatricula) {
        this.fechaMatricula = fechaMatricula;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

}
