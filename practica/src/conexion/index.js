const mysql=require('mysql2/promise');

const conexion=mysql.createPool({
    host:'localhost',
    port:3306,
    database:'campanas',
    user:'root',
    password:'Naruto75!'
})

module.exports=conexion;