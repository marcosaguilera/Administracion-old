Subjects.widgets = {
	ls_sy: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.Sy","orderBy":"desc: idSy"}, {}],
	ls_grades: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.Grado"}, {}],
	ls_subjects: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"subjectsByGrade"}, {}, {
		input: ["wm.ServiceInput", {"type":"subjectsByGradeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"_grado","source":"grades.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"_sy","source":"sy.dataValue"}, {}]
			}]
		}]
	}],
	subjectById: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"subjectDetails"}, {"onSuccess":"subjectByIdSuccess"}, {
		input: ["wm.ServiceInput", {"type":"subjectDetailsInputs"}, {}]
	}],
	ls_area: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.Area"}, {}],
	ls_subareas: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.Subarea"}, {}],
	updateSubjects: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.Asignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"idAsignatura","source":"id_subject.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"asignatura","source":"subject_asignatura.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"descripAsigEspaniol","source":"subject_descripcion.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"descripAsigIngles","source":"subject_description.dataValue"}, {}],
			wire5: ["wm.Wire", {"targetProperty":"esperadostotal","source":"subject_esperados.dataValue"}, {}],
			wire6: ["wm.Wire", {"targetProperty":"idArea1","source":"subject_area1.dataValue"}, {}],
			wire7: ["wm.Wire", {"targetProperty":"idArea2","source":"subject_area2.dataValue"}, {}],
			wire8: ["wm.Wire", {"targetProperty":"idArea3","source":"subject_area3.dataValue"}, {}],
			wire9: ["wm.Wire", {"targetProperty":"idSubarea1","source":"subject_sub1.dataValue"}, {}],
			wire10: ["wm.Wire", {"targetProperty":"idSubarea2","source":"subject_sub2.dataValue"}, {}],
			wire11: ["wm.Wire", {"targetProperty":"idSubarea3","source":"subject_sub3.dataValue"}, {}],
			wire12: ["wm.Wire", {"targetProperty":"ihA1","source":"subject_iha1.dataValue"}, {}],
			wire13: ["wm.Wire", {"targetProperty":"ihA2","source":"subject_iha2.dataValue"}, {}],
			wire14: ["wm.Wire", {"targetProperty":"ihA3","source":"subject_iha3.dataValue"}, {}],
			wire15: ["wm.Wire", {"targetProperty":"intensidadHoraria","source":"subject_ihtotal.dataValue"}, {}],
			wire16: ["wm.Wire", {"targetProperty":"meses","source":"subject_meses.dataValue"}, {}],
			wire17: ["wm.Wire", {"targetProperty":"peso","source":"subject_peso.dataValue"}, {}],
			wire18: ["wm.Wire", {"targetProperty":"salonIdSalon","source":"subject_salon.dataValue"}, {}],
			wire19: ["wm.Wire", {"targetProperty":"subject","source":"subject_subject.dataValue"}, {}],
			wire22: ["wm.Wire", {"targetProperty":"tipoInscAsig.idTipoInscAsig","source":"subject_tipo.dataValue"}, {}]
		}]
	}],
	getNewIdSubject: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getMaxSubjectByGrade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getMaxSubjectByGradeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"idgrado","source":"grades.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"idsy","source":"sy.dataValue"}, {}]
			}]
		}]
	}],
	deleteSubject: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"deleteSubject"}, {"onSuccess":"deleteSubjectSuccess"}, {
		input: ["wm.ServiceInput", {"type":"deleteSubjectInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"idasignatura","source":"id_subject.dataValue"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
			left_menu: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","horizontalAlign":"left","width":"35%","verticalAlign":"top","padding":"10"}, {}, {
				subject_top_message: ["wm.Label", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"caption":"Instrucciones sobre este modulo: <br><br>En este modulo usted podrá realizar acciones sobre las asignaturas: Crear - Actualizar - Eliminar (Dependiendo de su perfil de seguridad). <br><br>1). Para empezar seleccione el Año escolar y Grado para visualizar las asignaturas relacionadas.  <br><br>2). A continuación seleccione la asignatura a modificar.","height":"158px","width":"100%","border":"0","padding":"8","singleLine":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				sy: ["wm.SelectEditor", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"width":"100%","caption":"Año escolar","height":"26px"}, {}, {
					editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_sy","expression":undefined}, {}]
						}]
					}]
				}],
				grades: ["wm.SelectEditor", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"width":"100%","caption":"Grados","height":"26px"}, {"onchange":"gradesChange"}, {
					editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_grades","expression":undefined}, {}]
						}]
					}]
				}],
				asignaturas: ["wm.List", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","border":"0","dataFields":"id, asignatura","columnWidths":"20%,80%"}, {"onselect":"asignaturasSelect"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subjects","expression":undefined}, {}]
					}]
				}]
			}],
			main_form: ["wm.Panel", {"height":"100%","horizontalAlign":"center","width":"75%","verticalAlign":"top","padding":"0,10,10,10","autoScroll":true}, {}, {
				subject_header: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"48px","horizontalAlign":"left","width":"100%","layoutKind":"left-to-right","verticalAlign":"top"}, {}],
				subject_content_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
					subject_content_left_col: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
						id_subject: ["wm.NumberEditor", {"width":"100%","caption":"ID","readonly":true}, {}, {
							editor: ["wm._NumberEditor", {}, {}]
						}],
						subject_asignatura: ["wm.TextEditor", {"width":"100%","caption":"Asignatura","readonly":true}, {}, {
							editor: ["wm._TextEditor", {"required":true}, {}]
						}],
						subject_descripcion: ["wm.TextAreaEditor", {"height":"120px","width":"100%","caption":"Descripción","singleLine":false,"readonly":true}, {}, {
							editor: ["wm._TextAreaEditor", {"required":true}, {}]
						}],
						subject_sy: ["wm.SelectEditor", {"width":"100%","caption":"Año escolar","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_sy","expression":undefined}, {}]
								}]
							}]
						}],
						subject_area1: ["wm.SelectEditor", {"width":"100%","caption":"Area No.1","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"area","dataField":"idArea"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_area","expression":undefined}, {}]
								}]
							}]
						}],
						subject_area2: ["wm.SelectEditor", {"width":"100%","caption":"Area No.2","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"area","dataField":"idArea"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_area","expression":undefined}, {}]
								}]
							}]
						}],
						subject_area3: ["wm.SelectEditor", {"width":"100%","caption":"Area No.3","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"area","dataField":"idArea"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_area","expression":undefined}, {}]
								}]
							}]
						}],
						subject_iha1: ["wm.NumberEditor", {"width":"100%","caption":"Inten Area No.1","display":"Text","readonly":true}, {"onchange":"subject_iha1Change"}, {
							editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
						}],
						subject_iha2: ["wm.NumberEditor", {"width":"100%","caption":"Inten Area No.2","display":"Text","readonly":true}, {"onchange":"subject_iha2Change"}, {
							editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
						}],
						subject_iha3: ["wm.NumberEditor", {"width":"100%","caption":"Inten Area No.3","display":"Text","readonly":true}, {"onchange":"subject_iha3Change"}, {
							editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
						}],
						subject_ihtotal: ["wm.NumberEditor", {"width":"100%","caption":"* Intensidad Total","display":"Text","readonly":true}, {}, {
							editor: ["wm._TextEditor", {}, {}]
						}]
					}],
					subject_content_right_col: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
						subject_electiva: ["wm.CheckBoxEditor", {"width":"100%","caption":"Electiva","readonly":true}, {}, {
							editor: ["wm._CheckBoxEditor", {}, {}]
						}],
						subject_subject: ["wm.TextEditor", {"width":"100%","caption":"Subject","readonly":true}, {}, {
							editor: ["wm._TextEditor", {"required":true}, {}]
						}],
						subject_description: ["wm.TextEditor", {"width":"100%","caption":"Description","height":"120px","singleLine":false,"readonly":true}, {}, {
							editor: ["wm._TextEditor", {"required":true}, {}]
						}],
						subject_salon: ["wm.TextEditor", {"width":"100%","caption":"Salon","readonly":true,"showing":false}, {}, {
							editor: ["wm._TextEditor", {}, {}]
						}],
						subject_tipo: ["wm.TextEditor", {"width":"100%","caption":"Tipo Asignatura","readonly":true,"showing":false}, {}, {
							editor: ["wm._TextEditor", {}, {}]
						}],
						subject_grado: ["wm.SelectEditor", {"width":"100%","caption":"Grado","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_grades","expression":undefined}, {}]
								}]
							}]
						}],
						subject_sub1: ["wm.SelectEditor", {"width":"100%","caption":"Sub area No.1","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"subarea","dataField":"idSubarea"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subareas","expression":undefined}, {}]
								}]
							}]
						}],
						subject_sub2: ["wm.SelectEditor", {"width":"100%","caption":"Sub area No.2","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"subarea","dataField":"idSubarea"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subareas","expression":undefined}, {}]
								}]
							}]
						}],
						subject_sub3: ["wm.SelectEditor", {"width":"100%","caption":"Sub area No.3","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"subarea","dataField":"idSubarea"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subareas","expression":undefined}, {}]
								}]
							}]
						}],
						subject_esperados: ["wm.NumberEditor", {"width":"100%","caption":"Esperados Año","readonly":true}, {}, {
							editor: ["wm._NumberEditor", {}, {}]
						}],
						subject_meses: ["wm.NumberEditor", {"width":"100%","caption":"No. Meses","display":"Text","readonly":true}, {}, {
							editor: ["wm._TextEditor", {}, {}]
						}],
						subject_peso: ["wm.NumberEditor", {"width":"100%","caption":"Peso asignatura","display":"Text","readonly":true}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataValue","source":"subject_ihtotal.dataValue"}, {}]
							}],
							editor: ["wm._TextEditor", {}, {}]
						}]
					}]
				}],
				subject_footer_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_Border_BottomStyleCurved8px"]},"height":"44px","horizontalAlign":"right","width":"100%","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
					subject_newRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Nuevo","borderColor":"#0044cc"}, {"onclick":"subject_newRecordClick"}],
					subject_updateRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Actualizar","borderColor":"#0044cc"}, {"onclick":"subject_updateRecordClick"}],
					subject_saveNewRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Guardar","borderColor":"#cccccc","showing":false}, {"onclick":"subject_saveNewRecordClick"}],
					subject_saveUpdateRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Guardar","borderColor":"#cccccc","showing":false}, {"onclick":"subject_saveUpdateRecordClick"}],
					subject_cancelOperation: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","width":"96px","caption":"Cancelar","borderColor":"#cccccc","showing":false}, {"onclick":"subject_cancelOperationClick"}],
					subject_deleteRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Borrar","borderColor":"#bd362f"}, {"onclick":"subject_deleteRecordClick"}]
				}],
				subjectDataForm: ["wm.LiveForm", {"height":"84px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"width":"400px","showing":false}, {"onInsertData":"subjectDataFormInsertData","onSuccess":"ls_subjects","onUpdateData":"subjectDataFormUpdateData","onDeleteData":"subjectDataFormDeleteData"}]
			}]
		}]
	}]
}