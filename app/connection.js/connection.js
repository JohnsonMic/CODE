var mysql = require("mysql2");

var connection;


 if (process.env.JAWSBD_URL) {

 connection = mysql.createConnection(process.env.JAWSBD_URL);

} else{

 connection = mysql.createConnection ({

  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Sandtown10!",
  database: "codeapp_DB"

 });
};
  

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});
module.exports = connection
