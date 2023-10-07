const { DataTypes } = require("sequelize"); // veri tipleri alındı
const sequelize = require("../database/database");

const Product = sequelize.define("product", {
  // tablo adı
  id: {
    type: DataTypes.INTEGER, // veri tipi
    autoIncrement: true, // otomatik artan
    allowNull: false, // boş geçilemez
    primaryKey: true, // primary key
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Product;
