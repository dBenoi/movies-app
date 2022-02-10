const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const Movie = require('./models/movie-model');

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/new-movie', function (req, res) {
  const movie = new Movie;
  movie.name = req.body.name;
  movie.time = req.body.time;
  movie.rating = req.body.rating;

  console.log(req.body.body)

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

app.use('/api', movieRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))