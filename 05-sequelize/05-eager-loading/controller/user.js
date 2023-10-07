const Product = require("../model/product");
const Category = require("../model/category");

exports.getAll = async (req, res, next) => {
  try {
    const categories = await Category.findAll({ raw: true });
    const products = await Product.findAll({ raw: true });
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
    const product = await Product.findByPk(id);
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
  const id = req.params.id;
  try {
    const categories = await Category.findAll({ raw: true });
    const products = await Product.findAll({
      where: { categoryId: id },
      raw: true,
    });
    res.render("user/categories", {
      title: "Shopping",
      products: products,
      categories: categories,
      selectedCategory: id,
    });
  } catch (err) {
    console.log(err);
  }
};
