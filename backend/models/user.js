const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
  name: String,
  artist: String,
  filename:String
});

const User = mongoose.model("spotify", userSchema);

module.exports = User;
