const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require("./router/home");
const userRouter = require("./router/user");
const errorRouter = require("./router/error");
const adminRouter = require("./router/admin");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "./view");

app.use(homeRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("*", errorRouter);

app.listen(3000);
