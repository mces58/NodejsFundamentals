const express = require("express");
const app = express();
const productRouter = require("./router/product");

// gelen isteklerin(dataların) body kısmını json formatında okumak için
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/products", productRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
