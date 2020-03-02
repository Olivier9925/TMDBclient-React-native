import actionsList from '../actions/actions';

const initState = {
	apiKey: "e709f2ea9104a5d71ac4f13607ce4100",
	discoverMovies: [],
	topMovies: [],
	filter: 'DISCOVER',
	searchResult: [],
	search: 'batman',
	currentMovieId: 0,
	currentMovie: [],
	movieDetails: [],
	movieCredits: []
}

export default (state = initState, action) =>
{
	switch (action.type) {
		case actionsList.SELECT_MOVIE:
			return {
			}
		case actionsList.GET_DISCOVER_MOVIES:
			return {
				...state,
				discoverMovies: action.discoverMovies
			}
		case actionsList.GET_TOP_MOVIES:
			return {
				...state,
				topMovies: action.topMovies
			}
		case actionsList.TOP:
			return {
				...state,
				filter: action.type
			}
		case actionsList.DISCOVER:
			return {
				...state,
				filter: action.type,
			}
		case actionsList.LISTE:
			return {
				...state,
				filter: action.type,
			}
		case actionsList.VU:
			return {
				...state,
				filter: action.type,
			}

		case actionsList.SEARCH:
			return {
				...state,
				filter: action.type,
				search: action.search
			}
		case actionsList.GET_SEARCH_MOVIES:
			return {
				...state,
				searchResult: action.searchResult
			}
		case actionsList.SET_CURRENT_MOVIE:
			return {
				...state,
				currentMovieId: action.currentMovieId
			}

		case actionsList.GET_CURRENT_MOVIE:
			return {
				...state,
				currentMovie: action.currentMovie
			}
		case actionsList.MOVIE_DETAILS:
			return {
				...state,
				movieDetails: action.movieDetails
			}

		case actionsList.MOVIE_CREDITS:
			return {
				...state,
				movieCredits: action.movieCredits
			}


		default:
			return state;
	}
}