Main.widgets = {
	grupofamiliarLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.grupofamiliarLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grupoFamiliar","source":"textEditor1.dataValue"}, {}]
		}]
	}],
	asignaturaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.asignaturaLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.idAsignatura","source":"aux51.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.asignatura","source":"aux52.dataValue"}, {}]
		}]
	}],
	Salir2: ["wm.ServiceVariable", {"service":"securityService","operation":"logout"}, {"onResult":"salir"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	insccursoasigLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.insccursoasigLiveView1","orderBy":"asc: asignatura.asignatura","maxResults":80}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"aux101.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"aux99.dataValue"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.periodo.idPeriodo","source":"selectEditor4.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.asignatura.idAsignatura","source":"aux98.dataValue"}, {}]
		}]
	}],
	estudiantesPORCurso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.vistaActivaPersonasenCursos","maxResults":80}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"selectEditor2.dataValue"}, {}]
		}]
	}],
	inscalumcursoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumcursoLiveView1","orderBy":"desc: idInscAlumCurso","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"selectEditor2.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"selectEditor3.dataValue"}, {}]
		}]
	}],
	salirErrorPage: ["wm.ServiceVariable", {"service":"securityService","operation":"logout"}, {"onResult":"salirPageError"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	salirPageError: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Login\""}, {}]
			}]
		}]
	}],
	lv_insc_alum_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.InscAlumCurso","orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"s_Curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"s_Anio_escolar.dataValue"}, {}]
		}]
	}],
	lsReportes: ["wm.Variable", {"type":"EntryData","json":"[\n{name:\"Certificado Final\", dataValue: \"f\"},\n{name:\"Certificado Final (Ingles)\", dataValue: \"fi\"},\n{name:\"Certificado Parcial\", dataValue: \"p\"},\n{name:\"Certificado Parcial (Ingles)\", dataValue: \"pi\"}\n]"}, {}],
	horarioLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.horarioLiveView1"}, {}],
	horarioLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.horarioLiveView2","orderBy":"asc: dia, asc: numeroSesion"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"horarios_panel_horarios_sel_curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"horarios_panel_horarios_sel_anioescolar.dataValue"}, {}]
		}]
	}],
	lsDias: ["wm.Variable", {"type":"EntryData","json":"[{name:\"Lunes\",dataValue:\"1\"},{name:\"Martes\",dataValue:\"2\"},{name:\"Miercoles\",dataValue:\"3\"},{name:\"Jueves\",dataValue:\"4\"},{name:\"Viernes\",dataValue:\"5\"}\n]"}, {}],
	listaSuscritos: ["wm.Variable", {"type":"EntryData","json":"[\n{name:\"Rector\", dataValue:\"RECTOR\"},\n{name:\"Secretario\",dataValue:\"SECRETARIO\"},\n{name:\"Ambos\",dataValue:\"AMBOS\"}\n]"}, {}],
	lista_CALIF_CHAR: ["wm.Variable", {"type":"EntryData","json":"[\n{name:\"BAJO\", dataValue:\"BAJO\"},\n{name:\"BASICO\",dataValue:\"BASICO\"},\n{name:\"ALTO\",dataValue:\"ALTO\"},\n{name:\"SUPERIOR\",dataValue:\"SUPERIOR\"}\n]"}, {}],
	a_grado: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.Grado"}, {}],
	a_sy: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.Sy","orderBy":"desc: idSy"}, {}],
	a_tipopersonas: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.TipoPersona"}, {}],
	l_secretaria_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"s_Grado.dataValue"}, {}]
		}]
	}],
	l_secretaria_insc_personas_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.AdministracionVistaInscAlumnCurso","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"s_Curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"s_Anio_escolar.dataValue"}, {}]
		}]
	}],
	l_secretaria_calificaciones_insc_alumn_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.AdministracionVistaInscAlumnCurso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"box_anio_escolar_1.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"box_curso_1.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.curso.grado.idGrado","source":"box_grado_1.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.persona.nombre1","source":"box_nombre_1.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"filter.persona.nombre2","source":"box_nombre_2.dataValue"}, {}],
			wire5: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"box_id_persona.dataValue"}, {}],
			wire6: ["wm.Wire", {"targetProperty":"filter.persona.codigo","source":"box_codigo.dataValue"}, {}],
			wire7: ["wm.Wire", {"targetProperty":"filter.persona.apellido1","source":"box_apellido_1.dataValue"}, {}],
			wire8: ["wm.Wire", {"targetProperty":"filter.persona.apellido2","source":"box_apellido_2.dataValue"}, {}],
			wire9: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"box_anio_escolar_1.dataValue"}, {}],
			wire10: ["wm.Wire", {"targetProperty":"filter.id.idPersona","source":"box_id_persona.dataValue"}, {}],
			wire11: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"box_curso_1.dataValue"}, {}],
			wire12: ["wm.Wire", {"targetProperty":"filter.id.codigo","source":"box_codigo.dataValue"}, {}],
			wire13: ["wm.Wire", {"targetProperty":"filter.id.nombre1","source":"box_nombre_1.dataValue"}, {}],
			wire14: ["wm.Wire", {"targetProperty":"filter.id.nombre2","source":"box_nombre_2.dataValue"}, {}],
			wire15: ["wm.Wire", {"targetProperty":"filter.id.apellido1","source":"box_apellido_1.dataValue"}, {}],
			wire16: ["wm.Wire", {"targetProperty":"filter.id.apellido2","source":"box_apellido_2.dataValue"}, {}]
		}]
	}],
	l_secretaria_calificaciones_lista_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"box_grado_1.dataValue"}, {}]
		}]
	}],
	l_secretaria_calificaciones_inscalumasigLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumasigLiveView1","orderBy":"asc: asignatura.asignatura","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.periodo.sy.idSy","source":"box_anio_escolar_1.dataValue"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"Tabla_Alum_Curso.selectedItem.id.idPersona"}, {}]
		}]
	}],
	l_secretaria_insc_alum_asig: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.AdministracionVistaInscAlumAsig","orderBy":"asc: id.asignatura, desc: id.calificacion"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"a_t_PersonasxCurso.selectedItem.persona.idPersona"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.asignatura.grado.idGrado","source":"s_Grado.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"a_t_PersonasxCurso.selectedItem.id.idPersona"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"s_Anio_escolar.dataValue"}, {}]
		}]
	}],
	l_alumnos_calificaciones_lista_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"selectEditor1.dataValue"}, {}]
		}]
	}],
	l_alumnos_calificaciones_lista_periodo: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Periodo"}, {}],
	l_alumnos_caificaciones_lista_Personas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.vistaPersonas","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.apellido1","source":"a1.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.apellido2","source":"a2.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.nombre1","source":"n1.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.nombre2","source":"n2.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"filter.codigo","source":"c1.dataValue"}, {}],
			wire5: ["wm.Wire", {"targetProperty":"filter.tipoPersona.idTipoPersona","source":"t1.dataValue"}, {}]
		}]
	}],
	l_docentes_lista_personas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.AdministracionVistaPersonas"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire4: ["wm.Wire", {"targetProperty":"filter.id.codigo","source":"codigo1.dataValue"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.id.apellido1","source":"apellido1.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.apellido2","source":"apellido2.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.nombre1","source":"nombre1.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.id.nombre2","source":"nombre2.dataValue"}, {}]
		}]
	}],
	a_getUserName: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","autoUpdate":true,"startUpdate":true}, {"onSuccess":"a_getUserNameSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	a_getCompleteName: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getNombreCompleto"}, {"onSuccess":"a_getCompleteNameSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getNombreCompletoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"usuario","source":"userNameGetter.dataValue"}, {}]
			}]
		}]
	}],
	l_personas_lista_grupos_familiares: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.GrupoFamiliar","matchMode":"anywhere","ignoreCase":true}, {}],
	l_personas_personaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.personaLiveView1","maxResults":100}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grupoFamiliar.idGrupoFamiliar","source":"personas_panel_personas_sel_grupo_familiar.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.tipoPersona.idTipoPersona","source":"personas_panel_personas_box_tipo_persona.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.nombre1","source":"personas_panel_personas_box_nombre1.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.nombre2","source":"personas_panel_personas_box_nombre2.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"filter.apellido1","source":"personas_panel_personas_box_apellido1.dataValue"}, {}],
			wire5: ["wm.Wire", {"targetProperty":"filter.apellido2","source":"personas_panel_personas_box_apellido2.dataValue"}, {}],
			wire7: ["wm.Wire", {"targetProperty":"filter.codigo","source":"personas_panel_personas_box_codigo.dataValue"}, {}],
			wire8: ["wm.Wire", {"targetProperty":"filter.noDocumento","source":"personas_panel_personas_box_documento.dataValue"}, {}]
		}]
	}],
	l_personas_lista_paises: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Pais"}, {}],
	l_horarios_lista_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"horarios_panel_horarios_sel_grado.dataValue"}, {}]
		}]
	}],
	salir: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Login\""}, {}]
			}]
		}]
	}],
	l_horarios_lista_curso2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"horarios_panel_horarios_sel_grado2.dataValue"}, {}]
		}]
	}],
	l_horarios_lista_AsignaturasCurso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.AdministracionVistaAsignaturasCurso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"horarios_panel_horarios_sel_sy.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"horarios_panel_horarios_sel_curso2.dataValue"}, {}]
		}]
	}],
	l_extras_tipopersonaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.tipopersonaLiveView1"}, {}],
	l_menu_panel_menu_listaCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"aux100.dataValue"}, {}]
		}]
	}],
	a_periodo: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.Periodo"}, {}],
	l_docentes_asignaturas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.AdministracionVistaAsignaturas"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"sySelect.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idGrado","source":"gradoSelect.dataValue"}, {}]
		}]
	}],
	l_docentes_cursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Curso","orderBy":"asc: idCurso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idGrado","source":"gradoSelect.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"gradoSelect.dataValue"}, {}]
		}]
	}],
	a_curso_actual: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Curso"}, {}],
	a_getCursoProcesoSV: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getProcesoMatricula"}, {"onSuccess":"a_getCursoProcesoSVSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getProcesoMatriculaInputs"}, {}]
	}],
	a_lista_nacionalidades: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Nacionalidades"}, {}],
	l_secretaria_ls_niveles: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Nivel"}, {}],
	l_sv_secretaria_libro_final: ["wm.ServiceVariable", {"service":"libroFinalCalificaciones","operation":"getReport"}, {}, {
		input: ["wm.ServiceInput", {"type":"getReportInputs"}, {}]
	}],
	a_lista_cursoHql: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"hQLlsCursos"}, {}, {
		input: ["wm.ServiceInput", {"type":"hQLlsCursosInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"idg","source":"s_Grado.dataValue"}, {}]
			}]
		}]
	}],
	logout: ["wm.ServiceVariable", {"service":"securityService","operation":"logout"}, {"onResult":"iraLoginPage"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	iraLoginPage: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Login\""}, {}]
			}]
		}]
	}],
	ls_asignaturas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Asignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"asignaturas_grado_select.dataValue"}, {}]
		}]
	}],
	asignaturas_listado: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"subjectsByGrade"}, {}, {
		input: ["wm.ServiceInput", {"type":"subjectsByGradeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"_grado","source":"asignaturas_grado_select.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"_sy","source":"asignaturas_sy_select.dataValue"}, {}]
			}]
		}]
	}],
	ls_tipo_identificacion: ["wm.Variable", {"type":"EntryData","json":"[\n{name: \"Numero Unico Identificación Personal\", dataValue: \"N.U.I.P\"},\n{name: \"Tarjeta Identidad\", dataValue: \"T.I\"},\n{name: \"Cédula Ciudadanía\", dataValue: \"C.C\"},\n{name: \"Cédula Extranjería\", dataValue: \"C.E\"},\n{name: \"Pasaporte\", dataValue: \"P.S\"}\n]"}, {}],
	ls_eps: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.TipoEps"}, {}],
	fichamedicaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.fichamedicaLiveView1","maxResults":5,"designMaxResults":5}, {"onSuccess":"fichamedicaLiveVariable1Success"}],
	l_reportes_graficos_listado_reportes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.DirectoresDocentesListadoReportes","maxResults":100,"designMaxResults":10}, {}],
	tipoTipoUsuario: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getTipoByUsername"}, {}, {
		input: ["wm.ServiceInput", {"type":"getTipoByUsernameInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"height":"1200px","width":"1033px","horizontalAlign":"center","verticalAlign":"top"}, {}, {
		TwoColumns: ["wm.Template", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel1: ["wm.Panel", {"height":"40px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
				bInicio: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"28px","width":"28px","borderColor":"#F5F5F5","border":"0","caption":""}, {"onclick":"bInicioClick"}],
				mostrarMenu: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"70px","border":"0","caption":"Mostrar»","showing":false}, {"onclick":"mostrarMenuClick"}],
				ocultarMenu: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"70px","border":"0","caption":"«Ocultar","showing":false}, {"onclick":"ocultarMenuClick"}],
				spacer7: ["wm.Spacer", {"height":"10px","width":"100%"}, {}],
				button1: ["wm.Button", {"height":"28px","width":"26px","borderColor":"#F5F5F5","border":"0","caption":""}, {"onclick":"Salir2"}],
				menu: ["wm.DojoMenu", {"height":"29px","width":"116px","border":"0","structure":"{\"items\":[{\"label\":\"Usuario\",\"children\":[{\"label\":\"Perfil\"},{\"label\":\"Opciones\"}]}]}","menu":"Usuario> Perfil, Opciones\n","eventList":[{"label":"Usuario","children":[{"label":"New"},{"label":"Open"},{"label":"Save"},{"label":"Close"}],"onClick":undefined},{"label":"Perfil"},{"label":"Opciones"}],"showing":false}, {}]
			}],
			panel26: ["wm.Panel", {"height":"30px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
				home_img: ["wm.Picture", {"height":"18px","border":"0","width":"20px"}, {"onclick":"home_imgClick"}],
				picture6: ["wm.Picture", {"height":"100%","border":"0","width":"41px"}, {"onclick":"picture6Click"}],
				spacer1: ["wm.Spacer", {"height":"19px","width":"100%"}, {}],
				logout_img: ["wm.Picture", {"height":"19px","border":"0","width":"20px"}, {"onclick":"logout"}]
			}],
			panel2: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","roles":["5","6","7","8","9","10","11","4","16","17","19","18","20","22","21","13","14","15"]}, {}, {
				panel_menuPrincipal: ["wm.Panel", {"height":"100%","width":"154px","padding":"8"}, {}, {
					bPersonas: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_FontSizePx_16px"]},"height":"48px","width":"100%","borderColor":"#000","caption":"Personas","iconWidth":"50px","iconHeight":"50px","roles":["10","11","20","21","22","23","24","25","7","9","13","14","15","16","17"]}, {"onclick":"bPersonasClick"}],
					bSecretaria: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"48px","width":"96px","borderColor":"#4D90FE","caption":"Secretaría","roles":["11","20","21","22","23","24","25","10"]}, {"onclick":"bSecretariaClick"}],
					bAlumnos: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_FontSizePx_16px"]},"height":"48px","width":"96px","borderColor":"#3C9300","caption":"Alumnos","iconHeight":"50px","roles":["10","20","21","22","24","11","23"]}, {"onclick":"bAlumnosClick"}],
					bDocentes: ["wm.Button", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar","wm_FontSizePx_16px"]},"height":"48px","width":"96px","borderColor":"#FFB515","caption":"Docentes","iconHeight":"50px","roles":["10","20","21","22","24","23"]}, {"onclick":"bDocentesClick"}],
					bAsignaturas: ["wm.Button", {"height":"48px","width":"96px","caption":"Asignaturas","roles":["10","20","21","22","23","24"]}, {"onclick":"bAsignaturasClick"}],
					bHorarios: ["wm.Button", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar","wm_FontSizePx_16px"]},"height":"48px","width":"96px","borderColor":"#ae170a","caption":"Horarios","iconHeight":"50px","showing":false,"roles":["5","6","10","20","21","22","24","23","4"]}, {"onclick":"bHorariosClick"}],
					button5: ["wm.Button", {"height":"48px","width":"96px","caption":"Reportes","showing":false}, {}],
					bExtras: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_FontSizePx_16px"]},"height":"48px","width":"96px","borderColor":"#413c3c","caption":"Extras","iconWidth":"50px","iconHeight":"50px","roles":["7","10","20","21","22","24","11","23","13","14","15"]}, {"onclick":"bExtrasClick"}],
					spacer2: ["wm.Spacer", {"height":"100%","width":"96px"}, {}],
					p1: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"38px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
						label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"44px","width":"115px","border":"0","caption":"Ocultar Filtros"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						picture2: ["wm.Picture", {"height":"34px","border":"0","width":"50px","source":"resources/images/download.png","aspect":"h"}, {"onclick":"picture2Click"}]
					}],
					panel12: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"167px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"borderColor":"#000000","showing":false}, {}, {
						layers7: ["wm.Layers", {}, {}, {
							layer7: ["wm.Layer", {"caption":"layer7","horizontalAlign":"right","verticalAlign":"top"}, {}, {
								aux98: ["wm.TextEditor", {"width":"150%","caption":"ID Asignatura","showing":false}, {"onchange":"insccursoasigLiveVariable1"}, {
									editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
								}],
								aux99: ["wm.TextEditor", {"width":"150%","caption":"ID Persona","showing":false}, {"onchange":"insccursoasigLiveVariable1"}, {
									editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
								}],
								selectEditor4: ["wm.SelectEditor", {"width":"150%","caption":"Año escolar"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"periodo","dataField":"idPeriodo"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_periodo","expression":undefined}, {}]
										}]
									}]
								}],
								aux100: ["wm.SelectEditor", {"width":"150%","caption":"Grados"}, {"onchange":"l_menu_panel_menu_listaCursos"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"aux100.dataValue","targetId":"app.lsCurso"}, {}]
									}],
									editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
										}]
									}]
								}],
								aux101: ["wm.TextEditor", {"width":"150%","caption":"Cursos","display":"Select"}, {"onchange":"insccursoasigLiveVariable1"}, {
									editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_menu_panel_menu_listaCursos","expression":undefined}, {}]
										}]
									}]
								}],
								panel33: ["wm.Panel", {"height":"38px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									button18: ["wm.Button", {"height":"100%","width":"69px","caption":"Limpiar"}, {"onclick":"button18Click"}]
								}]
							}]
						}]
					}],
					p2: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"38px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right","lock":true,"roles":["10","20","21","22"]}, {}, {
						label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"44px","width":"79px","border":"0","caption":"Ver Filtros"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						picture1: ["wm.Picture", {"height":"34px","border":"0","width":"50px","source":"resources/images/up.png","aspect":"h"}, {"onclick":"picture1Click"}]
					}]
				}],
				panel_asignaturas: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
					page_subjects: ["wm.PageContainer", {"border":"0","pageName":"Subjects"}, {}]
				}],
				panel_personas: ["wm.Panel", {"height":"100%","width":"100%","lock":true,"showing":false}, {}, {
					head_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"153px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
						header_left_panel: ["wm.Layers", {"width":"290px"}, {}, {
							layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								personas_panel_personas_sel_grupo_familiar: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"width":"150%","caption":"Grupo Familiar","captionSize":"70%"}, {"onchange":"personas_panel_personas_sel_grupo_familiarChange"}, {
									editor: ["wm._SelectEditor", {"displayField":"grupoFamiliar","dataField":"idGrupoFamiliar","required":true,"pageSize":40}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_personas_lista_grupos_familiares","expression":undefined}, {}]
										}]
									}]
								}],
								personas_panel_personas_box_tipo_persona: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"width":"150%","caption":"Tipo persona"}, {"onchange":"personas_panel_personas_box_tipo_personaChange"}, {
									editor: ["wm._SelectEditor", {"displayField":"tipoPersona","dataField":"idTipoPersona","required":true,"pageSize":30}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_tipopersonas","expression":undefined}, {}]
										}]
									}]
								}],
								personas_panel_personas_box_nombre1: ["wm.TextEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"width":"150%","caption":"1er Nombre"}, {"onchange":"personas_panel_personas_box_nombre1Change"}, {
									editor: ["wm._TextEditor", {"required":true,"changeOnKey":true,"changeOnEnter":true}, {}]
								}],
								personas_panel_personas_box_nombre2: ["wm.TextEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"width":"150%","caption":"2do Nombre"}, {"onchange":"personas_panel_personas_box_nombre2Change"}, {
									editor: ["wm._TextEditor", {"required":true,"changeOnKey":true,"changeOnEnter":true}, {}]
								}],
								header_type_section: ["wm.Panel", {"height":"52px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									button_people: ["wm.Button", {"height":"100%","width":"96px","borderColor":"#059618","iconUrl":"resources/images/buttons/peoplecard.png","iconMargin":"0 0 0 0","margin":"8,2,0,2","caption":"Detalles<br/>y busquedas","iconWidth":"20px","iconHeight":"20px"}, {"onclick":"button_peopleClick"}],
									button_health: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White"]},"height":"100%","width":"96px","borderColor":"#AD1A10","iconUrl":"resources/images/buttons/health.png","iconMargin":"0 0px 0 0","margin":"8,2,0,2","caption":"Ficha <br>de Salud","iconWidth":"20px","iconHeight":"20px"}, {"onclick":"button_healthClick"}]
								}]
							}]
						}],
						header_right_panel: ["wm.Layers", {"width":"290px"}, {}, {
							layer2: ["wm.Layer", {"caption":"layer2","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								personas_panel_personas_box_documento: ["wm.TextEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"width":"150%","caption":"No. Documento","display":"Number","captionSize":"70%"}, {"onchange":"personas_panel_personas_box_documentoChange"}, {
									editor: ["wm._NumberEditor", {"required":true,"changeOnKey":true,"changeOnEnter":true}, {}]
								}],
								personas_panel_personas_box_codigo: ["wm.TextEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"width":"150%","caption":"Codigo"}, {"onchange":"personas_panel_personas_box_codigoChange"}, {
									editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
								}],
								personas_panel_personas_box_apellido1: ["wm.TextEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"width":"150%","caption":"1er Apellido"}, {"onchange":"personas_panel_personas_box_apellido1Change"}, {
									editor: ["wm._TextEditor", {"required":true,"changeOnKey":true,"changeOnEnter":true}, {}]
								}],
								personas_panel_personas_box_apellido2: ["wm.TextEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"width":"150%","caption":"2do Apellido"}, {"onchange":"personas_panel_personas_box_apellido2Change"}, {
									editor: ["wm._TextEditor", {"required":true,"changeOnKey":true,"changeOnEnter":true}, {}]
								}],
								panel8: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"bottom","layoutKind":"left-to-right"}, {}, {
									boton_detalles: ["wm.Button", {"height":"48px","width":"96px","caption":"Detalles","disabled":true,"showing":false}, {"onclick":"boton_detallesClick"}],
									personas_panel_personas_butt_buscar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"43px","width":"96px","borderColor":"#3853A1","caption":"Buscar"}, {"onclick":"personas_panel_personas_butt_buscarClick"}],
									personas_panel_personas_butt_limpiar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"43px","width":"96px","borderColor":"#E0E0E0","caption":"Limpiar"}, {"onclick":"personas_panel_personas_butt_limpiarClick"}]
								}]
							}]
						}],
						spacer14: ["wm.Spacer", {"height":"48px","width":"100%"}, {}],
						foto: ["wm.Panel", {"height":"100%","width":"158px","horizontalAlign":"left","verticalAlign":"top","padding":"5"}, {}, {
							img_tiny1: ["wm.Picture", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_TopStyleCurved4px"]},"height":"100%","border":"0","width":"100%","source":"resources/images/No_Image_Available.gif","aspect":"h"}, {}],
							panel_under_image: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"height":"35px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
								explorador_button: ["wm.Button", {"height":"100%","width":"30px","borderColor":"#059618","iconUrl":"resources/images/buttons/upload.png","iconMargin":"0 0px 0 0","caption":"","iconWidth":"20px","iconHeight":"20px"}, {"onclick":"explorador_buttonClick"}],
								foto_tipo_persona: ["wm.TextEditor", {"_classes":{"domNode":["wm_TextAlign_Center"]},"width":"100%","captionAlign":"left","height":"100%","readonly":true}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}]
							}]
						}]
					}],
					persona_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","border":"2","layoutKind":"left-to-right","borderColor":"#059618"}, {}, {
						personaDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_10px"]},"border":"0"}, {"onSelected":"personaDataGrid1Selected"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_personas_personaLiveVariable1","expression":undefined}, {}]
							}],
							codigo1: ["wm.DataGridColumn", {"caption":"Codigo","field":"codigo","columnWidth":"68px","index":1}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							apellido1: ["wm.DataGridColumn", {"caption":"Apellidos","field":"apellido1","columnWidth":"100%","index":2,"dataExpression":"${apellido1}+ \" \"+${apellido2}"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							nombre1: ["wm.DataGridColumn", {"caption":"Nombres","field":"nombre1","columnWidth":"100%","index":3,"dataExpression":"${nombre1}+ \" \"+${nombre2}"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column1: ["wm.DataGridColumn", {"caption":"Perfil","field":"tipoPersona.tipoPersona","columnWidth":"80px","index":4}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column2: ["wm.DataGridColumn", {"caption":"Grupo Familiar","field":"grupoFamiliar.grupoFamiliar"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						personaDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","borderColor":"#F0F0F0"}, {}, {
							personaLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"1891px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"padding":"8","fitToContentHeight":true}, {"onSuccess":"l_personas_personaLiveVariable1","onBeginUpdate":"personaLiveForm1BeginUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"personaDataGrid1.selectedItem","expression":undefined}, {}],
									wire1: ["wm.Wire", {"targetProperty":"dataOutput.grupoFamiliar","source":"grupoFamiliarRelatedEditor1.dataOutput","expression":undefined}, {}],
									wire2: ["wm.Wire", {"targetProperty":"dataOutput.pais","source":"paisRelatedEditor1.dataOutput","expression":undefined}, {}],
									wire3: ["wm.Wire", {"targetProperty":"dataOutput.tipoPersona","source":"tipoPersonaRelatedEditor1.dataOutput","expression":undefined}, {}]
								}],
								editPanel1: ["wm.EditPanel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"liveForm":"personaLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1","lock":false,"verticalAlign":"bottom","height":"45px"}, {}, {
									savePanel1: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
										saveButton1: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
											}]
										}],
										cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
									}],
									operationPanel1: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
										newButton1: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%","roles":["10","20","21","22"]}, {"onclick":"editPanel1.beginDataInsert"}],
										updateButton1: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true,"roles":["20","21","22","23","24","10","11","9","7","6","8","12","13"]}, {"onclick":"editPanel1.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
											}]
										}],
										deleteButton1: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true,"roles":["10","20","21","22","23","24"]}, {"onclick":"editPanel1.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
											}]
										}]
									}]
								}],
								alumno_proceso_matricula: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Verdana","wm_TextDecoration_Bold"]},"height":"32px","width":"100%","border":"0","caption":"Admisión / Matrícula:","borderColor":"#3853A1","showing":false}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								inscAlumCursoIdInscAlumCursoEditor1: ["wm.Editor", {"_classes":{"captionNode":["wm_FontColor_White","wm_FontFamily_Verdana","wm_TextDecoration_Bold"],"domNode":["wm_TextDecoration_Bold"]},"caption":"Curso Actual","width":"100%","height":"32px","display":"Select","readonly":true,"formField":"inscAlumCursoIdInscAlumCurso","padding":"0","disabled":true,"roles":["20","21","22","10","7","6","5","11"]}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_curso_actual","expression":undefined}, {}]
										}]
									}]
								}],
								general: ["wm.Panel", {"height":"774px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									layers17: ["wm.Layers", {"height":"110%"}, {}, {
										layer17: ["wm.Layer", {"caption":"layer17","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											label15: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"32px","width":"100%","border":"0","caption":"INFORMACIÓN GENERAL"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											idPersonaEditor1: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
												editor: ["wm._NumberEditor", {"required":true}, {}]
											}],
											grupoFamiliarRelatedEditor1: ["wm.RelatedEditor", {"formField":"grupoFamiliar"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"personaDataGrid1.selectedItem.grupoFamiliar","expression":undefined}, {}],
													wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"grupoFamiliarLookup1.selectedItem","expression":undefined}, {}]
												}],
												grupoFamiliarLookup1: ["wm.Editor", {"caption":"Grupo Familiar ","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
													editor: ["wm._LookupEditor", {"required":true,"displayField":"grupoFamiliar","autoDataSet":false,"startUpdate":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_personas_lista_grupos_familiares","expression":undefined}, {}]
														}]
													}]
												}]
											}],
											tipoPersonaRelatedEditor1: ["wm.RelatedEditor", {"formField":"tipoPersona"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"personaDataGrid1.selectedItem.tipoPersona","expression":undefined}, {}],
													wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoPersonaLookup1.selectedItem","expression":undefined}, {}]
												}],
												tipoPersonaLookup1: ["wm.Editor", {"caption":"Tipo Persona","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","displayValue":"Administrativo"}, {"onchange":"tipoPersonaLookup1Change"}, {
													editor: ["wm._LookupEditor", {"required":true,"displayField":"tipoPersona","autoDataSet":false,"startUpdate":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_tipopersonas","expression":undefined}, {}]
														}]
													}]
												}]
											}],
											codigoEditor1: ["wm.Editor", {"caption":"Codigo Estudiante","width":"100%","height":"26px","readonly":true,"formField":"codigo"}, {}, {
												editor: ["wm._TextEditor", {"promptMessage":"Campo necesario"}, {}]
											}],
											activoRetiradoEditor1: ["wm.Editor", {"caption":"Activo","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"activoRetirado","displayValue":true,"emptyValue":"false"}, {}, {
												editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
											}],
											matriculadoEditor1: ["wm.Editor", {"caption":"Matriculado","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"matriculado","displayValue":true,"emptyValue":"false"}, {}, {
												editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
											}],
											fechaRetiroEditor1: ["wm.Editor", {"caption":"Fecha retiro","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaRetiro"}, {}, {
												editor: ["wm._DateEditor", {}, {}]
											}],
											comentarioEditor2: ["wm.TextEditor", {"width":"100%","caption":"Comentario retiro","display":"TextArea","height":"50px","singleLine":false,"readonly":true,"formField":"comentarioRetiro"}, {}, {
												editor: ["wm._TextAreaEditor", {}, {}]
											}],
											nombre1Editor1: ["wm.Editor", {"caption":"1er Nombre","width":"100%","height":"26px","readonly":true,"formField":"nombre1"}, {"onchange":"nombre1Editor1Change"}, {
												editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
											}],
											nombre2Editor1: ["wm.Editor", {"caption":"2do Nombre","width":"100%","height":"26px","readonly":true,"formField":"nombre2"}, {"onchange":"nombre2Editor1Change"}, {
												editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
											}],
											apellido1Editor1: ["wm.Editor", {"caption":"1er Apellido","width":"100%","height":"26px","readonly":true,"formField":"apellido1"}, {"onchange":"apellido1Editor1Change"}, {
												editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
											}],
											apellido2Editor1: ["wm.Editor", {"caption":"2do Apellido","width":"100%","height":"26px","readonly":true,"formField":"apellido2"}, {"onchange":"apellido2Editor1Change"}, {
												editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
											}],
											tipoDocumentoEditor1: ["wm.Editor", {"caption":"Tipo documento","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"tipoDocumento"}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue"}, {}, {
													optionsVar: ["wm.Variable", {"type":"EntryData"}, {}],
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_tipo_identificacion","expression":undefined}, {}]
													}]
												}]
											}],
											noDocumentoEditor1: ["wm.Editor", {"caption":"No. Documento","width":"100%","height":"26px","readonly":true,"formField":"noDocumento"}, {"onchange":"noDocumentoEditor1Change"}, {
												editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
											}],
											emailEditor1: ["wm.Editor", {"caption":"E-mail","width":"100%","height":"26px","readonly":true,"formField":"email"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											nombreLdapEditor1: ["wm.Editor", {"caption":"Usuario","width":"100%","height":"26px","readonly":true,"formField":"nombreLdap","roles":["10","20","21","22","7","6","5","11"]}, {}, {
												editor: ["wm._TextEditor", {"promptMessage":"Usuario necesario"}, {}]
											}],
											panel34: ["wm.Panel", {"height":"28px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","roles":["5","6","7","8","10","11"]}, {}, {
												claveEditor1: ["wm.Editor", {"caption":"Clave","width":"100%","height":"26px","readonly":true,"formField":"clave","captionSize":"59%","roles":["10","20","21","22","7","8","6","23","24","11"]}, {}, {
													editor: ["wm._TextEditor", {"promptMessage":"Contraseña necesaria","password":true}, {}]
												}],
												picture4: ["wm.Picture", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","border":"0","width":"10%","source":"resources/images/comment_yellow.gif","padding":"5,0,0,0","roles":["5","6","7","8","10","11"]}, {"onclick":"picture4Click"}]
											}],
											sexoEditor1: ["wm.Editor", {"caption":"Género","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"sexo"}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Masculino, Femenino"}, {}, {
													optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
												}]
											}],
											fechaNacimientoEditor1: ["wm.Editor", {"caption":"Fecha nacimiento","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaNacimiento"}, {}, {
												editor: ["wm._DateEditor", {}, {}]
											}],
											nacionalidadEditor1: ["wm.Editor", {"caption":"Nacionalidad","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"nacionalidad"}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"nacionalidad","dataField":"nacionalidad"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_nacionalidades","expression":undefined}, {}]
													}]
												}]
											}],
											religionEditor1: ["wm.Editor", {"caption":"Religión","width":"100%","height":"26px","readonly":true,"formField":"religion"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											telefonoEditor1: ["wm.Editor", {"caption":"Telefono","width":"100%","height":"26px","readonly":true,"formField":"telefono"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											telefono2Editor1: ["wm.Editor", {"caption":"Telefono (opcional)","width":"100%","height":"26px","readonly":true,"formField":"telefono2"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											direccionResidenciaEditor1: ["wm.Editor", {"caption":"Direccion domicilio","width":"100%","height":"26px","readonly":true,"formField":"direccionResidencia"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											barrioEditor1: ["wm.Editor", {"caption":"Barrio","width":"100%","height":"26px","readonly":true,"formField":"barrio","roles":["10","20","21","22"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											paisRelatedEditor1: ["wm.RelatedEditor", {"formField":"pais","lock":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"personaDataGrid1.selectedItem.pais","expression":undefined}, {}],
													wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"paisLookup1.selectedItem","expression":undefined}, {}]
												}],
												paisLookup1: ["wm.Editor", {"caption":"País de nacimiento","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","displayValue":"Colombia"}, {}, {
													editor: ["wm._LookupEditor", {"required":true,"displayField":"pais","autoDataSet":false,"startUpdate":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_personas_lista_paises","expression":undefined}, {}]
														}]
													}]
												}]
											}],
											viveConEditor1: ["wm.Editor", {"caption":"Vive con","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"viveCon"}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"MADRE, PADRE, ACUDIENTE, AMBOS PADRES, NO APLICA"}, {}, {
													optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
												}]
											}]
										}]
									}]
								}],
								panel_estudiantes: ["wm.Panel", {"height":"307px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									layers18: ["wm.Layers", {}, {}, {
										layer18: ["wm.Layer", {"caption":"layer18","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											label16: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"32px","width":"100%","border":"0","caption":"DATOS DE NACIMIENTO"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											lugarNacimientoDepartamentoEditor1: ["wm.Editor", {"caption":"Departamento nacimiento","width":"100%","height":"26px","readonly":true,"formField":"lugarNacimientoDepartamento"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											lugarNacimientoMunicipioEditor1: ["wm.Editor", {"caption":"Ciudad de nacimiento","width":"100%","height":"26px","readonly":true,"formField":"lugarNacimientoMunicipio"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											fechaIngresoEditor1: ["wm.Editor", {"caption":"Fecha ingreso","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaIngreso","roles":["10","20","21","22","11"]}, {}, {
												editor: ["wm._DateEditor", {}, {}]
											}],
											gradoIngresoEditor1: ["wm.Editor", {"caption":"Grado ingreso","width":"100%","height":"26px","readonly":true,"formField":"gradoIngreso","roles":["10","20","21","22","11"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											cursoIngresoEditor1: ["wm.Editor", {"caption":"Curso ingreso","width":"100%","height":"26px","readonly":true,"formField":"cursoIngreso","showing":false,"roles":["10","20","21","22"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											lugarExpedicionDepartamentoEditor1: ["wm.Editor", {"caption":"Departamento de expedición","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"lugarExpedicionDepartamento","roles":["10","20","21","22","11"]}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Amazonas, Antioquia, Arauca, Atlantico, Bolivar, Boyaca, Caldas, Caqueta, Casanare, Cauca, Cesar, Choco, Cordoba, Cundinamarca, Bogotá D.C, Extranjero, Guainia, Guaviare, Huila, La Guajira, Magdalena, Meta, Narino, Norte de Santander, Putumayo, Quindio, Risaralda, San Andres y Providencia, Santander, Sucre, Tolima, Valle del Cauca, Vaupes, Vichada, Mayotte (General)"}, {}, {
													optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
												}]
											}],
											lugarExpedicionMunicipioEditor1: ["wm.Editor", {"caption":"Ciudad de expedición","width":"100%","height":"26px","readonly":true,"formField":"lugarExpedicionMunicipio","roles":["20","21","22","10","11"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											paisDomicilioEditor1: ["wm.Editor", {"caption":"Pais domicilio","width":"100%","height":"26px","readonly":true,"formField":"paisDomicilio","roles":["10","20","21","22","11"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											departamentoEditor1: ["wm.Editor", {"caption":"Departamento","width":"100%","height":"26px","readonly":true,"formField":"departamento","roles":["10","20","21","22","11"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											municipioEditor1: ["wm.Editor", {"caption":"Municipio","width":"100%","height":"26px","readonly":true,"formField":"municipio","roles":["10","20","21","22","11"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											colegioAnteriorEditor1: ["wm.Editor", {"caption":"Colegio o Jardín anterior","width":"100%","height":"26px","readonly":true,"formField":"colegioAnterior","roles":["10","20","21","22"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											nombrePadreExalumnoEditor1: ["wm.Editor", {"caption":"Nombre padre","width":"100%","height":"26px","readonly":true,"formField":"nombrePadreExalumno","showing":false,"roles":["10","20","21","22"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}]
										}]
									}]
								}],
								panel_salud: ["wm.Panel", {"height":"197px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									layers21: ["wm.Layers", {}, {}, {
										layer21: ["wm.Layer", {"caption":"layer21","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											label17: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"32px","width":"100%","border":"0","caption":"INFORMACIÓN SALUD"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											epsEditor1: ["wm.Editor", {"caption":"E.P.S","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"eps"}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"eps","dataField":"eps"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_eps","expression":undefined}, {}]
													}]
												}]
											}],
											tipoSangreEditor1: ["wm.Editor", {"caption":"Tipo de sangre (RH)","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"tipoSangre"}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"A+, A-, AB+, AB-, B+, B-, O+, O-, NO APLICA"}, {}, {
													optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
												}]
											}],
											saludPrepagadaEditor1: ["wm.Editor", {"caption":"Salud prepagada","width":"100%","height":"26px","readonly":true,"formField":"saludPrepagada"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											numeroContratoSaludEditor1: ["wm.Editor", {"caption":"No. contrato salud prepagada","width":"100%","height":"26px","readonly":true,"formField":"numeroContratoSalud"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											clinicaEmergenciaEditor1: ["wm.Editor", {"caption":"Clínica de emergencia","width":"100%","height":"26px","readonly":true,"formField":"clinicaEmergencia"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}]
										}]
									}]
								}],
								panel_servicios: ["wm.Panel", {"height":"200px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									layers20: ["wm.Layers", {}, {}, {
										layer20: ["wm.Layer", {"caption":"layer20","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											label19: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"32px","width":"100%","border":"0","caption":"INFORMACIÓN SERVICIOS"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											rutaMEditor1: ["wm.Editor", {"caption":"¿Ruta mañana?","width":"100%","height":"26px","readonly":true,"formField":"rutaM"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											rutaTEditor1: ["wm.Editor", {"caption":"¿Ruta tarde?","width":"100%","height":"26px","readonly":true,"formField":"rutaT"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											tomaAlmuerzoEditor1: ["wm.Editor", {"caption":"¿Toma almuerzo?","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"tomaAlmuerzo","displayValue":true,"emptyValue":"false","roles":["10","20","21","22","11"]}, {}, {
												editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
											}],
											tomaMediasNuevesEditor1: ["wm.Editor", {"caption":"¿Toma medias nueves?","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"tomaMediasNueves","displayValue":true,"emptyValue":"false","roles":["10","21","22","20","11"]}, {}, {
												editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
											}],
											tomaSeguroAccidentesEditor1: ["wm.Editor", {"caption":"¿Toma seguro accidentes?","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"tomaSeguroAccidentes","displayValue":true,"emptyValue":"false"}, {}, {
												editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
											}],
											noPlaquetaEditor1: ["wm.Editor", {"caption":"No Plaqueta bus","width":"100%","height":"26px","readonly":true,"formField":"noPlaqueta","roles":["10","20","21","22","11"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}]
										}]
									}]
								}],
								panel_otros: ["wm.Panel", {"height":"320px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									layers19: ["wm.Layers", {}, {}, {
										layer19: ["wm.Layer", {"caption":"layer19","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											label18: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"32px","width":"100%","border":"0","caption":"INFORMACIÓN NO ESTUDIANTES"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											promocionEditor1: ["wm.Editor", {"caption":"Promoción","width":"100%","height":"26px","readonly":true,"formField":"promocion","roles":["10","20","21","22","11"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											nivelAcademicoEditor1: ["wm.Editor", {"caption":"Nivel academico","width":"100%","height":"26px","readonly":true,"formField":"nivelAcademico","roles":["10","21","23","22","11"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											profesionEditor1: ["wm.Editor", {"caption":"Profesión","width":"100%","height":"26px","readonly":true,"formField":"profesion","roles":["10","21","22","20","11"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											empresaEditor1: ["wm.Editor", {"caption":"Empresa","width":"100%","height":"26px","readonly":true,"formField":"empresa"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											hijoDeExalumnoEditor1: ["wm.Editor", {"caption":"Ex alumno","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"hijoDeExalumno","displayValue":true,"emptyValue":"false","roles":["10","20","21","22","11"]}, {}, {
												editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
											}],
											cargoEditor1: ["wm.Editor", {"caption":"Cargo","width":"100%","height":"26px","readonly":true,"formField":"cargo","roles":["10","20","21","22","11"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											celularEditor1: ["wm.Editor", {"caption":"Celular","width":"100%","height":"26px","readonly":true,"formField":"celular"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											direccionOficinaEditor1: ["wm.Editor", {"caption":"Dirección oficina","width":"100%","height":"26px","readonly":true,"formField":"direccionOficina"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											telefonoOficinaEditor1: ["wm.Editor", {"caption":"Telefono oficina","width":"100%","height":"26px","readonly":true,"formField":"telefonoOficina"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											parentescoEditor1: ["wm.Editor", {"caption":"Parentesco","width":"100%","height":"26px","readonly":true,"formField":"parentesco","roles":["10","20","21","22","11"]}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}]
										}]
									}]
								}],
								codigoFamiliaEditor1: ["wm.Editor", {"caption":"CodigoFamilia","width":"100%","height":"26px","readonly":true,"formField":"codigoFamilia","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}]
							}]
						}]
					}],
					ficha_salud_panel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","border":"2","layoutKind":"left-to-right","lock":true,"borderColor":"#AD1A10","showing":false}, {}, {
						fichamedicaLiveForm1: ["wm.LiveForm", {"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"width":"50%"}, {"onSuccess":"fichamedicaLiveVariable1"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"fichamedicaDataGrid1.selectedItem","expression":undefined}, {}],
								wire1: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor4.dataOutput","expression":undefined}, {}]
							}],
							health_header: ["wm.Panel", {"height":"32px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
								label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_FontColor_White"]},"height":"100%","width":"100%","border":"0","caption":"FICHA DE SALUD"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}]
							}],
							idfichaMedicaEditor1: ["wm.Editor", {"caption":"Id Unico","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idfichaMedica"}, {}, {
								editor: ["wm._NumberEditor", {"required":true}, {}]
							}],
							personaRelatedEditor4: ["wm.RelatedEditor", {"formField":"persona","lock":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"fichamedicaDataGrid1.selectedItem.persona","expression":undefined}, {}]
								}],
								personaLookup2: ["wm.Editor", {"caption":"Id Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
									editor: ["wm._NumberEditor", {"required":true}, {}]
								}]
							}],
							fechaCreacionEditor1: ["wm.Editor", {"caption":"Fecha de creación","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaCreacion"}, {}, {
								editor: ["wm._DateEditor", {}, {}]
							}],
							medicoTratanteEditor1: ["wm.Editor", {"caption":"Medico Tratante","width":"100%","height":"26px","readonly":true,"formField":"medicoTratante"}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							alergiasEditor1: ["wm.Editor", {"caption":"Alergias","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"alergias","singleLine":false}, {}, {
								editor: ["wm._TextAreaEditor", {}, {}]
							}],
							enfermedadesRecientesEditor1: ["wm.Editor", {"caption":"Enfermedades recientes","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"enfermedadesRecientes","singleLine":false}, {}, {
								editor: ["wm._TextAreaEditor", {}, {}]
							}],
							antecedentesQuirurgicosEditor1: ["wm.Editor", {"caption":"Antecedentes quirúrgicos","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"antecedentesQuirurgicos","singleLine":false}, {}, {
								editor: ["wm._TextAreaEditor", {}, {}]
							}],
							medicamentosActualidadEditor1: ["wm.Editor", {"caption":"Medicamentos actualidad","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"medicamentosActualidad","singleLine":false}, {}, {
								editor: ["wm._TextAreaEditor", {}, {}]
							}],
							medicamentosAlertaEditor1: ["wm.Editor", {"caption":"Medicamentos <u>que no debe</u> recibir","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"medicamentosAlerta","singleLine":false}, {}, {
								editor: ["wm._TextAreaEditor", {}, {}]
							}],
							recomendacionesEspecialesEditor1: ["wm.Editor", {"caption":"Recomendaciones especiales","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"recomendacionesEspeciales","singleLine":false}, {}, {
								editor: ["wm._TextAreaEditor", {}, {}]
							}],
							editPanel8: ["wm.EditPanel", {"liveForm":"fichamedicaLiveForm1","savePanel":"savePanel8","operationPanel":"operationPanel8"}, {}, {
								savePanel8: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
									saveButton8: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel8.saveData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel8.formInvalid","expression":undefined}, {}]
										}]
									}],
									cancelButton8: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel8.cancelEdit"}]
								}],
								operationPanel8: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									newButton8: ["wm.RoundedButton", {"caption":"New","width":"100px","height":"100%","showing":false}, {"onclick":"editPanel8.beginDataInsert"}],
									updateButton8: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel8.beginDataUpdate"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel8.formUneditable","expression":undefined}, {}]
										}]
									}],
									deleteButton8: ["wm.RoundedButton", {"caption":"Eliminar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel8.deleteData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel8.formUneditable","expression":undefined}, {}]
										}]
									}]
								}]
							}]
						}],
						fichamedicaDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","showing":false}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"fichamedicaLiveVariable1","expression":undefined}, {}]
							}],
							idfichaMedica1: ["wm.DataGridColumn", {"caption":"+","field":"idfichaMedica","columnWidth":"27px","display":"Number","autoSize":undefined}, {}, {
								format: ["wm.NumberFormatter", {}, {}]
							}],
							medicoTratante1: ["wm.DataGridColumn", {"caption":"MedicoTratante","field":"medicoTratante","columnWidth":"100%","index":3}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column1: ["wm.DataGridColumn", {"caption":"Codigo","field":"persona.codigo","columnWidth":"20%","index":1}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column2: ["wm.DataGridColumn", {"caption":"Nombre Alumno","field":"persona.nombre1","columnWidth":"100%","index":2,"dataExpression":"${persona.apellido1}+\" \"+${persona.apellido1}+\" \"+${persona.nombre1}+\" \"+${persona.nombre2}"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}]
					}]
				}],
				panel_extras: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {}, {
					panel9: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
						layers4: ["wm.Layers", {}, {}, {
							layer4: ["wm.Layer", {"caption":"layer4","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								grupofamiliarLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
									grupofamiliarGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Grupo Familiar","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1"}, {}, {
										panel10: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_BackgroundColor_VeryLightGray"]},"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
											textEditor1: ["wm.TextEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"100%","caption":"Grupo Familiar"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											button9: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"40px","width":"96px","caption":"Buscar"}, {"onclick":"grupofamiliarLiveVariable1"}]
										}],
										grupofamiliarDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]},"border":"0"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"grupofamiliarLiveVariable1","expression":undefined}, {}]
											}],
											idGrupoFamiliar1: ["wm.DataGridColumn", {"caption":"●","field":"idGrupoFamiliar","columnWidth":"79px","display":"Number","autoSize":undefined}, {}, {
												format: ["wm.NumberFormatter", {}, {}]
											}],
											grupoFamiliar1: ["wm.DataGridColumn", {"caption":"Grupo del Familiar","field":"grupoFamiliar","columnWidth":"100%","index":1}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}]
									}],
									grupofamiliarDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1"}, {}, {
										grupofamiliarLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"120%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"grupofamiliarLiveForm1Success"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"grupofamiliarDataGrid1.selectedItem","expression":undefined}, {}]
											}],
											idGrupoFamiliarEditor1: ["wm.Editor", {"caption":"ID Grupo Familia","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idGrupoFamiliar"}, {}, {
												editor: ["wm._NumberEditor", {"required":true}, {}]
											}],
											grupoFamiliarEditor1: ["wm.Editor", {"caption":"Grupo Familiar","width":"100%","height":"26px","readonly":true,"formField":"grupoFamiliar"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											grupoLdapEditor1: ["wm.Editor", {"caption":"Grupo LDAP","width":"100%","height":"26px","readonly":true,"formField":"grupoLdap"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											editPanel3: ["wm.EditPanel", {"liveForm":"grupofamiliarLiveForm1","savePanel":"savePanel3","operationPanel":"operationPanel3"}, {}, {
												savePanel3: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
													saveButton3: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel3.saveData"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formInvalid","expression":undefined}, {}]
														}]
													}],
													cancelButton3: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel3.cancelEdit"}]
												}],
												operationPanel3: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													newButton3: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel3.beginDataInsert"}],
													updateButton3: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel3.beginDataUpdate"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formUneditable","expression":undefined}, {}]
														}]
													}],
													deleteButton3: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel3.deleteData"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formUneditable","expression":undefined}, {}]
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layers3: ["wm.Layers", {}, {}, {
							layer3: ["wm.Layer", {"caption":"layer3","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								tipopersonaLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
									tipopersonaGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Tipo Persona","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1"}, {}, {
										tipopersonaDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_extras_tipopersonaLiveVariable1","expression":undefined}, {}]
											}],
											idTipoPersona1: ["wm.DataGridColumn", {"caption":"●","field":"idTipoPersona","columnWidth":"70px","display":"Number","autoSize":undefined}, {}, {
												format: ["wm.NumberFormatter", {}, {}]
											}],
											tipoPersona1: ["wm.DataGridColumn", {"caption":"Tipo Persona","field":"tipoPersona","columnWidth":"100%","index":1}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}]
									}],
									tipopersonaDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1"}, {}, {
										tipopersonaLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_extras_tipopersonaLiveVariable1"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"tipopersonaDataGrid1.selectedItem","expression":undefined}, {}]
											}],
											idTipoPersonaEditor1: ["wm.Editor", {"caption":"ID Tipo de Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idTipoPersona"}, {}, {
												editor: ["wm._NumberEditor", {"required":true}, {}]
											}],
											tipoPersonaEditor1: ["wm.Editor", {"caption":"Tipo Persona","width":"100%","height":"26px","readonly":true,"formField":"tipoPersona"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											editPanel2: ["wm.EditPanel", {"liveForm":"tipopersonaLiveForm1","savePanel":"savePanel2","operationPanel":"operationPanel2"}, {}, {
												savePanel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
													saveButton2: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel2.saveData"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formInvalid","expression":undefined}, {}]
														}]
													}],
													cancelButton2: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel2.cancelEdit"}]
												}],
												operationPanel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													newButton2: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel2.beginDataInsert"}],
													updateButton2: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel2.beginDataUpdate"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
														}]
													}],
													deleteButton2: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel2.deleteData"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				panel_docentes: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","border":"1","lock":true,"borderColor":"#000000","showing":false}, {}, {
					panel45: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
						panel17: ["wm.Panel", {"height":"255%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							layers5: ["wm.Layers", {"width":"120%"}, {}, {
								layer5: ["wm.Layer", {"caption":"layer5","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									panel18: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_BackgroundColor_VeryLightGray"]},"height":"36px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
										sySelect: ["wm.SelectEditor", {"width":"240px","caption":"Año escolar","captionSize":"60%","height":"26px"}, {"onchange":"suscritoBox"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"sySelect.dataValue","targetId":"app.asignaturaLV"}, {}]
											}],
											editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_sy","expression":undefined}, {}]
												}]
											}]
										}],
										gradoSelect: ["wm.SelectEditor", {"caption":"Grado","height":"26px"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"gradoSelect.dataValue","targetId":"app.asignaturaLV"}, {}],
												wire1: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"gradoSelect.dataValue","targetId":"app.cursosLV"}, {}]
											}],
											editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
												}]
											}]
										}],
										button3: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"96px","caption":"Buscar"}, {"onclick":"button3Click"}]
									}],
									asignaturaPanel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
										panel11: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											asignaturaDG: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_docentes_asignaturas","expression":undefined}, {}]
												}],
												asignatura1: ["wm.DataGridColumn", {"caption":"Asignatura","field":"id.asignatura","columnWidth":"100%","index":1}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												idAsignatura1: ["wm.DataGridColumn", {"caption":"●","field":"id.idAsignatura","columnWidth":"75px"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column1: ["wm.DataGridColumn", {"caption":"Subject","field":"id.subject","columnWidth":"100%","index":2}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}]
											}]
										}]
									}],
									cursoPanel: ["wm.Panel", {"height":"140px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
										panel6: ["wm.Panel", {"height":"134px","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											cursoDG: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_docentes_cursos","expression":undefined}, {}]
												}],
												curso1: ["wm.DataGridColumn", {"caption":"Curso","field":"curso","columnWidth":"100%","index":1}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												idCurso1: ["wm.DataGridColumn", {"caption":"●","field":"idCurso","columnWidth":"57px"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layers6: ["wm.Layers", {}, {}, {
							layer6: ["wm.Layer", {"caption":"layer6","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								panel16: ["wm.Panel", {"height":"190px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									layers8: ["wm.Layers", {}, {}, {
										layer8: ["wm.Layer", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_14px"]},"caption":"layer8","horizontalAlign":"right","verticalAlign":"top"}, {}, {
											codigo1: ["wm.TextEditor", {"width":"100%","caption":"Codigo"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"filter.codigo","source":"codigo1.dataValue","targetId":"app.profesores"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											noidentidad: ["wm.TextEditor", {"width":"100%","caption":"No. Identidad"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"filter.noDocumento","source":"noidentidad.dataValue","targetId":"app.profesores"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											nombre1: ["wm.TextEditor", {"width":"150%","caption":"1er Nombre"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"filter.nombre1","source":"nombre1.dataValue","targetId":"app.profesores"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											nombre2: ["wm.TextEditor", {"width":"150%","caption":"2do Nombre"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"filter.nombre2","source":"nombre2.dataValue","targetId":"app.profesores"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											apellido1: ["wm.TextEditor", {"width":"150%","caption":"1er Apellido"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"filter.apellido1","source":"apellido1.dataValue","targetId":"app.profesores"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											apellido2: ["wm.TextEditor", {"width":"150%","caption":"2do Apellido"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"filter.apellido2","source":"apellido2.dataValue","targetId":"app.profesores"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											tipoPersonaSelect: ["wm.SelectEditor", {"width":"150%","caption":"Tipo Persona","showing":false}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"filter.tipoPersona.idTipoPersona","source":"tipoPersonaSelect.dataValue","targetId":"app.profesores"}, {}]
												}],
												editor: ["wm._SelectEditor", {"displayField":"tipoPersona","dataField":"idTipoPersona"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_tipopersonas","expression":undefined}, {}]
													}]
												}]
											}],
											button2: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"40px","width":"96px","caption":"Buscar"}, {"onclick":"l_docentes_lista_personas"}]
										}]
									}]
								}],
								docentesDG: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","borderColor":"#000000"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_docentes_lista_personas","expression":undefined}, {}]
									}],
									noDocumento1: ["wm.DataGridColumn", {"caption":"●","field":"id.idPersona","columnWidth":"83px"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									nombre3: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","columnWidth":"100%","index":1,"dataExpression":"${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									apellido3: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","columnWidth":"100%","index":3,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}]
							}]
						}]
					}],
					panel46: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
						layers27: ["wm.Layers", {}, {}, {
							layer27: ["wm.Layer", {"caption":"layer27","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								panel32: ["wm.Panel", {"height":"34px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									button4: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","width":"37px","caption":"❯❯"}, {"onclick":"button4Click"}],
									button16: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","width":"37px","caption":"❮❮","showing":false}, {"onclick":"button16Click"}]
								}],
								asignarPanel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
									insccursoasigGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Tabla Docentes y Asignaturas","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","border":"3,3,3,3"}, {}, {
										insccursoasigDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]},"border":"0"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"insccursoasigLiveVariable1","expression":undefined}, {}]
											}],
											column2: ["wm.DataGridColumn", {"caption":"Asignatura","field":"asignatura.asignatura","columnWidth":"120%","index":2}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column3: ["wm.DataGridColumn", {"caption":"Nombres","field":"persona.nombre1","columnWidth":"100%","index":4,"dataExpression":"${persona.nombre1}+\" \"+${persona.nombre2}"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column4: ["wm.DataGridColumn", {"caption":"Apellidos","field":"persona.apellido1","columnWidth":"100%","index":5,"dataExpression":"${persona.apellido1}+\" \"+${persona.apellido2}"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column6: ["wm.DataGridColumn", {"caption":"●","field":"asignatura.idAsignatura","columnWidth":"70px","index":1}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}]
									}],
									insccursoasigLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
										insccursoasigDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0"}, {}, {
											insccursoasigLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_14px"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"insccursoasigLiveVariable1","onBeginInsert":"insccursoasigLiveForm1BeginInsert"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"insccursoasigDataGrid1.selectedItem","expression":undefined}, {}],
													wire1: ["wm.Wire", {"targetProperty":"dataOutput.curso","source":"cursoRelatedEditor1.dataOutput","expression":undefined}, {}],
													wire2: ["wm.Wire", {"targetProperty":"dataOutput.asignatura","source":"asignaturaRelatedEditor1.dataOutput","expression":undefined}, {}],
													wire3: ["wm.Wire", {"targetProperty":"dataOutput.periodo","source":"periodoRelatedEditor1.dataOutput","expression":undefined}, {}],
													wire4: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor1.dataOutput","expression":undefined}, {}]
												}],
												idInscCursoAsigEditor1: ["wm.Editor", {"caption":"ID","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscCursoAsig"}, {}, {
													editor: ["wm._NumberEditor", {"required":true}, {}]
												}],
												periodoRelatedEditor1: ["wm.RelatedEditor", {"formField":"periodo","width":"249%"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"insccursoasigDataGrid1.selectedItem.periodo","expression":undefined}, {}],
														wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"periodoLookup1.selectedItem","expression":undefined}, {}]
													}],
													periodoLookup1: ["wm.Editor", {"caption":"Año escolar","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
														editor: ["wm._LookupEditor", {"displayField":"periodo"}, {}]
													}]
												}],
												layers26: ["wm.Layers", {"height":"90px"}, {}, {
													layer26: ["wm.Layer", {"caption":"layer26","horizontalAlign":"left","verticalAlign":"top"}, {}, {
														asignaturaRelatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"asignatura"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"insccursoasigDataGrid1.selectedItem.asignatura","expression":undefined}, {}],
																wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"asignaturaLookup2.selectedItem","expression":undefined}, {}]
															}],
															asignaturaLookup1: ["wm.Editor", {"caption":"ID Asignatura","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAsignatura"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}],
														cursoRelatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"curso","lock":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"insccursoasigDataGrid1.selectedItem.curso","expression":undefined}, {}],
																wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"cursoLookup2.selectedItem","expression":undefined}, {}]
															}],
															cursoLookup1: ["wm.Editor", {"caption":"ID Curso","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idCurso"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}],
														personaRelatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"persona","lock":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"insccursoasigDataGrid1.selectedItem.persona","expression":undefined}, {}],
																wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"personaLookup2.selectedItem","expression":undefined}, {}]
															}],
															personaLookup1: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}]
													}]
												}],
												editPanel4: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"liveForm":"insccursoasigLiveForm1","savePanel":"savePanel4","operationPanel":"operationPanel4"}, {}, {
													savePanel4: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
														saveButton4: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel4.saveData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formInvalid","expression":undefined}, {}]
															}]
														}],
														cancelButton4: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel4.cancelEdit"}]
													}],
													operationPanel4: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														newButton4: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel4.beginDataInsert"}],
														updateButton4: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel4.beginDataUpdate"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formUneditable","expression":undefined}, {}]
															}]
														}],
														deleteButton4: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel4.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formUneditable","expression":undefined}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				panel_alumnos: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"2","lock":true,"showing":false}, {}, {
					panel13: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_BackgroundColor_VeryLightGray"]},"height":"40px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
						selectEditor3: ["wm.SelectEditor", {"width":"200px","caption":"Periodo Escolar"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"selectEditor3.dataValue","targetId":"app.estudiantesLV"}, {}]
							}],
							editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_sy","expression":undefined}, {}]
								}]
							}]
						}],
						selectEditor1: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_FontSizePx_14px"]},"width":"173px","caption":"Grado"}, {"onchange":"l_alumnos_calificaciones_lista_curso"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"selectEditor1.dataValue","targetId":"app.ls2Cursos"}, {}]
							}],
							editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
								}]
							}]
						}],
						selectEditor2: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"170px","caption":"Curso","borderColor":"#000000"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"selectEditor2.dataValue","targetId":"app.estudiantesLV"}, {}]
							}],
							editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_alumnos_calificaciones_lista_curso","expression":undefined}, {}]
								}]
							}]
						}],
						buscar: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"height":"34px","width":"80px","caption":"Buscar"}, {"onclick":"buscarClick"}],
						button11: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"height":"34px","width":"96px","caption":"Limpiar"}, {}]
					}],
					panel14: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
						layers10: ["wm.Layers", {}, {}, {
							layer10: ["wm.Layer", {"caption":"layer10","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								panel21: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"206px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									layers12: ["wm.Layers", {}, {}, {
										layer12: ["wm.Layer", {"caption":"layer12","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											n1: ["wm.TextEditor", {"width":"150%","caption":"1er Nombre"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											n2: ["wm.TextEditor", {"width":"150%","caption":"2do Nombre"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											a1: ["wm.TextEditor", {"width":"150%","caption":"1er Apellido"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											a2: ["wm.TextEditor", {"width":"150%","caption":"2do Apellido"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}]
										}]
									}],
									layers11: ["wm.Layers", {}, {}, {
										layer11: ["wm.Layer", {"caption":"layer11","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											c1: ["wm.TextEditor", {"width":"150%","caption":"Codigo"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											t1: ["wm.SelectEditor", {"width":"150%","caption":"Tipo"}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"tipoPersona","dataField":"idTipoPersona"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_tipopersonas","expression":undefined}, {}]
													}]
												}]
											}],
											panel19: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												button12: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"96px","caption":"Buscar"}, {"onclick":"l_alumnos_caificaciones_lista_Personas"}],
												button13: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"75px","caption":"Limpiar"}, {"onclick":"button13Click"}]
											}]
										}]
									}]
								}],
								dataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#000000"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_alumnos_caificaciones_lista_Personas","expression":undefined}, {}]
									}],
									idPersona1: ["wm.DataGridColumn", {"caption":"●","field":"idPersona","columnWidth":"62px","autoSize":undefined}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									tipoPersonaTipoPersona1: ["wm.DataGridColumn", {"caption":"Tipo","field":"tipoPersona.tipoPersona","columnWidth":"80px","index":6,"autoSize":undefined}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column1: ["wm.DataGridColumn", {"caption":"Apellidos","field":"apellido1","columnWidth":"100%","index":2,"dataExpression":"${apellido1}+\" \"+${apellido2}"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column2: ["wm.DataGridColumn", {"caption":"Nombres","field":"nombre1","columnWidth":"100%","index":4,"dataExpression":"${nombre1}+\" \"+${nombre2}"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}]
							}]
						}],
						layers9: ["wm.Layers", {}, {}, {
							layer9: ["wm.Layer", {"caption":"layer9","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								inscalumcursoDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px","wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold wm_SilverBlueTheme_LightBlueInsetPanel","margin":"0","borderColor":"#4D90FE","border":"3,3,3,3","height":"206px"}, {}, {
									inscalumcursoLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"inscalumcursoLiveVariable1","onBeginInsert":"inscalumcursoLiveForm1BeginInsert"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoDataGrid1.selectedItem","expression":undefined}, {}],
											wire1: ["wm.Wire", {"targetProperty":"dataOutput.curso","source":"cursoRelatedEditor2.dataOutput","expression":undefined}, {}],
											wire2: ["wm.Wire", {"targetProperty":"dataOutput.sy","source":"syRelatedEditor1.dataOutput","expression":undefined}, {}],
											wire3: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor2.dataOutput","expression":undefined}, {}]
										}],
										idInscAlumCursoEditor1: ["wm.Editor", {"caption":"ID","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumCurso"}, {}, {
											editor: ["wm._NumberEditor", {"required":true}, {}]
										}],
										panel20: ["wm.Panel", {"height":"26px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
											calificacionEditor1: ["wm.Editor", {"caption":"Calif.num","width":"60%","height":"26px","display":"Number","readonly":true,"formField":"calificacion"}, {}, {
												editor: ["wm._NumberEditor", {}, {}]
											}],
											califCharEditor1: ["wm.Editor", {"caption":"Calificacion","width":"80%","height":"26px","readonly":true,"formField":"califChar"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}]
										}],
										syRelatedEditor1: ["wm.RelatedEditor", {"formField":"sy"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoDataGrid1.selectedItem.sy","expression":undefined}, {}]
											}],
											syLookup1: ["wm.Editor", {"caption":"Año escolar","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSy"}, {}, {
												editor: ["wm._NumberEditor", {"required":true}, {}]
											}]
										}],
										fechaMatriculaEditor1: ["wm.Editor", {"caption":"Fecha Matricula","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaMatricula","disabled":true}, {}, {
											editor: ["wm._DateEditor", {"required":true}, {}]
										}],
										cursoRelatedEditor2: ["wm.RelatedEditor", {"formField":"curso"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoDataGrid1.selectedItem.curso","expression":undefined}, {}]
											}],
											cursoLookup3: ["wm.Editor", {"caption":"ID Curso","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idCurso"}, {}, {
												editor: ["wm._NumberEditor", {"required":true}, {}]
											}]
										}],
										personaRelatedEditor2: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoDataGrid1.selectedItem.persona","expression":undefined}, {}]
											}],
											personaLookup3: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
												editor: ["wm._NumberEditor", {"required":true}, {}]
											}]
										}],
										editPanel5: ["wm.EditPanel", {"liveForm":"inscalumcursoLiveForm1","savePanel":"savePanel5","operationPanel":"operationPanel5","lock":false}, {}, {
											savePanel5: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
												saveButton5: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel5.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formInvalid","expression":undefined}, {}]
													}]
												}],
												cancelButton5: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel5.cancelEdit"}]
											}],
											operationPanel5: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												newButton5: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel5.beginDataInsert"}],
												updateButton5: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel5.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formUneditable","expression":undefined}, {}]
													}]
												}],
												deleteButton5: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel5.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formUneditable","expression":undefined}, {}]
													}]
												}]
											}]
										}]
									}]
								}],
								inscalumcursoLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
									inscalumcursoGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0"}, {}, {
										inscalumcursoDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]},"border":"0"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoLiveVariable1","expression":undefined}, {}]
											}],
											column2: ["wm.DataGridColumn", {"caption":"Codigo","field":"persona.codigo","columnWidth":"65px","index":1}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column3: ["wm.DataGridColumn", {"caption":"Apellidos","field":"persona.apellido1","columnWidth":"120%","index":2,"dataExpression":"${persona.apellido1}+\" \"+${persona.apellido2}"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column4: ["wm.DataGridColumn", {"caption":"Nombres","field":"persona.nombre1","columnWidth":"120%","index":3,"dataExpression":"${persona.nombre1}+\" \"+${nombre.nombre2}"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column5: ["wm.DataGridColumn", {"caption":"Año escolar","field":"sy.schoolYear","columnWidth":"68px","index":4}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				panel_secretaria: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {}, {
					layers13: ["wm.Layers", {}, {}, {
						layer13: ["wm.Layer", {"caption":"layer13","horizontalAlign":"left","verticalAlign":"top"}, {}, {
							secretaria_panel_contenido: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
								tabLayers1: ["wm.TabLayers", {}, {}, {
									Certificados: ["wm.Layer", {"caption":"Certificados","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										secreatria_panel_menu: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"32px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","padding":"2","layoutKind":"left-to-right","borderColor":"#4D90FE"}, {}, {
											bMostrar: ["wm.Button", {"height":"17px","width":"19px","borderColor":"#4D90FE","border":"0","margin":"0","caption":"","iconWidth":"29px","iconHeight":"29px"}, {"onclick":"bMostrarClick"}],
											bOcultar: ["wm.Button", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"29px","width":"31px","iconUrl":"resources/images/up.png","border":"0","margin":"2","caption":"","iconWidth":"29px","hint":"Ocultar opcion de Reportes","iconHeight":"29px","showing":false}, {"onclick":"bOcultarClick"}],
											label20: ["wm.Label", {"height":"100%","width":"350%","border":"0","caption":"Importante: Para crear un reporte (PDF) asegurese de seleccionar primero un estudiante."}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}],
										acciones: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_Border_BottomStyleCurved4px"]},"height":"146px","width":"100%","horizontalAlign":"left","verticalAlign":"top","border":"1","layoutKind":"left-to-right","borderColor":"#4D90FE"}, {}, {
											layers14: ["wm.Layers", {"width":"286px"}, {}, {
												layer14: ["wm.Layer", {"caption":"layer14","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													label21: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"33px","width":"100%","border":"0","caption":"Tipo certificado"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													label12: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"33px","width":"100%","border":"0","caption":"Estudiantes Retirados"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													label13: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"45px","width":"100%","border":"0","caption":"Estudiantes matriculados y activos","singleLine":false}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													label14: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"45px","width":"100%","border":"0","caption":"Informacion familiar  estudiantes matriculados","singleLine":false}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}]
											}],
											layers15: ["wm.Layers", {"width":"186px"}, {}, {
												layer15: ["wm.Layer", {"caption":"layer15","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													c_persona: ["wm.TextEditor", {"width":"150%","caption":"Persona","showing":false,"captionSize":"80%","readonly":true,"borderColor":"#000000"}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}],
													c_year: ["wm.TextEditor", {"width":"150%","caption":"Año escolar","showing":false,"captionSize":"80%","readonly":true,"borderColor":"#000000"}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}],
													fecha_reporte: ["wm.DateEditor", {"width":"150%","displayValue":"09/06/2014","caption":"Fecha de reporte","captionSize":"120%","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
														}],
														editor: ["wm._DateEditor", {}, {}]
													}],
													selectEditor5: ["wm.SelectEditor", {"width":"100%","caption":"Año escolar","captionSize":"60%","height":"33px","showing":false}, {}, {
														editor: ["wm._SelectEditor", {}, {}]
													}],
													selectorReport: ["wm.SelectEditor", {"width":"100%","captionSize":"80%","disabled":true,"captionAlign":"left","height":"33px"}, {"onchange":"selectorReportChange"}, {
														editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"lsReportes","expression":undefined}, {}]
															}]
														}]
													}]
												}]
											}],
											buttons_panel: ["wm.Panel", {"height":"100%","width":"164px","horizontalAlign":"left","verticalAlign":"top","lock":true}, {}, {
												b_libroOficial: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"34px","width":"100%","borderColor":"#E0E0E0","margin":"1","caption":"Crear certificado"}, {"onclick":"b_libroOficialClick"}],
												b_retirados: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"34px","width":"100%","borderColor":"#E0E0E0","margin":"1","caption":"Crear"}, {"onclick":"b_retiradosClick"}],
												b_matriculados: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"34px","width":"100%","borderColor":"#E0E0E0","margin":"1","caption":"Crear listado"}, {"onclick":"b_matriculadosClick"}],
												b_lista_grupo_familiar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"34px","width":"100%","borderColor":"#E0E0E0","margin":"1","caption":"Listado Grupo Familiar"}, {"onclick":"b_lista_grupo_familiarClick"}]
											}],
											panel_certificado_parcial: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {}, {
												suscritoBox: ["wm.TextEditor", {"width":"151px","caption":"Suscrito académico","display":"Select","captionAlign":"left","height":"48px","captionSize":"80%","captionPosition":"top"}, {"onchange":"suscritoBoxChange"}, {
													editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true,"startUpdate":true}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listaSuscritos","expression":undefined}, {}]
														}]
													}]
												}],
												headBox: ["wm.TextEditor", {"width":"100%","caption":"Encabezado","showing":false,"disabled":true,"captionAlign":"left"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												panel37: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													fecha1Box: ["wm.DateEditor", {"captionAlign":"left","height":"100%","caption":"Desde","captionPosition":"top"}, {}, {
														editor: ["wm._DateEditor", {"required":true,"promptMessage":"Escoja la fecha desde que se inicio el año escolar ej. Agosto 08 2011 (2011/08/08)"}, {}]
													}],
													fecha2Box: ["wm.DateEditor", {"captionAlign":"left","height":"100%","caption":"Hasta","captionPosition":"top"}, {}, {
														editor: ["wm._DateEditor", {"required":true,"promptMessage":"Selecciona la fecha para la cual se calculará las calificaciones. ej. 2012/03/07"}, {}]
													}]
												}],
												panel35: ["wm.Panel", {"height":"38px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
													suscrito1Box: ["wm.TextEditor", {"width":"150%","caption":"SUSCRITO #1","disabled":true}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}],
													cargo1Box: ["wm.TextEditor", {"caption":"Cargo","disabled":true}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}]
												}],
												panel36: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
													suscrito2Box: ["wm.TextEditor", {"width":"150%","caption":"SUSCRITO #2","disabled":true}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}],
													cargo2Box: ["wm.TextEditor", {"caption":"Cargo","disabled":true}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}]
												}]
											}]
										}],
										panel25: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_BackgroundColor_VeryLightGray"]},"height":"53px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
											s_Anio_escolar: ["wm.SelectEditor", {"width":"240px","caption":"Año escolar","captionSize":"80%","height":"28px"}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","required":true}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_sy","expression":undefined}, {}]
													}]
												}]
											}],
											s_Grado: ["wm.SelectEditor", {"width":"200px","caption":"Grado","height":"28px"}, {"onchange":"a_lista_cursoHql"}, {
												editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado","required":true,"startUpdate":true}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
													}]
												}]
											}],
											s_Curso: ["wm.SelectEditor", {"width":"195px","caption":"Curso","height":"28px"}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"id","required":true}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_cursoHql","expression":undefined}, {}]
													}]
												}]
											}],
											button7: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"34px","width":"96px","borderColor":"#4D90FE","caption":"Buscar"}, {"onclick":"l_secretaria_insc_personas_curso"}],
											spacer6: ["wm.Spacer", {"height":"48px","width":"100%"}, {}],
											reloadVariable: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_12px"]},"height":"34px","width":"42px","borderColor":"#4D90FE","caption":"⟲"}, {"onclick":"reloadVariableClick"}]
										}],
										panel38: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
											a_t_PersonasxCurso: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0"}, {"onSelected":"a_t_PersonasxCursoSelected","onCellClick":"a_t_PersonasxCursoCellClick"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_secretaria_insc_personas_curso","expression":undefined}, {}]
												}],
												column2: ["wm.DataGridColumn", {"caption":"ID Persona","field":"id.idPersona","columnWidth":"83px","index":1}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column3: ["wm.DataGridColumn", {"caption":"Codigo","field":"id.codigo","columnWidth":"76px","index":2}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column5: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","columnWidth":"100%","index":4,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column6: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","columnWidth":"100%","index":5,"dataExpression":"${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}]
											}],
											spacer5: ["wm.Spacer", {"height":"48px","width":"13px"}, {}],
											a_t_Asignatura: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","width":"120%"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_secretaria_insc_alum_asig","expression":undefined}, {}]
												}],
												porcentaje1: ["wm.DataGridColumn", {"caption":"Porcentaje","field":"id.porcentaje","columnWidth":"62px","index":5,"display":"Number"}, {}, {
													format: ["wm.NumberFormatter", {"digits":1,"round":true}, {}]
												}],
												calificacion1: ["wm.DataGridColumn", {"caption":"Númerica","field":"id.calificacion","columnWidth":"52px","index":3,"display":"Number"}, {}, {
													format: ["wm.NumberFormatter", {}, {}]
												}],
												califChar1: ["wm.DataGridColumn", {"caption":"Calificación","field":"id.califChar","columnWidth":"70px","index":2}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column1: ["wm.DataGridColumn", {"caption":"Asignatura","field":"id.asignatura","columnWidth":"100%","index":1}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column2: ["wm.DataGridColumn", {"caption":"+","field":"id.idAsignatura","columnWidth":"62px"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column4: ["wm.DataGridColumn", {"caption":"Logrados/<br>Esperados","field":"id.esperados","columnWidth":"60px","index":4,"display":"Number","dataExpression":"${id.logrados}+\" de \"+${id.esperados}"}, {}, {
													format: ["wm.NumberFormatter", {}, {}]
												}]
											}]
										}]
									}],
									Calificaciones: ["wm.Layer", {"caption":"Calificaciones","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										panel_head_1: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_BackgroundColor_VeryLightGray"]},"height":"135px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
											layers23: ["wm.Layers", {}, {}, {
												layer22: ["wm.Layer", {"caption":"layer22","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													panel40: ["wm.Panel", {"height":"28px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														box_anio_escolar_1: ["wm.SelectEditor", {"width":"256px","caption":"Año Escolar","captionSize":"60%"}, {}, {
															editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_sy","expression":undefined}, {}]
																}]
															}]
														}],
														box_grado_1: ["wm.SelectEditor", {"width":"187px","caption":"Grado"}, {"onchange":"box_grado_1Change"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"box_grado_1.dataValue","targetId":"app.lsCurso2"}, {}]
															}],
															editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
																}]
															}]
														}],
														box_curso_1: ["wm.SelectEditor", {"width":"160px","caption":"Curso"}, {}, {
															editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_secretaria_calificaciones_lista_curso","expression":undefined}, {}]
																}]
															}]
														}]
													}],
													panel41: ["wm.Panel", {"height":"102px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														layers24: ["wm.Layers", {"width":"294px"}, {}, {
															layer23: ["wm.Layer", {"caption":"layer23","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																box_apellido_1: ["wm.TextEditor", {"width":"150%","caption":"1er Apellido"}, {"onchange":"box_apellido_1Change"}, {
																	editor: ["wm._TextEditor", {"changeOnEnter":true}, {}]
																}],
																box_apellido_2: ["wm.TextEditor", {"width":"150%","caption":"2do Apellido"}, {"onchange":"box_apellido_2Change"}, {
																	editor: ["wm._TextEditor", {"changeOnEnter":true}, {}]
																}],
																box_nombre_1: ["wm.TextEditor", {"width":"150%","caption":"1er Nombre"}, {"onchange":"box_nombre_1Change"}, {
																	editor: ["wm._TextEditor", {"changeOnEnter":true}, {}]
																}],
																box_nombre_2: ["wm.TextEditor", {"width":"150%","caption":"2do nombre"}, {"onchange":"box_nombre_2Change"}, {
																	editor: ["wm._TextEditor", {"changeOnEnter":true}, {}]
																}]
															}]
														}],
														layers25: ["wm.Layers", {"width":"298px"}, {}, {
															layer25: ["wm.Layer", {"caption":"layer25","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																box_codigo: ["wm.NumberEditor", {"width":"150%","caption":"Codigo"}, {"onchange":"box_codigoChange"}, {
																	editor: ["wm._NumberEditor", {"changeOnEnter":true}, {}]
																}],
																box_id_persona: ["wm.NumberEditor", {"width":"100%","caption":"ID Persona"}, {"onchange":"box_id_personaChange"}, {
																	editor: ["wm._NumberEditor", {"changeOnEnter":true}, {}]
																}],
																panel43: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	boton_buscar_1: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"96px","borderColor":"#4D90FE","margin":"0","caption":"Buscar"}, {"onclick":"l_secretaria_calificaciones_insc_alumn_curso"}],
																	boton_limpiar_1: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"96px","borderColor":"#E0E0E0","margin":"0","caption":"Limpiar"}, {"onclick":"boton_limpiar_1Click"}]
																}]
															}]
														}],
														spacer4: ["wm.Spacer", {"height":"48px","width":"433px"}, {}]
													}]
												}]
											}]
										}],
										panel42: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
											Tabla_Alum_Curso: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0"}, {"onSelected":"l_secretaria_calificaciones_inscalumasigLiveVariable1"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_secretaria_calificaciones_insc_alumn_curso","expression":undefined}, {}]
												}],
												column1: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","columnWidth":"100%","index":3,"dataExpression":"${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column2: ["wm.DataGridColumn", {"caption":"•","field":"id.idPersona","columnWidth":"70px"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column3: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","columnWidth":"100%","index":2,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column4: ["wm.DataGridColumn", {"caption":"Curso","field":"id.curso","columnWidth":"113px","index":4}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column5: ["wm.DataGridColumn", {"caption":"Codigo","field":"id.codigo","columnWidth":"74px","index":1}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}]
											}],
											inscalumasigLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","width":"120%"}, {}, {
												inscalumasigGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#F0F0F0"}, {}, {
													inscalumasigDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]},"border":"0"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_secretaria_calificaciones_inscalumasigLiveVariable1","expression":undefined}, {}]
														}],
														idInscAlumAsig1: ["wm.DataGridColumn", {"caption":"●","field":"asignatura.idAsignatura","columnWidth":"49px","autoSize":undefined}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														calificacion1: ["wm.DataGridColumn", {"caption":"Calificacion [Numerica]","field":"calificacion","columnWidth":"75px","index":4,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {"digits":2}, {}]
														}],
														porcentaje1: ["wm.DataGridColumn", {"caption":"Porcentaje","field":"porcentaje","columnWidth":"75px","index":6,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {"digits":2}, {}]
														}],
														esperados1: ["wm.DataGridColumn", {"caption":"Logrados/<br>Esperados","field":"esperados","columnWidth":"80px","index":2,"display":"Number","dataExpression":"${logrados}+\" de \"+${esperados}"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														califChar1: ["wm.DataGridColumn", {"caption":"Calificación","field":"califChar","columnWidth":"75px","index":5}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"Asignatura","field":"asignatura.asignatura","columnWidth":"100%","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}],
												inscalumasigDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_Border_TopStyleCurved4px wm_Border_BottomStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#F0F0F0"}, {}, {
													inscalumasigLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_14px"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_secretaria_calificaciones_inscalumasigLiveVariable1"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumasigDataGrid1.selectedItem","expression":undefined}, {}],
															wire1: ["wm.Wire", {"targetProperty":"dataOutput.asignatura","source":"asignaturaRelatedEditor2.dataOutput","expression":undefined}, {}],
															wire2: ["wm.Wire", {"targetProperty":"dataOutput.periodo","source":"periodoRelatedEditor2.dataOutput","expression":undefined}, {}],
															wire3: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor3.dataOutput","expression":undefined}, {}]
														}],
														idInscAlumAsigEditor1: ["wm.Editor", {"caption":"ID ●","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumAsig"}, {}, {
															editor: ["wm._NumberEditor", {"required":true}, {}]
														}],
														califCharEditor2: ["wm.Editor", {"caption":"Califificacion (Char)","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"califChar"}, {"onchange":"califCharEditor2Change"}, {
															editor: ["wm._SelectEditor", {"displayField":"dataValue","dataField":"dataValue","startUpdate":true}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"lista_CALIF_CHAR","expression":undefined}, {}]
																}]
															}]
														}],
														calificacionEditor2: ["wm.Editor", {"caption":"Calificacion (Númerica)","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"calificacion"}, {}, {
															editor: ["wm._NumberEditor", {"places":"2"}, {}]
														}],
														esperadosEditor1: ["wm.Editor", {"caption":"Esperados","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"esperados","disabled":true}, {}, {
															editor: ["wm._NumberEditor", {}, {}]
														}],
														logradosEditor1: ["wm.Editor", {"caption":"Logrados","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"logrados","disabled":true}, {}, {
															editor: ["wm._NumberEditor", {}, {}]
														}],
														porcentajeEditor1: ["wm.Editor", {"caption":"Porcentaje [%]","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"porcentaje","disabled":true}, {}, {
															editor: ["wm._NumberEditor", {}, {}]
														}],
														panel3: ["wm.Panel", {"height":"27px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
															asignaturaRelatedEditor2: ["wm.RelatedEditor", {"formField":"asignatura","lock":true}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumasigDataGrid1.selectedItem.asignatura","expression":undefined}, {}],
																	wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"asignaturaLookup2.selectedItem","expression":undefined}, {}]
																}],
																asignaturaLookup5: ["wm.Editor", {"caption":"ID Asignatura","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAsignatura","disabled":true}, {}, {
																	editor: ["wm._NumberEditor", {"required":true}, {}]
																}]
															}]
														}],
														panel5: ["wm.Panel", {"height":"27px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
															periodoRelatedEditor2: ["wm.RelatedEditor", {"formField":"periodo","lock":true}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumasigDataGrid1.selectedItem.periodo","expression":undefined}, {}],
																	wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"periodoLookup3.selectedItem","expression":undefined}, {}]
																}],
																periodoLookup2: ["wm.Editor", {"caption":"ID Periodo","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPeriodo","disabled":true}, {}, {
																	editor: ["wm._NumberEditor", {"required":true}, {}]
																}]
															}]
														}],
														panel15: ["wm.Panel", {"height":"27px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
															personaRelatedEditor3: ["wm.RelatedEditor", {"formField":"persona","lock":true}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumasigDataGrid1.selectedItem.persona","expression":undefined}, {}],
																	wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"personaLookup2.selectedItem","expression":undefined}, {}]
																}],
																personaLookup4: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona","disabled":true}, {}, {
																	editor: ["wm._NumberEditor", {"required":true}, {}]
																}]
															}]
														}],
														editPanel7: ["wm.EditPanel", {"liveForm":"inscalumasigLiveForm1","savePanel":"savePanel7","operationPanel":"operationPanel7","lock":false}, {}, {
															savePanel7: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																saveButton7: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel7.saveData"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel7.formInvalid","expression":undefined}, {}]
																	}]
																}],
																cancelButton7: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel7.cancelEdit"}]
															}],
															operationPanel7: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																newButton7: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%","showing":false}, {"onclick":"editPanel7.beginDataInsert"}],
																updateButton7: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel7.beginDataUpdate"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel7.formUneditable","expression":undefined}, {}]
																	}]
																}],
																deleteButton7: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel7.deleteData"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel7.formUneditable","expression":undefined}, {}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}],
									layer28: ["wm.Layer", {"caption":"<u>Libro Final</u>","horizontalAlign":"left","verticalAlign":"top","padding":"50"}, {"onShow":"l_secretaria_ls_niveles"}, {
										libro_final_gui: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
											gui: ["wm.Layers", {}, {}, {
												layer29: ["wm.Layer", {"caption":"layer29","horizontalAlign":"center","verticalAlign":"top"}, {}, {
													libro_final_enunciado: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"48px","width":"100%","border":"0","align":"center","caption":"Para generar el <u>Libro Final</u>, a continuación seleccione el <u>Año Escolar</u> y seguido de esto el <u>Nivel</u>,<br/> luego haga click en <u>Generar Libro Final</u>","singleLine":false}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													libro_final_sel_sy: ["wm.SelectEditor", {"width":"250px","caption":"Año escolar","margin":"0","height":"30px"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_sy","expression":undefined}, {}]
															}]
														}]
													}],
													spacer3: ["wm.Spacer", {"height":"3px","width":"96px"}, {}],
													libro_final_nivel: ["wm.SelectEditor", {"width":"250px","caption":"Nivel","height":"30px"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"nivel","dataField":"idNivel"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_secretaria_ls_niveles","expression":undefined}, {}]
															}]
														}]
													}],
													panel47: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														libro_final_limpiar: ["wm.Button", {"height":"100%","width":"96px","borderColor":"#E0E0E0","caption":"Limpiar"}, {"onclick":"libro_final_limpiarClick"}],
														libro_final_generar_libro: ["wm.Button", {"height":"100%","width":"140px","borderColor":"#4D90FE","caption":"Generar Libro Final"}, {"onclick":"libro_final_generar_libroClick"}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				panel_horarios: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {}, {
					horarioLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
						horarioGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","height":"286px"}, {}, {
							panel30: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"40px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
								horarios_panel_horarios_sel_anioescolar: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"210px","caption":"Año escolar","captionSize":"80%","height":"32px"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_sy","expression":undefined}, {}]
										}]
									}]
								}],
								horarios_panel_horarios_sel_grado: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"240px","caption":"Grado","height":"32px"}, {"onchange":"l_horarios_lista_curso"}, {
									editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
										}]
									}]
								}],
								horarios_panel_horarios_sel_curso: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"231px","caption":"Curso","height":"32px"}, {"onchange":"horarioLiveVariable2"}, {
									editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_horarios_lista_curso","expression":undefined}, {}]
										}]
									}]
								}],
								spacer11: ["wm.Spacer", {"height":"35px","width":"100%"}, {}],
								dataNavigator2: ["wm.DataNavigator", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"284px","byPage":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"liveSource","source":"horarioLiveVariable2","expression":undefined}, {}]
									}]
								}]
							}],
							horarioDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]},"border":"0"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"horarioLiveVariable2","expression":undefined}, {}]
								}],
								numeroSesion1: ["wm.DataGridColumn", {"caption":"Numero Sesion","field":"numeroSesion","columnWidth":"114px","index":1,"display":"Number","autoSize":undefined}, {}, {
									format: ["wm.NumberFormatter", {}, {}]
								}],
								dia1: ["wm.DataGridColumn", {"caption":"Dia semana","field":"dia","index":2,"display":"Number","autoSize":undefined,"dataExpression":"if(${dia}==\"1\"){'<b><i>Lunes</i></b>'}  if(${dia}==\"2\"){'<b><i>Martes</i></b>'}   if(${dia}==\"3\"){'<b><i>Miercoles</i></b>'}    if(${dia}==\"4\"){'<b><i>Jueves</i></b>'}     if(${dia}==\"5\"){'<b><i>Viernes</i></b>'}"}, {}, {
									format: ["wm.NumberFormatter", {}, {}]
								}],
								column1: ["wm.DataGridColumn", {"caption":"Asignatura","field":"asignatura.asignatura","columnWidth":"120%","index":2}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								column2: ["wm.DataGridColumn", {"caption":"Curso","field":"curso.curso","columnWidth":"50%","index":3}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								column3: ["wm.DataGridColumn", {"caption":"Semana","field":"tipoSemana.tipoSemana","columnWidth":"69px","index":4}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}]
							}]
						}],
						horarioDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1"}, {}, {
							horarioLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"232%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"horarioLiveVariable2","onBeginInsert":"horarioLiveForm1BeginInsert"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"horarioDataGrid1.selectedItem","expression":undefined}, {}],
									wire1: ["wm.Wire", {"targetProperty":"dataOutput.asignatura","source":"relatedEditor2.dataOutput","expression":undefined}, {}],
									wire2: ["wm.Wire", {"targetProperty":"dataOutput.sy","source":"relatedEditor3.dataOutput","expression":undefined}, {}],
									wire3: ["wm.Wire", {"targetProperty":"dataOutput.tipoSemana","source":"relatedEditor4.dataOutput","expression":undefined}, {}],
									wire4: ["wm.Wire", {"targetProperty":"dataOutput.curso","source":"relatedEditor1.dataOutput","expression":undefined}, {}]
								}],
								panel44: ["wm.Panel", {"height":"31px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									spacer13: ["wm.Spacer", {"height":"24px","width":"70%"}, {}],
									relatedEditor1: ["wm.RelatedEditor", {"formField":"curso","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"horarioDataGrid1.selectedItem.curso","expression":undefined}, {}],
											wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"cursoLookup5.selectedItem","expression":undefined}, {}]
										}],
										cursoLookup4: ["wm.Editor", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_BackgroundColor_VeryLightGray"]},"caption":"ID Curso","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idCurso"}, {}, {
											editor: ["wm._NumberEditor", {}, {}]
										}]
									}],
									relatedEditor2: ["wm.RelatedEditor", {"formField":"asignatura","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"horarioDataGrid1.selectedItem.asignatura","expression":undefined}, {}],
											wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"asignaturaLookup4.selectedItem","expression":undefined}, {}]
										}],
										asignaturaLookup3: ["wm.Editor", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_BackgroundColor_VeryLightGray"]},"caption":"ID Asignatura","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAsignatura"}, {}, {
											editor: ["wm._NumberEditor", {"required":true}, {}]
										}]
									}]
								}],
								numberEditor1: ["wm.NumberEditor", {"width":"150%","caption":"ID Horario","readonly":true,"formField":"idHorario"}, {}, {
									editor: ["wm._NumberEditor", {"required":true}, {}]
								}],
								numeroSesionEditor1: ["wm.Editor", {"caption":"Numero Sesion","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"numeroSesion"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"0,1,2,3,4,5,6,7","lookupDisplay":"Number"}, {}, {
										optionsVar: ["wm.Variable", {"type":"EntryData"}, {}],
										format: ["wm.NumberFormatter", {}, {}]
									}]
								}],
								diaEditor1: ["wm.Editor", {"caption":"Dia de la Semana","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"dia"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"lsDias","expression":undefined}, {}]
										}]
									}]
								}],
								relatedEditor4: ["wm.RelatedEditor", {"formField":"tipoSemana","lock":true,"fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"horarioDataGrid1.selectedItem.tipoSemana","expression":undefined}, {}],
										wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoSemanaLookup1.selectedItem","expression":undefined}, {}]
									}],
									tipoSemanaLookup1: ["wm.Editor", {"caption":"Tipo Semana","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
										editor: ["wm._LookupEditor", {"displayField":"tipoSemana","allowNone":true}, {}]
									}]
								}],
								relatedEditor3: ["wm.RelatedEditor", {"formField":"sy","lock":true,"fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"horarioDataGrid1.selectedItem.sy","expression":undefined}, {}],
										wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"syLookup2.selectedItem","expression":undefined}, {}]
									}],
									syLookup2: ["wm.Editor", {"caption":"Año escolar","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
										editor: ["wm._LookupEditor", {"displayField":"schoolYear","allowNone":true}, {}]
									}]
								}],
								editPanel6: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"liveForm":"horarioLiveForm1","savePanel":"savePanel6","operationPanel":"operationPanel6"}, {}, {
									savePanel6: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
										saveButton6: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel6.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel6.formInvalid","expression":undefined}, {}]
											}]
										}],
										cancelButton6: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel6.cancelEdit"}]
									}],
									operationPanel6: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
										newButton6: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel6.beginDataInsert"}],
										updateButton6: ["wm.RoundedButton", {"caption":"Actualizar","width":"122px","height":"100%","disabled":true}, {"onclick":"editPanel6.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel6.formUneditable","expression":undefined}, {}]
											}]
										}],
										deleteButton6: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel6.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel6.formUneditable","expression":undefined}, {}]
											}]
										}]
									}]
								}],
								panel31: ["wm.Panel", {"height":"35px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									spacer12: ["wm.Spacer", {"height":"48px","width":"352px"}, {}],
									horarios_panel_horarios_sel_sy: ["wm.SelectEditor", {"width":"150%","caption":"Año escolar","height":"26px"}, {}, {
										editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_sy","expression":undefined}, {}]
											}]
										}]
									}],
									horarios_panel_horarios_sel_grado2: ["wm.SelectEditor", {"width":"150%","caption":"Grado","height":"26px"}, {"onchange":"l_horarios_lista_curso2"}, {
										editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
											}]
										}]
									}],
									horarios_panel_horarios_sel_curso2: ["wm.SelectEditor", {"width":"150%","caption":"Curso","height":"26px"}, {"onchange":"l_horarios_lista_AsignaturasCurso"}, {
										editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_horarios_lista_curso2","expression":undefined}, {}]
											}]
										}]
									}]
								}],
								CursoAsig: ["wm.DataGrid", {"border":"0"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_horarios_lista_AsignaturasCurso","expression":undefined}, {}]
									}],
									column2: ["wm.DataGridColumn", {"caption":"●","field":"id.curso","columnWidth":"103px","index":1}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column3: ["wm.DataGridColumn", {"caption":"Id Asignatura","field":"id.idAsignatura","columnWidth":"113px","index":2}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column4: ["wm.DataGridColumn", {"caption":"Asignatura","field":"id.asignatura","columnWidth":"120%","index":3}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column1: ["wm.DataGridColumn", {"caption":"Nombre Usuario","field":"id.nombreLdap","index":3}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}]
							}]
						}]
					}]
				}],
				panel_bienvenida: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"100","lock":true}, {}, {
					picture5: ["wm.Picture", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"160px","border":"0","width":"100%","source":"resources/LOGO%20APRENDOZ.jpg"}, {}],
					staticText: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_24px"]},"height":"48px","width":"100%","border":"0","align":"center","caption":"BIENVENIDO A APRENDOZ"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					nombreCompleto: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_24px"]},"height":"40px","width":"100%","border":"0","align":"center"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					userNameGetter: ["wm.TextEditor", {"width":"540px","showing":false,"height":"42px","autoScroll":true}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataValue","source":"a_getUserName.dataValue"}, {}]
						}],
						editor: ["wm._TextEditor", {}, {}]
					}]
				}],
				panel_reportes: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {}, {
					panel7: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
						reports_open_report_window: ["wm.Button", {"height":"48px","width":"96px","caption":"Generar Reporte"}, {}],
						uctualizar_reportes_descripcion: ["wm.Button", {"height":"48px","width":"96px","caption":"Actualizar Detalles"}, {"onclick":"l_reportes_graficos_listado_reportes"}]
					}],
					panel4: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
						codigoReporte: ["wm.TextEditor", {"caption":"Código","height":"32px"}, {}, {
							editor: ["wm._TextEditor", {}, {}]
						}],
						reporte: ["wm.TextEditor", {"caption":"Reporte","height":"32px"}, {}, {
							editor: ["wm._TextEditor", {}, {}]
						}]
					}],
					reportes_graficos_listado_reportes: ["wm.DataGrid", {"border":"0"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_reportes_graficos_listado_reportes","expression":undefined}, {}]
						}],
						column2: ["wm.DataGridColumn", {"caption":"+ Código","field":"id.codigo","index":1}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column1: ["wm.DataGridColumn", {"caption":"Reporte","field":"id.reporte","columnWidth":"100%","index":1}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column3: ["wm.DataGridColumn", {"caption":"Tipo <br/>Persona","field":"id.tipoPersona","index":2}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column4: ["wm.DataGridColumn", {"caption":"Descripción","field":"id.descripcion","columnWidth":"100%","index":3}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
				}]
			}]
		}],
		picture3: ["wm.Picture", {"height":"192px","border":"0","width":"410px","source":"resources/acceso_denegado.jpg","aspect":"h","showing":false,"roles":["1","2","3","8","12","13","15","14","17","18","19","25","11"]}, {}],
		panel22: ["wm.Panel", {"height":"50px","width":"60%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","roles":["1","2","3","8","12","17","18","19","25"]}, {}, {
			label4: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"48px","width":"100%","border":"0","align":"center","caption":"<b>LO SENTIMOS, USTED NO ESTA AUTORIZADO PARA INGRESAR  A ESTA ZONA </b></br> Sin embargo usted puede enviar un mensaje a: <u>soporte@rochester.edu.co","singleLine":false}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}],
		panel23: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"36px","width":"60%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"roles":["1","2","3","8","12","17","18","19","25"]}, {}, {
			label9: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"25px","width":"280px","border":"0","align":"center","caption":"Aprendoz © • Colegio Rochester"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}],
			label10: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"25px","width":"15px","border":"0","align":"center","caption":"|"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}],
			label11: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"25px","width":"80px","border":"0","align":"center","caption":"Visitanos","link":"http://www.rochester.edu.co"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}],
			label8: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"25px","width":"15px","border":"0","align":"center","caption":"|"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}],
			label7: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"25px","width":"109px","border":"0","align":"center","caption":"Enviar correo","link":"mailto: sistemas@rochester.edu.co"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}],
			label6: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"25px","width":"15px","border":"0","align":"center","caption":"|"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}],
			label5: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"25px","width":"51px","border":"0","caption":"<font color=blue><u>Salir</u></font>"}, {"onclick":"salirErrorPage"}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}],
		panel24: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"28px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}]
	}]
}