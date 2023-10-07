const express = require("express");
const app = express();

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

// henüz bir arayüz olmadığı için postman kullanıyoruz
app.post("/api/products", (req, res) => {
  const product = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };

  console.log(req.body);
  products.push(product);

  res.send(product);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
