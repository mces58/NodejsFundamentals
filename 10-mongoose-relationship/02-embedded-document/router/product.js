const router = require("express").Router();
const productController = require("../controller/product");

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductById);

router.post("/", productController.createProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

router.put("/:id/comments", productController.addComment);

router.delete("/:id/comments", productController.deleteComment);

module.exports = router;
