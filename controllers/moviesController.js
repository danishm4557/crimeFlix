const express = require('express')
const router = express.Router()

const Movie = require('../models/movies')
const Show = require('../models/shows')



// INDEX ROUTE
router.get('/', (req, res) => {
  Movie.find({}, (err, allMovies) => {
      console.log(allMovies);
      res.render('../views/movies/index.ejs', {movies: allMovies})
  })
})

let likedPercentage;
router.get('/:id', (req, res) => {
  Movie.findById(req.params.id, (err, foundMovie) => {
    if (err) {
      console.log(err);
    } else {
      likedPercentage = (foundMovie.likes/(foundMovie.likes+foundMovie.dislikes))*100
      res.render('../views/movies/show.ejs', {movie: foundMovie, likedPercentage: likedPercentage})
      console.log(foundMovie);
      console.log(likedPercentage);
    }
  })
})

















module.exports = router
