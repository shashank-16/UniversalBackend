var mysql = require("mysql");

const connection = mysql.createPool({ //pool request can allow to connect with different request function.
    host: 'localhost',
    user: "root",
    password: "password",
    database: "mysql",
    insecureAuth: true
});

module.exports = connection;