/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.madrugadao.servico;

import br.com.madrugadao.HttpConnection;
import com.google.gson.Gson;

/**
 *
 * @author Jonata
 */
public class Presence implements Servico<PresenceBean> {

    private PresenceBean bean;

    @Override
    public void processa() throws Exception {
        String presence = "http://www.pixelax.com.br/madrugadao/presence.php";
        HttpConnection httpConnection = new HttpConnection();
        String url = httpConnection.get(presence);
        Gson gson = new Gson();
        bean = gson.fromJson(url, PresenceBean.class);
    }

    @Override
    public PresenceBean getBean() {
        return bean;
    }
}
