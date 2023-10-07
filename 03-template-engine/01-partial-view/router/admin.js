const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("admin/index");
});

module.exports = router;
