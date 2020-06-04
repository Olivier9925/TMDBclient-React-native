import axios from "axios";

const apiKey = "e709f2ea9104a5d71ac4f13607ce4100";
const backEndUrl = "https://movietrackerback.herokuapp.com/movieTrack";
const backEndUrlTest = "http://localhost:5000/movieTrack"
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const WSlogin = (email, password) =>
{
	return axios.post(backEndUrl + "/login", {
		email: email,
		passwordSaisie: password
	})
}
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const logout = () => (dispatch) => dispatch({ type: actionList.DECO })

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetWatchListIds = (user) =>
{
	return axios.get(backEndUrl + "/user/" + user + "/watchlist/")
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetWatchedListIds = (user) =>
{
	return axios.get(backEndUrl + "/user/" + user + "/watched/")
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetWatchList = (movieId) =>
{
	return axios.get("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + apiKey + "&language=fr-FR")
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetWatchedList = (movieId) =>
{
	return axios.get("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + apiKey + "&language=fr-FR")
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const signup = (email, password) =>
{
	return (dispatch) =>
	{
		axios.post(backEndUrl + "/signup", {
			email: email,
			passwordSaisie: password
		})
			.catch(error => console.log(error));
	}
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSsaveToWatchList = (movieId, user) =>
{
	return axios.post(backEndUrl + "/movie/" + movieId + "/user/" + user + "/watchList")
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSsaveToWatchedList = (movieId, user) =>
{
	return axios.post(backEndUrl + "/movie/" + movieId + "/user/" + user + "/watched")
}


