var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lending"
});

con.connect(function (err){
    if(err) throw err;
    console.log('connected to database')
});


module.exports = con;