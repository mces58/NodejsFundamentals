const express = require("express");
const app = express();
const productRouter = require("./router/product");
const mongoose = require("mongoose");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/products", productRouter);

(async () => {
  const db = "shopdb";
  const user = "can";
  const password = "12345";
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@cluster0.el1u7yk.mongodb.net/${db}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true, // yeni url parser'ı kullan
        useUnifiedTopology: true, // yeni topology engine'u kullan
      }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Could not connect to MongoDB", err);
  }
})();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
