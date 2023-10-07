const Category = require("../model/category");
const Product = require("../model/product");
const fs = require("fs");

exports.getIndex = (req, res, next) => {
  res.render("admin/index", { title: "Admin Page" });
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.getAll();
    const categories = await Category.getAll();

    const categoryMap = new Map();
    categories.forEach((category) => {
      categoryMap.set(category.id.toString(), category.name);
    });

    for (const product of products) {
      const categoryName = categoryMap.get(product.category_id.toString());
      product.category_name = categoryName || "Unknown Category";
    }

    res.render("admin/products/products", {
      title: "Admin Products Page",
      products: products,
      categories: categories,
      selectedCategory: null,
      action: req.query.action,
      productName: req.query.productName,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCreateProduct = async (req, res, next) => {
  try {
    const categories = await Category.getAll();
    res.render("admin/products/createProduct", {
      title: "Admin Create Product Page",
      categories: categories,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postCreateProduct = async (req, res, next) => {
  try {
    const product = new Product(
      req.body.name,
      req.body.price,
      req.body.description,
      req.file.filename,
      req.body.categoryId
    );
    await product.save();
    res.redirect("/admin/products?action=create&productName=" + product.name);
  } catch (err) {
    console.log(err);
  }
};

exports.getEditProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Product.getById(productId);
    const categories = await Category.getAll();

    if (!product) {
      return res.redirect("/admin/products/products");
    }

    res.render("admin/products/editProduct", {
      title: "Admin Edit Product Page",
      product: product,
      categories: categories,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postEditProduct = async (req, res, next) => {
  try {
    const { id, name, price, description, categoryId, oldImage } = req.body;
    const image = req.file ? req.file.filename : oldImage; // eğer yeni bir resim yüklenmişse onu kullan, yoksa eski resmi kullan
    if (req.file) {
      try {
        fs.unlink("public/img/" + oldImage, (err) => console.log(err)); // eski resmi sil
      } catch (err) {
        console.error("Error deleting old image:", err);
      }
    }

    const updatedProduct = {
      id,
      name,
      price,
      description,
      image,
      categoryId,
    };
    await Product.update(updatedProduct);
    res.redirect("/admin/products?action=edit&productName=" + name);
  } catch (err) {
    console.error("Error editing product:", err);
  }
};

exports.getDeleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Product.getById(productId);
    const categories = await Category.getAll();

    const categoryMap = new Map();
    categories.forEach((category) => {
      categoryMap.set(category.id.toString(), category.name);
    });

    const categoryName = categoryMap.get(product.category_id.toString());
    product.category_name = categoryName || "Unknown Category";

    res.render("admin/products/deleteProduct", {
      title: "Admin Delete Product Page",
      product: product,
      categories: categories,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postDeleteProduct = async (req, res, next) => {
  try {
    const product = await Product.getById(req.body.id);
    await Product.deleteById(req.body.id); // ürünü veritabanından sil
    fs.unlink("public/img/" + product.image, (err) => console.log(err)); // resmi sil
    res.redirect("/admin/products?action=delete&productName=" + product.name);
  } catch (err) {
    console.log(err);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.getAll();
    res.render("admin/categories/categories", {
      title: "Admin Categories Page",
      categories: categories,
      action: req.query.action,
      categoryName: req.query.categoryName,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCreateCategory = (req, res, next) => {
  res.render("admin/categories/createCategory", {
    title: "Admin Create Category Page",
  });
};

exports.postCreateCategory = async (req, res, next) => {
  try {
    const category = new Category(req.body.name, req.body.description);
    await category.save();
    res.redirect(
      "/admin/categories?action=create&categoryName=" + category.name
    );
  } catch (err) {
    console.log(err);
  }
};

exports.getEditCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.getById(categoryId);

    if (!category) {
      return res.redirect("/admin/categories");
    }

    res.render("admin/categories/editCategory", {
      title: "Admin Edit Category Page",
      category: category,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postEditCategory = async (req, res, next) => {
  try {
    const category = new Category();
    category.id = req.body.id;
    category.name = req.body.name;
    category.description = req.body.description;

    await Category.update(category);
    res.redirect("/admin/categories?action=edit&categoryName=" + category.name);
  } catch (err) {
    console.log(err);
  }
};

exports.getDeleteCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.getById(categoryId);

    res.render("admin/categories/deleteCategory", {
      title: "Admin Delete Category Page",
      category: category,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postDeleteCategory = async (req, res, next) => {
  try {
    const category = await Category.getById(req.body.id);
    await Category.deleteById(req.body.id);
    res.redirect(
      "/admin/categories?action=delete&categoryName=" + category.name
    );
  } catch (err) {
    console.log(err);
  }
};
