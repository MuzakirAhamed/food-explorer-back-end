require("dotenv").config();
const mongoose = require("mongoose");
const locationdata = require("./Locations.json");
const restaurantdata = require("./Restaurants.json");
const mealTypedata = require("./Mealtypes.json");
const menudata = require("../data/menu.json")
const location = require("../models/LocationModel");
const restaurant = require("../models/RestaurantModel");
const mealType = require("../models/MealtypeModel");
const menu = require("../models/MenuModel")
const database = process.env.DATABASE;

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected successfully"))
  .catch((error) => console.log(`Error occured:${error}`));

const importData = async () => {
  try {
    await location.create(locationdata);
    await restaurant.create(restaurantdata);
    await mealType.create(mealTypedata);
    await menu.create(menudata)
    console.log("Data uploaded successfully");
  } catch (error) {
    console.log(`Error occured: ${error}`);
  }
};
const deleteData = async () => {
  try {
    await location.deleteMany();
    await restaurant.deleteMany();
    await mealType.deleteMany();
    console.log("data deleted successfully");
  } catch (error) {
    console.log(error);
  }
};
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
