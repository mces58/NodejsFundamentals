const express = require("express");
const app = express();
const admin = require("./router/admin");
const user = require("./router/user");

app.use(express.urlencoded({ extended: false })); // req.body'de ki bilgiyi almayı sağlar body-parser'a gerek kalmadan

app.get("/", (req, res, next) => {
  res.write("<h1>Merhaba</h1>");
  res.write("<a href='/admin'>admin</a> </br>");
  res.write("<a href='/user'>user</a>");
  res.end();
});

// "/admin" endpointi gelirse bu middleware karşılar
app.use("/admin", admin);

// "/user" endpointi gelirse bu middleware karşılar
app.use("/user", user);

app.listen(3000);
