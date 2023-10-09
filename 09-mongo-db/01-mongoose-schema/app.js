const express = require("express");
const app = express();
const productRouter = require("./router/product");
const mongoose = require("mongoose");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/products", productRouter);

// config
const db = "shopdb";
const user = "can";
const password = "12345";
mongoose
  .connect(
    `mongodb+srv://${user}:${password}@cluster0.el1u7yk.mongodb.net/${db}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });

// Schema -> Document
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  date: { type: Date, default: Date.now },
  isActive: Boolean,
});

const Product = mongoose.model("Product", productSchema); // Product -> products collection

// Create
const product = new Product({
  name: "Samsung S5",
  price: 2000,
  description: "iyi telefon",
  image: "1.jpg",
  isActive: false,
});

// save
product
  .save()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error", err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
