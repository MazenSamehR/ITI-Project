const mongoose = require("mongoose");
const router = require("../routes/user");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  id: Number,
  slug: String,
  name: String,
  released: String, // Date string
  tba: Boolean,
  background_image: String,
  rating: Number,
  rating_top: Number,
  ratings: [
    {
      id: Number,
      title: String,
      count: Number,
      percent: Number,
    },
  ],
  ratings_count: Number,
  reviews_text_count: Number,
  added: Number,
  added_by_status: {
    yet: Number,
    owned: Number,
    beaten: Number,
    toplay: Number,
    dropped: Number,
    playing: Number,
  },
  metacritic: Number,
  playtime: Number,
  suggestions_count: Number,
  updated: String, // Date string
  reviews_count: Number,
  saturated_color: String,
  dominant_color: String,
  platforms: [
    {
      platform: {
        id: Number,
        name: String,
        slug: String,
        image: String,
        year_start: Number,
        games_count: Number,
        image_background: String,
      },
      released_at: String, // Date string
      requirements_en: {
        minimum: String,
        recommended: String,
      },
    },
  ],
  parent_platforms: [
    {
      platform: {
        id: Number,
        name: String,
        slug: String,
      },
    },
  ],
  genres: [
    {
      id: Number,
      name: String,
      slug: String,
      games_count: Number,
      image_background: String,
    },
  ],
  stores: [
    {
      id: Number,
      store: {
        id: Number,
        name: String,
        slug: String,
        domain: String,
        games_count: Number,
        image_background: String,
      },
    },
  ],
  tags: [
    {
      id: Number,
      name: String,
      slug: String,
      language: String,
      games_count: Number,
      image_background: String,
    },
  ],
  esrb_rating: {
    id: Number,
    name: String,
    slug: String,
  },
  short_screenshots: [
    {
      id: Number,
      image: String,
    },
  ],
});

const Game = mongoose.model("Game", GameSchema);
module.exports = Game;