const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.write("<h1>User page</h1>");
  res.write("<a href='/'>Geri Git</a>");
  res.end();
});

module.exports = router;
