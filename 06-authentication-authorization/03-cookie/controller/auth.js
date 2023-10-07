const User = require("../model/user");
const bcrypt = require("bcrypt");

exports.getRegister = (req, res, next) => {
  res.render("auth/register", {
    title: "Register",
    isSuccessful: req.cookies.isSuccess ? true : false,
  });
};

exports.postRegister = async (req, res, next) => {
  const { userName, email, password } = req.body;

  const user = {
    userName,
    email,
    password: await bcrypt.hash(password, 10),
  };

  try {
    await User.create(user);
    res.redirect("/account/login");
  } catch (err) {
    console.log(err);
  }
};

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    title: "Login",
    isSuccessful: req.cookies.isSuccess ? true : false,
  });
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.render("auth/login", {
        title: "Login",
        error: "Invalid email or password",
        isSuccessful: req.cookies.isSuccess ? true : false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.render("auth/login", {
        title: "Login",
        error: "Invalid email or password",
        isSuccessful: req.cookies.isSuccess ? true : false,
      });
    }

    res.cookie("isSuccess", 1); // başarılı giriş yapan kullanıcı için cookie oluşturuldu
    res.redirect("/user");
  } catch (err) {
    console.log(err);
  }
};

exports.getLogout = (req, res, next) => {
  res.clearCookie("isSuccess"); // cookie silindi
  res.redirect("/");
};
