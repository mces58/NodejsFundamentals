const database = require("../database/database");

class Product {
  constructor(name, price, description, image, categoryId) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.categoryId = categoryId;
  }

  static getAll = async () => {
    try {
      const [rows, fields] = await database.execute("SELECT * FROM product");
      return rows;
    } catch (error) {
      console.log(error);
    }
  };

  static getById = async (id) => {
    try {
      const [rows, fields] = await database.execute(
        "SELECT * FROM product WHERE id = ?",
        [id]
      );
      return rows[0];
    } catch (error) {
      console.log(error);
    }
  };

  static getProductsByCategoryId = async (categoryId) => {
    try {
      const [rows, fields] = await database.execute(
        "SELECT * FROM product WHERE category_id = ?",
        [categoryId]
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  };

  save = async () => {
    try {
      const [rows, fields] = await database.execute(
        "INSERT INTO product (name, price, description, image, category_id) VALUES (?, ?, ?, ?, ?)",
        [this.name, this.price, this.description, this.image, this.categoryId]
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  };

  static update = async (product) => {
    try {
      const [rows, fields] = await database.execute(
        "UPDATE product SET name = ?, price = ?, description = ?, image = ?, category_id = ? WHERE id = ?",
        [
          product.name,
          product.price,
          product.description,
          product.image,
          product.categoryId,
          product.id,
        ]
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  };

  static deleteById = async (id) => {
    try {
      const [rows, fields] = await database.execute(
        "DELETE FROM product WHERE id = ?",
        [id]
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = Product;
