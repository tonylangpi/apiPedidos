const { Sequelize } = require('sequelize');
const mysql = require('mysql2');
require('dotenv').config();
const {DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
    DB_PORT} = process.env;

const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`); 
const connection = mysql.createPool(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`); 

connection.getConnection((error) => {
    if (error) {
      console.error('Error al conectarse a la base de datos:', error);
    } else {
      console.log('Conexión exitosa a la base de datos');
    }
  });
module.exports = {sequelize,connection};
