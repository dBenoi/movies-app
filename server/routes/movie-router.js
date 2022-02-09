//import express
const express = require('express')

//import controllers
const MovieCtrl = require('../controllers/movie-ctrl')

//assign express.Router()
const router = express.Router()


router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies)

module.exports = router