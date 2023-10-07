const Product = require("../model/product");
const Category = require("../model/category");

exports.getAll = async (req, res, next) => {
  const size = 3; // sayfada gösterilecek ürün sayısı
  const page = Math.max(0, parseInt(req.query.page) || 0); // kaçıncı sayfadan başlayacağını belirtir
  try {
    const categories = await Category.findAll({ raw: true });
    const { rows, count } = await Product.findAndCountAll({
      raw: true,
      limit: size,
      offset: page * size, // kaçıncı sayfadan başlayacağını belirtir
    });
    res.render("user/index", {
      title: "Shopping",
      products: rows,
      totalItems: count,
      totalPage: Math.ceil(count / size),
      currentPage: page,
      categories: categories,
      selectedCategory: null,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getById = async (req, res, next) => {
  const url = req.params.url;
  try {
    const product = await Product.findOne({ where: { url: url }, raw: true });
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
