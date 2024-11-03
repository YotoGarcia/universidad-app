const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/universidadController');

router.get('/', clienteController.listUniversidad);
router.post('/', clienteController.postUniversidad);
router.put('/id', clienteController.updateUniversidad);
router.delete('/id', clienteController.deleteUniversidad);

module.exports = router
