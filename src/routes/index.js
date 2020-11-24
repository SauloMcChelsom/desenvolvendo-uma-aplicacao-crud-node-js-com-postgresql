/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada da Api da aplicação.
 * Data: 24/11/2020
 * Author: Saulo McChelsom
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({ 
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL!',
    version: '1.0.0',
  });
});

module.exports = router;
