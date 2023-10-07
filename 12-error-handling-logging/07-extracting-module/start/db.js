const mongoose = require("mongoose");
const config = require("config");
const logger = require("../middleware/logger");

const db = config.get("db.name");
const user = config.get("db.username");
const password = config.get("db.password");

module.exports = function () {
  mongoose
    .connect(
      `mongodb+srv://${user}:${password}@cluster0.el1u7yk.mongodb.net/${db}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => logger.info(`Connected to ${db}...`));
};
