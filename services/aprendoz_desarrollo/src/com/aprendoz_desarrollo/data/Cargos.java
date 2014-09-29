
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.Cargos
 *  06/12/2014 18:46:45
 * 
 */
public class Cargos {

    private Long idCargo;
    private Long idPersona;
    private Long idCosto;
    private Double valor;
    private Date fechaCargo;
    private Date fechaVencimiento;
    private String medioCargo;
    private Float descuento;
    private Double saldo;
    private Long idPago;

    public Cargos() {
    }

    public Cargos(Long idCargo, Long idPersona, Long idCosto, Double valor, Date fechaCargo, Date fechaVencimiento, String medioCargo, Float descuento, Double saldo, Long idPago) {
        this.idCargo = idCargo;
        this.idPersona = idPersona;
        this.idCosto = idCosto;
        this.valor = valor;
        this.fechaCargo = fechaCargo;
        this.fechaVencimiento = fechaVencimiento;
        this.medioCargo = medioCargo;
        this.descuento = descuento;
        this.saldo = saldo;
        this.idPago = idPago;
    }

    public Long getIdCargo() {
        return idCargo;
    }

    public void setIdCargo(Long idCargo) {
        this.idCargo = idCargo;
    }

    public Long getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Long idPersona) {
        this.idPersona = idPersona;
    }

    public Long getIdCosto() {
        return idCosto;
    }

    public void setIdCosto(Long idCosto) {
        this.idCosto = idCosto;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Date getFechaCargo() {
        return fechaCargo;
    }

    public void setFechaCargo(Date fechaCargo) {
        this.fechaCargo = fechaCargo;
    }

    public Date getFechaVencimiento() {
        return fechaVencimiento;
    }

    public void setFechaVencimiento(Date fechaVencimiento) {
        this.fechaVencimiento = fechaVencimiento;
    }

    public String getMedioCargo() {
        return medioCargo;
    }

    public void setMedioCargo(String medioCargo) {
        this.medioCargo = medioCargo;
    }

    public Float getDescuento() {
        return descuento;
    }

    public void setDescuento(Float descuento) {
        this.descuento = descuento;
    }

    public Double getSaldo() {
        return saldo;
    }

    public void setSaldo(Double saldo) {
        this.saldo = saldo;
    }

    public Long getIdPago() {
        return idPago;
    }

    public void setIdPago(Long idPago) {
        this.idPago = idPago;
    }

}
