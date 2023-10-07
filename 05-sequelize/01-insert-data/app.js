const express = require("express");
const app = express();
const sequelize = require("./database/database");
const Category = require("./model/category");
const Product = require("./model/product");

// Add product
// create fonksiyonu ile veri eklemek için önce bir obje oluşturuyoruz. Bu obje modeldeki alanlara karşılık gelecek.
// Daha sonra bu objeyi create fonksiyonuna parametre olarak veriyoruz.
app.use("/add-product", async (req, res, next) => {
  try {
    const product = await Product.create({
      name: "Samsung S5",
      price: 2000,
      description: "Good phone",
      image: "samsung-s5.jpg",
    });
    res.send(product);
    res.end();
  } catch (err) {
    console.log(err);
  }
});

// Add category
// build fonksiyonu ile veri eklemek için önce bir obje oluşturuyoruz. Bu obje modeldeki alanlara karşılık gelecek.
// Daha sonra bu objeyi save fonksiyonuna parametre olarak veriyoruz.
app.use("/add-category", async (req, res, next) => {
  try {
    const category = await Category.build({
      name: "Computer",
      description: "Computer category",
    }).save();

    res.send(category);
    res.end();
  } catch (err) {
    console.log(err);
  }
});

// Create table
// tablolar yeniden oluşturulur. force: true olursa tablolar yeniden oluşturulur ve tabloların içindeki veriler silinir.
app.use("/create-table", async (req, res, next) => {
  try {
    await sequelize.sync({ force: true });
    res.send("<h1>Table created successfully</h1>");
    res.end();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000);
