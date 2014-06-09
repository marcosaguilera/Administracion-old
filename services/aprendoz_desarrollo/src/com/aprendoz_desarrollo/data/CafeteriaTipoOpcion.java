
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.CafeteriaTipoOpcion
 *  08/16/2013 09:24:25
 * 
 */
public class CafeteriaTipoOpcion {

    private Integer idOpciones;
    private Integer tipoOpcionIdTipoOpcion;
    private Integer tipoProteinaIdTipoProteina;
    private Integer menuIdMenu;

    public CafeteriaTipoOpcion() {
    }

    public CafeteriaTipoOpcion(Integer idOpciones, Integer tipoOpcionIdTipoOpcion, Integer tipoProteinaIdTipoProteina, Integer menuIdMenu) {
        this.idOpciones = idOpciones;
        this.tipoOpcionIdTipoOpcion = tipoOpcionIdTipoOpcion;
        this.tipoProteinaIdTipoProteina = tipoProteinaIdTipoProteina;
        this.menuIdMenu = menuIdMenu;
    }

    public Integer getIdOpciones() {
        return idOpciones;
    }

    public void setIdOpciones(Integer idOpciones) {
        this.idOpciones = idOpciones;
    }

    public Integer getTipoOpcionIdTipoOpcion() {
        return tipoOpcionIdTipoOpcion;
    }

    public void setTipoOpcionIdTipoOpcion(Integer tipoOpcionIdTipoOpcion) {
        this.tipoOpcionIdTipoOpcion = tipoOpcionIdTipoOpcion;
    }

    public Integer getTipoProteinaIdTipoProteina() {
        return tipoProteinaIdTipoProteina;
    }

    public void setTipoProteinaIdTipoProteina(Integer tipoProteinaIdTipoProteina) {
        this.tipoProteinaIdTipoProteina = tipoProteinaIdTipoProteina;
    }

    public Integer getMenuIdMenu() {
        return menuIdMenu;
    }

    public void setMenuIdMenu(Integer menuIdMenu) {
        this.menuIdMenu = menuIdMenu;
    }

}
