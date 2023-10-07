const router = require("express").Router();
const adminController = require("../controller/admin");
const upload = require("../helper/image-upload");
const routeProtection = require("../middleware/route-protection");

router.get("/", routeProtection, adminController.getIndex);

router.get("/products", routeProtection, adminController.getProducts);

router.get(
  "/product/create",
  routeProtection,
  adminController.getCreateProduct
);

router.post(
  "/product/create",
  routeProtection,
  upload.single("image"),
  adminController.postCreateProduct
);

router.get(
  "/product/edit/:productId",
  routeProtection,
  adminController.getEditProduct
);

router.post(
  "/product/edit",
  routeProtection,
  upload.single("image"),
  adminController.postEditProduct
);

router.get(
  "/product/delete/:productId",
  routeProtection,
  adminController.getDeleteProduct
);

router.post(
  "/product/delete",
  routeProtection,
  adminController.postDeleteProduct
);

router.get("/categories", routeProtection, adminController.getCategories);

router.get(
  "/category/create",
  routeProtection,
  adminController.getCreateCategory
);

router.post(
  "/category/create",
  routeProtection,
  adminController.postCreateCategory
);

router.get(
  "/category/edit/:categoryId",
  routeProtection,
  adminController.getEditCategory
);

router.post(
  "/category/edit",
  routeProtection,
  adminController.postEditCategory
);

router.get(
  "/category/delete/:categoryId",
  routeProtection,
  adminController.getDeleteCategory
);

router.post(
  "/category/delete",
  routeProtection,
  adminController.postDeleteCategory
);

module.exports = router;
