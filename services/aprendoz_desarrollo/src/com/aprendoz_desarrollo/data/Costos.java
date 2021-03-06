
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Costos
 *  06/12/2014 18:46:45
 * 
 */
public class Costos {

    private Integer idCosto;
    private Grado grado;
    private Sy sy;
    private String codigo;
    private String nombreProducto;
    private String descripcion;
    private Double valor;
    private Boolean nuevo;
    private Boolean obligatorio;
    private Boolean positivo;
    private Boolean anual;
    private Integer tipoCosto;
    private Set<com.aprendoz_desarrollo.data.InscAlumCosto> inscAlumCostos = new HashSet<com.aprendoz_desarrollo.data.InscAlumCosto>();
    private Set<com.aprendoz_desarrollo.data.Educom> educoms = new HashSet<com.aprendoz_desarrollo.data.Educom>();
    private Set<com.aprendoz_desarrollo.data.InscAlumCostoCopy> inscAlumCostoCopies = new HashSet<com.aprendoz_desarrollo.data.InscAlumCostoCopy>();

    public Costos() {
    }

    public Costos(Integer idCosto, String codigo, String nombreProducto, String descripcion, Double valor, Boolean nuevo, Boolean obligatorio, Boolean positivo, Boolean anual, Integer tipoCosto) {
        this.idCosto = idCosto;
        this.codigo = codigo;
        this.nombreProducto = nombreProducto;
        this.descripcion = descripcion;
        this.valor = valor;
        this.nuevo = nuevo;
        this.obligatorio = obligatorio;
        this.positivo = positivo;
        this.anual = anual;
        this.tipoCosto = tipoCosto;
    }

    public Costos(Integer idCosto, Grado grado, Sy sy, String codigo, String nombreProducto, String descripcion, Double valor, Boolean nuevo, Boolean obligatorio, Boolean positivo, Boolean anual, Integer tipoCosto, Set<com.aprendoz_desarrollo.data.InscAlumCosto> inscAlumCostos, Set<com.aprendoz_desarrollo.data.Educom> educoms, Set<com.aprendoz_desarrollo.data.InscAlumCostoCopy> inscAlumCostoCopies) {
        this.idCosto = idCosto;
        this.grado = grado;
        this.sy = sy;
        this.codigo = codigo;
        this.nombreProducto = nombreProducto;
        this.descripcion = descripcion;
        this.valor = valor;
        this.nuevo = nuevo;
        this.obligatorio = obligatorio;
        this.positivo = positivo;
        this.anual = anual;
        this.tipoCosto = tipoCosto;
        this.inscAlumCostos = inscAlumCostos;
        this.educoms = educoms;
        this.inscAlumCostoCopies = inscAlumCostoCopies;
    }

    public Integer getIdCosto() {
        return idCosto;
    }

    public void setIdCosto(Integer idCosto) {
        this.idCosto = idCosto;
    }

    public Grado getGrado() {
        return grado;
    }

    public void setGrado(Grado grado) {
        this.grado = grado;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Boolean getNuevo() {
        return nuevo;
    }

    public void setNuevo(Boolean nuevo) {
        this.nuevo = nuevo;
    }

    public Boolean getObligatorio() {
        return obligatorio;
    }

    public void setObligatorio(Boolean obligatorio) {
        this.obligatorio = obligatorio;
    }

    public Boolean getPositivo() {
        return positivo;
    }

    public void setPositivo(Boolean positivo) {
        this.positivo = positivo;
    }

    public Boolean getAnual() {
        return anual;
    }

    public void setAnual(Boolean anual) {
        this.anual = anual;
    }

    public Integer getTipoCosto() {
        return tipoCosto;
    }

    public void setTipoCosto(Integer tipoCosto) {
        this.tipoCosto = tipoCosto;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumCosto> getInscAlumCostos() {
        return inscAlumCostos;
    }

    public void setInscAlumCostos(Set<com.aprendoz_desarrollo.data.InscAlumCosto> inscAlumCostos) {
        this.inscAlumCostos = inscAlumCostos;
    }

    public Set<com.aprendoz_desarrollo.data.Educom> getEducoms() {
        return educoms;
    }

    public void setEducoms(Set<com.aprendoz_desarrollo.data.Educom> educoms) {
        this.educoms = educoms;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumCostoCopy> getInscAlumCostoCopies() {
        return inscAlumCostoCopies;
    }

    public void setInscAlumCostoCopies(Set<com.aprendoz_desarrollo.data.InscAlumCostoCopy> inscAlumCostoCopies) {
        this.inscAlumCostoCopies = inscAlumCostoCopies;
    }

}
