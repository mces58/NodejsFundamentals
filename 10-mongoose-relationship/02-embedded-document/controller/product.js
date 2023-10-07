const { Product, Comment, validateProduct } = require("../model/product");

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category", "name")
      .select("-comments._id");
    res.send(products);
  } catch (err) {
    console.log(err);
  }
};

module.exports.getProductById = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findOne({ _id: id })
      .select("name price")
      .populate("category", "name");

    if (!product) {
      return res.status(404).send("Product not found");
    }

    res.send(product);
  } catch (err) {
    console.log(err);
  }
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
    comments: req.body.comments,
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
  try {
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
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).send("Product not found");
    }

    res.send(product);
  } catch (err) {
    console.log(err);
  }
};

// örnek amaçlı eklendi bu kısım için ayrı bir controller oluşturulabilir
module.exports.addComment = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).send("Product not found");
    }

    const comment = new Comment({
      message: req.body.message,
      userName: req.body.userName,
    });

    product.comments.push(comment);

    await product.save();

    res.send(product);
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteComment = async (req, res) => {
  const id = req.params.id;
  const commentId = req.body.commentId;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).send("Product not found");
    }

    const comment = product.comments.id(commentId);

    if (!comment) {
      return res.status(404).send("Comment not found");
    }

    product.comments.splice(comment, 1);

    await product.save();

    res.send(product);
  } catch (err) {
    console.log(err);
  }
};
