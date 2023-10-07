const Sequelize = require("../database/database");
const { DataTypes } = require("sequelize");

const User = Sequelize.define("user", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
