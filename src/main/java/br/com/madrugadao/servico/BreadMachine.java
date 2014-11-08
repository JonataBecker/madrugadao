/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.madrugadao.servico;

import br.com.madrugadao.HttpConnection;
import java.util.List;

/**
 *
 * @author Jonata
 */
public class BreadMachine implements ServicoTurnOff {

    @Override
    public void desliga() throws Exception {
        HttpConnection httpConnection = new HttpConnection();
        
        String ret = httpConnection.get("http://localhost:8080/TomcatServices/webresources/devices/breadmachineison");
        boolean isOn  = Boolean.valueOf(ret);
        
        if (isOn) {
            httpConnection.get("http://localhost:8080/TomcatServices/webresources/devices/breadmachineturnoff");
//            lista.add(1);
        }
    }
    
    
}
