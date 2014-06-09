
package com.aprendoz_desarrollo.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_desarrollo.SesionNivelId
 *  12/28/2011 12:48:30
 * 
 */
public class SesionNivelId
    implements Serializable
{

    private Integer numeroSesion;
    private Date horaInicio;
    private Date horaFin;
    private Integer nivel;

    public SesionNivelId() {
    }

    public SesionNivelId(Integer numeroSesion, Date horaInicio, Date horaFin, Integer nivel) {
        this.numeroSesion = numeroSesion;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.nivel = nivel;
    }

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof SesionNivelId)) {
            return false;
        }
        SesionNivelId other = ((SesionNivelId) o);
        if (this.numeroSesion == null) {
            if (other.numeroSesion!= null) {
                return false;
            }
        } else {
            if (!this.numeroSesion.equals(other.numeroSesion)) {
                return false;
            }
        }
        if (this.horaInicio == null) {
            if (other.horaInicio!= null) {
                return false;
            }
        } else {
            if (!this.horaInicio.equals(other.horaInicio)) {
                return false;
            }
        }
        if (this.horaFin == null) {
            if (other.horaFin!= null) {
                return false;
            }
        } else {
            if (!this.horaFin.equals(other.horaFin)) {
                return false;
            }
        }
        if (this.nivel == null) {
            if (other.nivel!= null) {
                return false;
            }
        } else {
            if (!this.nivel.equals(other.nivel)) {
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
        if (this.horaInicio!= null) {
            rtn = (rtn + this.horaInicio.hashCode());
        }
        rtn = (rtn* 37);
        if (this.horaFin!= null) {
            rtn = (rtn + this.horaFin.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nivel!= null) {
            rtn = (rtn + this.nivel.hashCode());
        }
        return rtn;
    }

    public Integer getNumeroSesion() {
        return numeroSesion;
    }

    public void setNumeroSesion(Integer numeroSesion) {
        this.numeroSesion = numeroSesion;
    }

    public Date getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(Date horaInicio) {
        this.horaInicio = horaInicio;
    }

    public Date getHoraFin() {
        return horaFin;
    }

    public void setHoraFin(Date horaFin) {
        this.horaFin = horaFin;
    }

    public Integer getNivel() {
        return nivel;
    }

    public void setNivel(Integer nivel) {
        this.nivel = nivel;
    }

}
