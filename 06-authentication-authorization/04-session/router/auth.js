const router = require("express").Router();
const authController = require("../controller/auth");

router.get("/register", authController.getRegister);

router.post("/register", authController.postRegister);

router.get("/login", authController.getLogin);

router.post("/login", authController.postLogin);

router.get("/logout", authController.getLogout);

module.exports = router;
