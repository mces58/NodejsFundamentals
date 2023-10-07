const router = require("express").Router();

const data = {
  title: "Home Page",
};

router.get("/", (req, res, next) => {
  res.render("home/index", data);
});

module.exports = router;
