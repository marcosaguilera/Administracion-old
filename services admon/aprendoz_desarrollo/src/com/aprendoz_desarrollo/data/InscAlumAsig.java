
package com.aprendoz_desarrollo.data;

import java.math.BigDecimal;


/**
 *  aprendoz_desarrollo.InscAlumAsig
 *  12/07/2011 16:52:37
 * 
 */
public class InscAlumAsig {

    private Integer idInscAlumAsig;
    private BigDecimal calificacion;
    private BigDecimal porcentaje;
    private Integer esperados;
    private Integer logrados;
    private String califChar;
    private Asignatura asignatura;
    private Persona persona;
    private Periodo periodo;

    public InscAlumAsig() {
    }

    public InscAlumAsig(Integer idInscAlumAsig, BigDecimal calificacion, BigDecimal porcentaje, Integer esperados, Integer logrados, String califChar) {
        this.idInscAlumAsig = idInscAlumAsig;
        this.calificacion = calificacion;
        this.porcentaje = porcentaje;
        this.esperados = esperados;
        this.logrados = logrados;
        this.califChar = califChar;
    }

    public InscAlumAsig(Integer idInscAlumAsig, BigDecimal calificacion, BigDecimal porcentaje, Integer esperados, Integer logrados, String califChar, Asignatura asignatura, Persona persona, Periodo periodo) {
        this.idInscAlumAsig = idInscAlumAsig;
        this.calificacion = calificacion;
        this.porcentaje = porcentaje;
        this.esperados = esperados;
        this.logrados = logrados;
        this.califChar = califChar;
        this.asignatura = asignatura;
        this.persona = persona;
        this.periodo = periodo;
    }

    public Integer getIdInscAlumAsig() {
        return idInscAlumAsig;
    }

    public void setIdInscAlumAsig(Integer idInscAlumAsig) {
        this.idInscAlumAsig = idInscAlumAsig;
    }

    public BigDecimal getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(BigDecimal calificacion) {
        this.calificacion = calificacion;
    }

    public BigDecimal getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(BigDecimal porcentaje) {
        this.porcentaje = porcentaje;
    }

    public Integer getEsperados() {
        return esperados;
    }

    public void setEsperados(Integer esperados) {
        this.esperados = esperados;
    }

    public Integer getLogrados() {
        return logrados;
    }

    public void setLogrados(Integer logrados) {
        this.logrados = logrados;
    }

    public String getCalifChar() {
        return califChar;
    }

    public void setCalifChar(String califChar) {
        this.califChar = califChar;
    }

    public Asignatura getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Asignatura asignatura) {
        this.asignatura = asignatura;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Periodo getPeriodo() {
        return periodo;
    }

    public void setPeriodo(Periodo periodo) {
        this.periodo = periodo;
    }

}