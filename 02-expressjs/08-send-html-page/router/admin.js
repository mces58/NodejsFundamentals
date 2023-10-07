const router = require("express").Router();
const path = require("path");

// sendFile ile html sayfasını gönderiyoruz
// /views/add-product şeklinde yolu belirtemiyoruz. Dosyanın tam yolunu vermeliyiz
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "view", "admin", "index.html")); // __dirname: bu dosyanın bulunduğu klasör
});

module.exports = router;
