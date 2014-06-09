
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.FichaMedica
 *  08/16/2013 09:24:24
 * 
 */
public class FichaMedica {

    private Integer idfichaMedica;
    private Persona persona;
    private Date fechaCreacion;
    private String medicoTratante;
    private String alergias;
    private String enfermedadesRecientes;
    private String antecedentesQuirurgicos;
    private String medicamentosActualidad;
    private String medicamentosAlerta;
    private String recomendacionesEspeciales;

    public FichaMedica() {
    }

    public FichaMedica(Integer idfichaMedica, Date fechaCreacion, String medicoTratante, String alergias, String enfermedadesRecientes, String antecedentesQuirurgicos, String medicamentosActualidad, String medicamentosAlerta, String recomendacionesEspeciales) {
        this.idfichaMedica = idfichaMedica;
        this.fechaCreacion = fechaCreacion;
        this.medicoTratante = medicoTratante;
        this.alergias = alergias;
        this.enfermedadesRecientes = enfermedadesRecientes;
        this.antecedentesQuirurgicos = antecedentesQuirurgicos;
        this.medicamentosActualidad = medicamentosActualidad;
        this.medicamentosAlerta = medicamentosAlerta;
        this.recomendacionesEspeciales = recomendacionesEspeciales;
    }

    public FichaMedica(Integer idfichaMedica, Persona persona, Date fechaCreacion, String medicoTratante, String alergias, String enfermedadesRecientes, String antecedentesQuirurgicos, String medicamentosActualidad, String medicamentosAlerta, String recomendacionesEspeciales) {
        this.idfichaMedica = idfichaMedica;
        this.persona = persona;
        this.fechaCreacion = fechaCreacion;
        this.medicoTratante = medicoTratante;
        this.alergias = alergias;
        this.enfermedadesRecientes = enfermedadesRecientes;
        this.antecedentesQuirurgicos = antecedentesQuirurgicos;
        this.medicamentosActualidad = medicamentosActualidad;
        this.medicamentosAlerta = medicamentosAlerta;
        this.recomendacionesEspeciales = recomendacionesEspeciales;
    }

    public Integer getIdfichaMedica() {
        return idfichaMedica;
    }

    public void setIdfichaMedica(Integer idfichaMedica) {
        this.idfichaMedica = idfichaMedica;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public String getMedicoTratante() {
        return medicoTratante;
    }

    public void setMedicoTratante(String medicoTratante) {
        this.medicoTratante = medicoTratante;
    }

    public String getAlergias() {
        return alergias;
    }

    public void setAlergias(String alergias) {
        this.alergias = alergias;
    }

    public String getEnfermedadesRecientes() {
        return enfermedadesRecientes;
    }

    public void setEnfermedadesRecientes(String enfermedadesRecientes) {
        this.enfermedadesRecientes = enfermedadesRecientes;
    }

    public String getAntecedentesQuirurgicos() {
        return antecedentesQuirurgicos;
    }

    public void setAntecedentesQuirurgicos(String antecedentesQuirurgicos) {
        this.antecedentesQuirurgicos = antecedentesQuirurgicos;
    }

    public String getMedicamentosActualidad() {
        return medicamentosActualidad;
    }

    public void setMedicamentosActualidad(String medicamentosActualidad) {
        this.medicamentosActualidad = medicamentosActualidad;
    }

    public String getMedicamentosAlerta() {
        return medicamentosAlerta;
    }

    public void setMedicamentosAlerta(String medicamentosAlerta) {
        this.medicamentosAlerta = medicamentosAlerta;
    }

    public String getRecomendacionesEspeciales() {
        return recomendacionesEspeciales;
    }

    public void setRecomendacionesEspeciales(String recomendacionesEspeciales) {
        this.recomendacionesEspeciales = recomendacionesEspeciales;
    }

}
