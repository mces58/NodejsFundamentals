const { DataTypes } = require("sequelize"); // veri tipleri alındı
const sequelize = require("../database/database");

const Category = sequelize.define(
  "category", // tablo adı
  {
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

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false, // disable createdAt and updatedAt
  }
);

module.exports = Category;
