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

  resetToken: {
    // reset token'ı kullanıcıya mail olarak gönderiyoruz ve kullanıcıya mail geldiğinde bu token'ı kullanarak şifresini sıfırlayabiliyor
    type: DataTypes.STRING,
    allowNull: true,
  },

  resetTokenExpiration: {
    // token'ın geçerlilik süresi
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = User;
