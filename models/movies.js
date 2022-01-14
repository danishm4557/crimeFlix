const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  name: String,
  img: String,
  img2: String,
  yearReleased: Number,
  duration: String,
  summary: String,
  reviews: [String],
  likes: Number,
  dislikes: Number,
  trailer: String
}, {timestamps: true}
);

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
