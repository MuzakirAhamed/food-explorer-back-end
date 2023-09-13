const mongoose = require("mongoose");
const mealTypeSchema = new mongoose.Schema({
  name: String,
  content: String,
  image:String,
  meal_type:Number
});
const mealType = mongoose.model('mealType',mealTypeSchema)
module.exports = mealType