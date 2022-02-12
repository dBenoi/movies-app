import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components';
import { MoviesInsert, MoviesList, MoviesUpdate } from '../pages/index';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/movies/list' element={<MoviesList />} />
        <Route path='/movies/create' element={<MoviesInsert />} />
        <Route path='/movies/update/:id' element={<MoviesUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
