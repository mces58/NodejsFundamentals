const router = require("express").Router();
const userController = require("../controller/user");

router.get("/", userController.getAll);

router.get("/products/:url", userController.getById);

router.get("/products/categories/:id", userController.getProductsByCategoryId);

module.exports = router;
