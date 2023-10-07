const database = require("../database/database");

// Tablolara daha önceden veri eklenmiş olsun.
// Product sınıfı(veri tabanında product tablosu)
class Product {
  constructor(name, price, description, image) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }

  // tüm ürünleri getirme işlemi
  static getAll() {
    return database.execute("Select * from product");
  }
}

module.exports = Product;
