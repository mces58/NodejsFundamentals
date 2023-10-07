const nodeMailer = require("nodemailer");
const config = require("../config");

const transporter = nodeMailer.createTransport(config);

module.exports = transporter;
