const express = require("express");
const app = express();
const sequelize = require("./database/database");
const Category = require("./model/category"); // eklenmezse category tablosu oluşmaz
const Product = require("./model/product"); // eklenmezse product tablosu oluşmaz

// create-table endpoint gidilirse tablolar oluşturulur
app.use("/create-table", (req, res, next) => {
  sequelize
    .sync({ force: true }) // force: true => tablo varsa siler, yoksa oluşturur
    .then((result) => {
      res.send("<h1>Table created successfully</h1>");
      console.log(result);
      res.end();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000);
