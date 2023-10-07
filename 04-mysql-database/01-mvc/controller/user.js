const Product = require("../model/product");

const data = {
  title: "User Page",
  categories: ["category 1", "category 2", "category 3"],
};

// tüm product'ları çeker ve ejs dosyasına gönderir
exports.getAll = (req, res, next) => {
  Product.getAll()
    .then((products) => {
      res.render("user/index", {
        products: products[0], // products[0] -> product tablosundaki tüm satırlar
        title: data.title, // data.title -> User Page
        categories: data.categories, // data.categories -> ["category 1", "category 2", "category 3"]
      });
    })
    .catch((err) => console.log(err));
};
