const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./view");

app.use(expressLayouts); // layout dosyasını kullanmak için

// layout dosyasını render etmemeliyiz

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
