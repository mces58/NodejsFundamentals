const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./view");

app.get("/", (req, res) => {
  res.render("index", { title: "01-injecting value", message: "Hello World" }); // değişkenler view dosyasına gönderilir
});

app.listen(3000, () => console.log("Server running on port 3000"));
