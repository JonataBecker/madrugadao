
package br.com.madrugadao.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ConfiguracoesDAO {
    
    private final Connection conn;

    public ConfiguracoesDAO(Connection conn) {
        this.conn = conn;
    }
    
    public void insertOnUpdate(ConfiguracoesBean configuracoes) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO CONFIGURACOES (chave, valor) VALUES (?, ?) ON DUPLICATE KEY UPDATE valor = ?");
        stmt.setString(1, configuracoes.getChave());
        stmt.setString(2, configuracoes.getValor());
        stmt.executeUpdate();
    }

    public ConfiguracoesBean busca(String chave) throws SQLException {
        ConfiguracoesBean bean = new ConfiguracoesBean();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        try {
            stmt = conn.prepareStatement("SELECT chave, valor FROM CONFIGURACOES WHERE chave = ?");
            stmt.setObject(1, chave);
            rs = stmt.executeQuery();
            rs.next();
            bean.setChave(rs.getString("chave"));
            bean.setValor(rs.getString("valor"));
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
