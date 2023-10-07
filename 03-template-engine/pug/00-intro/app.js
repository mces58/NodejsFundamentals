const express = require("express");
const app = express();

// Pug şablonları için görüntüleme motoru olarak ayarla
app.set("view engine", "pug");
// Şablonların nerede bulunacağını ayarla
app.set("views", "./view");

app.get("/", (req, res, next) => {
  res.render("index", { title: "00-intro" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
