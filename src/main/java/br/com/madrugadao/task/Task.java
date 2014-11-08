/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.madrugadao.task;

import br.com.madrugadao.servico.Arcondicionado;
import br.com.madrugadao.servico.BreadMachine;
import br.com.madrugadao.servico.CoffeeMachine;
import br.com.madrugadao.servico.DigitalPhotoFrame;
import javax.enterprise.context.ApplicationScoped;
import br.com.madrugadao.servico.Presence;
import br.com.madrugadao.servico.Radio;
import br.com.madrugadao.servico.Toaster;
import com.mysql.fabric.xmlrpc.base.Data;
import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;

@ApplicationScoped
public class Task {

    private static final int TIME = 10000;

        
    private final List<Integer> lista = new ArrayList<>();
    
    @Inject
    public Task() {
        run();
    }

    private void run() {

        Thread thread = new Thread(new Runnable() {

            @Override
            public void run() {
                try {
                    while (true) {
                        desligaEquipamentos();
                        Thread.sleep(TIME);
                    }
                } catch (Exception e) {
                }
            }
        });
        thread.start();
    }

    private void desligaEquipamentos() {
        try {
            Presence presence = new Presence();
            presence.processa();
            if (!presence.getBean().isPresence()) {
                
                // se e
                
                return;
            }
            
            
            new BreadMachine().desliga();
            new CoffeeMachine().desliga();
            new DigitalPhotoFrame().desliga();
            new Radio().desliga();
            new Toaster().desliga();
            new Arcondicionado().desliga();
            
            
            if (!lista.isEmpty()) {
                
                /// Gravar no banco 
                
                ///  Apaparalho INI FIN
                
                
            }
            
            
        } catch (Exception ex) {
            System.out.println(ex);
        }

    }

    
    private class Item {
        
        private int id;
        
        private int parelho;
        
        private Data ini;
        
        private Data fim;
    }
}
