// Set up MySQL connection.
var mysql = require("mysql");
var connection;

//Heroku Connection 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // MYSQL connection
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "PetSearch"
    });

};

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;