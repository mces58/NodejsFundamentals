const express = require("express");
const app = express();
const productRouter = require("./router/product");
const categoryRouter = require("./router/category");
const userRouter = require("./router/user");
const mongoose = require("mongoose");
const error = require("./middleware/error");
const logger = require("./middleware/logger");
require("express-async-errors");
const config = require("config");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/users", userRouter);
app.use(error);

// throw new Error("Something failed during startup");
const p = Promise.reject(new Error("Something failed miserably!")); // hata yakalama işlemlerini yapıyoruz

(async () => {
  const db = config.get("db.name");
  const user = config.get("db.username");
  const password = config.get("db.password");

  await mongoose.connect(
    `mongodb+srv://${user}:${password}@cluster0.el1u7yk.mongodb.net/${db}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  logger.info("Connected to MongoDB...");
})();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
