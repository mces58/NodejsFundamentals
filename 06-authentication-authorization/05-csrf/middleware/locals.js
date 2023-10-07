module.exports = (req, res, next) => {
  res.locals.isSuccessful = req.session.isSuccess ? true : false;
  res.locals.user = req.session.user ? req.session.user : null;
  next();
};
