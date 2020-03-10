import actionsList from '@actions/actions';

const initState = {
	apiKey: "e709f2ea9104a5d71ac4f13607ce4100",
	connexion: false,
	watchList: [],
	watchedList: [],
	alreadyWatched: 0,
	user: [{ id: 0 }]
}

export default (state = initState, action) =>
{
	switch (action.type) {

		case actionsList.LOGIN:
			return {
				...state,
				user: action.user,
				connexion: action.connexion
			}
		case actionsList.DECO:
			return {
				...state,
				user: null,
				connexion: false
			}

		case actionsList.GET_WATCHLIST:
			return {
				...state,
				watchList: action.watchList
			}
		case actionsList.GET_WATCHED:
			return {
				...state,
				watchedList: action.watchedList
			}
		default:
			return state;
	}
}
