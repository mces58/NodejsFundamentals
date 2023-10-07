module.exports = (req, res, next) => {
  res.locals.isSuccessful = req.session.isSuccess ? true : false;
  res.locals.user = req.session.user ? req.session.user : null;
  res.locals.isAdmin = req.session.userRoles
    ? req.session.userRoles.includes("admin")
    : false;
  res.locals.isModerator = req.session.userRoles
    ? req.session.userRoles.includes("moderator")
    : false;
  next();
};
