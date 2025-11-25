import jwt from "jsonwebtoken";

// TODO: secret values not imported from .env
const JWT_SECRET = process.env.JWT_SECRET ?? "123";
const REFRESH_SECRET = process.env.REFRESH_SECRET ?? "123";

export const generateToken = (payload: object) => {
  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET, { expiresIn: "7d" });
  return { accessToken, refreshToken };
};

export const verifyToken = (token: string) => {
  return new Promise((resolve) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) return resolve("");
      resolve(decoded);
    });
  });
};

export const verifyRefreshToken = (token: string) => {
  return new Promise((resolve) => {
    jwt.verify(token, REFRESH_SECRET, (err, decoded) => {
      if (err) return resolve("");
      resolve(decoded);
    });
  });
};
