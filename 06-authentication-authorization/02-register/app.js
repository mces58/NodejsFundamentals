const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require("./router/home");
const userRouter = require("./router/user");
const errorRouter = require("./router/error");
const adminRouter = require("./router/admin");
const authRouter = require("./router/auth");
const sequelize = require("./database/database");
const Category = require("./model/category");
const Product = require("./model/product");
const User = require("./model/user");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "./view");

app.use(express.urlencoded({ extended: false }));

app.use(homeRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/account", authRouter);
app.use("*", errorRouter);

Category.hasMany(Product, {
  foreignKey: {
    name: "categoryId",
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Product.belongsTo(Category, {
  foreignKey: {
    name: "categoryId",
    allowNull: false,
  },
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

User.hasMany(Product, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

Product.belongsTo(User, {
  foreignKey: {
    name: "userId",
    allowNull: true,
  },
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

(async () => {
  try {
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log(error);
  }
})();

app.listen(3000);
