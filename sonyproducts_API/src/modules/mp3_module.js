const mongoose = require("mongoose");

const Mp3 = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  model: { type: String, required: true },
  Image: { type: String, required: true },
  description: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  buy: { type: String, required: true },
});

module.exports = mongoose.model("mp3player", Mp3);
