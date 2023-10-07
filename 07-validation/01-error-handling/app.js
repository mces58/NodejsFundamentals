const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require("./router/home");
const userRouter = require("./router/user");
const adminRouter = require("./router/admin");
const authRouter = require("./router/auth");
const sequelize = require("./database/database");
const Category = require("./model/category");
const Product = require("./model/product");
const User = require("./model/user");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const locals = require("./middleware/locals");
const csurf = require("csurf");
const Role = require("./model/role");
const error = require("./middleware/error-handling");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "./view");

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  session({
    secret: "my secret key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);

app.use(locals);

app.use(csurf());

app.use(homeRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/account", authRouter);
app.use(error.get500);
app.use("*", (req, res, next) => {
  res.status(404).render("error/404", { title: "Page Not Found" });
});

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
    allowNull: true,
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

Role.belongsToMany(User, {
  through: "userRoles",
  foreignKey: {
    name: "roleId",
    allowNull: false,
  },
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

User.belongsToMany(Role, {
  through: "userRoles",
  foreignKey: {
    name: "userId",
    allowNull: false,
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
