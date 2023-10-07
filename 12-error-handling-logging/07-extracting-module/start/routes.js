const express = require("express");
const productRouter = require("../router/product");
const categoryRouter = require("../router/category");
const userRouter = require("../router/user");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Hello world");
  });

  app.use("/api/products", productRouter);

  app.use("/api/categories", categoryRouter);

  app.use("/api/users", userRouter);

  app.use(error);
};
