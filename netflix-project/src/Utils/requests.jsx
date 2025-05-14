const API_key = import.meta.env.VITE_API_key;
const request = {
  fetchTrending: `/trending/movie/day?api_key=${API_key}&language=en-US`,
  fetchNetflixOriginals:
   `/discover/tv?api_key=${API_key}&sort_by=popularity.desc&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_key}&with_genres=10749`,
  fetchDocumenteries: `/discover/movie?api_key=${API_key}&with_genres=99`,
  fetchTvShow: `/tv/popular?api_key=${API_key}&language=en-US&page=1`,
};
export default request;

