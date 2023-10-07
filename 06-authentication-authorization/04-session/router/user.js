const router = require("express").Router();
const userController = require("../controller/user");
const routeProtection = require("../middleware/route-protection");

router.get("/", routeProtection, userController.getAll);

router.get("/products/:url", routeProtection, userController.getById);

router.get(
  "/products/categories/:id",
  routeProtection,
  userController.getProductsByCategoryId
);

module.exports = router;
