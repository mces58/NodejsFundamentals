const router = require("express").Router();

// sendFile() fonksiyonu yerine render() fonksiyonu kullanılır
// render() fonksiyonu ile ejs dosyaları gönderilir
// ../view/user/index diye daha belirtmemize gerek yok zaten app.js içinde ./view klasörünü belirtmiştik
router.get("/", (req, res, next) => {
  res.render("user/index");
});

module.exports = router;
