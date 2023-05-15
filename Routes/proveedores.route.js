const express = require('express');
const router = express();

const {allProveedores} = require('../Controllers/proveedores.controller');

//rutas para traer data de reportes en store procedures de base de datos
router.get('/allproveedores',allProveedores);
module.exports = router;