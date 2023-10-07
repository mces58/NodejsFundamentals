exports.getHome = (req, res, next) => {
  res.render("home/index", {
    title: "Home",
    isSuccessful: req.cookies.isSuccess ? true : false,
  });
};
