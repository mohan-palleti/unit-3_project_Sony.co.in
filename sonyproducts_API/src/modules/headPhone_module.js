const mongoose = require("mongoose");
const Headschema = new mongoose.Schema({
  headphones_type: [{ type: String, required: true }],
  resolution: { type: String, required: true },
  price: { type: String, required: true },
  model: { type: String, required: true },
  Image: { type: String, required: true },
  description: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  buy: { type: String, required: true },
});

module.exports = mongoose.model("headphone", Headschema);
