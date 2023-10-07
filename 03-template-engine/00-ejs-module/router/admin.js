const router = require("express").Router();

// sendFile() fonksiyonu yerine render() fonksiyonu kullanılır
// render() fonksiyonu ile ejs dosyaları gönderilir
// ../view/admin/index diye daha belirtmemize gerek yok zaten app.js içinde ./view klasörünü belirtmiştik
router.get("/", (req, res, next) => {
  res.render("admin/index");
});

module.exports = router;
