const express = require('express');
const router = express();

const {all} = require('../Controllers/productos.controller');

//rutas para traer data de reportes en store procedures de base de datos
router.get('/allproductos',all);
module.exports = router;