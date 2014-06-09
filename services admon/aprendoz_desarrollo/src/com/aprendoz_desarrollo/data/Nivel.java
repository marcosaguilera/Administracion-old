
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Nivel
 *  12/07/2011 16:52:37
 * 
 */
public class Nivel {

    private Integer idNivel;
    private String nivel;
    private String levelName;
    private Set<com.aprendoz_desarrollo.data.Grado> grados = new HashSet<com.aprendoz_desarrollo.data.Grado>();

    public Nivel() {
    }

    public Nivel(Integer idNivel, String nivel, String levelName) {
        this.idNivel = idNivel;
        this.nivel = nivel;
        this.levelName = levelName;
    }

    public Nivel(Integer idNivel, String nivel, String levelName, Set<com.aprendoz_desarrollo.data.Grado> grados) {
        this.idNivel = idNivel;
        this.nivel = nivel;
        this.levelName = levelName;
        this.grados = grados;
    }

    public Integer getIdNivel() {
        return idNivel;
    }

    public void setIdNivel(Integer idNivel) {
        this.idNivel = idNivel;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public String getLevelName() {
        return levelName;
    }

    public void setLevelName(String levelName) {
        this.levelName = levelName;
    }

    public Set<com.aprendoz_desarrollo.data.Grado> getGrados() {
        return grados;
    }

    public void setGrados(Set<com.aprendoz_desarrollo.data.Grado> grados) {
        this.grados = grados;
    }

}
