const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const alert = require('alert')
const User = require('../models/users.js')




router.get('/', (req, res) => {
  res.render('../views/users/index.ejs')
})

router.get('/signin', (req, res) => {
  res.render('../views/users/signin.ejs')
})

router.get('/register', (req, res) => {
  res.render('../views/users/register.ejs')
})

router.post('/register', (req, res) => {
  const salt = bcrypt.genSaltSync(10)
  req.body.password = bcrypt.hashSync(req.body.password, salt)
  console.log(req.body);

  User.findOne({username: req.body.username}, (err, userExists) => {
    if (userExists) {
      alert('that username is taken')
    } else {
      User.create(req.body, (err, createdUser) => {
        res.redirect('/home')
      })
    }
  })
})



router.post('/signin', (req, res) => {
  User.findOne({username: req.body.username}, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        // do this becasue they match. Login the user.
        req.session.currentUser = foundUser
        res.redirect('/home')
      } else {
        res.send('wrong user')
      }
    }
  })
})









// DESTROY SESSION ROUTE
router.get('/signout', (req, res) => {
  // this DESTROYS the session
  req.session.destroy()
  res.redirect('/user')
})





module.exports = router
