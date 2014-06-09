
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Persona
 *  12/07/2011 16:52:37
 * 
 */
public class Persona {

    private Integer idPersona;
    private String nombreLdap;
    private String clave;
    private String codigo;
    private String email;
    private Boolean activoRetirado;
    private String apellido1;
    private String apellido2;
    private String nombre1;
    private String nombre2;
    private String nivelAcademico;
    private Date fechaNacimiento;
    private String lugarNacimientoMunicipio;
    private String lugarNacimientoDepartamento;
    private String nacionalidad;
    private String direccionResidencia;
    private String telefono;
    private String telefono2;
    private String religion;
    private String tipoDocumento;
    private String noDocumento;
    private String lugarExpedicionMunicipio;
    private String lugarExpedicionDepartamento;
    private String barrio;
    private String municipio;
    private String departamento;
    private String saludPrepagada;
    private String eps;
    private String numeroContratoSalud;
    private String clinicaEmergencia;
    private String viveCon;
    private String tipoSangre;
    private String sexo;
    private String codigoFamilia;
    private Date fechaIngreso;
    private String gradoIngreso;
    private String cursoIngreso;
    private Date fechaRetiro;
    private String colegioAnterior;
    private Boolean hijoDeExalumno;
    private String nombrePadreExalumno;
    private String promocion;
    private String profesion;
    private String empresa;
    private String cargo;
    private String celular;
    private String direccionOficina;
    private String telefonoOficina;
    private String parentesco;
    private String rutaM;
    private String rutaT;
    private Boolean tomaAlmuerzo;
    private Boolean tomaMediasNueves;
    private Boolean tomaSeguroAccidentes;
    private String noPlaqueta;
    private Boolean matriculado;
    private Integer inscAlumCursoIdInscAlumCurso;
    private String paisDomicilio;
    private Pais pais;
    private TipoPersona tipoPersona;
    private GrupoFamiliar grupoFamiliar;
    private Set<com.aprendoz_desarrollo.data.InscAlumAprendizaje> inscAlumAprendizajes = new HashSet<com.aprendoz_desarrollo.data.InscAlumAprendizaje>();
    private Set<com.aprendoz_desarrollo.data.CalificacionFinal> calificacionFinals = new HashSet<com.aprendoz_desarrollo.data.CalificacionFinal>();
    private Set<com.aprendoz_desarrollo.data.EventualidadPersonas> eventualidadPersonases = new HashSet<com.aprendoz_desarrollo.data.EventualidadPersonas>();
    private Set<com.aprendoz_desarrollo.data.InscDocAsig> inscDocAsigs = new HashSet<com.aprendoz_desarrollo.data.InscDocAsig>();
    private Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs = new HashSet<com.aprendoz_desarrollo.data.InscCursoAsig>();
    private Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos = new HashSet<com.aprendoz_desarrollo.data.InscAlumCurso>();
    private Set<com.aprendoz_desarrollo.data.Asistencia> asistencias = new HashSet<com.aprendoz_desarrollo.data.Asistencia>();
    private Set<com.aprendoz_desarrollo.data.InscAlumActividad> inscAlumActividads = new HashSet<com.aprendoz_desarrollo.data.InscAlumActividad>();
    private Set<com.aprendoz_desarrollo.data.InscAlumAsig> inscAlumAsigs = new HashSet<com.aprendoz_desarrollo.data.InscAlumAsig>();
    private Set<com.aprendoz_desarrollo.data.Eventualidades> eventualidadeses = new HashSet<com.aprendoz_desarrollo.data.Eventualidades>();

    public Persona() {
    }

    public Persona(Integer idPersona, String nombreLdap, String clave, String codigo, String email, Boolean activoRetirado, String apellido1, String apellido2, String nombre1, String nombre2, String nivelAcademico, Date fechaNacimiento, String lugarNacimientoMunicipio, String lugarNacimientoDepartamento, String nacionalidad, String direccionResidencia, String telefono, String telefono2, String religion, String tipoDocumento, String noDocumento, String lugarExpedicionMunicipio, String lugarExpedicionDepartamento, String barrio, String municipio, String departamento, String saludPrepagada, String eps, String numeroContratoSalud, String clinicaEmergencia, String viveCon, String tipoSangre, String sexo, String codigoFamilia, Date fechaIngreso, String gradoIngreso, String cursoIngreso, Date fechaRetiro, String colegioAnterior, Boolean hijoDeExalumno, String nombrePadreExalumno, String promocion, String profesion, String empresa, String cargo, String celular, String direccionOficina, String telefonoOficina, String parentesco, String rutaM, String rutaT, Boolean tomaAlmuerzo, Boolean tomaMediasNueves, Boolean tomaSeguroAccidentes, String noPlaqueta, Boolean matriculado, Integer inscAlumCursoIdInscAlumCurso, String paisDomicilio) {
        this.idPersona = idPersona;
        this.nombreLdap = nombreLdap;
        this.clave = clave;
        this.codigo = codigo;
        this.email = email;
        this.activoRetirado = activoRetirado;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;
        this.nivelAcademico = nivelAcademico;
        this.fechaNacimiento = fechaNacimiento;
        this.lugarNacimientoMunicipio = lugarNacimientoMunicipio;
        this.lugarNacimientoDepartamento = lugarNacimientoDepartamento;
        this.nacionalidad = nacionalidad;
        this.direccionResidencia = direccionResidencia;
        this.telefono = telefono;
        this.telefono2 = telefono2;
        this.religion = religion;
        this.tipoDocumento = tipoDocumento;
        this.noDocumento = noDocumento;
        this.lugarExpedicionMunicipio = lugarExpedicionMunicipio;
        this.lugarExpedicionDepartamento = lugarExpedicionDepartamento;
        this.barrio = barrio;
        this.municipio = municipio;
        this.departamento = departamento;
        this.saludPrepagada = saludPrepagada;
        this.eps = eps;
        this.numeroContratoSalud = numeroContratoSalud;
        this.clinicaEmergencia = clinicaEmergencia;
        this.viveCon = viveCon;
        this.tipoSangre = tipoSangre;
        this.sexo = sexo;
        this.codigoFamilia = codigoFamilia;
        this.fechaIngreso = fechaIngreso;
        this.gradoIngreso = gradoIngreso;
        this.cursoIngreso = cursoIngreso;
        this.fechaRetiro = fechaRetiro;
        this.colegioAnterior = colegioAnterior;
        this.hijoDeExalumno = hijoDeExalumno;
        this.nombrePadreExalumno = nombrePadreExalumno;
        this.promocion = promocion;
        this.profesion = profesion;
        this.empresa = empresa;
        this.cargo = cargo;
        this.celular = celular;
        this.direccionOficina = direccionOficina;
        this.telefonoOficina = telefonoOficina;
        this.parentesco = parentesco;
        this.rutaM = rutaM;
        this.rutaT = rutaT;
        this.tomaAlmuerzo = tomaAlmuerzo;
        this.tomaMediasNueves = tomaMediasNueves;
        this.tomaSeguroAccidentes = tomaSeguroAccidentes;
        this.noPlaqueta = noPlaqueta;
        this.matriculado = matriculado;
        this.inscAlumCursoIdInscAlumCurso = inscAlumCursoIdInscAlumCurso;
        this.paisDomicilio = paisDomicilio;
    }

    public Persona(Integer idPersona, String nombreLdap, String clave, String codigo, String email, Boolean activoRetirado, String apellido1, String apellido2, String nombre1, String nombre2, String nivelAcademico, Date fechaNacimiento, String lugarNacimientoMunicipio, String lugarNacimientoDepartamento, String nacionalidad, String direccionResidencia, String telefono, String telefono2, String religion, String tipoDocumento, String noDocumento, String lugarExpedicionMunicipio, String lugarExpedicionDepartamento, String barrio, String municipio, String departamento, String saludPrepagada, String eps, String numeroContratoSalud, String clinicaEmergencia, String viveCon, String tipoSangre, String sexo, String codigoFamilia, Date fechaIngreso, String gradoIngreso, String cursoIngreso, Date fechaRetiro, String colegioAnterior, Boolean hijoDeExalumno, String nombrePadreExalumno, String promocion, String profesion, String empresa, String cargo, String celular, String direccionOficina, String telefonoOficina, String parentesco, String rutaM, String rutaT, Boolean tomaAlmuerzo, Boolean tomaMediasNueves, Boolean tomaSeguroAccidentes, String noPlaqueta, Boolean matriculado, Integer inscAlumCursoIdInscAlumCurso, String paisDomicilio, Pais pais, TipoPersona tipoPersona, GrupoFamiliar grupoFamiliar, Set<com.aprendoz_desarrollo.data.InscAlumAprendizaje> inscAlumAprendizajes, Set<com.aprendoz_desarrollo.data.CalificacionFinal> calificacionFinals, Set<com.aprendoz_desarrollo.data.EventualidadPersonas> eventualidadPersonases, Set<com.aprendoz_desarrollo.data.InscDocAsig> inscDocAsigs, Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs, Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos, Set<com.aprendoz_desarrollo.data.Asistencia> asistencias, Set<com.aprendoz_desarrollo.data.InscAlumActividad> inscAlumActividads, Set<com.aprendoz_desarrollo.data.InscAlumAsig> inscAlumAsigs, Set<com.aprendoz_desarrollo.data.Eventualidades> eventualidadeses) {
        this.idPersona = idPersona;
        this.nombreLdap = nombreLdap;
        this.clave = clave;
        this.codigo = codigo;
        this.email = email;
        this.activoRetirado = activoRetirado;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;
        this.nivelAcademico = nivelAcademico;
        this.fechaNacimiento = fechaNacimiento;
        this.lugarNacimientoMunicipio = lugarNacimientoMunicipio;
        this.lugarNacimientoDepartamento = lugarNacimientoDepartamento;
        this.nacionalidad = nacionalidad;
        this.direccionResidencia = direccionResidencia;
        this.telefono = telefono;
        this.telefono2 = telefono2;
        this.religion = religion;
        this.tipoDocumento = tipoDocumento;
        this.noDocumento = noDocumento;
        this.lugarExpedicionMunicipio = lugarExpedicionMunicipio;
        this.lugarExpedicionDepartamento = lugarExpedicionDepartamento;
        this.barrio = barrio;
        this.municipio = municipio;
        this.departamento = departamento;
        this.saludPrepagada = saludPrepagada;
        this.eps = eps;
        this.numeroContratoSalud = numeroContratoSalud;
        this.clinicaEmergencia = clinicaEmergencia;
        this.viveCon = viveCon;
        this.tipoSangre = tipoSangre;
        this.sexo = sexo;
        this.codigoFamilia = codigoFamilia;
        this.fechaIngreso = fechaIngreso;
        this.gradoIngreso = gradoIngreso;
        this.cursoIngreso = cursoIngreso;
        this.fechaRetiro = fechaRetiro;
        this.colegioAnterior = colegioAnterior;
        this.hijoDeExalumno = hijoDeExalumno;
        this.nombrePadreExalumno = nombrePadreExalumno;
        this.promocion = promocion;
        this.profesion = profesion;
        this.empresa = empresa;
        this.cargo = cargo;
        this.celular = celular;
        this.direccionOficina = direccionOficina;
        this.telefonoOficina = telefonoOficina;
        this.parentesco = parentesco;
        this.rutaM = rutaM;
        this.rutaT = rutaT;
        this.tomaAlmuerzo = tomaAlmuerzo;
        this.tomaMediasNueves = tomaMediasNueves;
        this.tomaSeguroAccidentes = tomaSeguroAccidentes;
        this.noPlaqueta = noPlaqueta;
        this.matriculado = matriculado;
        this.inscAlumCursoIdInscAlumCurso = inscAlumCursoIdInscAlumCurso;
        this.paisDomicilio = paisDomicilio;
        this.pais = pais;
        this.tipoPersona = tipoPersona;
        this.grupoFamiliar = grupoFamiliar;
        this.inscAlumAprendizajes = inscAlumAprendizajes;
        this.calificacionFinals = calificacionFinals;
        this.eventualidadPersonases = eventualidadPersonases;
        this.inscDocAsigs = inscDocAsigs;
        this.inscCursoAsigs = inscCursoAsigs;
        this.inscAlumCursos = inscAlumCursos;
        this.asistencias = asistencias;
        this.inscAlumActividads = inscAlumActividads;
        this.inscAlumAsigs = inscAlumAsigs;
        this.eventualidadeses = eventualidadeses;
    }

    public Integer getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Integer idPersona) {
        this.idPersona = idPersona;
    }

    public String getNombreLdap() {
        return nombreLdap;
    }

    public void setNombreLdap(String nombreLdap) {
        this.nombreLdap = nombreLdap;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getActivoRetirado() {
        return activoRetirado;
    }

    public void setActivoRetirado(Boolean activoRetirado) {
        this.activoRetirado = activoRetirado;
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

    public String getNivelAcademico() {
        return nivelAcademico;
    }

    public void setNivelAcademico(String nivelAcademico) {
        this.nivelAcademico = nivelAcademico;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getLugarNacimientoMunicipio() {
        return lugarNacimientoMunicipio;
    }

    public void setLugarNacimientoMunicipio(String lugarNacimientoMunicipio) {
        this.lugarNacimientoMunicipio = lugarNacimientoMunicipio;
    }

    public String getLugarNacimientoDepartamento() {
        return lugarNacimientoDepartamento;
    }

    public void setLugarNacimientoDepartamento(String lugarNacimientoDepartamento) {
        this.lugarNacimientoDepartamento = lugarNacimientoDepartamento;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    public String getDireccionResidencia() {
        return direccionResidencia;
    }

    public void setDireccionResidencia(String direccionResidencia) {
        this.direccionResidencia = direccionResidencia;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getTelefono2() {
        return telefono2;
    }

    public void setTelefono2(String telefono2) {
        this.telefono2 = telefono2;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(String tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public String getNoDocumento() {
        return noDocumento;
    }

    public void setNoDocumento(String noDocumento) {
        this.noDocumento = noDocumento;
    }

    public String getLugarExpedicionMunicipio() {
        return lugarExpedicionMunicipio;
    }

    public void setLugarExpedicionMunicipio(String lugarExpedicionMunicipio) {
        this.lugarExpedicionMunicipio = lugarExpedicionMunicipio;
    }

    public String getLugarExpedicionDepartamento() {
        return lugarExpedicionDepartamento;
    }

    public void setLugarExpedicionDepartamento(String lugarExpedicionDepartamento) {
        this.lugarExpedicionDepartamento = lugarExpedicionDepartamento;
    }

    public String getBarrio() {
        return barrio;
    }

    public void setBarrio(String barrio) {
        this.barrio = barrio;
    }

    public String getMunicipio() {
        return municipio;
    }

    public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String getSaludPrepagada() {
        return saludPrepagada;
    }

    public void setSaludPrepagada(String saludPrepagada) {
        this.saludPrepagada = saludPrepagada;
    }

    public String getEps() {
        return eps;
    }

    public void setEps(String eps) {
        this.eps = eps;
    }

    public String getNumeroContratoSalud() {
        return numeroContratoSalud;
    }

    public void setNumeroContratoSalud(String numeroContratoSalud) {
        this.numeroContratoSalud = numeroContratoSalud;
    }

    public String getClinicaEmergencia() {
        return clinicaEmergencia;
    }

    public void setClinicaEmergencia(String clinicaEmergencia) {
        this.clinicaEmergencia = clinicaEmergencia;
    }

    public String getViveCon() {
        return viveCon;
    }

    public void setViveCon(String viveCon) {
        this.viveCon = viveCon;
    }

    public String getTipoSangre() {
        return tipoSangre;
    }

    public void setTipoSangre(String tipoSangre) {
        this.tipoSangre = tipoSangre;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getCodigoFamilia() {
        return codigoFamilia;
    }

    public void setCodigoFamilia(String codigoFamilia) {
        this.codigoFamilia = codigoFamilia;
    }

    public Date getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(Date fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public String getGradoIngreso() {
        return gradoIngreso;
    }

    public void setGradoIngreso(String gradoIngreso) {
        this.gradoIngreso = gradoIngreso;
    }

    public String getCursoIngreso() {
        return cursoIngreso;
    }

    public void setCursoIngreso(String cursoIngreso) {
        this.cursoIngreso = cursoIngreso;
    }

    public Date getFechaRetiro() {
        return fechaRetiro;
    }

    public void setFechaRetiro(Date fechaRetiro) {
        this.fechaRetiro = fechaRetiro;
    }

    public String getColegioAnterior() {
        return colegioAnterior;
    }

    public void setColegioAnterior(String colegioAnterior) {
        this.colegioAnterior = colegioAnterior;
    }

    public Boolean getHijoDeExalumno() {
        return hijoDeExalumno;
    }

    public void setHijoDeExalumno(Boolean hijoDeExalumno) {
        this.hijoDeExalumno = hijoDeExalumno;
    }

    public String getNombrePadreExalumno() {
        return nombrePadreExalumno;
    }

    public void setNombrePadreExalumno(String nombrePadreExalumno) {
        this.nombrePadreExalumno = nombrePadreExalumno;
    }

    public String getPromocion() {
        return promocion;
    }

    public void setPromocion(String promocion) {
        this.promocion = promocion;
    }

    public String getProfesion() {
        return profesion;
    }

    public void setProfesion(String profesion) {
        this.profesion = profesion;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getDireccionOficina() {
        return direccionOficina;
    }

    public void setDireccionOficina(String direccionOficina) {
        this.direccionOficina = direccionOficina;
    }

    public String getTelefonoOficina() {
        return telefonoOficina;
    }

    public void setTelefonoOficina(String telefonoOficina) {
        this.telefonoOficina = telefonoOficina;
    }

    public String getParentesco() {
        return parentesco;
    }

    public void setParentesco(String parentesco) {
        this.parentesco = parentesco;
    }

    public String getRutaM() {
        return rutaM;
    }

    public void setRutaM(String rutaM) {
        this.rutaM = rutaM;
    }

    public String getRutaT() {
        return rutaT;
    }

    public void setRutaT(String rutaT) {
        this.rutaT = rutaT;
    }

    public Boolean getTomaAlmuerzo() {
        return tomaAlmuerzo;
    }

    public void setTomaAlmuerzo(Boolean tomaAlmuerzo) {
        this.tomaAlmuerzo = tomaAlmuerzo;
    }

    public Boolean getTomaMediasNueves() {
        return tomaMediasNueves;
    }

    public void setTomaMediasNueves(Boolean tomaMediasNueves) {
        this.tomaMediasNueves = tomaMediasNueves;
    }

    public Boolean getTomaSeguroAccidentes() {
        return tomaSeguroAccidentes;
    }

    public void setTomaSeguroAccidentes(Boolean tomaSeguroAccidentes) {
        this.tomaSeguroAccidentes = tomaSeguroAccidentes;
    }

    public String getNoPlaqueta() {
        return noPlaqueta;
    }

    public void setNoPlaqueta(String noPlaqueta) {
        this.noPlaqueta = noPlaqueta;
    }

    public Boolean getMatriculado() {
        return matriculado;
    }

    public void setMatriculado(Boolean matriculado) {
        this.matriculado = matriculado;
    }

    public Integer getInscAlumCursoIdInscAlumCurso() {
        return inscAlumCursoIdInscAlumCurso;
    }

    public void setInscAlumCursoIdInscAlumCurso(Integer inscAlumCursoIdInscAlumCurso) {
        this.inscAlumCursoIdInscAlumCurso = inscAlumCursoIdInscAlumCurso;
    }

    public String getPaisDomicilio() {
        return paisDomicilio;
    }

    public void setPaisDomicilio(String paisDomicilio) {
        this.paisDomicilio = paisDomicilio;
    }

    public Pais getPais() {
        return pais;
    }

    public void setPais(Pais pais) {
        this.pais = pais;
    }

    public TipoPersona getTipoPersona() {
        return tipoPersona;
    }

    public void setTipoPersona(TipoPersona tipoPersona) {
        this.tipoPersona = tipoPersona;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAprendizaje> getInscAlumAprendizajes() {
        return inscAlumAprendizajes;
    }

    public void setInscAlumAprendizajes(Set<com.aprendoz_desarrollo.data.InscAlumAprendizaje> inscAlumAprendizajes) {
        this.inscAlumAprendizajes = inscAlumAprendizajes;
    }

    public Set<com.aprendoz_desarrollo.data.CalificacionFinal> getCalificacionFinals() {
        return calificacionFinals;
    }

    public void setCalificacionFinals(Set<com.aprendoz_desarrollo.data.CalificacionFinal> calificacionFinals) {
        this.calificacionFinals = calificacionFinals;
    }

    public Set<com.aprendoz_desarrollo.data.EventualidadPersonas> getEventualidadPersonases() {
        return eventualidadPersonases;
    }

    public void setEventualidadPersonases(Set<com.aprendoz_desarrollo.data.EventualidadPersonas> eventualidadPersonases) {
        this.eventualidadPersonases = eventualidadPersonases;
    }

    public Set<com.aprendoz_desarrollo.data.InscDocAsig> getInscDocAsigs() {
        return inscDocAsigs;
    }

    public void setInscDocAsigs(Set<com.aprendoz_desarrollo.data.InscDocAsig> inscDocAsigs) {
        this.inscDocAsigs = inscDocAsigs;
    }

    public Set<com.aprendoz_desarrollo.data.InscCursoAsig> getInscCursoAsigs() {
        return inscCursoAsigs;
    }

    public void setInscCursoAsigs(Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs) {
        this.inscCursoAsigs = inscCursoAsigs;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumCurso> getInscAlumCursos() {
        return inscAlumCursos;
    }

    public void setInscAlumCursos(Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos) {
        this.inscAlumCursos = inscAlumCursos;
    }

    public Set<com.aprendoz_desarrollo.data.Asistencia> getAsistencias() {
        return asistencias;
    }

    public void setAsistencias(Set<com.aprendoz_desarrollo.data.Asistencia> asistencias) {
        this.asistencias = asistencias;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumActividad> getInscAlumActividads() {
        return inscAlumActividads;
    }

    public void setInscAlumActividads(Set<com.aprendoz_desarrollo.data.InscAlumActividad> inscAlumActividads) {
        this.inscAlumActividads = inscAlumActividads;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAsig> getInscAlumAsigs() {
        return inscAlumAsigs;
    }

    public void setInscAlumAsigs(Set<com.aprendoz_desarrollo.data.InscAlumAsig> inscAlumAsigs) {
        this.inscAlumAsigs = inscAlumAsigs;
    }

    public Set<com.aprendoz_desarrollo.data.Eventualidades> getEventualidadeses() {
        return eventualidadeses;
    }

    public void setEventualidadeses(Set<com.aprendoz_desarrollo.data.Eventualidades> eventualidadeses) {
        this.eventualidadeses = eventualidadeses;
    }

}
