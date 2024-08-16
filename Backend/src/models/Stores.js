const mongoose = require("mongoose");
const router = require("../routes/user");
const Schema = mongoose.Schema;

const storeSchema = {
  id: Number, // Unique identifier for the store
  name: String, // Name of the store
  domain: String, // Domain name of the store's website
  slug: String, // URL-friendly identifier for the store
  games_count: Number, // Total number of games available in the store
  image_background: String, // URL to the background image associated with the store
  games: [
    {
      id: Number, // Unique identifier for the game
      slug: String, // URL-friendly identifier for the game
      name: String, // Name of the game
      added: Number, // Number of times the game has been added to users' collections
    },
  ],
};

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
