import axios from "axios";
const apiKey = "e709f2ea9104a5d71ac4f13607ce4100"; // a supp

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSlogout = () => (session_id) => {
	"https://api.themoviedb.org/3/authentication/session?api_key=" + apiKey,
	{
		"session_id": session_id
	}
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetWatchList = (session_id, account_id) => {
	return axios.get("https://api.themoviedb.org/3/account/" + account_id + "/watchlist/movies?api_key=" + apiKey + "&language=fr-FR&session_id=" + session_id + "&sort_by=created_at.asc&page=1")
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetWatchedList = (movieId) => {
	return axios.get("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + apiKey + "&language=fr-FR")
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetToken = () => {
	return axios.get("https://api.themoviedb.org/3/authentication/token/new?api_key=" + apiKey)
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WScreateSessionLogin = (username, password, request_token) => {
	return axios.post("https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=" + apiKey,
		{
			"username": username,
			"password": password,
			"request_token": request_token
		}
	)
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WScreateSession = (request_token) => {
	return axios.post("https://api.themoviedb.org/3/authentication/session/new?api_key=" + apiKey,
		{
			"request_token": request_token
		}
	)
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSgetAccountDetails = (session_id) => {
	return axios.get("https://api.themoviedb.org/3/account?api_key=" + apiKey + "&session_id=" + session_id)
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WSsaveToWatchList = (movieId, account_id, session_id, watchlist) => {
	return axios.post("https://api.themoviedb.org/3/account/" + account_id + "/watchlist?api_key=" + apiKey + "&session_id=" + session_id,
		{
			"media_type": "movie",
			"media_id": movieId,
			"watchlist": !watchlist
		}
	)
}