const router = require("express").Router();
const homeController = require("../controller/home");

router.get("/", homeController.home);

module.exports = router;
