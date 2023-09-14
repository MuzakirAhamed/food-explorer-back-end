const Locations = require("../controllers/locationsController");
const Restaurants = require("../controllers/restaurantsController");
const Mealtypes = require("../controllers/mealtypesController");
const Menu = require("../controllers/menuController");
const express = require("express");
const router = express.Router();
router.route("/").get((req, res) => res.send('<h1>Welcome!!</h1>'));
router.route("/locations").get(Locations.getAllLocations);
router.route("/mealtypes").get(Mealtypes.getAllMealtypes);
router.route("/restaurants").get(Restaurants.getAllrestaurant);
router.route("/menu").get(Menu.getMenu);
router.route("/restaurants/:id").get(Restaurants.getRestaurant);
router.route("/restaurantdetails").get(Restaurants.getRestaurantdetails);
router.route("/mealtyperestaurant").get(Restaurants.getRestaurantmealtype);
router.route("/filteredValue").get(Restaurants.getFilteredValue);

module.exports = router;
