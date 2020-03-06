import axios from "axios";
import actionList from './actions';

const apiKey = "e709f2ea9104a5d71ac4f13607ce4100";
const backEndUrl = "https://movietrackerback.herokuapp.com/movieTrack";
//const backEndUrlTest = "http://localhost:5000/movieTrack"

export const login = (email, password) =>
{
	return (dispatch) =>
	{
		axios.post(backEndUrl + "/login", {
			email: email,
			passwordSaisie: password
		})
			.then(response1 =>
			{
				dispatch({
					type: actionList.LOGIN,
					connexion: true,
					user: response1.data.USER
				});
				dispatch(getWatched(response1.data.USER[0].id));
				dispatch(getWatchList(response1.data.USER[0].id))
			}
			)
			.catch(error => console.log(error));
	}
}
export const logout = () => (dispatch) => 
{
	dispatch({
		type: actionList.DECO,
	})
}


export const saveToList = (movieId, user) =>
{
	return () =>
	{
		axios.post(backEndUrl + "/movie/" + movieId + "/user/" + user + "/watchList")
			.catch(error => console.log(error));
	}
}
export const saveToWatchedList = (movieId, user) =>
{
	return () =>
	{
		axios.post(backEndUrl + "/movie/" + movieId + "/user/" + user + "/watched")
			.catch(error => console.log(error));
	}
}


export const getWatchList = (user) =>
{
	return (dispatch) =>
	{
		let moviesId = [];
		let movies = [];

		axios.get(backEndUrl + "/user/" + user + "/watchlist/")
			.then((response) =>
			{
				response.data.map((m, i) => moviesId.push(m.movie_id))
			})
			.then(() =>
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
		let moviesId = [];
		let movies = [];

		axios.get(backEndUrl + "/user/" + user + "/watched/")
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
