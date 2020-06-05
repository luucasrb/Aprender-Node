const express = require('express');
const router = express.Router();

// Colocar controller que ainda não foi criado
const smartphone_controller = require('../controllers/teste_controllers');

// teste simples
router.get('/teste', smartphone_controller.test);
module.exports = router;
