const express = require('express')
const router = express.Router()

const Movie = require('../models/movies')
const Show = require('../models/shows')



// INDEX ROUTE
router.get('/', (req, res) => {
  Show.find({}, (err, allShows) => {
      console.log(allShows);
      res.render('../views/shows/index.ejs', {shows: allShows})
  })
})


router.get('/:id', (req, res) => {
  Show.findById(req.params.id, (err, foundShow) => {
    if (err) {
      console.log(err);
    } else {
      res.render('../views/shows/show.ejs', {show: foundShow})
    }
  })
})





















module.exports = router
