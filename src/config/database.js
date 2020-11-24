/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings da aplicação: PostgreSQL.
 * Data: 24/11/2020
 * Author: Saulo McChelsom
 */

const { Pool } = require('pg');

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'app',
  password: '123456',
  port: 5432,
})

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
