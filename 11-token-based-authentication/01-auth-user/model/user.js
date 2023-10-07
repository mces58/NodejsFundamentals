const { mongoose, Schema } = require("mongoose");
const Joi = require("joi");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      trim: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 50,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 3,
      trim: true,
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

const validateRegister = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().min(3).max(50).required(),
    password: Joi.string().min(3).required(),
  });

  return schema.validate(user);
};

const validateLogin = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().min(3).max(50).required(),
    password: Joi.string().min(3).required(),
  });

  return schema.validate(user);
};

module.exports = { User, validateRegister, validateLogin };
