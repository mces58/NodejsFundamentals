const router = require("express").Router();

router.use((req, res, next) => {
  res.status(404).render("error/404");
});

module.exports = router;
