const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./view");

app.get("/", (req, res, next) => {
  res.render("index", { title: "01-id-class" });
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
