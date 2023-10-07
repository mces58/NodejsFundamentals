module.exports = (req, res, next) => {
  if (!req.session.isSuccess) {
    return res.redirect("/account/login?redirectTo=" + req.originalUrl);
  }
  next();
};
