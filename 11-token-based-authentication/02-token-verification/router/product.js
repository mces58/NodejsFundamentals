const router = require("express").Router();
const productController = require("../controller/product");
const auth = require("../middleware/auth");

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductById);

router.post("/", auth, productController.createProduct); // her kullanıcı ürün ekleyebilir lakin token olmadan ürün eklenemez

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
