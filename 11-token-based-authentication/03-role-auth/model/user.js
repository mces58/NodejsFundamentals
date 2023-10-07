const { mongoose, Schema } = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

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

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },

  { timestamps: true }
);

// Arrow fonksiyonları geleneksel fonksiyonlardan farklı olarak, kendi "this" bağlamını oluşturmaz. Arrow fonksiyonlarının içindeki "this", tanımlandığı kapsamdaki "this"i miras almaz, bunun yerine dışarıdaki kapsamdaki "this"i kullanır. Bu durum, özellikle nesne yönelimli programlamada, sınıf içinde arrow fonksiyonlarının kullanıldığı senaryolarda karşınıza çıkabilir.
// Bu tür durumlarda, arrow fonksiyonlar yerine geleneksel fonksiyonları kullanmanız daha uygun olabilir.
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id, role: this.role }, "jwtPrivateKey");
};

const User = mongoose.model("User", userSchema);

const validateRegister = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().min(3).max(50).required(),
    password: Joi.string().min(3).required(),
    role: Joi.string().valid("user", "admin"),
  });

  return schema.validate(user);
};

const validateLogin = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().min(3).max(50).required(),
    password: Joi.string().min(3).required(),
    user: Joi.string().valid("user", "admin"),
  });

  return schema.validate(user);
};

module.exports = { User, validateRegister, validateLogin };
