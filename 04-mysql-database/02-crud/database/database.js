const mysql = require("mysql2");

const config = {
  host: "localhost",
  user: "YOUR_USERNAME",
  password: "YOUR_PASSWORD",
  database: "YOUR_DATABASE_NAME",
  port: 3306,
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) throw err;
  console.log("Bağlandı");
});

module.exports = connection.promise();
