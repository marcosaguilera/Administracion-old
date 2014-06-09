
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.HorarioId
 *  12/28/2011 12:07:00
 * 
 */
public class HorarioId
    implements Serializable
{

    private Integer numeroSesion;
    private Integer dia;
    private Integer asignaturaIdAsignatura;
    private Integer cursoIdCurso;
    private Integer tipoSemanaIdTipoSemana;
    private Integer syIdSy;

    public HorarioId() {
    }

    public HorarioId(Integer numeroSesion, Integer dia, Integer asignaturaIdAsignatura, Integer cursoIdCurso, Integer tipoSemanaIdTipoSemana, Integer syIdSy) {
        this.numeroSesion = numeroSesion;
        this.dia = dia;
        this.asignaturaIdAsignatura = asignaturaIdAsignatura;
        this.cursoIdCurso = cursoIdCurso;
        this.tipoSemanaIdTipoSemana = tipoSemanaIdTipoSemana;
        this.syIdSy = syIdSy;
    }

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof HorarioId)) {
            return false;
        }
        HorarioId other = ((HorarioId) o);
        if (this.numeroSesion == null) {
            if (other.numeroSesion!= null) {
                return false;
            }
        } else {
            if (!this.numeroSesion.equals(other.numeroSesion)) {
                return false;
            }
        }
        if (this.dia == null) {
            if (other.dia!= null) {
                return false;
            }
        } else {
            if (!this.dia.equals(other.dia)) {
                return false;
            }
        }
        if (this.asignaturaIdAsignatura == null) {
            if (other.asignaturaIdAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.asignaturaIdAsignatura.equals(other.asignaturaIdAsignatura)) {
                return false;
            }
        }
        if (this.cursoIdCurso == null) {
            if (other.cursoIdCurso!= null) {
                return false;
            }
        } else {
            if (!this.cursoIdCurso.equals(other.cursoIdCurso)) {
                return false;
            }
        }
        if (this.tipoSemanaIdTipoSemana == null) {
            if (other.tipoSemanaIdTipoSemana!= null) {
                return false;
            }
        } else {
            if (!this.tipoSemanaIdTipoSemana.equals(other.tipoSemanaIdTipoSemana)) {
                return false;
            }
        }
        if (this.syIdSy == null) {
            if (other.syIdSy!= null) {
                return false;
            }
        } else {
            if (!this.syIdSy.equals(other.syIdSy)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.numeroSesion!= null) {
            rtn = (rtn + this.numeroSesion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.dia!= null) {
            rtn = (rtn + this.dia.hashCode());
        }
        rtn = (rtn* 37);
        if (this.asignaturaIdAsignatura!= null) {
            rtn = (rtn + this.asignaturaIdAsignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.cursoIdCurso!= null) {
            rtn = (rtn + this.cursoIdCurso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoSemanaIdTipoSemana!= null) {
            rtn = (rtn + this.tipoSemanaIdTipoSemana.hashCode());
        }
        rtn = (rtn* 37);
        if (this.syIdSy!= null) {
            rtn = (rtn + this.syIdSy.hashCode());
        }
        return rtn;
    }

    public Integer getNumeroSesion() {
        return numeroSesion;
    }

    public void setNumeroSesion(Integer numeroSesion) {
        this.numeroSesion = numeroSesion;
    }

    public Integer getDia() {
        return dia;
    }

    public void setDia(Integer dia) {
        this.dia = dia;
    }

    public Integer getAsignaturaIdAsignatura() {
        return asignaturaIdAsignatura;
    }

    public void setAsignaturaIdAsignatura(Integer asignaturaIdAsignatura) {
        this.asignaturaIdAsignatura = asignaturaIdAsignatura;
    }

    public Integer getCursoIdCurso() {
        return cursoIdCurso;
    }

    public void setCursoIdCurso(Integer cursoIdCurso) {
        this.cursoIdCurso = cursoIdCurso;
    }

    public Integer getTipoSemanaIdTipoSemana() {
        return tipoSemanaIdTipoSemana;
    }

    public void setTipoSemanaIdTipoSemana(Integer tipoSemanaIdTipoSemana) {
        this.tipoSemanaIdTipoSemana = tipoSemanaIdTipoSemana;
    }

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

}
