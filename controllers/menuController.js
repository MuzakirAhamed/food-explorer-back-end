const Menu = require("../models/MenuModel");
exports.getMenu = async (req, res) => {
  try {
    const menu = await Menu.find({});
    res.status(200).json({
      message: "Success",
      results: menu.length,
      data: menu,
    });
  } catch (error) {
    res.status(400).json({
        status: "Failed",
        data: error,
      });
  }
};
