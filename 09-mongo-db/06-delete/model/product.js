const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  date: { type: Date, default: Date.now },
  isActive: Boolean,
});

const Product = mongoose.model("Product", productSchema); // Product -> products collection

const validateProduct = (product) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().min(3).required(),
    image: Joi.string().min(3).required(),
    isActive: Joi.boolean().required(),
  });

  return schema.validate(product);
};

module.exports = { Product, validateProduct };
