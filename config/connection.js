const mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
      
        // Port; if not 3306
        port: 3306,
      
        // Username
        user: "root",
      
        // Password
        password: "",
        database: "burgers_db"
    });
      
    connection.connect(function(err) {
        if (err) throw err;
    });
}


module.exports = connection;