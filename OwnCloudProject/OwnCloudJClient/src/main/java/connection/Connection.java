package connection;



import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;

import org.apache.http.client.HttpClient;


import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.impl.client.HttpClients;


import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Scanner;


public class Connection {





    public Connection()  {

            HttpClient httpclient = HttpClients.createDefault();
            HttpPost post = new HttpPost("http://localhost:3000/api/upload");

            // Ruta absoluta, falta por usar FileChooser!

            File file = new File("/home/martin/Documentos/PruebasOwncloud/Prueba2.jpg");
            FileBody fbody = new FileBody(file, ContentType.MULTIPART_FORM_DATA);
            MultipartEntityBuilder entityBuilder = MultipartEntityBuilder.create();
            entityBuilder.setMode(HttpMultipartMode.BROWSER_COMPATIBLE);
            entityBuilder.addPart("upfile", fbody);



            HttpEntity sendEntity = entityBuilder.build();
            post.setEntity(sendEntity);



        try {


            HttpResponse response = httpclient.execute(post);
            HttpEntity entity = response.getEntity();
            if (entity != null) {
                InputStream instream = entity.getContent();
                Scanner scan = new Scanner(instream);
                StringBuilder sb = new StringBuilder();
                while(scan.hasNext()) {
                sb.append(scan.nextLine());


                }
                System.out.println(sb.toString());
            }

        } catch (IOException e) {
            System.out.println("La conexión no se ha podido realizar!");
            e.printStackTrace();
        }







    }
}
