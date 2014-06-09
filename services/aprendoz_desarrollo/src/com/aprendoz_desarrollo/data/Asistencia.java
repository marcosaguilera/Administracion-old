
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Asistencia
 *  08/16/2013 09:24:24
 * 
 */
public class Asistencia {

    private Integer idAsistencia;
    private Sesion sesion;
    private TipoAsistencia tipoAsistencia;
    private Persona persona;
    private String tipoEventualidadIdTipoEventualidad;
    private String tipoEventualidadIdTipoEventualidad1;
    private String tipoEventualidadIdTipoEventualidad2;
    private String comentario;

    public Asistencia() {
    }

    public Asistencia(Integer idAsistencia, String tipoEventualidadIdTipoEventualidad, String tipoEventualidadIdTipoEventualidad1, String tipoEventualidadIdTipoEventualidad2, String comentario) {
        this.idAsistencia = idAsistencia;
        this.tipoEventualidadIdTipoEventualidad = tipoEventualidadIdTipoEventualidad;
        this.tipoEventualidadIdTipoEventualidad1 = tipoEventualidadIdTipoEventualidad1;
        this.tipoEventualidadIdTipoEventualidad2 = tipoEventualidadIdTipoEventualidad2;
        this.comentario = comentario;
    }

    public Asistencia(Integer idAsistencia, Sesion sesion, TipoAsistencia tipoAsistencia, Persona persona, String tipoEventualidadIdTipoEventualidad, String tipoEventualidadIdTipoEventualidad1, String tipoEventualidadIdTipoEventualidad2, String comentario) {
        this.idAsistencia = idAsistencia;
        this.sesion = sesion;
        this.tipoAsistencia = tipoAsistencia;
        this.persona = persona;
        this.tipoEventualidadIdTipoEventualidad = tipoEventualidadIdTipoEventualidad;
        this.tipoEventualidadIdTipoEventualidad1 = tipoEventualidadIdTipoEventualidad1;
        this.tipoEventualidadIdTipoEventualidad2 = tipoEventualidadIdTipoEventualidad2;
        this.comentario = comentario;
    }

    public Integer getIdAsistencia() {
        return idAsistencia;
    }

    public void setIdAsistencia(Integer idAsistencia) {
        this.idAsistencia = idAsistencia;
    }

    public Sesion getSesion() {
        return sesion;
    }

    public void setSesion(Sesion sesion) {
        this.sesion = sesion;
    }

    public TipoAsistencia getTipoAsistencia() {
        return tipoAsistencia;
    }

    public void setTipoAsistencia(TipoAsistencia tipoAsistencia) {
        this.tipoAsistencia = tipoAsistencia;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public String getTipoEventualidadIdTipoEventualidad() {
        return tipoEventualidadIdTipoEventualidad;
    }

    public void setTipoEventualidadIdTipoEventualidad(String tipoEventualidadIdTipoEventualidad) {
        this.tipoEventualidadIdTipoEventualidad = tipoEventualidadIdTipoEventualidad;
    }

    public String getTipoEventualidadIdTipoEventualidad1() {
        return tipoEventualidadIdTipoEventualidad1;
    }

    public void setTipoEventualidadIdTipoEventualidad1(String tipoEventualidadIdTipoEventualidad1) {
        this.tipoEventualidadIdTipoEventualidad1 = tipoEventualidadIdTipoEventualidad1;
    }

    public String getTipoEventualidadIdTipoEventualidad2() {
        return tipoEventualidadIdTipoEventualidad2;
    }

    public void setTipoEventualidadIdTipoEventualidad2(String tipoEventualidadIdTipoEventualidad2) {
        this.tipoEventualidadIdTipoEventualidad2 = tipoEventualidadIdTipoEventualidad2;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

}
