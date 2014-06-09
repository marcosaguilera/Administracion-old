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

//eEncoding line
//import net.sf.jasperreports.engine.pdf.encoding=Cp1250;

import net.sf.jasperreports.engine.JRResultSetDataSource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import java.util.*;
import java.io.*;
import java.awt.*;
import java.awt.Color;
import net.sf.jasperreports.*;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.server.ParamName;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.lang.String;
import java.text.*;


public class cparcial_rector extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
   public DownloadResponse getReport(String idp, String idy, String fecha1, String fecha2) throws Exception {
 
      System.out.println("Persona "+idp);
      System.out.println("Año "+idy);
       
      /* String to Integer*/
      int idanio=Integer.valueOf(idy);
      int idestd=Integer.valueOf(idp);
  
      Long dtnum=Long.valueOf(fecha1);
           Date dt1= new Date(dtnum);
           SimpleDateFormat sdf= new SimpleDateFormat("yyyy-MM-dd");
           String fechaParse1= sdf.format(dt1);           
           System.out.println("Fecha antes "+dt1);
           System.out.println("Fecha despues "+fechaParse1);
           
      Long dtnum2=Long.valueOf(fecha2);
           Date dt2= new Date(dtnum2);
           SimpleDateFormat sdf1= new SimpleDateFormat("yyyy-MM-dd");
           String fechaParse2= sdf1.format(dt2);
           System.out.println("Fecha antes "+dt2);
           System.out.println("Fecha despues "+fechaParse2);
           System.out.println("esto es:"+dt2);

       DownloadResponse ret= new DownloadResponse();
       ConfigurableMimeFileTypeMap mimeFileTypeMap = new ConfigurableMimeFileTypeMap();
       
       Aprendoz_desarrollo service = (Aprendoz_desarrollo) RuntimeAccess.getInstance().getService(Aprendoz_desarrollo.class);
       service.begin();
       Session session= service.getDataServiceManager().getSession();
       try {

          //enviar parametros al reporte
          Map parameters= new HashMap();
          parameters.put("codpersona", idestd);  //codigo estudiante  ex. 195
          parameters.put("IdSy", idanio);        //codigo año escolar ex. 2
          parameters.put("Fecha", fechaParse1);  //recibe la fecha de inicio con la que se calcula las calificaciones obtenidas en hasta la misma (fecha)
          parameters.put("Fecha2", fechaParse2); //recibe la una fecha alterna que se quiera estipular en el reporte

          System.out.println("capturados!");
          System.out.println("Persona "+idp);
          System.out.println("Año "+idy);
          //direccion del archivo Jasper
          URL fileUrl = this.getClass().getResource("Certificado_FECHA_rector.jasper");
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
          ret.setContentType(mimeFileTypeMap.getContentType("Certificado_FECHA.jasper"));
          ret.setContents(new ByteArrayInputStream(out.toByteArray()));
          ret.setFileName("Certificado_Parcial(Rector).pdf");
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