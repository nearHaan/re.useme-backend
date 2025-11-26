import User from "../models/userModel.js";
import type { CookieOptions, Request, Response } from "express";
import { generateToken } from "../utils/jwt.js";
import bcrypt from "bcrypt";

const cookieOptions: CookieOptions = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 7,
};

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, error: "Email and password required" });
    }

    const hashedPass = await bcrypt.hash(password, 5);
    console.log("hashed: ", hashedPass);

    const newUser = new User({
      name,
      email,
      password: hashedPass,
    });

    const saveUser = await newUser.save();
    const { accessToken, refreshToken } = generateToken({
      name: saveUser._id,
    });
    res.cookie("refreshToken", refreshToken, cookieOptions);
    return res.status(201).json({
      user: { id: saveUser._id, name: saveUser.name, email: saveUser.email },
      accessToken,
    });
  } catch (err: any) {
    console.log("Error Code: ", err.code);
    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Registration Failed",
        error: "Email already registered",
      });
    }
    return res.status(500).json({
      success: false,
      message: "Registration Failed",
      error: err.message,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  try {
    const user = await User.findOne({ email: email }).lean();
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const passMatch = await bcrypt.compare(password, user?.password);
    if (!passMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const { accessToken, refreshToken } = generateToken({
      name: user._id,
    });
    res.cookie("refreshToken", refreshToken, cookieOptions);
    return res
      .status(200)
      .json({ user: { name: user.name, email: user.email }, accessToken });
  } catch (err: any) {
    return res
      .status(500)
      .json({ success: false, message: "Login Failed", error: err.message });
  }
};
