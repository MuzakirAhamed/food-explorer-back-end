const location = require("../models/LocationModel");
exports.getAllLocations = async (req, res) => {
  try {
    const locations = await location.find({});
    res.status(200).json({
      status: "Success",
      results: locations.length,
      data: locations,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      data: error,
    });
  }
};
