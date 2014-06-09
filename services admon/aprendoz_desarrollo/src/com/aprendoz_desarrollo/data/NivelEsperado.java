
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.NivelEsperado
 *  12/07/2011 16:52:37
 * 
 */
public class NivelEsperado {

    private Integer idNivelEsperado;
    private String nivelEsperado;
    private Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_desarrollo.data.Aprendizaje>();

    public NivelEsperado() {
    }

    public NivelEsperado(Integer idNivelEsperado, String nivelEsperado) {
        this.idNivelEsperado = idNivelEsperado;
        this.nivelEsperado = nivelEsperado;
    }

    public NivelEsperado(Integer idNivelEsperado, String nivelEsperado, Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes) {
        this.idNivelEsperado = idNivelEsperado;
        this.nivelEsperado = nivelEsperado;
        this.aprendizajes = aprendizajes;
    }

    public Integer getIdNivelEsperado() {
        return idNivelEsperado;
    }

    public void setIdNivelEsperado(Integer idNivelEsperado) {
        this.idNivelEsperado = idNivelEsperado;
    }

    public String getNivelEsperado() {
        return nivelEsperado;
    }

    public void setNivelEsperado(String nivelEsperado) {
        this.nivelEsperado = nivelEsperado;
    }

    public Set<com.aprendoz_desarrollo.data.Aprendizaje> getAprendizajes() {
        return aprendizajes;
    }

    public void setAprendizajes(Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes) {
        this.aprendizajes = aprendizajes;
    }

}
