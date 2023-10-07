const router = require("express").Router();
const adminController = require("../controller/admin");
const upload = require("../helper/image-upload");
const isAdmin = require("../middleware/admin-protection");
const isModerator = require("../middleware/moderator-protection");
const csrf = require("../middleware/csrf");

router.get("/", isAdmin, adminController.getIndex);

router.get("/products", isModerator, adminController.getProducts);

router.get(
  "/product/create",
  isModerator,
  csrf,
  adminController.getCreateProduct
);

router.post(
  "/product/create",
  isModerator,
  upload.single("image"),
  adminController.postCreateProduct
);

router.get(
  "/product/edit/:productId",
  isModerator,
  csrf,
  adminController.getEditProduct
);

router.post(
  "/product/edit",
  isModerator,
  upload.single("image"),
  adminController.postEditProduct
);

router.get(
  "/product/delete/:productId",
  isModerator,
  csrf,
  adminController.getDeleteProduct
);

router.post("/product/delete", isModerator, adminController.postDeleteProduct);

router.get("/categories", isAdmin, adminController.getCategories);

router.get(
  "/category/create",
  isAdmin,
  csrf,
  adminController.getCreateCategory
);

router.post("/category/create", isAdmin, adminController.postCreateCategory);

router.get(
  "/category/edit/:categoryId",
  isAdmin,
  csrf,
  adminController.getEditCategory
);

router.post("/category/edit", isAdmin, adminController.postEditCategory);

router.get(
  "/category/delete/:categoryId",
  isAdmin,
  csrf,
  adminController.getDeleteCategory
);

router.post("/category/delete", isAdmin, adminController.postDeleteCategory);

router.get("/roles", isAdmin, adminController.getRoles);

router.get("/roles/edit/:roleId", isAdmin, csrf, adminController.getEditRole);

router.post("/roles/edit", isAdmin, adminController.postEditRole);

router.post("/roles/delete", isAdmin, adminController.postDeleteRole);

router.get("/users", isAdmin, adminController.getUsers);

router.get("/users/edit/:userId", isAdmin, csrf, adminController.getEditUser);

router.post("/users/edit", isAdmin, adminController.postEditUser);

module.exports = router;
