const Review = require('../models/ReviewModel')
exports.postReviews = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json({
      message: "Successfully created",
      data:review
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed",
      data: error.message,
    });
  }
};
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json({
      message: "Success",
      data:reviews
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed",
      data: error.message,
    });
  }
};
