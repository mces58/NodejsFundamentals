const express = require("express");
const app = express();
const logger = require("./middleware/logger");
require("express-async-errors");
require("./start/routes")(app);
require("./start/db")();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
