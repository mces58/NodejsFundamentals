const router = require("express").Router();
const productController = require("../controller/product");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductById);

router.post("/", [auth, role], productController.createProduct); // token bilgisi olmalı ve role admin olmalı

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
