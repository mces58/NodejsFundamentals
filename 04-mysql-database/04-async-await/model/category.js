const database = require("../database/database");

// Tablolara daha önceden veri eklenmiş olsun.
class Category {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  static async getAll() {
    const [rows, fields] = await database.execute("SELECT * FROM category");
    return rows;
  }

  static async getById(id) {
    const [rows, fields] = await database.execute(
      "SELECT * FROM category WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  async save() {
    const [rows, fields] = await database.execute(
      "INSERT INTO category (name, description) VALUES (?, ?)",
      [this.name, this.description]
    );
    return rows;
  }

  static async update(category) {
    const [rows, fields] = await database.execute(
      "UPDATE category SET name = ?, description = ? WHERE id = ?",
      [category.name, category.description, category.id]
    );
    return rows;
  }

  static async delete(id) {
    const [rows, fields] = await database.execute(
      "DELETE FROM category WHERE id = ?",
      [id]
    );
    return rows;
  }
}

module.exports = Category;
