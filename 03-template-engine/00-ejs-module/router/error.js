const router = require("express").Router();

// sendFile() fonksiyonu yerine render() fonksiyonu kullanılır
// render() fonksiyonu ile ejs dosyaları gönderilir
// ../view/error/404 diye daha belirtmemize gerek yok zaten app.js içinde ./view klasörünü belirtmiştik
router.use((req, res, next) => {
  res.status(404).render("error/404");
});

module.exports = router;
