const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const getUsers = async (req, res) => {
  const users = await User.find();
  try {
    res.status(200).json({
      status: "SUCCESS",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong GET",
    });
  }
};

const signUpUser = async (req, res) => {
  const { firstName, lastName, email, password, isAdmin, isPremium } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  const token = jwt.sign(req.body, process.env.JWT_PRIVATE_KEY, {
    expiresIn: 30,
  });
  await User.create({
    firstName,
    lastName,
    email,
    password: encryptedPassword,
    isAdmin,
    isPremium,
  });
  try {
    res.status(201).json({
      status: "SUCCESS",
      message: "User signed-up successfully.",
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong SIGNUP-USER/CREATE",
    });
  }
};

const logInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const doesPasswordMatch = await bcrypt.compare(password, user.password);
      if (doesPasswordMatch) {
        const token = jwt.sign(user.toJSON(), process.env.JWT_PRIVATE_KEY, {
          expiresIn: 30,
        });

        return res.status(200).json({
          status: "SUCCESSFUL",
          message: "User LOGGED-IN succesfully.",
          token,
        });
      }
    }

    return res.status(401).json({
      status: "FAILED",
      message: "Invalid Credentials.",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong LOGIN-USER/CREATE",
    });
  }
};

module.exports = {
  getUsers,
  signUpUser,
  logInUser,
};
