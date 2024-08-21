const mongoose = require("mongoose");
const router = require("../routes/user");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
  image: String,
  quantity: Number,
});

const CartSchema = new Schema({
  userid: String,
  game: [GameSchema],
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
