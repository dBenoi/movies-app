const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const Movie = require('./models/movie-model');

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express();
const apiPort = 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(cors());
const jsonParser = bodyParser.json();

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', movieRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))