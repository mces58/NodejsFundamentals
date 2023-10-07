const User = require("../model/user");
const bcrypt = require("bcrypt");

exports.getRegister = (req, res, next) => {
  res.render("auth/register", {
    title: "Register",
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
    const isUser = await User.findOne({ where: { email } }); // email'e göre kullanıcı var mı yok mu kontrol ediyoruz

    if (isUser) {
      req.session.message = { text: "User already exists", class: "warning" }; // session'a error mesajı kaydedildi
      return res.redirect("/account/login"); // kullanıcı varsa login sayfasına yönlendiriyoruz
    }

    await User.create(user);

    req.session.message = {
      text: "User created successfully",
      class: "success",
    };

    res.redirect("/account/login");
  } catch (err) {
    console.log(err);
  }
};

exports.getLogin = (req, res, next) => {
  const message = req.session.message; // session'daki error mesajını aldık
  delete req.session.message; // session'daki error mesajını sildik

  res.render("auth/login", {
    title: "Login",
    message,
  });
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.render("auth/login", {
        title: "Login",
        message: { text: "Invalid email or password", class: "danger" }, // session'a error mesajı kaydedildi
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.render("auth/login", {
        title: "Login",
        message: { text: "Invalid email or password", class: "danger" }, // session'a error mesajı kaydedildi
      });
    }

    req.session.isSuccess = 1; // session oluşturuldu
    req.session.user = user; // session'a user bilgisi kaydedildi
    const url = req.query.redirectTo || "/"; // login olmadan önce /admin/product/create sayfasına gitmek istiyorduk. login olduktan sonra bu sayfaya yönlendiriyoruz.
    res.redirect(url);
  } catch (err) {
    console.log(err);
  }
};

exports.getLogout = (req, res, next) => {
  req.session.destroy();

  res.redirect("/");
};
