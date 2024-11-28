import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized - no token provide" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }
  } catch (error) {
    console.log("Error in protect route:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
