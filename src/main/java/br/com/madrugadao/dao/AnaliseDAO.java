/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.madrugadao.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author User
 */
public class AnaliseDAO {
    
    private final Connection conn;

    public AnaliseDAO(Connection conn) {
        this.conn = conn;
    }
    
    public void insertOnUpdate(AnaliseBean analise) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO analise (id, aparelho, ini, fim) VALUES (?, ?, ?, ?)");
        stmt.setInt(1, analise.getId());
        stmt.setInt(2, analise.getAparelho());
        stmt.setDate(3, analise.getIni());
        stmt.setDate(4, analise.getFim());
        stmt.executeUpdate();
    }

    public AnaliseBean busca(String chave) throws SQLException {
        AnaliseBean bean = new AnaliseBean();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        try {
            stmt = conn.prepareStatement("SELECT id, aparelho, ini, fim FROM CONFIGURACOES WHERE chave = ?");
            stmt.setObject(1, chave);
            rs = stmt.executeQuery();
            rs.next();
            bean.setId(rs.getInt("id"));
            bean.setAparelho(rs.getInt("aparelho"));
            bean.setIni(rs.getDate("ini"));
            bean.setFim(rs.getDate("fim"));
            return bean;
        } finally {
            if (rs != null) {
                rs.close();
            }
            if (stmt != null) {
                stmt.close();
            }
        }
    }

}
