const router = require("express").Router();
const adminController = require("../controller/admin");
const upload = require("../helper/image-upload");

router.get("/", adminController.getIndex);

router.get("/products", adminController.getProducts);

router.get("/product/create", adminController.getCreateProduct);

router.post(
  "/product/create",
  upload.single("image"),
  adminController.postCreateProduct
);

router.get("/product/edit/:productId", adminController.getEditProduct);

router.post(
  "/product/edit",
  upload.single("image"),
  adminController.postEditProduct
);

router.get("/product/delete/:productId", adminController.getDeleteProduct);

router.post("/product/delete", adminController.postDeleteProduct);

router.get("/categories", adminController.getCategories);

router.get("/category/create", adminController.getCreateCategory);

router.post("/category/create", adminController.postCreateCategory);

router.get("/category/edit/:categoryId", adminController.getEditCategory);

router.post("/category/edit", adminController.postEditCategory);

router.get("/category/delete/:categoryId", adminController.getDeleteCategory);

router.post("/category/delete", adminController.postDeleteCategory);

module.exports = router;
