const router = require("express").Router();

// sendFile() fonksiyonu yerine render() fonksiyonu kullanılır
// render() fonksiyonu ile ejs dosyaları gönderilir
// ../view/home/index diye daha belirtmemize gerek yok zaten app.js içinde ./view klasörünü belirtmiştik
router.get("/", (req, res, next) => {
  res.render("home/index");
});

module.exports = router;
