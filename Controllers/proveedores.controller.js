const {connection} = require("../Database/db");

const allProveedores = async (req, res) =>{
    try {
        connection.query('Select * from Proveedores', (error, results) => {
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
    allProveedores,
}