const Sequelize = require("sequelize");

const config = {
  database: "YOUR_DATABASE_NAME",
  user: "YOUR_USERNAME",
  password: "YOUR_PASSWORD",
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  define: {
    timestamps: false, // tüm tablolarda createAt ve updateAt alanları oluşmaz
  },
};

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
  define: config.define,
});

module.exports = sequelize;
