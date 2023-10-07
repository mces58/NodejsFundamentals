const router = require("express").Router();
const userController = require("../controller/user");

router.get("/", userController.getAll);

module.exports = router;
