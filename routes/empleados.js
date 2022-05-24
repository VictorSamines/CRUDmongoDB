const express = require('express');
const router = express.Router()

const empleadoController = require('../controllers/empleadoController')

//Mostrar todos los registros (GET)
router.get('/', empleadoController.mostrar)

//Crear registro (POST)
router.post('/crear', empleadoController.crear)

//Editar registro (POST)
router.post('/editar', empleadoController.editar)

//Eliminar registro (GET)
router.get('/borrar/:id', empleadoController.eliminar)

module.exports = router