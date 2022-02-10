//import mongoose from dependency
const mongoose = require('mongoose')
//assign mongoose.Schema to Schema
const Schema = mongoose.Schema

//create movie schema and require all 
const movieSchema = new Schema(
  {
    name: { type: String, required: true },
    time: { type: [String], required: true },
    rating: { type: Number, required: true },

  },
  { timestamps: true },
)

//export schema for use in other files
const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;