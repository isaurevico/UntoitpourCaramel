const mysql = require('mysql');
const dbName = "agregator";
const db = mysql.createConnection({   host: "localhost",   user: "root",   password: "root", database:dbName});

db.connect(function(err) {
       if (err) throw err;   
       console.log("Connecté à la base de données MySQL!"); 
    });
