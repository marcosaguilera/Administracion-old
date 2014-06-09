
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "getNombreCompleto" on 03/12/2014 08:49:00
 * 
 */
public class GetNombreCompletoRtnType {

    private String nombre1;
    private String nombre2;
    private String apellido1;
    private String apellido2;
    private Integer idp;
    private String clave;
    private String user;

    public GetNombreCompletoRtnType() {
    }

    public GetNombreCompletoRtnType(String nombre1, String nombre2, String apellido1, String apellido2, Integer idp, String clave, String user) {
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.idp = idp;
        this.clave = clave;
        this.user = user;
    }

    public String getNombre1() {
        return nombre1;
    }

    public void setNombre1(String nombre1) {
        this.nombre1 = nombre1;
    }

    public String getNombre2() {
        return nombre2;
    }

    public void setNombre2(String nombre2) {
        this.nombre2 = nombre2;
    }

    public String getApellido1() {
        return apellido1;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public Integer getIdp() {
        return idp;
    }

    public void setIdp(Integer idp) {
        this.idp = idp;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

}
