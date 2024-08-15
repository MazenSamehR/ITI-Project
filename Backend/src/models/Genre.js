const mongoose = require("mongoose");
const router = require("../routes/user");
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  id: Number, // Unique identifier for the genre
  name: String, // Name of the genre
  slug: String, // URL-friendly identifier for the genre
  games_count: Number, // Total number of games in this genre
  image_background: String, // URL to the background image associated with this genre
  games: [
    {
      id: Number, // Unique identifier for the game
      slug: String, // URL-friendly identifier for the game
      name: String, // Name of the game
      added: Number, // Number of times the game has been added to users' collections
    },
  ],
});


const Genre = mongoose.model("Genre", genreSchema);
module.exports = Genre;