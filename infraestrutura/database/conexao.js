const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password: '17019702_Da',
    database: 'agenda-petshop'
});

module.exports = conexao
