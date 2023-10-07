const router = require("express").Router();
const userController = require("../controller/user");

router.get("/", userController.getAll);

router.get("/products/:id", userController.getById);

router.get(
  "/products/categories/:categoryId",
  userController.getProductsByCategoryId
);

module.exports = router;
