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
        // sequelize ile validation işlemlerini yapabiliyoruz
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
          // kendi validation fonksiyonumuzu yazıyoruz
          // userName regex ile sadece harf ve rakam içerebilir
          const regex = /^[a-zA-Z0-9]+$/;
          if (!regex.test(value)) {
            throw new Error("User name can only contain letters and numbers");
          }
        },
      },
    },

    email: {
      // validation işlemlerini diğer alanlarda da yapabiliriz
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
    // model seviyesinde validation işlemlerini de yapabiliriz
    // model seviyesinde yazılan validasyonlarda tüm alanlara ulasabiliyoruz ve bu alanlara tek tek erişmek zorunda kalmıyoruz
    // yukarıda yaptığımız validasyon işlemleri property seviyesinde validasyon işlemleridir
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

// password alanı için validation işlemlerini burada yapabiliriz
// password alanı için validation işlemlerini burada yapmamızın sebebi password alanı ile ilgili validation işlemlerini model seviyesinde yapamıyor olmamızdır
// password alanı ile ilgili validation işlemlerini model seviyesinde yapamıyor olmamızın sebebi password alanının modeldeki password alanı ile aynı olmamasıdır
// hashlenmiş password alanı ile password alanı aynı değildir
// burada hashleyeceğiz ve hashlenmiş password alanı ile password alanı aynı olacağı için burada validation işlemlerini yapabiliriz
User.afterValidate(async (user) => {
  // afterValidate hook'u validation işlemlerinden sonra çalışır
  // burada password alanı ile ilgili validation işlemlerini yapabiliriz
  user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User;
