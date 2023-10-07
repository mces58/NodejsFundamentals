exports.getIndex = (req, res, next) => {
  res.render("admin/index", { title: "Admin Page" });
};
