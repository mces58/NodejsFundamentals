const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("home/index");
});

module.exports = router;
