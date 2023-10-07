const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Category = sequelize.define("category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Category;
