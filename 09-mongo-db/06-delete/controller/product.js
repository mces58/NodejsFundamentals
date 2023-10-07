const { Product, validateProduct } = require("../model/product");

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().or([
      { price: { $gte: 1000, $lte: 20000 } },
      { isActive: true },
    ]);
    res.send(products);
  } catch (err) {
    console.log(err);
  }
};

module.exports.getProductById = async (req, res) => {
  const id = req.params.id;
  // const product = await Product.findById(id);
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
  });

  try {
    await product.save();
    res.send(product);
  } catch (err) {
    console.log(err);
  }
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

  product.name = req.body.name;
  product.price = req.body.price;
  product.description = req.body.description;
  product.image = req.body.image;
  product.isActive = req.body.isActive;

  try {
    const updatedProduct = await product.save();

    res.send(updatedProduct);
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteProduct = async (req, res) => {
  // 1. deleteOne - returns deleted product
  // 2. deleteMany - returns { n: 1, ok: 1, deletedCount: 1 }
  // 3. findByIdAndDelete - returns deleted product
  // 4. findOneAndDelete - returns deleted product

  const id = req.params.id;

  try {
    const product = await Product.findByIdAndDelete(id); // returns deleted product

    if (!product) {
      return res.status(404).send("Product not found");
    }

    res.send(product);
  } catch (err) {
    console.log(err);
  }
};
