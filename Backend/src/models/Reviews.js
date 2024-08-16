const mongoose = require("mongoose");
const router = require("../routes/user");
const Schema = mongoose.Schema;

const reviewSchema = {
  id: Number,
  user: {
    id: Number,
    username: String,
    slug: String,
    full_name: String,
    avatar: String,
    games_count: Number,
    collections_count: Number,
  },
  game: {
    id: Number,
    slug: String,
    name: String,
    released: String,
    tba: Boolean,
    background_image: String,
    rating_top: Number,
    ratings: [
      {
        id: Number,
        title: String,
        count: Number,
        percent: Number,
      },
    ],
    added: Number,
    user_game: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    reviews_count: Number,
    saturated_color: String,
    dominant_color: String,
  },
  text: String,
  text_preview: String,
  text_previews: [],
  text_attachments: Number,
  rating: Number,
  reactions: [],
  created: String,
  edited: String,
  likes_count: Number,
  likes_positive: Number,
  likes_rating: Number,
  comments_count: Number,
  comments_parent_count: Number,
  posts_count: Number,
  is_text: Boolean,
  comments: {
    count: Number,
    results: [],
  },
  can_delete: Boolean,
};
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
