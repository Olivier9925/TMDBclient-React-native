import axios from 'axios';
const apiKey = "e709f2ea9104a5d71ac4f13607ce4100"; // a supp

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetDiscoverMovies = () => {
  return axios
    .get(
      'https://api.themoviedb.org/3/discover/movie?api_key=' +
      apiKey +
      '&language=fr-FR&region=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    )
};

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetTopMovies = () => {
  return axios
    .get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=' +
      apiKey +
      '&language=fr-FR&page=1'
    )
};

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSsearchMovie = searchValue => {
  return axios
    .get('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&language=fr-FR&page=1&include_adult=false&query=' + searchValue)
  //.get('https://api.themoviedb.org/3/search/multi?api_key=' + apiKey + '&language=fr-FR&query=' + searchValue + '&page=1&include_adult=false&region=fr')
};

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSsearchActor = (searchValue) => {
  return axios.get(
    'https://api.themoviedb.org/3/search/person?api_key=' + apiKey + '&language=fe-FR&query=' + searchValue + '&page=1&include_adult=true&region=fr'
  )
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetCurrentMovie = currentMovieId => {
  return axios
    .get(
      'https://api.themoviedb.org/3/movie/' +
      currentMovieId +
      '?api_key=' +
      apiKey +
      '&language=fr-FR'
    )
};

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetMovieDetails = currentMovieId => {
  return axios
    .get(
      'https://api.themoviedb.org/3/movie/' +
      currentMovieId +
      '?api_key=' +
      apiKey +
      '&language=fr-FR'
    )
};

export const WSgetMovieCredits = currentMovieId => {
  return axios
    .get(
      'https://api.themoviedb.org/3/movie/' +
      currentMovieId +
      '/credits?api_key=' +
      apiKey
    )
};

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetCurrentActorFilmo = currentActorId => {
  return axios.get(
    'https://api.themoviedb.org/3/person/' + currentActorId + '/movie_credits?api_key=' + apiKey + '&language=fr-FR'
  )
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetCurrentActorDetails = currentActorId => {
  return axios.get(
    'https://api.themoviedb.org/3/person/' + currentActorId + '?api_key=' + apiKey + '&language=fr-FR'
  )
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetCurrentActorImage = currentActorId => {
  return axios.get(
    'https://api.themoviedb.org/3/person/' + currentActorId + '/images?api_key=' + apiKey
  )
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetCurrentMovieImage = currentMovieId => {
  return axios.get(
    'https://api.themoviedb.org/3/movie/' + currentMovieId + '/images?api_key=' + apiKey
  )
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetTrendMovies = () => {
  return axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=' + apiKey
  )
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetSimilars = (currentMovie) => {
  return axios.get(
    'https://api.themoviedb.org/3/movie/' + currentMovie + '/similar?api_key=' + apiKey + '&language=fr-FR&page=1'
  )
}
