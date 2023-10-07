const database = require("../database/database");

// Tablolara daha önceden veri eklenmiş olsun.
// kategori modeli
class Category {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  // tüm kategorileri getirme işlemi
  static getAll() {
    return database.execute("SELECT * FROM category");
  }

  // id'ye göre kategori getirme işlemi
  static getById(id) {
    return database.execute("SELECT * FROM category WHERE id = ?", [id]);
  }

  // kategori ekleme işlemi
  save(category) {
    return database.execute(
      "INSERT INTO category (name, description) VALUES (?, ?)",
      [category.name, category.description]
    );
  }

  // kategori güncelleme işlemi
  static update(id, category) {
    return database.execute(
      "UPDATE category SET name = ?, description = ? WHERE id = ?",
      [category.name, category.description, id]
    );
  }

  // kategori silme işlemi
  static delete(id) {
    return database.execute("DELETE FROM category WHERE id = ?", [id]);
  }
}

module.exports = Category;
