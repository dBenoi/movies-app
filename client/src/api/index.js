import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movies/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movies/${id}`)
export const getMovieById = id => api.get(`/movies/${id}`)

const apis = {
  insertMovie,
  getAllMovies,
  updateMovieById,
  deleteMovieById,
  getMovieById,
}

export default apis