
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Subarea
 *  12/07/2011 16:52:37
 * 
 */
public class Subarea {

    private Integer idSubarea;
    private String subarea;
    private Integer idSyIdIdSy;
    private Area area;
    private Set<com.aprendoz_desarrollo.data.Eje> ejes = new HashSet<com.aprendoz_desarrollo.data.Eje>();

    public Subarea() {
    }

    public Subarea(Integer idSubarea, String subarea, Integer idSyIdIdSy) {
        this.idSubarea = idSubarea;
        this.subarea = subarea;
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Subarea(Integer idSubarea, String subarea, Integer idSyIdIdSy, Area area, Set<com.aprendoz_desarrollo.data.Eje> ejes) {
        this.idSubarea = idSubarea;
        this.subarea = subarea;
        this.idSyIdIdSy = idSyIdIdSy;
        this.area = area;
        this.ejes = ejes;
    }

    public Integer getIdSubarea() {
        return idSubarea;
    }

    public void setIdSubarea(Integer idSubarea) {
        this.idSubarea = idSubarea;
    }

    public String getSubarea() {
        return subarea;
    }

    public void setSubarea(String subarea) {
        this.subarea = subarea;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public Set<com.aprendoz_desarrollo.data.Eje> getEjes() {
        return ejes;
    }

    public void setEjes(Set<com.aprendoz_desarrollo.data.Eje> ejes) {
        this.ejes = ejes;
    }

}
