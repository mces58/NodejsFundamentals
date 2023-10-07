const { Product, validateProduct } = require("../model/product");
require("express-async-errors");

module.exports.getAllProducts = async (req, res, next) => {
  // throw new Error("Could not get the products."); // hata fırlatıyoruz
  const products = await Product.find().populate("category", "name");
  res.send(products);
};

module.exports.getProductById = async (req, res) => {
  const id = req.params.id;

  const product = await Product.findOne({ _id: id }).select("name price");

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.send(product);
};

module.exports.createProduct = async (req, res) => {
  const validationResult = validateProduct(req.body);

  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    isActive: req.body.isActive,
    category: req.body.category,
  });

  await product.save();
  res.send(product);
};

module.exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  const validationResult = validateProduct(req.body);

  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }

  const { name, price, description, image, isActive } = req.body;

  product.set({
    name,
    price,
    description,
    image,
    isActive,
  });

  const updatedProduct = await product.save();

  res.send(updatedProduct);
};

module.exports.deleteProduct = async (req, res) => {
  const id = req.params.id;

  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.send(product);
};
