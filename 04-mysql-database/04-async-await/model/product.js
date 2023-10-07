const database = require("../database/database");

// Tablolara daha önceden veri eklenmiş olsun.
class Product {
  constructor(name, price, description, image, categoryId) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.categoryId = categoryId;
  }

  static async getAll() {
    const [rows, fields] = await database.execute("SELECT * FROM product");
    return rows;
  }

  static async getById(id) {
    const [rows, fields] = await database.execute(
      "SELECT * FROM product WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  async save() {
    const [rows, fields] = await database.execute(
      "INSERT INTO product (name, price, description, image, category_id) VALUES (?, ?, ?, ?, ?)",
      [this.name, this.price, this.description, this.image, this.categoryId]
    );
    return rows;
  }

  static async update(product) {
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
  }

  static async delete(id) {
    const [rows, fields] = await database.execute(
      "DELETE FROM product WHERE id = ?",
      [id]
    );
    return rows;
  }

  static async getProductsByCategoryId(categoryId) {
    const [rows, fields] = await database.execute(
      "SELECT * FROM product WHERE category_id = ?",
      [categoryId]
    );
    return rows;
  }
}

module.exports = Product;
