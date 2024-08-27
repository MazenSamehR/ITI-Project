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
router.post("/add-new-game", async (req, res) => {
  const game = req.body;

  // Ensure the game data exists and is complete
  if (!game || !game.id || !game.name) {
    return res.status(400).json({
      status: "FAILED",
      message:
        "Game data is missing or incomplete. 'id' and 'name' are required.",
    });
  }

  try {
    // Check if the game with the same ID already exists
    let existingGame = await Game.findOne({ id: game.id });

    if (existingGame) {
      return res.status(409).json({
        status: "FAILED",
        message: "Game already exists",
      });
    }

    // Create a new game with validated data
    const newGame = new Game(game);

    // Save the game
    await newGame.save();

    res.status(201).json({
      status: "SUCCESS",
      message: "Game added successfully",
      data: newGame,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "FAILED",
      message: "Error adding game",
      error: error.message,
    });
  }
});
router.get("/searchgames", async (req, res) => {
  try {
    const queryName = req.query.name?.toLowerCase();

    if (!queryName) {
      return res
        .status(400)
        .json({ message: "Please provide a game name to search." });
    }

    const filteredGames = await Game.find({
      name: { $regex: queryName, $options: "i" },
    });

    if (filteredGames.length === 0) {
      return res
        .status(404)
        .json({ message: "No games found matching the search criteria." });
    }

    res.json(filteredGames);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "FAILED",
      message: "Error searching games",
      error: error.message,
    });
  }
});

module.exports = router;
