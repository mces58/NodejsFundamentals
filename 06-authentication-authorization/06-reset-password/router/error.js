const router = require("express").Router();
const errorController = require("../controller/error");

router.use(errorController.getError);

module.exports = router;
