//importar librerias y complementos
import com.aprendoz_desarrollo.*;
import org.hibernate.Session;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.server.DownloadResponse;
import java.net.URL;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import java.io.ByteArrayOutputStream;
import java.io.ByteArrayInputStream;
import java.util.Map;
import java.util.HashMap;
import com.wavemaker.runtime.server.ParamName;
import org.springframework.mail.javamail.ConfigurableMimeFileTypeMap;


import net.sf.jasperreports.engine.JRResultSetDataSource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import java.util.*;
import java.io.*;
import java.awt.*;
import java.awt.Color;
import net.sf.jasperreports.*;
import net.sf.jasperreports.engine.util.JRStyledTextParser; 
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.server.ParamName;

public class cfinal extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
  public DownloadResponse getReport(String idp, String idy) throws Exception {
  
        System.out.println("Persona "+idp);
        System.out.println("Año "+idy);

       DownloadResponse ret= new DownloadResponse();
       ConfigurableMimeFileTypeMap mimeFileTypeMap = new ConfigurableMimeFileTypeMap();
       
        Aprendoz_desarrollo service = (Aprendoz_desarrollo) RuntimeAccess.getInstance().getService(Aprendoz_desarrollo.class);
        service.begin();
        Session session= service.getDataServiceManager().getSession();
       try {
          //enviar parametros al reporte
          Map parameters= new HashMap();
          // parameters.put("idgrado", idg);
          parameters.put("codpersona", idp);
          parameters.put("IdSy", idy);

          System.out.println("capturados!");
          System.out.println("Persona "+idp);
          System.out.println("Año "+idy);
          //direccion del archivo Jasper
          URL fileUrl = this.getClass().getResource("total.jasper");
          System.out.println("paso 1 ");
          //para cargar el jasper
          JasperReport report2 = (JasperReport)JRLoader.loadObject(fileUrl);
          System.out.println("paso 2 ");
          //cargar conexion de la base de datos al reporte y el archivo Jasper
          JasperPrint jasperPrint = JasperFillManager.fillReport(report2,parameters,session.connection());
          System.out.println("paso 3 ");
          //exportar a pdf
          ByteArrayOutputStream out= new ByteArrayOutputStream();
          JasperExportManager.exportReportToPdfStream(jasperPrint, out);
          System.out.println("paso 4 ");
          //cargar pdf como una respuesta de descarga
          ret.setContentType(mimeFileTypeMap.getContentType("total.jasper"));
          ret.setContents(new ByteArrayInputStream(out.toByteArray()));
          ret.setFileName("(Certificado_Final)"+idp+"_periodo_"+idy+".pdf");
          System.out.println("paso 5 ");

       } catch(Exception e) {
          System.out.println("Error creando el PDF");
          e.printStackTrace();
       }
       finally{
       service.commit();
       }
       return ret;
    }
}