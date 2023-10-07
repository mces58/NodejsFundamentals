const Product = require("../model/product");
const Category = require("../model/category");

// tüm ürünleri getirme işlemi ve kategorileri getirme işlemi
exports.getAll = (req, res, next) => {
  Category.getAll().then((categories) => {
    // kategorileri getirme işlemi
    Product.getAll()
      // tüm ürünleri getirme işlemi
      .then((products) => {
        res.render("user/index", {
          title: "Shopping",
          products: products[0],
          categories: categories[0],
          selectedCategory: null,
        });
      })
      .catch((err) => console.log(err));
  });
};

// id'ye göre ürün getirme işlemi
exports.getById = (req, res, next) => {
  const id = req.params.id; // req.params.id -> id parametresi
  Product.getById(id)
    .then((product) => {
      if (product[0][0]) {
        res.render("user/details", {
          product: product[0][0],
          title: "Product Details",
        });
      } else
        res.status(404).render("error/404", {
          title: "Error Page",
        });
    })
    .catch((err) => console.log(err));
};

// kategoriye göre ürün getirme işlemi ve kategorileri getirme işlemi
exports.getProductsByCategoryId = (req, res, next) => {
  const categoryId = req.params.categoryId;
  Category.getAll().then((categories) => {
    Product.getProductsByCategoryId(categoryId)
      .then((products) => {
        res.render("user/categories", {
          title: "Shopping",
          products: products[0],
          categories: categories[0],
          selectedCategory: categoryId,
        });
      })
      .catch((err) => console.log(err));
  });
};
