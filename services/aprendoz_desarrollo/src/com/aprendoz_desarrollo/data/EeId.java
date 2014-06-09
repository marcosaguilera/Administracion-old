
package com.aprendoz_desarrollo.data;

import java.io.Serializable;


/**
 *  aprendoz_desarrollo.EeId
 *  12/28/2011 12:36:26
 * 
 */
public class EeId
    implements Serializable
{

    private Integer lala;
    private String pepe;

    public EeId() {
    }

    public EeId(Integer lala, String pepe) {
        this.lala = lala;
        this.pepe = pepe;
    }

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof EeId)) {
            return false;
        }
        EeId other = ((EeId) o);
        if (this.lala == null) {
            if (other.lala!= null) {
                return false;
            }
        } else {
            if (!this.lala.equals(other.lala)) {
                return false;
            }
        }
        if (this.pepe == null) {
            if (other.pepe!= null) {
                return false;
            }
        } else {
            if (!this.pepe.equals(other.pepe)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.lala!= null) {
            rtn = (rtn + this.lala.hashCode());
        }
        rtn = (rtn* 37);
        if (this.pepe!= null) {
            rtn = (rtn + this.pepe.hashCode());
        }
        return rtn;
    }

    public Integer getLala() {
        return lala;
    }

    public void setLala(Integer lala) {
        this.lala = lala;
    }

    public String getPepe() {
        return pepe;
    }

    public void setPepe(String pepe) {
        this.pepe = pepe;
    }

}
