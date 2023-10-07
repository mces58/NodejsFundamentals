const { Product, validateProduct } = require("../model/product");

const products = [
  { id: 1, name: "Product 1", price: 1000 },
  { id: 2, name: "Product 2", price: 2000 },
  { id: 3, name: "Product 3", price: 3000 },
];

module.exports.getAllProducts = async (req, res) => {
  try {
    // const products = await Product.find(); // find all products
    const products = await Product.find({
      price: 5000, // find products with price 5000
      isActive: true, // find products with isActive true
    })
      .limit(2) // limit the number of documents
      .select(
        "name price -_id" // select name and price and exclude _id
      );

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

module.exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return res.status(404).send("Product not found");
  }

  const validationResult = validateProduct(req.body);

  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }

  product.name = req.body.name;
  product.price = req.body.price;

  res.send(product);
};

module.exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return res.status(404).send("Product not found");
  }

  const index = products.indexOf(product);

  products.splice(index, 1);

  res.send(product);
};
