const Movie = require('../models/movie-model')
const mongoose = require('mongoose')
const db = require('../db/index')

const movies = [
  new Movie({
    name: "Warfighter",
    time: ["15", "14", "13"],
    rating: 5
  }),
  new Movie({
    name: "Operation Filth",
    time: ["16", "13", "10"],
    rating: 4
  })
]

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

movies.map(async (m, index) => {
  await m.save((err, res) => {
    if (index === movies.length - 1) {
      console.log('Seeded!');
    }
  });
});