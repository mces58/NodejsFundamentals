const Product = require("../model/product");

// ürün ekleme işlemi, ürün güncelleme işlemi ve ürün silme işlemi için gerekli olan kodları yazmadık
// bu işlemleri yapmak için gerekli olan kodları daha sonra ki derslerde yazacağız

const data = {
  title: "User Page",
  categories: ["category 1", "category 2", "category 3"],
};

// tüm ürünleri getirme işlemi
exports.getAll = (req, res, next) => {
  Product.getAll()
    .then((products) => {
      res.render("user/index", {
        products: products[0],
        title: data.title,
        categories: data.categories,
      });
    })
    .catch((err) => console.log(err));
};

// id'ye göre ürün getirme işlemi
exports.getById = (req, res, next) => {
  const id = req.params.id;
  Product.getById(id)
    .then((product) => {
      res.render("user/details", {
        product: product[0][0], // product[0][0] -> product[0] -> [RowDataPacket] -> product[0][0] -> RowDataPacket { ... }
        title: "Product Details",
      });
    })
    .catch((err) => console.log(err));
};
