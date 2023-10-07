const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("<h1>User Page</h1>");
});

module.exports = router;
