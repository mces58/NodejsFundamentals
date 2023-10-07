const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./view");

app.get("/", (req, res, next) => {
  res.render("index", { title: "04-for-each" });
});

app.listen(3000);
