const database = require("../database/database");

// Tablolara daha önceden veri eklenmiş olsun.
// ürün modeli
class Product {
  constructor(name, price, description, image, categoryId) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.categoryId = categoryId;
  }

  // tüm ürünleri getirme işlemi
  static getAll() {
    return database.execute("SELECT * FROM product");
  }

  // id'ye göre ürün getirme işlemi
  static getById(id) {
    return database.execute("SELECT * FROM product WHERE id = ?", [id]);
  }

  // ürün ekleme işlemi
  save() {
    return database.execute(
      "INSERT INTO product (name, price, description, image, category_id) VALUES (?, ?, ?, ?, ?)",
      [this.name, this.price, this.description, this.image, this.categoryId]
    );
  }

  // ürün güncelleme işlemi
  static update(product) {
    return database.execute(
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
  }

  // ürün silme işlemi
  static delete(id) {
    return database.execute("DELETE FROM product WHERE id = ?", [id]);
  }

  // ürünleri kategoriye göre getirme işlemi
  static getProductsByCategoryId(categoryId) {
    return database.execute("SELECT * FROM product WHERE category_id = ?", [
      categoryId,
    ]);
  }
}

module.exports = Product;
