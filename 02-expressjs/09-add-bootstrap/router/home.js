const router = require("express").Router();
const path = require("path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "view", "home", "index.html"));
});

module.exports = router;
