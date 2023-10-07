const router = require("express").Router();
const userController = require("../controller/user");

router.get("/", userController.getAllUsers);

router.post("/", userController.createUser);

router.post("/auth", userController.authUser);

module.exports = router;
