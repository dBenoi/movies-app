//import mongoose from dependency
const mongoose = require('mongoose')
//assign mongoose.Schema to Schema
const Schema = mongoose.Schema

//create movie schema and require all 
const movieSchema = new Schema(
  {
    name: String,
    time: [String],
    rating: Number,

  }
)

//export schema for use in other files
const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;