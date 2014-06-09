
package com.aprendoz_desarrollo;

import java.util.List;
import com.aprendoz_desarrollo.data.Asignatura;
import com.aprendoz_desarrollo.data.output.GetMaxSubjectByGradeRtnType;
import com.aprendoz_desarrollo.data.output.GetProcesoMatriculaRtnType;
import com.aprendoz_desarrollo.data.output.GetTipoByUsernameRtnType;
import com.aprendoz_desarrollo.data.output.HQLlsCursosRtnType;
import com.aprendoz_desarrollo.data.output.SubjectDetailsRtnType;
import com.aprendoz_desarrollo.data.output.SubjectsByGradeRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "aprendoz_desarrollo"
 *  03/12/2014 09:53:29
 * 
 */
@SuppressWarnings("unchecked")
public class Aprendoz_desarrollo
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<SubjectsByGradeRtnType> subjectsByGrade(Integer _sy, Integer _grado) {
        return ((List<SubjectsByGradeRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.subjectsByGradeQueryName), _sy, _grado));
    }

    public List<HQLlsCursosRtnType> hQLlsCursos(Integer idg) {
        return ((List<HQLlsCursosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.HQLlsCursosQueryName), idg));
    }

    public Integer deleteSubject(Integer idasignatura) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.deleteSubjectQueryName), idasignatura));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.aprendoz_desarrollo.data.Formulario5a getFormulario5aById(Integer id) {
        List<com.aprendoz_desarrollo.data.Formulario5a> rtn = ((List<com.aprendoz_desarrollo.data.Formulario5a> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getFormulario5aByIdQueryName), id));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<Asignatura> updateSubjects() {
        return ((List<Asignatura> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.updateSubjectsQueryName)));
    }

    public List<GetProcesoMatriculaRtnType> getProcesoMatricula(Integer idp) {
        return ((List<GetProcesoMatriculaRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getProcesoMatriculaQueryName), idp));
    }

    public com.aprendoz_desarrollo.data.output.GetNombreCompletoRtnType getNombreCompleto(String usuario) {
        List<com.aprendoz_desarrollo.data.output.GetNombreCompletoRtnType> rtn = ((List<com.aprendoz_desarrollo.data.output.GetNombreCompletoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getNombreCompletoQueryName), usuario));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetMaxSubjectByGradeRtnType> getMaxSubjectByGrade(Integer idgrado, Integer idsy) {
        return ((List<GetMaxSubjectByGradeRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getMaxSubjectByGradeQueryName), idgrado, idsy));
    }

    public List<GetTipoByUsernameRtnType> getTipoByUsername(String user) {
        return ((List<GetTipoByUsernameRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getTipoByUsernameQueryName), user));
    }

    public List<SubjectDetailsRtnType> subjectDetails(Integer idasignatura) {
        return ((List<SubjectDetailsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.subjectDetailsQueryName), idasignatura));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
