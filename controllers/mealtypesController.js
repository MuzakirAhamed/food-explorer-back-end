const mealtype = require("../models/MealtypeModel");
exports.getAllMealtypes = async (req, res) => {
  try {
    const mealtypes = await mealtype.find({});
    res.status(200).json({
      status: "Success",
      results:mealtypes.length,
      data: mealtypes,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      data: error,
    });
  }
};