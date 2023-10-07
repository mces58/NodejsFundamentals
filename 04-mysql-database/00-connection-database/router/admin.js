const router = require("express").Router();

const data = {
  title: "Admin Page",
};

router.get("/", (req, res, next) => {
  res.render("admin/index", data);
});

module.exports = router;
