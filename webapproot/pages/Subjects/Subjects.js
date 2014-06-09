dojo.declare("Subjects", wm.Page, {
  start: function() {
    
  },
  
  intensidadHorariaTotal: function(){
    var ih1= parseFloat(this.subject_iha1.getDataValue());
    var ih2= parseFloat(this.subject_iha2.getDataValue());
    var ih3= parseFloat(this.subject_iha3.getDataValue());
    totalIntensidad= ih1+ih2+ih3; 
    return totalIntensidad;
  },
  
  asignaturasSelect: function(inSender, inItem) {
    var index = this.asignaturas.getSelectedIndex();
    var data = this.asignaturas.getItemData(index);
    var id= data.id;
    var subject= data.asignatura;
    var _a1= data.a1;
    var _a2= data.a2;
    var _a3= data.a3;
    var _sa1= data.sa1;
    var _sa2= data.sa2;
    var _sa3= data.sa3;
    this.subjectById.input.setValue("idasignatura", id);
    this.subjectById.update();
  },
 
  subjectByIdSuccess: function(inSender, inDeprecated) {
     var json= this.subjectById.getItem(0);
     var _id= json.data.id;
     var _asignatura= json.data.asignatura;
     var _descripEspanol= json.data.descripcion_espanol;
     var _subject= json.data.subject;
     var _descripcion_ingles= json.data.descripcion_ingles;
     var _electiva= json.data.electiva;
     var _sy = json.data.sy;
     var _salon= json.data.salon;
     var _tipo= json.data.idTipoInscAsig;
     var _grado= json.data.idgrado;
     
     var _a1= json.data.a1;
     var _a2= json.data.a2;
     var _a3= json.data.a3;
     var _sa1= json.data.sa1;
     var _sa2= json.data.sa2;
     var _sa3= json.data.sa3;
     var _esperadosTotal= json.data.esperadosTotal;
     var _iha1= json.data.iha1;
     var _iha2= json.data.iha2;
     var _iha3= json.data.iha3;
     var _ihtotal= json.data.ihtotal;
     var _meses= json.data.meses;
     var _peso= json.data.peso;
     
     if(_electiva == true){
       this.subject_electiva.setChecked(_electiva);
     }else{
       this.subject_electiva.setChecked(_electiva);
     }

     this.id_subject.setDataValue(_id);
     this.subject_asignatura.setDataValue(_asignatura);
     this.subject_descripcion.setDataValue(_descripEspanol);
     this.subject_subject.setDataValue(_subject);
     this.subject_description.setDataValue(_descripcion_ingles);
     this.subject_sy.setDataValue(_sy);
     this.subject_salon.setDataValue(_salon);
     this.subject_tipo.setDataValue(_tipo);
     this.subject_grado.setDataValue(_grado);
     
     this.subject_area1.setDataValue(_a1);
     this.subject_area2.setDataValue(_a2);
     this.subject_area3.setDataValue(_a3);
     this.subject_sub1.setDataValue(_sa1);
     this.subject_sub2.setDataValue(_sa2);
     this.subject_sub3.setDataValue(_sa3);
     
     this.subject_esperados.setDataValue(_esperadosTotal);
     this.subject_iha1.setDataValue(_iha1);
     this.subject_iha2.setDataValue(_iha2);
     this.subject_iha3.setDataValue(_iha3);
     this.subject_ihtotal.setDataValue(_ihtotal);
     this.subject_meses.setDataValue(_meses);
     this.subject_peso.setDataValue(_peso);
  },

  gradesChange: function(inSender, inDisplayValue, inDataValue) {
     this.ls_subjects.update();
     this.getNewIdSubject.update(); 
  },
  
  subject_saveNewRecordClick: function(inSender, inEvent) {
     var _electivaValue= this.subject_electiva.getChecked();     
     var _sy= this.subject_sy.getDataValue();
     var _grado= this.subject_grado.getDataValue();
     this.updateSubjects.setValue("electiva", _electivaValue);
     this.updateSubjects.setValue("grado.idGrado", _grado);
     this.updateSubjects.setValue("sy.idSy", _sy);
     this.subjectDataForm.setDataSet(this.updateSubjects);          
     this.subjectDataForm.insertData();         
  },
  
  subject_saveUpdateRecordClick: function(inSender, inEvent) {
     var _electivaValue= this.subject_electiva.getChecked();
     var _sy= this.subject_sy.getDataValue();
     var _grado= this.subject_grado.getDataValue();
     this.updateSubjects.setValue("electiva", _electivaValue);
     this.updateSubjects.setValue("grado.idGrado", _grado);
     this.updateSubjects.setValue("sy.idSy", _sy);
     this.subjectDataForm.setDataSet(this.updateSubjects);          
     this.subjectDataForm.updateData(); 
  },
  
  subject_deleteRecordClick: function(inSender, inEvent) {
     var _id= this.id_subject.getDataValue();
     if(_id >0){
       this.deleteSubject.input.setValue("idasignatura",_id);
       this.deleteSubject.update();
     }else{
       alert("Acción no permitida. Asegurese de seleccionar una asignatura.");
     }
  },
  
  subject_updateRecordClick: function(inSender, inEvent) {
     this.subject_newRecord.hide();
     this.subject_updateRecord.hide();
     this.subject_deleteRecord.hide();
     this.subject_saveNewRecord.hide();
     this.subject_saveUpdateRecord.show();
     this.subject_cancelOperation.show();
    
     this.subject_asignatura.setReadonly(false);
     this.subject_descripcion.setReadonly(false);
     this.subject_subject.setReadonly(false);
     this.subject_description.setReadonly(false);
     this.subject_electiva.setReadonly(false);
     this.subject_salon.setReadonly(false);
     this.subject_tipo.setReadonly(false);
     
     this.subject_area1.setReadonly(false);
     this.subject_peso.setReadonly(false);
     this.subject_area2.setReadonly(false);
     this.subject_area3.setReadonly(false);
     this.subject_sub1.setReadonly(false);
     this.subject_sub2.setReadonly(false);
     this.subject_sub3.setReadonly(false);
     
     this.subject_iha1.setReadonly(false);
     this.subject_iha2.setReadonly(false);
     this.subject_iha3.setReadonly(false);
     this.subject_meses.setReadonly(false);
  },
  
  subject_newRecordClick: function(inSender, inEvent) {
     var gradeValue= this.grades.getDataValue();
     var syValue   = this.sy.getDataValue();
     
     if(gradeValue > 0 && syValue > -3){
       var json = this.getNewIdSubject.getItem(0);
       var newId= json.data.newId;
         
       this.subject_newRecord.hide();
       this.subject_updateRecord.hide();
       this.subject_deleteRecord.hide();
       this.subject_saveUpdateRecord.hide();
       this.subject_saveNewRecord.show();
       this.subject_cancelOperation.show();
       
       //clearing all inputs
       this.id_subject.clear();
       this.subject_asignatura.clear();
       this.subject_descripcion.clear();
       this.subject_subject.clear();
       this.subject_description.clear();
       this.subject_electiva.setChecked(0);
       this.subject_sy.clear();
       this.subject_salon.clear();
       this.subject_tipo.clear();
       this.subject_grado.clear();
       
       this.subject_area1.clear();
       this.subject_area2.clear();
       this.subject_area3.clear();
       this.subject_sub1.clear();
       this.subject_sub2.clear();
       this.subject_sub3.clear();
       
       this.subject_esperados.clear();
       this.subject_iha1.clear();
       this.subject_iha2.clear();
       this.subject_iha3.clear();
       this.subject_ihtotal.clear();
       this.subject_meses.clear();
       this.subject_peso.clear(); 
       //end clearing
       
       this.id_subject.setDataValue(newId);
       this.subject_asignatura.setReadonly(false);
       this.subject_descripcion.setReadonly(false);
       this.subject_subject.setReadonly(false);
       this.subject_description.setReadonly(false);
       this.subject_electiva.setReadonly(false);
       this.subject_sy.setReadonly(false);
       this.subject_salon.setDataValue("1");
       this.subject_salon.hide();
       this.subject_tipo.setDataValue("1");
       this.subject_tipo.hide();
       this.subject_grado.setReadonly(false);
       
       this.subject_area1.setReadonly(false);
       this.subject_area2.setReadonly(false);
       this.subject_area3.setReadonly(false);
       this.subject_sub1.setReadonly(false);
       this.subject_sub2.setReadonly(false);
       this.subject_sub3.setReadonly(false);
       
       this.subject_esperados.setReadonly(false);
       this.subject_iha1.setDataValue("0");
       this.subject_iha1.setReadonly(false);
       this.subject_iha2.setDataValue("0");
       this.subject_iha2.setReadonly(false);
       this.subject_iha3.setDataValue("0");
       this.subject_iha3.setReadonly(false);  
       this.subject_meses.setReadonly(false);
       this.subject_peso.setReadonly(false);
     }else{
       alert("Operación no permitida. Seleccione un Año escolar y Grado para continuar con la creación de una asignatura.");
     }  
  },
  
  subject_cancelOperationClick: function(inSender, inEvent) {
     this.subject_saveNewRecord.hide();
     this.subject_saveUpdateRecord.hide();
     this.subject_cancelOperation.hide();
     this.subject_newRecord.show();
     this.subject_updateRecord.show();
     this.subject_deleteRecord.show();
    
     this.subject_asignatura.setReadonly(true);
     this.subject_descripcion.setReadonly(true);
     this.subject_subject.setReadonly(true);
     this.subject_description.setReadonly(true);
     this.subject_electiva.setReadonly(true);
     this.subject_sy.setReadonly(true);
     this.subject_salon.setReadonly(true);
     this.subject_tipo.setReadonly(true);
     this.subject_grado.setReadonly(true);
     
     this.subject_esperados.setReadonly(true);
     this.subject_area1.setReadonly(true);
     this.subject_area2.setReadonly(true);
     this.subject_area3.setReadonly(true);
     this.subject_sub1.setReadonly(true);
     this.subject_sub2.setReadonly(true);
     this.subject_sub3.setReadonly(true);
     
     this.subject_iha1.setReadonly(true);
     this.subject_iha2.setReadonly(true);
     this.subject_iha3.setReadonly(true);
     this.subject_meses.setReadonly(true);
     this.subject_peso.setReadonly(true); 
  },

  subjectDataFormInsertData: function(inSender) {
     this.subject_cancelOperationClick();
  },
  
  subjectDataFormUpdateData: function(inSender) {
     this.subject_cancelOperationClick(); 
  },
  
  subjectDataFormDeleteData: function(inSender) {
     this.id_subject.clear();
     this.subject_asignatura.clear();
     this.subject_descripcion.clear();
     this.subject_subject.clear();
     this.subject_description.clear();
     this.subject_electiva.setChecked(0);
     this.subject_sy.setDisplayValue("");
     this.subject_salon.clear();
     this.subject_tipo.clear();
     this.subject_grado.setDisplayValue("");
     
     this.subject_area1.setDisplayValue("");
     this.subject_area2.setDisplayValue("");
     this.subject_area3.setDisplayValue("");
     this.subject_sub1.setDisplayValue("");
     this.subject_sub2.setDisplayValue("");
     this.subject_sub3.setDisplayValue("");
     
     this.subject_esperados.clear();
     this.subject_iha1.clear();
     this.subject_iha2.clear();
     this.subject_iha3.clear();
     this.subject_ihtotal.clear();
     this.subject_meses.clear();
     this.subject_peso.clear();  
  },
  
  deleteSubjectSuccess: function(inSender, inDeprecated) {
    try {
     this.ls_subjects.update();
     this.id_subject.clear();
     this.subject_asignatura.clear();
     this.subject_descripcion.clear();
     this.subject_subject.clear();
     this.subject_description.clear();
     this.subject_electiva.setChecked(0);
     this.subject_sy.setDisplayValue("");
     this.subject_salon.clear();
     this.subject_tipo.clear();
     this.subject_grado.setDisplayValue("");
     
     this.subject_area1.setDisplayValue("");
     this.subject_area2.setDisplayValue("");
     this.subject_area3.setDisplayValue("");
     this.subject_sub1.setDisplayValue("");
     this.subject_sub2.setDisplayValue("");
     this.subject_sub3.setDisplayValue("");
     
     this.subject_esperados.clear();
     this.subject_iha1.clear();
     this.subject_iha2.clear();
     this.subject_iha3.clear();
     this.subject_ihtotal.clear();
     this.subject_meses.clear();
     this.subject_peso.clear();   
      
    } catch(e) {
      console.error('ERROR IN deleteSubjectSuccess: ' + e); 
    } 
  },
  
  subject_iha1Change: function(inSender, inDisplayValue, inDataValue) {
     var ihtotal= this.intensidadHorariaTotal();
     this.subject_ihtotal.setDataValue(ihtotal);      
  },

  subject_iha2Change: function(inSender, inDisplayValue, inDataValue) {
     var ihtotal= this.intensidadHorariaTotal();
     this.subject_ihtotal.setDataValue(ihtotal);  
  },
  
  subject_iha3Change: function(inSender, inDisplayValue, inDataValue) {
     var ihtotal= this.intensidadHorariaTotal();
     this.subject_ihtotal.setDataValue(ihtotal);          
  },
  
  _end: 0
});