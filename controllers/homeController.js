const express = require('express')
const router = express.Router()

const Movie = require('../models/movies')
const Show = require('../models/shows')

// INDEX ROUTES
let shows;
const allShows = Show.find({}, (err, foundShows) => {
  shows = foundShows
})

console.log(shows);

router.get('/', (req, res) => {
  console.log(shows);
  Movie.find({}, (err, allMovies) => {
      res.render('../views/home/index.ejs', {movies: allMovies, shows: shows})
  })
})


























module.exports = router
