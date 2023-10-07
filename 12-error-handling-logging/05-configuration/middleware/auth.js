const jwt = require("jsonwebtoken");
const config = require("config");

// token doğrulama
const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  // token yoksa
  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = auth;
