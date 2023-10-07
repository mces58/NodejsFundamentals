const express = require("express");
const products = require("./products");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./view");

// node_modules klasörünü statik dosya olarak ayarla
app.use("/libs", express.static(path.join(__dirname, "node_modules")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "04-partial",
    products,
  });
});

app.listen(3000, () => console.log("Server started on port 3000"));
