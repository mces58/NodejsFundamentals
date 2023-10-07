const winston = require("winston");
require("winston-mongodb");
const config = require("config");

const db = config.get("db.name");
const user = config.get("db.username");
//const password = config.get("db.password");

const logger = winston.createLogger({
  level: "debug", // error, warn, info, verbose, debug, silly

  format: winston.format.combine(
    winston.format.timestamp(
      { format: "YYYY-MM-DD HH:mm:ss" } // formatında tarih kullanıyoruz
    ),
    winston.format.prettyPrint()
  ),

  transports: [
    // transports ile hata yakalama işlemlerini yapıyoruz
    // bu hatalara özel dosyalara kaydediyoruz
    new winston.transports.Console(),
    new winston.transports.File({ filename: "log/logfile.log" }),
    new winston.transports.MongoDB({
      db: `mongodb+srv://${user}:${"12345"}@cluster0.el1u7yk.mongodb.net/${db}?retryWrites=true&w=majority`,
      options: { useUnifiedTopology: true }, // bu şekilde mongodb'ye bağlanıyoruz
      collection: "logs",
      level: "info",
    }),
    new winston.transports.File({
      filename: "log/uncaughtExceptions.log",
      level: "error",
      handleExceptions: true,
      handleRejections: true,
      maxFiles: 2,
      maxsize: 5242880,
    }),
    new winston.transports.File({
      filename: "log/unhandledRejections.log",
      level: "warn",
      handleExceptions: true,
      handleRejections: true,
      maxFiles: 2,
      maxsize: 5242880,
    }),
  ],
});

module.exports = logger;
