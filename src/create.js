/**
 * Arquivo: create.js
 * Descrição: arquivo responsável pelor criar a tebela e inserir um produto.
 * Data: 24/11/2020
 * Author: Saulo McChelsom
 */
const db = require('./config/database');

module.exports = (async () => {
    await createTable();
    await insert();
})();

async function createTable() {
    await db.query(`
        create table if not exists  products (
            productId SERIAL PRIMARY KEY,
            product_name VARCHAR(255) NOT NULL,
            quantity INTEGER NOT NULL,
            price NUMERIC(5,2)
        );
    `);
    console.log('Table created');
} 

async function insert() {
    let { rows } = await db.query(`select * from products`);
    if(rows.length <=0){
        await db.query(`INSERT INTO products (product_name, quantity, price) VALUES ('leite', 1, 5.30)`);
    }
    for (const row of rows) {
        console.log(row);
    }
}