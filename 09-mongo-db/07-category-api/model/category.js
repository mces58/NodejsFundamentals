const mongoose = require("mongoose");
const Joi = require("joi");

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Category = mongoose.model("Category", categorySchema); // Category -> categories collection

const validateCategory = (category) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
  });

  return schema.validate(category);
};

module.exports = { Category, validateCategory };
