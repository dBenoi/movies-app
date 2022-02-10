//import express & body-parser
const express = require('express')
const bodyParser = require('body-parser')

//import controllers
const MovieCtrl = require('../controllers/movie-ctrl')
//assign bodyParser.json 
const jsonParser = bodyParser.json();

//assign express.Router()
const router = express();


router.post('/movie', jsonParser, MovieCtrl.createMovie)
router.put('/movie/:id', jsonParser, MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies)

module.exports = router