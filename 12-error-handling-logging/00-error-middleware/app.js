const express = require("express");
const app = express();
const productRouter = require("./router/product");
const categoryRouter = require("./router/category");
const userRouter = require("./router/user");
const mongoose = require("mongoose");
const error = require("./middleware/error");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/users", userRouter);

app.use(error);

(async () => {
  const db = "shopdb";
  const user = "can";
  const password = "12345";
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@cluster0.el1u7yk.mongodb.net/${db}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
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
