const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Category = mongoose.model("Category", categorySchema); // Category -> categories collection

module.exports = Category;
