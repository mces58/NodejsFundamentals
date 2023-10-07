const router = require("express").Router();

const data = {
  title: "Error Page",
};

router.use((req, res, next) => {
  res.status(404).render("error/404", data);
});

module.exports = router;
