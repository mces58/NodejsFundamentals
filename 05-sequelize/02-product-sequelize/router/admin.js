const router = require("express").Router();
const adminController = require("../controller/admin");
const upload = require("../helper/image-upload");

router.get("/", adminController.getIndex);

router.get("/products", adminController.getProducts);

router.get("/product/create", adminController.getCreateProduct);

router.post(
  "/product/create",
  upload.single("image"), // formda hangi isimlendirme ile yaptıysan o isimle alınır
  adminController.postCreateProduct
);

router.get("/product/edit/:productId", adminController.getEditProduct);

router.post(
  "/product/edit",
  upload.single("image"), // formda hangi isimlendirme ile yaptıysan o isimle alınır
  adminController.postEditProduct
);

router.get("/product/delete/:productId", adminController.getDeleteProduct);

router.post("/product/delete", adminController.postDeleteProduct);

module.exports = router;
