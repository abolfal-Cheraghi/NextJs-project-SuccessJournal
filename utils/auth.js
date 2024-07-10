import { verify, sign } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";

const generateToken = (payload) => {
  const token = sign({ ...payload }, process.env.JWT_KEY, {
    // algorithm: "",
    expiresIn: "24h",
  });

  return token;
};

const verifyToken = (token) => {
  {
    try {
      const isValid_Token = verify(token, process.env.JWT_KEY);
      return isValid_Token;
    } catch (err) {
      console.log("error in verified token => ", err);
      return false;
    }
  }
};

const hashPassword = async (password) => {
  const hashedPass = await hash(password, 12);
  return hashedPass;
};

const comparePassword = async (password, hashedPassword) => {
  const isValidPassword = await compare(password, hashedPassword);

  return isValidPassword;
};

export { generateToken, verifyToken, hashPassword, comparePassword };
