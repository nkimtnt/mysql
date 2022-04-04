const mysql = require('mysql');

const db = mysql.createPool({
    host : 'host',
    user : 'user',
    password : 'password',
    port : port,
    databasee : 'kimvayne',
})
module.exports = db;