const User = require("../model/user");
const bcrypt = require("bcrypt");
const emailService = require("../helper/send-mail");
const config = require("../config");
const crypto = require("crypto");
const { Op } = require("sequelize");

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

    const newUser = await User.create(user);

    req.session.message = {
      text: "User created successfully",
      class: "success",
    };

    res.redirect("/account/login");

    await emailService.sendMail({
      from: config.auth.user,
      to: newUser.email,
      subject: "Account Created",
      html: `<h1>Account Created</h1>
      <p>Account created successfully. Your username: ${userName}</p>
      `,
    });
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

    const userRoles = await user.getRoles(
      { attributes: ["name"], raw: true } // user'ın rollerini aldık
    ); // kullanıcının rollerini aldık
    req.session.userRoles = userRoles.map((role) => role.name); // session'a user rollerini kaydettik
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

exports.getResetPassword = (req, res, next) => {
  res.render("auth/reset-password", {
    title: "Reset Password",
  });
};

exports.postResetPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.render("auth/reset-password", {
        title: "Reset Password",
        message: { text: "Invalid email", class: "danger" }, // session'a error mesajı kaydedildi
      });
    }

    const token = crypto.randomBytes(32).toString("hex"); // 32 karakterlik rastgele bir token oluşturduk

    user.resetToken = token;
    user.resetTokenExpiration = Date.now() + 3600000; // 1 saat

    await user.save();

    await emailService.sendMail({
      from: config.auth.user,
      to: user.email,
      subject: "Reset Password",
      html: `<h1>Reset Password</h1>
      <p>Click <a href="http://localhost:3000/account/new-password/${token}">this link</a> to reset your password.</p>
      `,
    });

    res.render("auth/reset-password", {
      title: "Reset Password",
      message: {
        text: "Reset password link sent to your email",
        class: "success",
      }, // session'a error mesajı kaydedildi
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getNewPassword = async (req, res, next) => {
  const { token } = req.params;

  try {
    const user = await User.findOne({
      where: {
        resetToken: token,
        resetTokenExpiration: { [Op.gt]: Date.now() }, // resetTokenExpiration şuanki zamandan büyükse
      },
    });

    if (!user) {
      return res.render("auth/new-password", {
        title: "New Password",
        message: {
          text: "Invalid token",
          class: "danger",
        },
      });
    }

    res.render("auth/new-password", {
      title: "New Password",
      userId: user.id,
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postNewPassword = async (req, res, next) => {
  const { userId, token, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        id: userId,
        resetToken: token,
        resetTokenExpiration: { [Op.gt]: Date.now() }, // resetTokenExpiration şuanki zamandan büyükse
      },
    });

    if (!user) {
      return res.render("auth/new-password", {
        title: "New Password",
        message: {
          text: "Invalid token",
          class: "danger",
        },
      });
    }

    user.password = await bcrypt.hash(password, 10);
    user.resetToken = null;
    user.resetTokenExpiration = null;

    await user.save();

    req.session.message = {
      text: "Password changed successfully",
      class: "success",
    };
    res.redirect("/account/login");
  } catch (err) {
    console.log(err);
  }
};
