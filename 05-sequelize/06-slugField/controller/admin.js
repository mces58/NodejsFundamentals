const Category = require("../model/category");
const Product = require("../model/product");
const fs = require("fs");
const slugField = require("../helper/slug-field");

exports.getIndex = (req, res, next) => {
  res.render("admin/index", { title: "Admin Page" });
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: {
        model: Category,
        attributes: ["name"],
      },
    });

    res.render("admin/products/products", {
      title: "Admin Products Page",
      products: products,
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
    const categories = await Category.findAll();
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
    const { name, price, description, categoryId } = req.body;

    const product = {
      name,
      price,
      description,
      image: req.file.filename,
      categoryId: Number(categoryId),
      url: slugField(name),
    };

    await Product.create(product);
    res.redirect("/admin/products?action=create&productName=" + product.name);
  } catch (err) {
    console.log(err);
  }
};

exports.getEditProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findByPk(productId);
    const categories = await Category.findAll();

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
    const { id, name, price, description, oldImage } = req.body;
    const image = req.file ? req.file.filename : oldImage;
    if (req.file) {
      try {
        fs.unlink("public/img/" + oldImage, (err) => console.log(err));
      } catch (err) {
        console.error("Error deleting old image:", err);
      }
    }

    const updatedProduct = {
      name,
      price,
      description,
      image,
    };
    await Product.update(updatedProduct, { where: { id: id } });

    res.redirect("/admin/products?action=edit&productName=" + name);
  } catch (err) {
    console.error("Error editing product:", err);
  }
};

exports.getDeleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findOne({
      include: {
        model: Category,
        attributes: ["name"],
      },
      where: { id: productId },
    });

    res.render("admin/products/deleteProduct", {
      title: "Admin Delete Product Page",
      product: product,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postDeleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.body.id);

    if (!product) {
      return res.redirect("/admin/products/products");
    }

    await Product.destroy({ where: { id: req.body.id } });
    fs.unlink("public/img/" + product.image, (err) => console.log(err));
    res.redirect("/admin/products?action=delete&productName=" + product.name);
  } catch (err) {
    console.log(err);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
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
    const { name, description } = req.body;

    const category = {
      name: name ? name : null,
      description: description ? description : null,
      url: slugField(name),
    };
    const temp = await Category.create(category);
    res.redirect("/admin/categories?action=create&categoryName=" + temp.name);
  } catch (err) {
    console.log(err);
  }
};

exports.getEditCategory = async (req, res, next) => {
  try {
    // url parametresi ile gelen url bilgisini alıyoruz
    const url = req.params.url;
    const category = await Category.findOne({ where: { url: url } });
    const products = await category.getProducts();
    const productCounts = await category.countProducts();

    if (!category) {
      return res.redirect("/admin/categories");
    }

    res.render("admin/categories/editCategory", {
      title: "Admin Edit Category Page",
      category: category,
      products: products,
      categoryName: category.name,
      productCounts: productCounts,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postEditCategory = async (req, res, next) => {
  try {
    const { id, name, description } = req.body;

    const updatedCategory = {
      name: name ? name : null,
      description: description ? description : null,
    };

    await Category.update(updatedCategory, { where: { id: id } });

    res.redirect("/admin/categories?action=edit&categoryName=" + name);
  } catch (err) {
    console.error("Error editing product:", err);
  }
};

exports.getDeleteCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findByPk(categoryId);

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
    const category = await Category.findByPk(req.body.id);

    if (!category) {
      return res.redirect("/admin/categories");
    }

    const products = await category.getProducts();
    products.forEach((product) => {
      fs.unlink("public/img/" + product.image, (err) => console.log(err));
    });

    await Category.destroy({ where: { id: req.body.id } });
    res.redirect(
      "/admin/categories?action=delete&categoryName=" + category.name
    );
  } catch (err) {
    console.log(err);
  }
};
