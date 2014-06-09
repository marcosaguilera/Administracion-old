
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.GrupoFamiliar
 *  08/16/2013 09:24:24
 * 
 */
public class GrupoFamiliar {

    private Integer idGrupoFamiliar;
    private String grupoFamiliar;
    private String grupoLdap;
    private Set<com.aprendoz_desarrollo.data.Rutas> rutases = new HashSet<com.aprendoz_desarrollo.data.Rutas>();
    private Set<com.aprendoz_desarrollo.data.Persona> personas = new HashSet<com.aprendoz_desarrollo.data.Persona>();
    private Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars = new HashSet<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar>();
    private Set<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliar> actualizacionGrupoFamiliars = new HashSet<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliar>();

    public GrupoFamiliar() {
    }

    public GrupoFamiliar(Integer idGrupoFamiliar, String grupoFamiliar, String grupoLdap) {
        this.idGrupoFamiliar = idGrupoFamiliar;
        this.grupoFamiliar = grupoFamiliar;
        this.grupoLdap = grupoLdap;
    }

    public GrupoFamiliar(Integer idGrupoFamiliar, String grupoFamiliar, String grupoLdap, Set<com.aprendoz_desarrollo.data.Rutas> rutases, Set<com.aprendoz_desarrollo.data.Persona> personas, Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars, Set<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliar> actualizacionGrupoFamiliars) {
        this.idGrupoFamiliar = idGrupoFamiliar;
        this.grupoFamiliar = grupoFamiliar;
        this.grupoLdap = grupoLdap;
        this.rutases = rutases;
        this.personas = personas;
        this.inscPersonaGrupoFamiliars = inscPersonaGrupoFamiliars;
        this.actualizacionGrupoFamiliars = actualizacionGrupoFamiliars;
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

    public Set<com.aprendoz_desarrollo.data.Rutas> getRutases() {
        return rutases;
    }

    public void setRutases(Set<com.aprendoz_desarrollo.data.Rutas> rutases) {
        this.rutases = rutases;
    }

    public Set<com.aprendoz_desarrollo.data.Persona> getPersonas() {
        return personas;
    }

    public void setPersonas(Set<com.aprendoz_desarrollo.data.Persona> personas) {
        this.personas = personas;
    }

    public Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> getInscPersonaGrupoFamiliars() {
        return inscPersonaGrupoFamiliars;
    }

    public void setInscPersonaGrupoFamiliars(Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars) {
        this.inscPersonaGrupoFamiliars = inscPersonaGrupoFamiliars;
    }

    public Set<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliar> getActualizacionGrupoFamiliars() {
        return actualizacionGrupoFamiliars;
    }

    public void setActualizacionGrupoFamiliars(Set<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliar> actualizacionGrupoFamiliars) {
        this.actualizacionGrupoFamiliars = actualizacionGrupoFamiliars;
    }

}
