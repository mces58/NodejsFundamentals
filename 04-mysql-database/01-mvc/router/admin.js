const router = require("express").Router();
const adminController = require("../controller/admin");

router.get("/", adminController.getIndex);

module.exports = router;
