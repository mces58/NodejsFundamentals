exports.getError = (req, res, next) => {
  res.status(404).render("error/404", { title: "Error Page" });
};
