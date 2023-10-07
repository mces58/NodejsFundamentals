// role kontrolu
const role = (req, res, next) => {
  if (req.user.role === "admin") next();
  else res.status(403).json({ message: "Access denied." });
};

module.exports = role;
