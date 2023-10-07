const { User, validateUser } = require("../model/user");
const bcrypt = require("bcrypt");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createUser = async (req, res) => {
  const validationResult = validateUser(req.body);

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

    res.send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    const userEmail = await User.findOne({ email: req.body.email });

    if (userEmail && userEmail._id.toString() !== req.params.id) {
      return res.status(400).send("User already registered");
    }

    const validationResult = validateUser(req.body);

    if (validationResult.error) {
      return res.status(400).send(validationResult.error.details[0].message);
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    user.name = req.body.name;
    user.email = req.body.email;
    user.password = hashedPassword;

    await user.save();

    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
