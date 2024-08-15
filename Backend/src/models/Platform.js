const mongoose = require("mongoose");
const router = require("../routes/user");
const Schema = mongoose.Schema;

const platformSchema = new Schema({
  id: Number, // Unique identifier for the platform
  name: String, // Name of the platform
  slug: String, // URL-friendly identifier for the platform
  games_count: Number, // Total number of games available on this platform
  image_background: String, // URL to the background image associated with this platform
  image: [String, null], // Image associated with the platform, if any
  year_start: [Number, null], // Start year of the platform's availability, if applicable
  year_end: [Number, null], // End year of the platform's availability, if applicable
  games: [
    {
      id: Number, // Unique identifier for the game
      slug: String, // URL-friendly identifier for the game
      name: String, // Name of the game
      added: Number, // Number of times the game has been added to users' collections
    },
  ],
});

const Platform = mongoose.model("Platform", platformSchema);
module.exports = Platform;
