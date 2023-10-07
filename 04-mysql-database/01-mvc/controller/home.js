exports.home = (req, res, next) => {
  res.render("home", { title: "Home" });
};
