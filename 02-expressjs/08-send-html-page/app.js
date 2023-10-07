const express = require("express");
const app = express();
const user = require("./router/user");
const admin = require("./router/admin");
const error = require("./router/error");

app.get("/", (req, res, next) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>Giriş Sayfası</h1>");
  res.write("<a href = '/user'>User</a> </br>");
  res.write("<a href = '/admin'>Admin</a> </br>");
  res.end();
});

app.use("/user", user);
app.use("/admin", admin);
app.use(error);

app.listen(3000);
