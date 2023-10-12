const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',  // Dirección del contenedor Docker de MySQL
    user: 'root',
    password: '12345',
    database: 'sakila'
});

module.exports = pool.promise();
