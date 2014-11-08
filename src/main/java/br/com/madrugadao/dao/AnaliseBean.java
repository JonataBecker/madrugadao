/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.madrugadao.dao;

import java.sql.Date;

/**
 *
 * @author User
 */
public class AnaliseBean {
    
    public static final int APARELHO_BREAD_MACHINE = 1;
    public static final int APARELHO_COFFEE_MACHINE = 2;
    public static final int APARELHO_DIGITAL_PHOTO_FRAME = 3;
    public static final int APARELHO_RADIO = 4;
    public static final int APARELHO_TOASTER = 5;
    public static final int APARELHO_AIR_CONDITIONER = 6;
    
    private int id;
    private int aparelho;
    private Date ini;
    private Date fim;

    public AnaliseBean() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAparelho() {
        return aparelho;
    }

    public void setAparelho(int aparelho) {
        this.aparelho = aparelho;
    }

    public Date getIni() {
        return ini;
    }

    public void setIni(Date ini) {
        this.ini = ini;
    }

    public Date getFim() {
        return fim;
    }

    public void setFim(Date fim) {
        this.fim = fim;
    }
    
    
    
}
