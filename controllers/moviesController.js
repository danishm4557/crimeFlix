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








// INDEX ROUTE
router.get('/', authRequired, (req, res) => {
  Movie.find({}, (err, allMovies) => {
    if (err) {
      console.log(err);
    } else {
      console.log(allMovies);
      res.render('movies/index.ejs', {movies: allMovies})
    }
  })
})

// SHOW Original Likes and Dislikes
let likedPercentage;
router.get('/:id', (req, res) => {
  Movie.findById(req.params.id, (err, foundMovie) => {
    if (err) {
      console.log(err);
    } else {
      likedPercentage = (foundMovie.likes/(foundMovie.likes+foundMovie.dislikes))*100
      likedPercentage = Number.parseFloat(likedPercentage).toFixed(2)
      res.render('movies/show.ejs', {movie: foundMovie, likedPercentage: likedPercentage})
      console.log(foundMovie);
      console.log(likedPercentage);
    }
  })
})


// UPDATE LIKES and Dislikes
router.put('/:id/like', (req, res) => {
  Movie.findById(req.params.id, (err, foundMovie) => {
    if (foundMovie.likes > 0 && foundMovie.likes < 1000) {
      if (err) {
        console.log(err);
      } else {
      foundMovie.likes += 10
      foundMovie.save()
      likedPercentage = ((foundMovie.likes/(foundMovie.likes+foundMovie.dislikes))*100)
      likedPercentage = Number.parseFloat(likedPercentage).toFixed(2)
      res.render('movies/show.ejs', {movie: foundMovie, likedPercentage: likedPercentage})
      }
    }
  })
})


router.put('/:id/dislike', (req, res) => {
  Movie.findById(req.params.id, (err, foundMovie) => {
    if (foundMovie.likes > 0 && foundMovie.likes < 1000) {
      if (err) {
        console.log(err);
      } else {
      foundMovie.likes -= 10
      foundMovie.save()
      likedPercentage = ((foundMovie.likes/(foundMovie.likes+foundMovie.dislikes))*100)
      likedPercentage = Number.parseFloat(likedPercentage).toFixed(2)
    res.render('movies/show.ejs', {movie: foundMovie, likedPercentage: likedPercentage})
      }
    }
  })
})


// movie
router.get('/submitreview/:id', (req, res) => {
      res.render('movies/submitReview.ejs', {movieId: req.params.id})
  })

router.post('/submitreview/:id', (req, res) => {
  // console.log(request.body);
  // create a review  // MOVIE

  console.log(req.body.review);
  Movie.findByIdAndUpdate(req.params.id,
    { "$push": {"reviews": req.body.review}},
    {"new": true},
    (err, foundMovie) => {
      console.log("here are my reviews");
      console.log(foundMovie.reviews);
  })


  res.redirect(`/movies/${req.params.id}`)
})





// DELETE ROUTE
router.delete('/:id', (req, res) => {
  Movie.findByIdAndDelete(req.params.id, (err, deletedMovie) => {
    if (err) {
      console.log(err);
      res.send(err)
    } else {
      console.log(deletedMovie);
      res.redirect('/movies')
    }
  })
})










module.exports = router
