const Product = require("../model/product");

exports.getAll = async (req, res, next) => {
  try {
    const products = await Product.findAll({ raw: true }); // SELECT * FROM products. raw: true -> return plain object
    res.render("user/index", {
      title: "Shopping",
      products: products,
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
