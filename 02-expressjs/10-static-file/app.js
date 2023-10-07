const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require("./router/home");
const userRouter = require("./router/user");
const errorRouter = require("./router/error");
const adminRouter = require("./router/admin");

// bu bir middleware'dir
// static files ekleme(bootstrap için)
// burada libs adında bir tane takma ad verdik bu takma adı html sayfalarında kullanacağız
// html sayfalarında libs yazdığımızda node_modules klasörüne erişebileceğiz
// libs node_modules klasörünü karşılamaktadır
app.use("/libs", express.static(path.join(__dirname, "node_modules")));

// public klasörünü static olarak kullanmak için
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(homeRouter);

app.use("/user", userRouter);

app.use("/admin", adminRouter);

app.use("*", errorRouter);

app.listen(3000);
