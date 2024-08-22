const express = require("express");
const router = express.Router();

const Cart = require("../models/Cart");

router.post("/add-game", async (req, res) => {
  const { userid, game } = req.body;

  try {
    // Find the user by userid
    let user = await Cart.findOne({ userid });

    if (!user) {
      // If the user doesn't exist, create a new one
      user = new Cart({ userid, game: [game], __v: 0 });
    } else {
      // Check if the game with the same id already exists in the user's game list
      const existingGame = user.game.find((g) => g.id === game.id);
      if (existingGame) {
        return res
          .status(400)
          .json({ message: "Game already exists in user's game list" });
      }

      // If the game doesn't exist, add it to the user's game list
      user.game.push(game);
    }

    // Save the user
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error adding game to user", error });
  }
});

router.get("/cart/:userid/games", async (req, res) => {
  const userid = req.params.userid;

  try {
    // Find the user by userid
    const user = await Cart.findOne({ userid });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      const games = user.game;
      res.status(200).json(games);
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching user games", error });
  }
});

router.get("/carts", async (req, res) => {
  try {
    // Find all users
    const users = await Cart.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});
router.delete("/remove-game", async (req, res) => {
  const { userid, gameid } = req.body;

  try {
    let user = await Cart.findOne({ userid });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const gameIndex = user.game.findIndex((g) => g.id === gameid);

    if (gameIndex === -1) {
      return res.status(404).json({ message: "Game not found in user's cart" });
    }

    // Remove the game from the array
    user.game.splice(gameIndex, 1);

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: "Game removed successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error removing game from user", error });
  }
});
module.exports = router;
