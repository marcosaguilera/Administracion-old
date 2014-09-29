
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Area
 *  06/12/2014 18:46:46
 * 
 */
public class Area {

    private Integer idArea;
    private String area;
    private String areaName;
    private Integer idSyIdIdSy;
    private Set<com.aprendoz_desarrollo.data.Subarea> subareas = new HashSet<com.aprendoz_desarrollo.data.Subarea>();

    public Area() {
    }

    public Area(Integer idArea, String area, String areaName, Integer idSyIdIdSy) {
        this.idArea = idArea;
        this.area = area;
        this.areaName = areaName;
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Area(Integer idArea, String area, String areaName, Integer idSyIdIdSy, Set<com.aprendoz_desarrollo.data.Subarea> subareas) {
        this.idArea = idArea;
        this.area = area;
        this.areaName = areaName;
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
