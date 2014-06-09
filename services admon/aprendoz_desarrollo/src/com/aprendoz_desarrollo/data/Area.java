
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Area
 *  12/07/2011 16:52:37
 * 
 */
public class Area {

    private Integer idArea;
    private String area;
    private String areaName;
    private Integer intensidadHoraria;
    private Integer idSyIdIdSy;
    private Set<com.aprendoz_desarrollo.data.Subarea> subareas = new HashSet<com.aprendoz_desarrollo.data.Subarea>();

    public Area() {
    }

    public Area(Integer idArea, String area, String areaName, Integer intensidadHoraria, Integer idSyIdIdSy) {
        this.idArea = idArea;
        this.area = area;
        this.areaName = areaName;
        this.intensidadHoraria = intensidadHoraria;
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Area(Integer idArea, String area, String areaName, Integer intensidadHoraria, Integer idSyIdIdSy, Set<com.aprendoz_desarrollo.data.Subarea> subareas) {
        this.idArea = idArea;
        this.area = area;
        this.areaName = areaName;
        this.intensidadHoraria = intensidadHoraria;
        this.idSyIdIdSy = idSyIdIdSy;
        this.subareas = subareas;
    }

    public Integer getIdArea() {
        return idArea;
    }

    public void setIdArea(Integer idArea) {
        this.idArea = idArea;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getAreaName() {
        return areaName;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }

    public Integer getIntensidadHoraria() {
        return intensidadHoraria;
    }

    public void setIntensidadHoraria(Integer intensidadHoraria) {
        this.intensidadHoraria = intensidadHoraria;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Set<com.aprendoz_desarrollo.data.Subarea> getSubareas() {
        return subareas;
    }

    public void setSubareas(Set<com.aprendoz_desarrollo.data.Subarea> subareas) {
        this.subareas = subareas;
    }

}
