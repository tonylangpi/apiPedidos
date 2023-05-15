const express = require('express');
const router = express();

const {insertarPedidos,insertarDetallePedido,mostrarPedidos } = require('../Controllers/pedidos.controller');

//rutas para traer data de reportes en store procedures de base de datos
router.post('/crearPedidoEncabezado',insertarPedidos);//crea en la base de datos el pedido encabezado
router.post('/detallePedido/:idPedido',insertarDetallePedido); //crea en la base de datos el detalle del pedido creado en el encabezado pedidos
router.get('/mostrarPedidos', mostrarPedidos);
module.exports = router;