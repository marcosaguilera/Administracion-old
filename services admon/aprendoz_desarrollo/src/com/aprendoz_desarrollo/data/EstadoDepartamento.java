
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.EstadoDepartamento
 *  12/07/2011 16:52:37
 * 
 */
public class EstadoDepartamento {

    private Integer idEstados;
    private String estado;
    private Pais pais;

    public EstadoDepartamento() {
    }

    public EstadoDepartamento(Integer idEstados, String estado) {
        this.idEstados = idEstados;
        this.estado = estado;
    }

    public EstadoDepartamento(Integer idEstados, String estado, Pais pais) {
        this.idEstados = idEstados;
        this.estado = estado;
        this.pais = pais;
    }

    public Integer getIdEstados() {
        return idEstados;
    }

    public void setIdEstados(Integer idEstados) {
        this.idEstados = idEstados;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Pais getPais() {
        return pais;
    }

    public void setPais(Pais pais) {
        this.pais = pais;
    }

}
