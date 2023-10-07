const router = require("express").Router();
const authController = require("../controller/auth");
const csrf = require("../middleware/csrf");

router.get("/register", csrf, authController.getRegister);

router.post("/register", authController.postRegister);

router.get("/login", csrf, authController.getLogin);

router.post("/login", csrf, authController.postLogin);
// post işleminde kullanıcı adı ve şifre kontrolü yapılıyor
// dolayısıyla hatalı giriş işleminde login sayfası tekrar gösteriliyor
// bu sefer csrf token'ı olmadığı için hata alıyoruz
// bu hatayı çözmek için login sayfasında csrf token'ı göndermemiz gerekiyor

router.get("/logout", csrf, authController.getLogout);

router.get("/reset-password", csrf, authController.getResetPassword);

router.post("/reset-password", csrf, authController.postResetPassword);

router.get("/new-password/:token", csrf, authController.getNewPassword);

router.post("/new-password", csrf, authController.postNewPassword);

module.exports = router;
