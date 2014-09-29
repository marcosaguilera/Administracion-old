
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.BusBus
 *  06/12/2014 18:46:46
 * 
 */
public class BusBus {

    private Integer id;
    private String plate;
    private Set<com.aprendoz_desarrollo.data.BusRoute> busRoutes = new HashSet<com.aprendoz_desarrollo.data.BusRoute>();

    public BusBus() {
    }

    public BusBus(Integer id, String plate) {
        this.id = id;
        this.plate = plate;
    }

    public BusBus(Integer id, String plate, Set<com.aprendoz_desarrollo.data.BusRoute> busRoutes) {
        this.id = id;
        this.plate = plate;
        this.busRoutes = busRoutes;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public Set<com.aprendoz_desarrollo.data.BusRoute> getBusRoutes() {
        return busRoutes;
    }

    public void setBusRoutes(Set<com.aprendoz_desarrollo.data.BusRoute> busRoutes) {
        this.busRoutes = busRoutes;
    }

}
