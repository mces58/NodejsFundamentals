const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./view");

const products = [
  { id: 1, name: "Apple", price: 100 },
  { id: 2, name: "Orange", price: 80 },
  { id: 3, name: "Banana", price: 50 },
];

app.get("/", (req, res) => {
  res.render("index", { title: "02-for-loop", products: products });
});

app.listen(3000, () => console.log("Server started on port 3000"));
