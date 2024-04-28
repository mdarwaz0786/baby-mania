import jwt from "jsonwebtoken";

const generateToken = (userId, name, email, mobile, password, isAdmin) => {
  return jwt.sign({ userId, name, email, mobile, password, isAdmin }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" });
};

export default generateToken;