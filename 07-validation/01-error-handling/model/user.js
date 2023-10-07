const Sequelize = require("../database/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const User = Sequelize.define(
  "user",
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "User name can not be null",
        },
        notEmpty: {
          msg: "User name can not be empty",
        },
        len: {
          args: [3, 20],
          msg: "User name length must be between 3 and 20",
        },
        isUserName(value) {
          const regex = /^[a-zA-Z0-9]+$/;
          if (!regex.test(value)) {
            throw new Error("User name can only contain letters and numbers");
          }
        },
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email address already in use!",
      },
      validate: {
        notNull: {
          msg: "Email can not be null",
        },
        notEmpty: {
          msg: "Email can not be empty",
        },
        isEmail: {
          msg: "Please enter a valid email address",
        },
        isLowercase: {
          msg: "Email address must be lower case",
        },
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password can not be null",
        },
        notEmpty: {
          msg: "Password can not be empty",
        },
        len: {
          args: [1, 5],
          msg: "Password length must be between 6 and 20",
        },
      },
    },

    resetToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    resetTokenExpiration: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    validate: {
      bothCoordsOrNone() {
        if (
          (this.resetToken === null) !==
          (this.resetTokenExpiration === null)
        ) {
          throw new Error(
            "Reset token and token expiration must be both null or both not null"
          );
        }
      },
    },
  }
);

User.afterValidate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User;
