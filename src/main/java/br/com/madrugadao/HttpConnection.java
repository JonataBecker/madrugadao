/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.madrugadao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Classe responsável por realizar conexões HTTP
 */
public class HttpConnection {

    public String post(String link, String parametros) throws Exception {
        return request("POST", link, parametros);
    }
    
    public String get(String link) throws Exception {
        return request("GET", link, "");
    }

    private String request(String method, String link, String parametros) throws Exception {
        int responseCode = 0;
        URL url;
        url = new URL(link);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setDoOutput(true);
        connection.setDoInput(true);
        connection.setInstanceFollowRedirects(false);
        connection.setRequestMethod(method);
        connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        connection.setRequestProperty("Accept-Charset", "UTF-8");
        connection.setUseCaches(false);
        // Se foi definido parâmetros para requisição
        if (!parametros.isEmpty()) {
            try (DataOutputStream wr = new DataOutputStream(connection.getOutputStream()); BufferedWriter writer
                    = new BufferedWriter(new OutputStreamWriter(wr, "UTF-8"))) {
                writer.write(parametros);
            }
        }
        responseCode = connection.getResponseCode();
        // Se encontrou dados da requisição
        if (responseCode != 404) {
            // Trata retorno da requisição
            BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            StringBuilder data = new StringBuilder();
            String rs;
            while ((rs = br.readLine()) != null) {
                data.append(rs);
            }
            connection.disconnect();
            return data.toString();
        }
        return "";
    }

}
