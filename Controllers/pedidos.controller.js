const {connection} = require("../Database/db");

const insertarPedidos = async (req, res) =>{
    
    const {id_cliente,Fecha_pedido,Fecha_entrega,Estado} = req.body; 
    try {
        connection.query(`INSERT INTO Pedidos(id_cliente,Fecha_pedido,Fecha_entrega,Estado) VALUES(${id_cliente},'${Fecha_pedido}','${Fecha_entrega}','${Estado}')`, (error, results) => {
            if(error){
                console.log(error);
            }else{
                res.json({mensaje:"pedido encabezado creado exitosamente"});
            }
        })
    } catch (error) {
        res.json(error);
    }
}

const insertarDetallePedido = async (req, res) =>{
    const{idPedido} = req.params; 
    const {id_producto,cantidad_solicitada,precio_venta} = req.body; 
    try {
                 connection.query(`INSERT INTO Pedidos_detalles(id_pedido,id_producto,cantidad_solicitada,precio_venta) VALUES(${idPedido},${id_producto},${cantidad_solicitada},${precio_venta})`,(error,results) =>{
                    if(error){
                        console.log(error);
                    }else{
                        res.json({mensaje:"pedido detalle creado exitosamente"});
                    }
                 })
    } catch (error) {
        res.json(error);
    }
}
const mostrarPedidos = async (req,res) =>{
    
    try {
        connection.query('SELECT p.Id_pedido, c.Primer_nombre as nombreCliente,p.Fecha_pedido,p.Fecha_entrega,p.Estado, prod.nombre,pd.cantidad_solicitada,pd.precio_venta FROM Pedidos p Inner join Clientes c on c.idCliente = p.id_cliente Inner join Pedidos_detalles pd on pd.id_pedido = p.Id_pedido Inner join Productos prod on prod.idProd = pd.id_producto', (error, results) => {
            if(error){
                console.log(error);
            }else{
                res.json(results);
            }
        })
    } catch (error) {
        res.json(error); 
    }

}
module.exports = {
    insertarPedidos,
    insertarDetallePedido,
    mostrarPedidos
}