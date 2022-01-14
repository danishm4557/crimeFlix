const mongoose = require('mongoose')

const showSchema = new mongoose.Schema({
  name: String,
  img: String,
  img2: String,
  yearReleased: Number,
  seasons: Number,
  summary: String,
  reviews: [String],
  likes: Number,
  dislikes: Number,
  trailer: String
}, {timestamps: true}
);

const Show = mongoose.model('Show', showSchema)

module.exports = Show
