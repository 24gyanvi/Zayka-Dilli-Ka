// This is a connection to the database.
var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    database:'restaurants',
    // Change the user and password to your own.
    user:'root',
    password: 'gyanvi'
});
module.exports=connection;
    
    