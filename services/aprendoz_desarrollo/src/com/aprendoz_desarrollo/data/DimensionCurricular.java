
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.DimensionCurricular
 *  08/16/2013 09:24:25
 * 
 */
public class DimensionCurricular {

    private Integer idDimension;
    private String dimensionCurricular;
    private Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_desarrollo.data.Aprendizaje>();

    public DimensionCurricular() {
    }

    public DimensionCurricular(Integer idDimension, String dimensionCurricular) {
        this.idDimension = idDimension;
        this.dimensionCurricular = dimensionCurricular;
    }

    public DimensionCurricular(Integer idDimension, String dimensionCurricular, Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes) {
        this.idDimension = idDimension;
        this.dimensionCurricular = dimensionCurricular;
        this.aprendizajes = aprendizajes;
    }

    public Integer getIdDimension() {
        return idDimension;
    }

    public void setIdDimension(Integer idDimension) {
        this.idDimension = idDimension;
    }

    public String getDimensionCurricular() {
        return dimensionCurricular;
    }

    public void setDimensionCurricular(String dimensionCurricular) {
        this.dimensionCurricular = dimensionCurricular;
    }

    public Set<com.aprendoz_desarrollo.data.Aprendizaje> getAprendizajes() {
        return aprendizajes;
    }

    public void setAprendizajes(Set<com.aprendoz_desarrollo.data.Aprendizaje> aprendizajes) {
        this.aprendizajes = aprendizajes;
    }

}
