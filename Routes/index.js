const express = require('express');
const router = express();
const pedidos = require('./pedidos.route');
const productos = require('./productos.route');
const proveedores = require('./proveedores.route');
//this route will come with all comunidades
router.use('/pedidos',pedidos);
router.use('/productos', productos);
router.use('/proveedores', proveedores);

module.exports = router; 