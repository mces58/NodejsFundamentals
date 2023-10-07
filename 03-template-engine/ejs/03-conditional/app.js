const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./view");

const users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 15 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 27 },
];

app.get("/", (req, res) => {
  res.render("index", {
    title: "03-conditional",
    users,
  });
});

app.listen(3000, () => console.log("Server started on port 3000"));
