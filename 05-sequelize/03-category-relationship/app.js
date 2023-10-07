const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require("./router/home");
const userRouter = require("./router/user");
const errorRouter = require("./router/error");
const adminRouter = require("./router/admin");
const sequelize = require("./database/database");
const Category = require("./model/category");
const Product = require("./model/product");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "./view");

app.use(express.urlencoded({ extended: false }));

app.use(homeRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("*", errorRouter);

// ilişkiler
// 1. ilişki: Category - Product
// 1 kategorinin birden fazla ürünü olabilir.
Category.hasMany(Product, {
  foreignKey: {
    name: "categoryId",
    allowNull: false,
  },
  onDelete: "RESTRICT", // kategori silinirse ürünler silinmez.
  onUpdate: "CASCADE", // kategori güncellenirse ürünler güncellenir.
});

// 1 ürünün 1 kategorisi olabilir.
Product.belongsTo(Category, {
  foreignKey: {
    name: "categoryId",
    allowNull: false,
  },
  onDelete: "RESTRICT", // kategori silinirse ürünler silinmez.
  onUpdate: "CASCADE", // kategori güncellenirse ürünler güncellenir.
});

sequelize
  .sync({ force: true })
  .then((result) => {
    console.log("Database bağlantısı başarılı.");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000);
