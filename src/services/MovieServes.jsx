import axios from "axios";

const API_URL = "http://localhost:3001/mafiasYGangsters";

export const getAllMovies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createMovie = async (movieData) => {
  const response = await axios.post(API_URL, movieData);
  return response.data;
};