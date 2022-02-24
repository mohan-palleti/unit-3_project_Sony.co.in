const mongoose = require("mongoose");
const bcrpt = require("bcryptjs");
const User = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

User.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  var hash = bcrpt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

User.methods.checkPassword = function (password) {
  return bcrpt.compareSync(password, this.password);
};

module.exports = mongoose.model("Sonyuser", User);
