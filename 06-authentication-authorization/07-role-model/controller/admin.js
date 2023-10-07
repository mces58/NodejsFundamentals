const Category = require("../model/category");
const Product = require("../model/product");
const Role = require("../model/role");
const User = require("../model/user");
const fs = require("fs");
const slugField = require("../helper/slug-field");
const sequelize = require("../database/database");
const { Op } = require("sequelize");

exports.getIndex = (req, res, next) => {
  res.render("admin/index", {
    title: "Admin Page",
  });
};

exports.getProducts = async (req, res, next) => {
  const userId = req.session.user.id;
  const isModerator = req.session.userRoles.includes("moderator");
  const isAdmin = req.session.userRoles.includes("admin");

  try {
    const products = await Product.findAll({
      include: {
        model: Category,
        attributes: ["name"],
      },
      where: isModerator && !isAdmin ? { userId: userId } : null,
    });

    res.render("admin/products/products", {
      title: "Admin Products Page",
      products: products,
      selectedCategory: null,
      action: req.query.action,
      productName: req.query.productName,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCreateProduct = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.render("admin/products/createProduct", {
      title: "Admin Create Product Page",
      categories: categories,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postCreateProduct = async (req, res, next) => {
  try {
    const { name, price, description, categoryId } = req.body;

    const product = {
      name,
      price,
      description,
      image: req.file.filename,
      categoryId: Number(categoryId),
      url: slugField(name),
      userId: req.session.user.id,
    };

    await Product.create(product);
    res.redirect("/admin/products?action=create&productName=" + product.name);
  } catch (err) {
    console.log(err);
  }
};

exports.getEditProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const isAdmin = req.session.userRoles.includes("admin");

    const product = await Product.findOne({
      where: isAdmin
        ? { id: productId }
        : { id: productId, userId: req.session.user.id },

      include: {
        model: Category,
      },
    });
    const categories = await Category.findAll();

    if (!product) {
      return res.redirect("/admin/products/products");
    }

    res.render("admin/products/editProduct", {
      title: "Admin Edit Product Page",
      product: product,
      categories: categories,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postEditProduct = async (req, res, next) => {
  try {
    const { id, name, price, description, oldImage, categoryId } = req.body;
    const image = req.file ? req.file.filename : oldImage;
    if (req.file) {
      try {
        fs.unlink("public/img/" + oldImage, (err) => console.log(err));
      } catch (err) {
        console.error("Error deleting old image:", err);
      }
    }

    const updatedProduct = {
      name,
      price,
      description,
      image,
      categoryId: Number(categoryId),
    };
    await Product.update(updatedProduct, {
      where: { id: id, userId: req.session.user.id },
    });

    res.redirect("/admin/products?action=edit&productName=" + name);
  } catch (err) {
    console.error("Error editing product:", err);
  }
};

exports.getDeleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const isAdmin = req.session.userRoles.includes("admin");

    const product = await Product.findOne({
      include: {
        model: Category,
        attributes: ["name"],
      },
      where: isAdmin
        ? { id: productId }
        : { id: productId, userId: req.session.user.id },
    });

    res.render("admin/products/deleteProduct", {
      title: "Admin Delete Product Page",
      product: product,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postDeleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.body.id);

    if (!product) {
      return res.redirect("/admin/products/products");
    }

    await Product.destroy({ where: { id: req.body.id } });
    fs.unlink("public/img/" + product.image, (err) => console.log(err));
    res.redirect("/admin/products?action=delete&productName=" + product.name);
  } catch (err) {
    console.log(err);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.render("admin/categories/categories", {
      title: "Admin Categories Page",
      categories: categories,
      action: req.query.action,
      categoryName: req.query.categoryName,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCreateCategory = (req, res, next) => {
  res.render("admin/categories/createCategory", {
    title: "Admin Create Category Page",
  });
};

exports.postCreateCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const category = {
      name: name ? name : null,
      description: description ? description : null,
      url: slugField(name),
    };
    const temp = await Category.create(category);
    res.redirect("/admin/categories?action=create&categoryName=" + temp.name);
  } catch (err) {
    console.log(err);
  }
};

exports.getEditCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findByPk(categoryId);
    const products = await category.getProducts();
    const productCounts = await category.countProducts();

    if (!category) {
      return res.redirect("/admin/categories");
    }

    res.render("admin/categories/editCategory", {
      title: "Admin Edit Category Page",
      category: category,
      products: products,
      categoryName: category.name,
      productCounts: productCounts,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postEditCategory = async (req, res, next) => {
  try {
    const { id, name, description } = req.body;

    const updatedCategory = {
      name: name ? name : null,
      description: description ? description : null,
    };

    await Category.update(updatedCategory, { where: { id: id } });

    res.redirect("/admin/categories?action=edit&categoryName=" + name);
  } catch (err) {
    console.error("Error editing product:", err);
  }
};

exports.getDeleteCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findByPk(categoryId);

    res.render("admin/categories/deleteCategory", {
      title: "Admin Delete Category Page",
      category: category,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postDeleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.body.id);

    if (!category) {
      return res.redirect("/admin/categories");
    }

    const products = await category.getProducts();
    products.forEach((product) => {
      fs.unlink("public/img/" + product.image, (err) => console.log(err));
    });

    await Category.destroy({ where: { id: req.body.id } });
    res.redirect(
      "/admin/categories?action=delete&categoryName=" + category.name
    );
  } catch (err) {
    console.log(err);
  }
};

exports.getRoles = async (req, res, next) => {
  try {
    const roles = await Role.findAll({
      attributes: [
        "role.id",
        "role.name",
        [sequelize.fn("COUNT", "user.id"), "userCount"], // COUNT(user.id) AS userCount
      ],
      include: {
        model: User,
        attributes: ["id"],
      },
      group: ["role.id"],
      raw: true,
      includeIgnoreAttributes: false,
    }); // SELECT role.id, role.name, COUNT(user.id) AS userCount FROM role LEFT JOIN user ON role.id = user.roleId GROUP BY role.id;
    console.log(roles);
    res.render("admin/role/role", {
      title: "Admin Roles Page",
      roles: roles,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getEditRole = async (req, res, next) => {
  try {
    const roleId = req.params.roleId;
    const role = await Role.findByPk(roleId);
    const users = await role.getUsers();

    if (!role) {
      return res.redirect("/admin/roles");
    }

    res.render("admin/role/editRole", {
      title: "Admin Edit Role Page",
      role: role,
      users: users,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postEditRole = async (req, res, next) => {
  try {
    const { id, name } = req.body;

    const updatedRole = {
      name: name ? name : null,
    };

    await Role.update(updatedRole, { where: { id: id } });
    res.redirect("/admin/roles");
  } catch (err) {
    console.error("Error editing role:", err);
  }
};

exports.postDeleteRole = async (req, res, next) => {
  const { roleId, userId } = req.body;

  try {
    await sequelize.query(
      `DELETE FROM userRoles WHERE userId = ${userId} AND roleId = ${roleId}` // DELETE FROM userRoles WHERE userId = 1 AND roleId = 1
    );

    res.redirect("/admin/roles/edit/" + roleId);
  } catch (err) {
    console.log(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "userName", "email"],
      include: {
        model: Role,
        attributes: ["id", "name"],
      },
    });

    res.render("admin/user/user", {
      title: "Admin Users Page",
      users: users,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getEditUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findOne({
      where: { id: userId },
      attributes: ["id", "userName", "email"],
      include: {
        model: Role,
        attributes: ["id", "name"],
      },
    });

    const roles = await Role.findAll({ attributes: ["id", "name"] });

    if (!user) {
      return res.redirect("/admin/users");
    }

    res.render("admin/user/editUser", {
      title: "Admin Edit User Page",
      user: user,
      roles: roles,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postEditUser = async (req, res, next) => {
  try {
    const { id, userName } = req.body;
    const roleIds = req.body.roles;
    const user = await User.findByPk(id);

    if (!user) {
      return res.redirect("/admin/users");
    }

    user.userName = userName;

    if (roleIds == undefined) {
      await user.removeRoles(user.roles);
    } else {
      await user.removeRoles(roleIds);
      const selectedRoles = await Role.findAll({
        where: { id: { [Op.in]: roleIds } },
      });
      console.log(roleIds);
      await user.addRoles(selectedRoles);
    }

    await user.save();

    res.redirect("/admin/users");
  } catch (err) {
    console.error("Error editing user:", err);
  }
};
