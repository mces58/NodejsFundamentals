const logger = require("../middleware/logger");

module.exports = function (err, req, res, next) {
  // Log the exception
  logger.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );

  res.status(500).send("Something failed.");
};
