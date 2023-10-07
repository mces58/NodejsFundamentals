const { mongoose, Schema } = require("mongoose");
const Joi = require("joi");

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  date: { type: Date, default: Date.now },
  isActive: Boolean,
  category: {
    type: Schema.Types.ObjectId, // category id değeri ile category collection'ı arasında ilişki kuruldu
    ref: "Category", // category collection'ı ile ilişki kuruldu
  },
});

const Product = mongoose.model("Product", productSchema); // Product -> products collection

const validateProduct = (product) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().min(3).required(),
    image: Joi.string().min(3).required(),
    isActive: Joi.boolean().required(),
    category: Joi.string().required(),
  });

  return schema.validate(product);
};

module.exports = { Product, validateProduct };
