
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.GrupoFamiliar
 *  12/07/2011 16:52:37
 * 
 */
public class GrupoFamiliar {

    private Integer idGrupoFamiliar;
    private String grupoFamiliar;
    private String grupoLdap;
    private Set<com.aprendoz_desarrollo.data.Persona> personas = new HashSet<com.aprendoz_desarrollo.data.Persona>();

    public GrupoFamiliar() {
    }

    public GrupoFamiliar(Integer idGrupoFamiliar, String grupoFamiliar, String grupoLdap) {
        this.idGrupoFamiliar = idGrupoFamiliar;
        this.grupoFamiliar = grupoFamiliar;
        this.grupoLdap = grupoLdap;
    }

    public GrupoFamiliar(Integer idGrupoFamiliar, String grupoFamiliar, String grupoLdap, Set<com.aprendoz_desarrollo.data.Persona> personas) {
        this.idGrupoFamiliar = idGrupoFamiliar;
        this.grupoFamiliar = grupoFamiliar;
        this.grupoLdap = grupoLdap;
        this.personas = personas;
    }

    public Integer getIdGrupoFamiliar() {
        return idGrupoFamiliar;
    }

    public void setIdGrupoFamiliar(Integer idGrupoFamiliar) {
        this.idGrupoFamiliar = idGrupoFamiliar;
    }

    public String getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(String grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

    public String getGrupoLdap() {
        return grupoLdap;
    }

    public void setGrupoLdap(String grupoLdap) {
        this.grupoLdap = grupoLdap;
    }

    public Set<com.aprendoz_desarrollo.data.Persona> getPersonas() {
        return personas;
    }

    public void setPersonas(Set<com.aprendoz_desarrollo.data.Persona> personas) {
        this.personas = personas;
    }

}
