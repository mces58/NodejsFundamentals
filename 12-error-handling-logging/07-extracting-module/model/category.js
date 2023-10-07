const { mongoose, Schema } = require("mongoose");
const Joi = require("joi");

const categorySchema = new Schema({
  name: String,
  description: String,
  products: [
    // bir kategorinin birden fazla ürünü olabilir
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Category = mongoose.model("Category", categorySchema); // Category -> categories collection

const validateCategory = (category) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
    products: Joi.array(),
  });

  return schema.validate(category);
};

module.exports = { Category, validateCategory };
