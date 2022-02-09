//create CRUD operations and controllers

//import Movie class from modules
const Movie = require('../modules/movie-model')

//create a new movie
createMovie = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a movie.',
    })
  }

  const movie = new Movie(body);

  if (!movie) {
    return res.status(400).json({ success: false, error: err })
  }

  movie
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: movie.id,
        message: 'Movie created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Movie not created.',
      })
    })
}
//update

//delete

//return one movie by ID

//return all movies