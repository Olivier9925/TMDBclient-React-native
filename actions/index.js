import axios from "axios";
import actionList from './actions';


const apiKey = "e709f2ea9104a5d71ac4f13607ce4100";



export const getDiscoverMovies = () =>
{
	return (dispatch) =>
	{
		dispatch({
			type: actionList.GET_DISCOVER_MOVIES,
			discoverMovies: []
		})
		axios.get("https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&language=fr-FR&region=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
			.then((response) => dispatch({
				type: actionList.GET_DISCOVER_MOVIES,
				discoverMovies: response.data.results
			}))
			.catch(error => console.log(error));
	}
}

export const getTopMovies = () =>
{
	return (dispatch) =>
	{
		dispatch({
			type: actionList.GET_TOP_MOVIES,
			topMovies: []
		})

		axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=" + apiKey + "&language=fr-FR&page=1")
			.then((response) => dispatch({
				type: actionList.GET_TOP_MOVIES,
				topMovies: response.data.results
			}))
			.catch(error => console.log(error));
	}
}

export const searchMovie = (searchValue) =>
{
	return (dispatch) =>
	{
		axios.get("https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&language=fr-FR&page=1&include_adult=false&query=" + searchValue)
			.then((response) => dispatch({
				type: actionList.GET_SEARCH_MOVIES,
				searchResult: response.data.results
			}))
			.catch(error => console.log(error));
	}
}

export const displayCurrentMovie = (currentMovieId) =>
{
	return (dispatch) =>
	{
		axios.get("https://api.themoviedb.org/3/movie/" + currentMovieId + "?api_key=" + apiKey + "&language=fr-FR")
			.then((response) =>
			{
				dispatch({
					type: actionList.GET_CURRENT_MOVIE,
					currentMovie: response.data
				})
			}
			)
	}
}

export const login = (email, password) =>
{
	return (dispatch) =>
	{
		axios.post("http://localhost:5000/authentication/login", {
			email: email,
			passwordSaisie: password
		})
			.then(response1 =>
			{

				dispatch(setAccessToken(data.accessToken));
				dispatch(setUser());
				console.log('response :', response1.data)
				dispatch({
					type: actionList.LOGIN,
					connexion: true
				});
			}
			)
			.catch(error => console.log(error));
	}
}

export const saveToList = (movieId) =>
{
	return (dispatch) =>
	{
		axios.post("http://localhost:5000/movieTrack/movie/" + movieId)
			.catch(error => console.log(error));

	}
}
export const saveToWatchedList = (movieId, user) =>
{
	return (dispatch) =>
	{
		axios.post("http://localhost:5000/movieTrack/movie/" + movieId + "/user/" + user + "/watched")
			.catch(error => console.log(error));

	}
}


export const getWatchList = () =>
{
	return (dispatch) =>
	{
		dispatch({
			type: actionList.GET_WATCHLIST,
			watchList: []
		})
		let moviesId = [];
		let movies = [];

		axios.get("http://localhost:5000/movieTrack/watchlist/")
			.then((response) =>
			{
				response.data.map((m, i) => moviesId.push(m.movie_id))

			})
			.then((response) =>
			{
				for (let i = 0; i < moviesId.length; i++) {
					axios.get("https://api.themoviedb.org/3/movie/" + moviesId[i] + "?api_key=" + apiKey + "&language=fr-FR")
						.then((response) =>
						{
							//console.log('resultats movies =>', response.data)
							movies.push(response.data)
						}
						)
				}
				dispatch({
					type: actionList.GET_WATCHLIST,
					watchList: movies
				})
			}
			)
			.catch(error => console.log(error));
	}
}


export const getWatched = (user) =>
{
	return (dispatch) =>
	{
		dispatch({
			type: actionList.GET_WATCHED,
			watchedList: []
		})
		let moviesId = [];
		let movies = [];

		axios.get("http://localhost:5000/movieTrack/user/" + user + "/watched/")
			.then((response) =>
			{
				response.data.map((m, i) => moviesId.push(m.movie_id))

			})
			.then((response) =>
			{
				for (let i = 0; i < moviesId.length; i++) {
					axios.get("https://api.themoviedb.org/3/movie/" + moviesId[i] + "?api_key=" + apiKey + "&language=fr-FR")
						.then((response) =>
						{
							movies.push(response.data)
						}
						)
				}
				dispatch({
					type: actionList.GET_WATCHED,
					watchedList: movies
				})
			}
			)
			.catch(error => console.log(error));
	}
}


export const isAlreadyWatched = (currentMovieId, userId) =>
{
	return (dispatch) =>
	{
		axios.get("http://localhost:5000/movieTrack/movie/" + currentMovieId + "/user/" + userId + "/watched")
			.then((response) =>
			{
				dispatch({
					type: actionList.ALREADY_WATCHED,
					AlreadyWatched: response.data
				})
			})
			.catch(error => console.log(error));
	}


}


export const getMovieDetails = (currentMovieId) =>
{
	return (dispatch) =>
	{
		axios.get("https://api.themoviedb.org/3/movie/" + currentMovieId + "?api_key=" + apiKey + "&language=fr-FR")
			.then((response) =>
			{
				dispatch({
					type: actionList.MOVIE_DETAILS,
					movieDetails: response.data
				})
			})
			.catch(error => console.log(error));
	}
}

export const getMovieCredits = (currentMovieId) =>
{
	return (dispatch) =>
	{
		axios.get("https://api.themoviedb.org/3/movie/" + currentMovieId + "/credits?api_key=" + apiKey)
			.then((response) =>
			{
				dispatch({
					type: actionList.MOVIE_CREDITS,
					movieCredits: response.data
				})
			})
			.catch(error => console.log(error));
	}
}
