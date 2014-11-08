/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.madrugadao.servico;

/**
 *
 * @author Jonata
 */
public interface Servico<T> {
    
    public void processa()throws Exception;
    
    public T getBean();
    
}
