/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.madrugadao.bd;

import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Enumeration;
import javax.annotation.PreDestroy;

public class ConexaoFactory {
    
    /** Driver do JDBC */
    private static final String driverJdbc = "com.mysql.jdbc.Driver";
    /** URL completa para conexão */
    private static final String url = "jdbc:mysql://localhost/madrugadao";
    /** Usuário para conexão */
    private static final String usuario = "root";
    /** Senha para conexão */
    private static final String senha = "";
    /** Conexão utilizada para todas as requisições sem transação */
    private static Connection conexao;
    
    /**
     * Construtor padrão que recebe instâncias por Injeção de Dependência (DI) do VRaptor
     */
    static {
        registraDriver();
    }

    /**
     * Cria uma conexão ou utiliza uma conexão do cache
     *
     * @return Conexao
     */
    public static Connection criaConexao() {
        // Se não foi criada uma conexão
        if (conexao == null) {
            conexao = getConnectionNonTransaction();
        } 
        return conexao;
    }

    /**
     * Cria uma conexão sem transação (autocommit = true)
     *
     * @return Connection
     */
    private static Connection getConnectionNonTransaction() {
        try {
            Connection conn = getConnection();
            conn.setAutoCommit(true);
            return conn;
        } catch (Exception ex) {
        }
        return null;
    }

    /**
     * Cria uma Connection do JDBC
     *
     * @return Connection
     */
    private static Connection getConnection() {
        try {
            return DriverManager.getConnection(url, usuario, senha);
        } catch (SQLException ex) {
        }
        return null;
    }

    /**
     * Registra a classe do Driver JDBC
     */
    private static void registraDriver() {
        try {
            Class.forName(driverJdbc);
        } catch (ClassNotFoundException ex) {
        }
    }

    /**
     * Remove (unregister) as classes JDBC utilizadas para conexão quando a classe é eliminada
     */
    @PreDestroy
    public static void desregistraDriver() {
        Enumeration<Driver> list = DriverManager.getDrivers();
        while (list.hasMoreElements()) {
            Driver driver = list.nextElement();
            try {
                if (driver.acceptsURL(url)) {
                    DriverManager.deregisterDriver(driver);
                }
            } catch (SQLException ex) {
            }
        }
    }
}
