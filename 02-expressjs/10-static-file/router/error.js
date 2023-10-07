const router = require("express").Router();
const path = require("path");

router.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "../", "view", "error", "404.html"));
});

module.exports = router;
