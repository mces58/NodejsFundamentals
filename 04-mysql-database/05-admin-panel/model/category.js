const database = require("../database/database");

class Category {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  static getAll = async () => {
    try {
      const [rows, fields] = await database.execute("SELECT * FROM category");
      return rows;
    } catch (error) {
      console.log(error);
    }
  };

  static getById = async (id) => {
    try {
      const [rows, fields] = await database.execute(
        "SELECT * FROM category WHERE id = ?",
        [id]
      );
      return rows[0];
    } catch (error) {
      console.log(error);
    }
  };

  save = async () => {
    try {
      const [rows, fields] = await database.execute(
        "INSERT INTO category (name, description) VALUES (?, ?)",
        [this.name, this.description]
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  };

  static update = async (category) => {
    try {
      const [rows, fields] = await database.execute(
        "UPDATE category SET name = ?, description = ? WHERE id = ?",
        [category.name, category.description, category.id]
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  };

  static deleteById = async (id) => {
    try {
      const [rows, fields] = await database.execute(
        "DELETE FROM category WHERE id = ?",
        [id]
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = Category;
