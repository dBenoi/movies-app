//import express
const express = require('express')
const bodyParser = require('body-parser')

//import controllers
const MovieCtrl = require('../controllers/movie-ctrl')
const Movie = require('../models/movie-model')
const jsonParser = bodyParser.json();

//assign express.Router()
const router = express();


router.post('/movie', jsonParser, MovieCtrl.createMovie)
router.put('/movie/:id', jsonParser, MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies)

// router.post('/movie', (req, res) => {
//   let movie = new Movie({
//     name: req.params.name,
//     time: req.params.time,
//     rating: req.params.rating
//   });

//   movie.save((err, resp) => {
//     if (err) {
//       console.log(err);
//       res.status(400).json({ success: false, message: 'Something went wrong' });
//     } else {
//       res.send({
//         message: 'The movie has been added!'
//       })
//     }
//   })
// })

module.exports = router