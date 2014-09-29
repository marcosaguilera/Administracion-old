
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.AccStudentCard
 *  06/12/2014 18:46:45
 * 
 */
public class AccStudentCard {

    private Integer id;
    private Persona persona;
    private String cardCodeData;
    private String cardNumber;
    private Date created;
    private Date updated;
    private Set<com.aprendoz_desarrollo.data.AccStudentCardAuthorization> accStudentCardAuthorizations = new HashSet<com.aprendoz_desarrollo.data.AccStudentCardAuthorization>();

    public AccStudentCard() {
    }

    public AccStudentCard(Integer id, String cardCodeData, String cardNumber, Date created, Date updated) {
        this.id = id;
        this.cardCodeData = cardCodeData;
        this.cardNumber = cardNumber;
        this.created = created;
        this.updated = updated;
    }

    public AccStudentCard(Integer id, Persona persona, String cardCodeData, String cardNumber, Date created, Date updated, Set<com.aprendoz_desarrollo.data.AccStudentCardAuthorization> accStudentCardAuthorizations) {
        this.id = id;
        this.persona = persona;
        this.cardCodeData = cardCodeData;
        this.cardNumber = cardNumber;
        this.created = created;
        this.updated = updated;
        this.accStudentCardAuthorizations = accStudentCardAuthorizations;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public String getCardCodeData() {
        return cardCodeData;
    }

    public void setCardCodeData(String cardCodeData) {
        this.cardCodeData = cardCodeData;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public Set<com.aprendoz_desarrollo.data.AccStudentCardAuthorization> getAccStudentCardAuthorizations() {
        return accStudentCardAuthorizations;
    }

    public void setAccStudentCardAuthorizations(Set<com.aprendoz_desarrollo.data.AccStudentCardAuthorization> accStudentCardAuthorizations) {
        this.accStudentCardAuthorizations = accStudentCardAuthorizations;
    }

}
