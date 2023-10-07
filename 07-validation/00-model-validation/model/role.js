const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Role = sequelize.define("role", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Role;
