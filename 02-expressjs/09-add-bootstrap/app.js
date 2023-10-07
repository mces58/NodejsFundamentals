const express = require("express");
const app = express();
const homeRouter = require("./router/home");
const userRouter = require("./router/user");
const adminRouter = require("./router/admin");
const errorRouter = require("./router/error");

app.use("/", homeRouter);
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("*", errorRouter);

//! Wildcards, tıpkı bir joker gibi, birçok durumu kapsayacak şekilde kullanılabilen karakterlerdir. Express.js'te * (yıldız) wildcard, belirli bir yol düzenini veya desenini temsil etmek için kullanılır. Yani, app.use("*", errorRouter) ifadesi, herhangi bir isteği alıp işleyecek olan errorRouter adlı yönlendirici (router) ara yazılımını eklemek için kullanılır.

app.listen(3000);
