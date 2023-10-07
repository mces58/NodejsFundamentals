const { mongoose, Schema } = require("mongoose");
const Joi = require("joi");

// yorum için şema oluşturuyoruz
const commentSchema = new Schema({
  message: String,
  userName: String,
  date: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  date: { type: Date, default: Date.now },
  isActive: Boolean,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  comments: [commentSchema], // yorumlar için şema dahil ediyoruz
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
    comments: Joi.array().items(
      Joi.object({
        message: Joi.string().min(3).required(),
        userName: Joi.string().min(3).required(),
      })
    ),
  });

  return schema.validate(product);
};

module.exports = { Product, Comment, validateProduct };
