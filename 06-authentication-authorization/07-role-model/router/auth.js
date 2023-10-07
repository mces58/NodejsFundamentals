const router = require("express").Router();
const authController = require("../controller/auth");
const csrf = require("../middleware/csrf");

router.get("/register", csrf, authController.getRegister);

router.post("/register", authController.postRegister);

router.get("/login", csrf, authController.getLogin);

router.post("/login", csrf, authController.postLogin);

router.get("/logout", csrf, authController.getLogout);

router.get("/reset-password", csrf, authController.getResetPassword);

router.post("/reset-password", csrf, authController.postResetPassword);

router.get("/new-password/:token", csrf, authController.getNewPassword);

router.post("/new-password", csrf, authController.postNewPassword);

module.exports = router;
