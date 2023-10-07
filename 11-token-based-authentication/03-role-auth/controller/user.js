const { User, validateRegister, validateLogin } = require("../model/user");
const bcrypt = require("bcrypt");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createUser = async (req, res) => {
  const validationResult = validateRegister(req.body);

  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }

  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).send("User already registered");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = newUser.generateAuthToken();

    res.header("x-auth-token", token).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.authUser = async (req, res) => {
  const validationResult = validateLogin(req.body);

  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send("Invalid email or password");
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).send("Invalid email or password");
    }

    const token = user.generateAuthToken();

    res.header("x-auth-token", token).send("Logged in successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
