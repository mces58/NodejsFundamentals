const database = require("../database/database");

// Tablolara daha önceden veri eklenmiş olsun.
// ürün modeli
class Product {
  constructor(name, price, description, image) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }

  // tüm ürünleri getirme işlemi
  static getAll() {
    return database.execute("SELECT * FROM product");
  }

  // ürün ekleme işlemi
  save() {
    return database.execute(
      "INSERT INTO product (name, price, description, image) VALUES (?, ?, ?, ?)",
      [this.name, this.price, this.description, this.image]
    );
  }

  // id'ye göre ürün getirme işlemi
  static getById(id) {
    return database.execute("SELECT * FROM product WHERE id = ?", [id]);
  }

  // id'ye göre ürün güncelleme işlemi
  static update(product) {
    return database.execute(
      "UPDATE product SET name = ?, price = ?, description = ?, image = ? WHERE id = ?",
      [
        product.name,
        product.price,
        product.description,
        product.image,
        product.id,
      ]
    );
  }

  // id'ye göre ürün silme işlemi
  static delete(id) {
    return database.execute("DELETE FROM product WHERE id = ?", [id]);
  }
}

module.exports = Product;
