const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',  // Dirección del contenedor Docker de MySQL
    user: 'root',
    password: '123456',
    database: 'nombre_de_tu_base_de_datos'
});

module.exports = pool.promise();
