const router = require("express").Router();
const path = require("path");

// sendFile ile html sayfasını gönderiyoruz
router.use("/", (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "../", "view", "error", "404.html")); // __dirname: bu dosyanın bulunduğu klasör
});

module.exports = router;
