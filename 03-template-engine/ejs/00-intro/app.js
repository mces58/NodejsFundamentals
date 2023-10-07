const express = require("express");

const app = express();

// view engine olarak ejs kullanılacağını belirtiyoruz
app.set("view engine", "ejs");
app.set("views", "./view");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => console.log("Server running on port 3000"));
