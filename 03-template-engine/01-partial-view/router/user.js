const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("user/index");
});

module.exports = router;
