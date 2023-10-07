const jwt = require("jsonwebtoken");

// token doğrulama
const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  // token yoksa
  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, "jwtPrivateKey");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = auth;
