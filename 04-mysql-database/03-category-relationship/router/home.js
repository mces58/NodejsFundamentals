const router = require("express").Router();
const homeController = require("../controller/home");

router.get("/", homeController.getHome);

module.exports = router;
