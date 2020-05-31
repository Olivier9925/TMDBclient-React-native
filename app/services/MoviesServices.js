import axios from 'axios';

const apiKey = 'e709f2ea9104a5d71ac4f13607ce4100';

export const WSgetDiscoverMovies = () =>
{
  return axios
    .get(
      'https://api.themoviedb.org/3/discover/movie?api_key=' +
      apiKey +
      '&language=fr-FR&region=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    )
};

export const WSgetTopMovies = () =>
{
  axios
    .get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=' +
      apiKey +
      '&language=fr-FR&page=1',
    )
    .then(response =>
    {
      response.data.results;
    })
    .catch(error => console.log(error));
};

export const WSsearchMovie = searchValue =>
{
  axios
    .get(
      'https://api.themoviedb.org/3/search/movie?api_key=' +
      apiKey +
      '&language=fr-FR&page=1&include_adult=false&query=' +
      searchValue,
    )
    .then(response =>
    {
      response.data.results;
    })
    .catch(error => console.log(error));
};

export const WSdisplayCurrentMovie = currentMovieId =>
{
  axios
    .get(
      'https://api.themoviedb.org/3/movie/' +
      currentMovieId +
      '?api_key=' +
      apiKey +
      '&language=fr-FR',
    )
    .then(response =>
    {
      response.data;
    });
};

export const WSgetMovieDetails = currentMovieId =>
{
  axios
    .get(
      'https://api.themoviedb.org/3/movie/' +
      currentMovieId +
      '?api_key=' +
      apiKey +
      '&language=fr-FR',
    )
    .then(response =>
    {
      response.data;
    })
    .catch(error => console.log(error));
};

export const WSgetMovieCredits = currentMovieId =>
{
  axios
    .get(
      'https://api.themoviedb.org/3/movie/' +
      currentMovieId +
      '/credits?api_key=' +
      apiKey,
    )
    .then(response =>
    {
      response.data;
    })
    .catch(error => console.log(error));
};
