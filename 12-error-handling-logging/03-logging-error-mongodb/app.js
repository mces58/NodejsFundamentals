const express = require("express");
const app = express();
const productRouter = require("./router/product");
const categoryRouter = require("./router/category");
const userRouter = require("./router/user");
const mongoose = require("mongoose");
const error = require("./middleware/error");
const logger = require("./middleware/logger");
require("express-async-errors");

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
  await mongoose.connect(
    `mongodb+srv://${user}:${password}@cluster0.el1u7yk.mongodb.net/${db}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  logger.info("Connected to MongoDB...");
})();

app.listen(3000, () => {
  logger.info("Listening on port 3000...");
});
