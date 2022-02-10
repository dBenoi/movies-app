//create CRUD operations and controllers

//import Movie class from modules
const Movie = require('../models/movie-model')

//create a new movie
createMovie = (req, res) => {
  const body = req.body

  if (!body) {
    return res
      .status(400)
      .json({ success: false, error: 'You must provide a movie.', })
  }
  console.log('We have a body')
  const movie = new Movie({
    name: req.body.name,
    time: req.body.time,
    rating: req.body.rating,
  })
  console.log(req.body)
  if (!movie) {
    return res
      .status(400)
      .json({ success: false, error: 'Something went wrong' })
  }
  console.log('We have a movie')



  movie
    .save()
    .then(() => {
      return res
        .status(201)
        .json({
          success: true,
          message: 'Movie created!',
        })
    })
    .catch(error => {
      return res
        .status(400)
        .json({
          error, message: 'Movie not created. 6969',
        })
    })
}
//update
updateMovie = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res
      .status(400)
      .json({ success: false, error: 'You must provide a body to update.', })
  }

  Movie.findOne({ _id: req.params.id }, (err, movie) => {
    if (err) {
      return res
        .status(404)
        .json({ err, message: 'Movie not found!', })
    }

    movie.name = body.name;
    movie.time = body.time;
    movie.rating = body.rating;

    movie
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: movie._id,
          message: 'Movie updated',
        })
      })
      .catch(error => {
        return res
          .status(404)
          .json({ error, message: 'Movie not updated!', })
      })
  })
}

//delete
deleteMovie = async (req, res) => {
  await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
    if (err) {
      return res
        .status(400)
        .json({ success: false, error: err })
    }

    if (!movie) {
      return res
        .status(404)
        .json({ success: false, error: "Movie not found" })
    }

    return res
      .status(200)
      .json({ success: true, data: movie })

  }).catch(err => console.log(err)) //if any error is caught
}

//return one movie by ID
getMovieById = async (req, res) => {
  await Movie.findOne({ _id: req.params.id }, (err, movie) => {
    if (err) {
      return res
        .status(400)
        .json({ success: false, error: err })
    }

    if (!movie) {
      return res
        .status(404)
        .json({ success: false, error: 'Movie not found.' })
    }

    return res
      .status(200)
      .json({ success: true, data: movie })

  }).catch(err => console.log(err)) //if any error is caught
}

//return all movies
getMovies = async (req, res) => {
  await Movie.find({}, (err, movies) => {
    if (err) {
      return res
        .status(400)
        .json({ success: false, error: err })
    }

    if (!movies.length) {
      return res
        .status(404)
        .json({ success: false, error: 'Movie not found.' })
    }

    return res
      .status(200)
      .json({ success: true, data: movies })
  }).catch(err => console.log(err))
}

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
  getMovies,
}