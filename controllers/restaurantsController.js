const restaurant = require("../models/RestaurantModel");
exports.getAllrestaurant = async (req, res) => {
  try {
    const restaurants = await restaurant.find({});
    res.status(200).json({
      status: "Success",
      results: restaurants.length,
      data: restaurants,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      data: error,
    });
  }
};
exports.getRestaurant = async (req, res) => {
  try {
    const id = req.params.id * 1;
    const Onerestaurant = await restaurant.find({ location_id: id });
    res.status(200).json({
      status: "Success",
      results: Onerestaurant.length,
      data: Onerestaurant,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      data: error,
    });
  }
};
exports.getRestaurantdetails = async (req, res) => {
  try {
    const name = req.query.restaurant;
    const Restaurantdetails = await restaurant.find({ name });
    res.status(200).json({
      status: "Success",
      results: Restaurantdetails.length,
      data: Restaurantdetails,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      data: error,
    });
  }
};
exports.getRestaurantmealtype = async (req, res) => {
  try {
    const mealtype = req.query.mealtype;
    const mealtyperestaurant = await restaurant.find({ mealtype_id: mealtype });
    res.status(200).json({
      status: "Success",
      results: mealtyperestaurant.length,
      data: mealtyperestaurant,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      data: error,
    });
  }
};
exports.getFilteredValue = async (req, res) => {
  try {
    const cuisine = req.query.cuisine;
    let query =  restaurant.find({
      cuisine: { $elemMatch: { name: cuisine } },
    });
    const {lcost,hcost} = req.query
    if(lcost){
      query = restaurant.find({
        min_price: { $gte: lcost, $lte: hcost },
      })
    }
    const sort = req.query.sort
    // console.log(sort)
    if(sort){
      query = restaurant.find({}).sort(req.query.sort)
    }
    const filteredData = await query
    res.status(200).json({
      message: "Success",
      results: filteredData.length,
      data: filteredData,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      data: error,
    });
  }
};
// exports.getMinPriceRestaurants = async (req, res) => {
//   try {
//     const { lcost, hcost } = req.query;
//     let filteredData = await restaurant.find({
//       min_price: { $gte: lcost, $lte: hcost },
//     });
//     res.status(200).json({
//       message: "Success",
//       results: filteredData.length,
//       data: filteredData,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status:"Failed",
//       data:error
//     })
//   }
// };
