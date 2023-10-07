const router = require("express").Router();
const authController = require("../controller/auth");
const csrf = require("../middleware/csrf");

router.get("/register", csrf, authController.getRegister);

router.post("/register", authController.postRegister);

router.get("/login", csrf, authController.getLogin);

router.post("/login", authController.postLogin);

router.get("/logout", authController.getLogout);

module.exports = router;
