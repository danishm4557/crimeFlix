
// REQUIRE EXPRESS -- to use server
const express = require('express')
const app = express()




// REQUIRE ENV FILE -- to keep some things out of public reach
require('dotenv').config()
const PORT = process.env.PORT



// USE PUBLIC (CSS) FILE
app.use(express.static('public'))



// INTERPRET INCOMING REQUESTS AS JSON
app.use(express.json())


// USE PARSE DATA
app.use(express.urlencoded({extended: true}))




// REQUIRE METHOD OVERRIDE -- to be able to Delet and Edit
const methodOverride = require('method-override')
app.use(methodOverride('_method'))




// REQUIRE SESSIONS -- to be able to store user's behavior
const session = require('express-session')
const SESSION_SECRET = process.env.SESSION_SECRET
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
// custom middleware to make currentUser Available as a LOCAL VARIABLE on all routes.
app.use((req, res, next) => {
  res.locals.currentUser = req.session.currentUser
  next()
})




// REQUIRE MONGOOSE -- to be able to use mongoDB
const mongoose = require('mongoose')
mongoURL = process.env.MONGODB_URL

const db = mongoose.connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Database Connected');
})

db.on('error', () => {console.log('error: ', err)})
db.on('connected', () => {console.log('mongo connected')})
db.on('disconnected', () => {console.log('mongo disconnected')})









// IMPORT CONTROLLERS
const moviesController = require('./controllers/moviesController')
app.use('/movies', moviesController)

const showsController = require('./controllers/showsController')
app.use('/shows', showsController)

const usersController = require('./controllers/usersController')
app.use('/user', usersController)

const homeController = require('./controllers/homeController')
app.use('/home', homeController)



app.listen(PORT, () => {
  console.log('Server running on Port: ', PORT);
})
