
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "getProcesoMatricula" on 03/12/2014 08:49:00
 * 
 */
public class GetProcesoMatriculaRtnType {

    private Integer code;
    private String n1;
    private String n2;
    private String a1;
    private String a2;
    private Integer idcurso;
    private Integer maximo_sy;

    public GetProcesoMatriculaRtnType() {
    }

    public GetProcesoMatriculaRtnType(Integer code, String n1, String n2, String a1, String a2, Integer idcurso, Integer maximo_sy) {
        this.code = code;
        this.n1 = n1;
        this.n2 = n2;
        this.a1 = a1;
        this.a2 = a2;
        this.idcurso = idcurso;
        this.maximo_sy = maximo_sy;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getN1() {
        return n1;
    }

    public void setN1(String n1) {
        this.n1 = n1;
    }

    public String getN2() {
        return n2;
    }

    public void setN2(String n2) {
        this.n2 = n2;
    }

    public String getA1() {
        return a1;
    }

    public void setA1(String a1) {
        this.a1 = a1;
    }

    public String getA2() {
        return a2;
    }

    public void setA2(String a2) {
        this.a2 = a2;
    }

    public Integer getIdcurso() {
        return idcurso;
    }

    public void setIdcurso(Integer idcurso) {
        this.idcurso = idcurso;
    }

    public Integer getMaximo_sy() {
        return maximo_sy;
    }

    public void setMaximo_sy(Integer maximo_sy) {
        this.maximo_sy = maximo_sy;
    }

}
