const { Category, validateCategory } = require("../model/category");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCategoryById = async (req, res) => {
  const id = req.params.id;

  try {
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).send("Category not found");
    }

    res.send(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createCategory = async (req, res) => {
  const validationResult = validateCategory(req.body);

  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }

  const category = new Category({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    await category.save();
    res.send(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).send("Category not found");
    }

    const validationResult = validateCategory(req.body);

    if (validationResult.error) {
      return res.status(400).send(validationResult.error.details[0].message);
    }

    const { name, description } = req.body;

    category.set({
      name,
      description,
    });

    const updatedCategory = await category.save();

    res.send(updatedCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCategory = async (req, res) => {
  const id = req.params.id;

  try {
    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).send("Category not found");
    }

    res.send(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
