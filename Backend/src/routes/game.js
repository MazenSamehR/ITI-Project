const express = require("express");
const router = express.Router();

const Game = require("../models/Game");

router.get("/games", (req, res) => {
  Game.find()
    .then((result) => {
      res.json({
        status: "SUCCESS",
        message: "Games fetched successfully",
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: "FAILED",
        message: "Error in fetching games",
      });
    });
});

router.get("/games/:id", (req, res) => {
  const id = req.params.id;
  Game.findOne({ id })
    .then((result) => {
      res.json({
        status: "SUCCESS",
        message: "Game fetched successfully",
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: "FAILED",
        message: "Error in fetching game",
      });
    });
});

module.exports = router;
