const express = require("express");
const router = express.Router();

const Review = require("../models/Reviews");

router.get("/reviews", (req, res) => {
  Review.find()
    .then((result) => {
      res.json({
        status: "SUCCESS",
        message: "Reviews fetched successfully",
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: "FAILED",
        message: "Error in fetching reviews",
      });
    });
});
module.exports = router;
