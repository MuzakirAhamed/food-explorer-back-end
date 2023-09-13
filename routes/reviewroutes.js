const express = require("express");
const reviewController = require("../controllers/reviewController");
const router = express.Router();

router
  .route("/")
  .post(reviewController.postReviews)
  .get(reviewController.getReviews);

module.exports = router;
