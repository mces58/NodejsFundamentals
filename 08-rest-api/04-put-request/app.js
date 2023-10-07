const express = require("express");
const app = express();
const Joi = require("joi");

// gelen isteklerin(dataların) body kısmını json formatında okumak için
app.use(express.json());

const products = [
  { id: 1, name: "Product 1", price: 1000 },
  { id: 2, name: "Product 2", price: 2000 },
  { id: 3, name: "Product 3", price: 3000 },
];

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.send(product);
});

app.post("/api/products", (req, res) => {
  // gelen datanın validasyonu için Joi kullanıyoruz
  const validationResult = validateProduct(req.body);

  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }

  const product = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };

  products.push(product);

  res.send(product);
});

app.put("/api/products/:id", (req, res) => {
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
});

const validateProduct = (product) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().min(0).required(),
  });

  return schema.validate(product);
};

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
