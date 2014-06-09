
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Promocion
 *  12/07/2011 16:52:37
 * 
 */
public class Promocion {

    private Integer idPromocion;
    private Integer personaIdPersona;
    private Integer syIdSy;
    private Boolean checkacademico;
    private Boolean checkcomite;
    private String commentcomite;
    private Boolean checkfinanc;
    private String commentfinanc;
    private Boolean promovido;
    private String commentaprobado;
    private String commentpromovido;
    private Float calificacion;
    private String calificacionChar;

    public Promocion() {
    }

    public Promocion(Integer idPromocion, Integer personaIdPersona, Integer syIdSy, Boolean checkacademico, Boolean checkcomite, String commentcomite, Boolean checkfinanc, String commentfinanc, Boolean promovido, String commentaprobado, String commentpromovido, Float calificacion, String calificacionChar) {
        this.idPromocion = idPromocion;
        this.personaIdPersona = personaIdPersona;
        this.syIdSy = syIdSy;
        this.checkacademico = checkacademico;
        this.checkcomite = checkcomite;
        this.commentcomite = commentcomite;
        this.checkfinanc = checkfinanc;
        this.commentfinanc = commentfinanc;
        this.promovido = promovido;
        this.commentaprobado = commentaprobado;
        this.commentpromovido = commentpromovido;
        this.calificacion = calificacion;
        this.calificacionChar = calificacionChar;
    }

    public Integer getIdPromocion() {
        return idPromocion;
    }

    public void setIdPromocion(Integer idPromocion) {
        this.idPromocion = idPromocion;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

    public Boolean getCheckacademico() {
        return checkacademico;
    }

    public void setCheckacademico(Boolean checkacademico) {
        this.checkacademico = checkacademico;
    }

    public Boolean getCheckcomite() {
        return checkcomite;
    }

    public void setCheckcomite(Boolean checkcomite) {
        this.checkcomite = checkcomite;
    }

    public String getCommentcomite() {
        return commentcomite;
    }

    public void setCommentcomite(String commentcomite) {
        this.commentcomite = commentcomite;
    }

    public Boolean getCheckfinanc() {
        return checkfinanc;
    }

    public void setCheckfinanc(Boolean checkfinanc) {
        this.checkfinanc = checkfinanc;
    }

    public String getCommentfinanc() {
        return commentfinanc;
    }

    public void setCommentfinanc(String commentfinanc) {
        this.commentfinanc = commentfinanc;
    }

    public Boolean getPromovido() {
        return promovido;
    }

    public void setPromovido(Boolean promovido) {
        this.promovido = promovido;
    }

    public String getCommentaprobado() {
        return commentaprobado;
    }

    public void setCommentaprobado(String commentaprobado) {
        this.commentaprobado = commentaprobado;
    }

    public String getCommentpromovido() {
        return commentpromovido;
    }

    public void setCommentpromovido(String commentpromovido) {
        this.commentpromovido = commentpromovido;
    }

    public Float getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(Float calificacion) {
        this.calificacion = calificacion;
    }

    public String getCalificacionChar() {
        return calificacionChar;
    }

    public void setCalificacionChar(String calificacionChar) {
        this.calificacionChar = calificacionChar;
    }

}
