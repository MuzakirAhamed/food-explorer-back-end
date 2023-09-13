const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email-id"],
    lowercase: true,
    unique: [true,'This email is already registered'],
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [8,'Password must be atleast 8 characters']
  },
  confirmpassword: {
    type: String,
    required: [true, "Please enter your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password must be same",
    },
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmpassword = undefined;
  next()
});

const User = mongoose.model("User", userSchema);
module.exports = User;
