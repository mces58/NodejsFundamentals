const router = require("express").Router();
const path = require("path");

// sendFile ile html sayfasını gönderiyoruz
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "view", "user", "index.html")); // __dirname: bu dosyanın bulunduğu klasör
});

module.exports = router;
