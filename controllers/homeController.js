const express = require('express')
const router = express.Router()

const Movie = require('../models/movies')
const Show = require('../models/shows')


const authRequired = (req, res, next) => {
  if (req.session.currentUser) {
    next()
  } else {
    console.log('You must be logged in!')
    res.redirect('/user')
  }
}










// INDEX ROUTES
let shows;
const allShows = Show.find({}, (err, foundShows) => {
  shows = foundShows
})

console.log(shows);

router.get('/', authRequired, (req, res) => {
  console.log(shows);
  Movie.find({}, (err, allMovies) => {
      res.render('home/index.ejs', {movies: allMovies, shows: shows})
  })
})

// SHOW Reviews Page
router.get('/reviews', (req, res) => {
  console.log(shows);
  Movie.find({}, (err, allMovies) => {
      res.render('home/reviews.ejs', {movies: allMovies, shows: shows})
  })
})


// SHOW Submit Review Page
// router.get('/submitreview', (req, res) => {
//   console.log(shows);
//   Movie.find(req.params.id, (err, foundMovie) => {
//       res.render('../views/home/submitReview.ejs', {movie: foundMovie})
//     })
//   })


// movie
// router.get('/movies/submitreview/:id', (req, res) => {
//       res.render('../views/movies/submitReview.ejs', {movieId: req.params.id})
//   })
//
// router.post('/movies/submitreview/:id', (req, res) => {
//   // console.log(request.body);
//   // create a review  // MOVIE
//
//   console.log(req.body.review);
//   Movie.findByIdAndUpdate(req.params.id,
//     { "$push": {"reviews": req.body.review}},
//     {"new": true},
//     (err, foundMovie) => {
//       console.log("here are my reviews");
//       console.log(foundMovie.reviews);
//   })
//
//
//   res.redirect(`/movies/${req.params.id}`)
// })




// POST Review ROUTE
// router.post()
























module.exports = router
