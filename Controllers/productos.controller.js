const {connection} = require("../Database/db");

const all = async (req, res) =>{
    try {
        connection.query('Select Productos.idProd, Productos.nombre, Productos.precio_venta, Categoria.nombre as nombreCat from Productos inner join Categoria on Categoria.id_categoria = Productos.idCategoria', (error, results) => {
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
    all,
}