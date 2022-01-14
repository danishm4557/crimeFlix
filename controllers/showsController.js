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
  Show.find({}, (err, allShows) => {
      console.log(allShows);
      res.render('../views/shows/index.ejs', {shows: allShows})
  })
})


let likedPercentage;
router.get('/:id', (req, res) => {
  Show.findById(req.params.id, (err, foundShow) => {
    if (err) {
      console.log(err);
    } else {
      likedPercentage = (foundShow.likes/(foundShow.likes+foundShow.dislikes))*100
      res.render('../views/shows/show.ejs', {show: foundShow, likedPercentage: likedPercentage})
      likedPercentage = Number.parseFloat(likedPercentage).toFixed(2)
      console.log(foundShow);
      console.log(likedPercentage);
    }
  })
})


router.put('/:id/like', (req, res) => {
  Show.findById(req.params.id, (err, foundShow) => {
    if (foundShow.likes > 0 && foundShow.likes < 1000) {
      if (err) {
        console.log(err);
      } else {
      foundShow.likes += 10
      foundShow.save()
      likedPercentage = ((foundShow.likes/(foundShow.likes+foundShow.dislikes))*100)
      likedPercentage = Number.parseFloat(likedPercentage).toFixed(2)
    res.render('../views/shows/show.ejs', {show: foundShow, likedPercentage: likedPercentage})
      }
    }
  })
})


router.put('/:id/dislike', (req, res) => {
  Show.findById(req.params.id, (err, foundShow) => {
    if (foundShow.likes > 0 && foundShow.likes < 1000) {
      if (err) {
        console.log(err);
      } else {
      foundShow.likes -= 10
      foundShow.save()
      likedPercentage = ((foundShow.likes/(foundShow.likes+foundShow.dislikes))*100)
      likedPercentage = Number.parseFloat(likedPercentage).toFixed(2)
      res.render('../views/shows/show.ejs', {show: foundShow, likedPercentage: likedPercentage})
      }
    }
  })
})




// shows
router.get('/submitreview/:id', (req, res) => {
      res.render('../views/shows/submitReview.ejs', {showId: req.params.id})
  })

router.post('/submitreview/:id', (req, res) => {
  // console.log(request.body);
  // create a review  // MOVIE

  console.log(req.body.review);
  Show.findByIdAndUpdate(req.params.id,
    { "$push": {"reviews": req.body.review}},
    {"new": true},
    (err, foundShow) => {
      console.log("here are my reviews");
      console.log(foundShow.reviews);
  })


  res.redirect(`/shows/${req.params.id}`)
})




// DELETE ROUTE
router.delete('/:id', (req, res) => {
  Show.findByIdAndDelete(req.params.id, (err, deletedShow) => {
    if (err) {
      console.log(err);
      res.send(err)
    } else {
      console.log(deletedShow);
      res.redirect('/shows')
    }
  })
})
















module.exports = router
