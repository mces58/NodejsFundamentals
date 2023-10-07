const Product = require("../model/product");
const Category = require("../model/category");

exports.getAll = async (req, res, next) => {
  try {
    const categories = await Category.getAll();
    const products = await Product.getAll();
    res.render("user/index", {
      title: "Shopping",
      products: products,
      categories: categories,
      selectedCategory: null,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.getById(id);
    if (product) {
      return res.render("user/details", {
        product: product,
        title: "Product Details",
      });
    }
    res.status(404).render("error/404", {
      title: "Error Page",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getProductsByCategoryId = async (req, res, next) => {
  const categoryId = req.params.categoryId;
  try {
    const categories = await Category.getAll();
    const products = await Product.getProductsByCategoryId(categoryId);

    if (products.length > 0) {
      return res.render("user/categories", {
        title: "Shopping",
        products: products,
        categories: categories,
        selectedCategory: categoryId,
      });
    }
    res.status(404).render("error/404", {
      title: "Error Page",
    });
  } catch (err) {
    console.log(err);
  }
};
