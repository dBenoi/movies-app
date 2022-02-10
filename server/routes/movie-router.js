//import express
const express = require('express')

//import controllers
const MovieCtrl = require('../controllers/movie-ctrl')
const Movie = require('../models/movie-model')

//assign express.Router()
const router = express();


router.post('/movie', (req, res) => {
  let movie = new Movie({
    name: req.params.name,
    time: req.params.time,
    rating: req.params.rating
  });

  movie.save((err, resp) => {
    if (err) {
      console.log(err);
      res.status(400).json({ success: false, message: 'Something went wrong' });
    } else {
      res.send({
        message: 'The movie has been added!'
      })
    }
  })
})
router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies)

module.exports = router