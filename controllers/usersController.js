const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('../views/users/index.ejs')
})

router.get('/signin', (req, res) => {
  res.render('../views/users/signin.ejs')
})

router.get('/register', (req, res) => {
  res.render('../views/users/register.ejs')
})













module.exports = router
