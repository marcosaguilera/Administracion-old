
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.GradoSiguiente
 *  06/12/2014 18:46:46
 * 
 */
public class GradoSiguiente {

    private Integer idGradoSiguiente;
    private Integer gradoIdGrado1;
    private Integer gradoIdGrado2;

    public GradoSiguiente() {
    }

    public GradoSiguiente(Integer idGradoSiguiente, Integer gradoIdGrado1, Integer gradoIdGrado2) {
        this.idGradoSiguiente = idGradoSiguiente;
        this.gradoIdGrado1 = gradoIdGrado1;
        this.gradoIdGrado2 = gradoIdGrado2;
    }

    public Integer getIdGradoSiguiente() {
        return idGradoSiguiente;
    }

    public void setIdGradoSiguiente(Integer idGradoSiguiente) {
        this.idGradoSiguiente = idGradoSiguiente;
    }

    public Integer getGradoIdGrado1() {
        return gradoIdGrado1;
    }

    public void setGradoIdGrado1(Integer gradoIdGrado1) {
        this.gradoIdGrado1 = gradoIdGrado1;
    }

    public Integer getGradoIdGrado2() {
        return gradoIdGrado2;
    }

    public void setGradoIdGrado2(Integer gradoIdGrado2) {
        this.gradoIdGrado2 = gradoIdGrado2;
    }

}
