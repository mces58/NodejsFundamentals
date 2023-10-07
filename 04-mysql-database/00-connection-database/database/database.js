const mysql = require("mysql2");

// database ayarları
const config = {
  host: "localhost",
  user: "YOUR_USERNAME",
  password: "YOUR_PASSWORD",
  database: "YOUR_DATABASE_NAME",
  port: 3306,
};

// database bağlantısı
const connection = mysql.createConnection(config);

// database bağlanmış olduk
connection.connect((error) => {
  if (error) throw error;
  console.log("Database server running!");
});

// promise tabanlı çalışma
module.exports = connection.promise();
