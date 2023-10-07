const Product = require("../model/product");
const fs = require("fs");

exports.getIndex = (req, res, next) => {
  res.render("admin/index", { title: "Admin Page" });
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({ raw: true }); // SELECT * FROM products; // raw: true => sadece verileri getir, meta bilgilerini getirme
    console.log(products);
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
    res.render("admin/products/createProduct", {
      title: "Admin Create Product Page",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postCreateProduct = async (req, res, next) => {
  try {
    const { name, price, description } = req.body;

    const product = {
      name,
      price,
      description,
      image: req.file.filename,
    };

    const temp = await Product.create(product);
    // INSERT INTO products (name, price, description, image) VALUES (name, price, description, image);
    res.redirect(
      "/admin/products?action=create&productName=" + temp.dataValues.name
    );
  } catch (err) {
    console.log(err);
  }
};

exports.getEditProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findByPk(productId); // SELECT * FROM products WHERE id = productId;

    if (!product) {
      return res.redirect("/admin/products/products");
    }
    res.render("admin/products/editProduct", {
      title: "Admin Edit Product Page",
      product: product,
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
    // UPDATE products SET name = name, price = price, description = description, image = image WHERE id = id;

    res.redirect("/admin/products?action=edit&productName=" + name);
  } catch (err) {
    console.error("Error editing product:", err);
  }
};

exports.getDeleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findByPk(productId); // SELECT * FROM products WHERE id = productId;

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

    await Product.destroy({ where: { id: req.body.id } }); // DELETE FROM products WHERE id = req.body.id;
    fs.unlink("public/img/" + product.image, (err) => console.log(err)); // resmi sil
    res.redirect("/admin/products?action=delete&productName=" + product.name);
  } catch (err) {
    console.log(err);
  }
};
