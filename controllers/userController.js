const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      confirmpassword: req.body.confirmpassword,
    });
    const token = jwt.sign({ id: newUser._id }, `this-is-my-longest-password`, {
      expiresIn: "90d",
    });
    res.cookie(
      "jwt",
      token,
      {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
      { httpOnly: true }
    );
    res.status(201).json({
      status: "Success",
      token,
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed",
      data: error,
    });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw new Error("Please provide email and password");
    const checkUser = await User.findOne({ email });
    if (!checkUser || !(await bcrypt.compare(password, checkUser.password)))
      throw new Error("Invalid data");
    const token = jwt.sign(
      { id: checkUser._id },
      "My-very-long-password-is-this-one",
      {
        expiresIn: "30d",
      }
    );

    res.status(200).json({
      message: "Success",
      token,
      data: checkUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed",
      data: error.message,
    });
  }
};
