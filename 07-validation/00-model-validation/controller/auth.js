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
    password: password,
  };

  try {
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
    let msg = "";

    for (let e of err.errors) {
      msg += e.message + " ";
    }

    res.render("auth/register", {
      title: "Register",
      message: { text: msg, class: "danger" },
    });
  }
};

exports.getLogin = (req, res, next) => {
  const message = req.session.message;
  delete req.session.message;

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
        message: { text: "Invalid email or password", class: "danger" },
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.render("auth/login", {
        title: "Login",
        message: { text: "Invalid email or password", class: "danger" },
      });
    }

    const userRoles = await user.getRoles({ attributes: ["name"], raw: true });
    req.session.userRoles = userRoles.map((role) => role.name);
    req.session.isSuccess = 1;
    req.session.user = user;
    const url = req.query.redirectTo || "/";
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
        message: { text: "Invalid email", class: "danger" },
      });
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.resetToken = token;
    user.resetTokenExpiration = Date.now() + 3600000;

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
      },
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
        resetTokenExpiration: { [Op.gt]: Date.now() },
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
        resetTokenExpiration: { [Op.gt]: Date.now() },
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
