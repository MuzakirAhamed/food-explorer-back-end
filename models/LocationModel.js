const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
  name: String,
  city_id: Number,
  location_id: Number,
  city: String,
  country_name: String,
});
const location = mongoose.model('location',locationSchema)
module.exports = location
