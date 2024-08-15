const express = require("express");
const router = express.Router();

const Genre = require("../models/Genre");

router.get("/genres", (req, res) => {
  Genre.find()
    .then((result) => {
      res.json({
        status: "SUCCESS",
        message: "Genres fetched successfully",
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: "FAILED",
        message: "Error in fetching genres",
      });
    });
});

router.get("/genres/:genreId/games", (req, res) => {
  const genreId = req.params.genreId;
  Genre.findById(genreId)
    .populate("games")
    .then((genre) => {
      res.json({
        status: "SUCCESS",
        message: "Games fetched successfully",
        data: genre.games,
      });
    })
    .catch((err) => {
      res.json({ status: "FAILED", message: "Error in fetching games" });
    });
});
    
router.get("/genres/:genreId/games", (req, res) => {
  const genreId = req.params.genreId;
    console.log(genreId);
    
  Genre.findById(genreId)
    .populate("games")
    .then((genre) => {
      res.json({
        status: "SUCCESS",
        message: "Games fetched successfully",
        data: genre.games,
      });
    })
    .catch((err) => {
      res.json({ status: "FAILED", message: "Error in fetching games" });
    });
});

module.exports = router;
