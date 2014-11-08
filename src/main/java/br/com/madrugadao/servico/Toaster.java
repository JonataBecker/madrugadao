/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.madrugadao.servico;

import br.com.madrugadao.HttpConnection;

/**
 *
 * @author Jonata
 */
public class Toaster implements ServicoTurnOff {
    
    @Override
    public void desliga() throws Exception {
        HttpConnection httpConnection = new HttpConnection();
        httpConnection.get("http://localhost:8080/TomcatServices/webresources/devices/toasterturnoff");
    }    
}
