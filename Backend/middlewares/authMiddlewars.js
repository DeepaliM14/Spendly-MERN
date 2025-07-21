const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // Check if Authorization header is present
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided", success: false });
    }

    // Verify JWT Token
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token", success: false });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log("Middleware Error:", error);
    res.status(401).json({ message: "Auth Failed", success: false });
  }
};