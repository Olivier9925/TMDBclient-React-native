import axios from 'axios';
import actionList from './actions';

const apiKey = 'e709f2ea9104a5d71ac4f13607ce4100';

export const getDiscoverMovies = () =>
{
	return dispatch =>
	{
		axios
			.get(
				'https://api.themoviedb.org/3/discover/movie?api_key=' +
				apiKey +
				'&language=fr-FR&region=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
			)
			.then(response =>
				dispatch({
					type: actionList.GET_DISCOVER_MOVIES,
					discoverMovies: response.data.results,
				}),
			)
			.catch(error => console.log(error));
	};
};

export const getTopMovies = () =>
{
	return dispatch =>
	{
		axios
			.get(
				'https://api.themoviedb.org/3/movie/top_rated?api_key=' +
				apiKey +
				'&language=fr-FR&page=1',
			)
			.then(response =>
				dispatch({
					type: actionList.GET_TOP_MOVIES,
					topMovies: response.data.results,
				}),
			)
			.catch(error => console.log(error));
	};
};

export const searchMovie = searchValue =>
{
	return dispatch =>
	{
		axios
			.get(
				'https://api.themoviedb.org/3/search/movie?api_key=' +
				apiKey +
				'&language=fr-FR&page=1&include_adult=false&query=' +
				searchValue,
			)
			.then(response =>
				dispatch({
					type: actionList.GET_SEARCH_MOVIES,
					searchedMovie: response.data.results,
				}),
			)
			.catch(error => console.log(error));
	};
};

export const displayCurrentMovie = currentMovieId =>
{
	return dispatch =>
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
				dispatch({
					type: actionList.GET_CURRENT_MOVIE,
					currentMovie: response.data,
				});
			});
	};
};

export const getMovieDetails = currentMovieId =>
{
	return dispatch =>
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
				dispatch({
					type: actionList.MOVIE_DETAILS,
					currentMovieDetails: response.data,
				});
			})
			.catch(error => console.log(error));
	};
};

export const getMovieCredits = currentMovieId =>
{
	return dispatch =>
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
				dispatch({
					type: actionList.MOVIE_CREDITS,
					currentMovieCredits: response.data,
				});
			})
			.catch(error => console.log(error));
	};
};
