import { createSlice } from '@reduxjs/toolkit'

const initState = {
	apiKey: 'e709f2ea9104a5d71ac4f13607ce4100',
	connexion: false,
	watchList: [],
	watchedList: [],
	alreadyWatched: 0,
	user: [{ id: 0 }],
};

export default createSlice({
	name: 'UserReducer',
	initialState: initState,
	reducers: {
		loginSaisie: {
			reducer: (state, action) => { },
			prepare: (user, password) => { return { payload: { user, password } }; }
		},
		setUserLog: {
			reducer: (state, action) =>
			{
				state.user = action?.payload?.user;
				state.connexion = true;
			},
			prepare: (user, connexion) => { return { payload: { user, connexion } }; }
		},
		logout: {
			reducer: (state, action) =>
			{
				state.user = null;
				state.connexion = false;
				state.watchList = [];
				state.watchedList = []
			},
			prepare: (user, connexion, watchList, watchedList) => { return { payload: { user, connexion, watchList, watchedList } }; }
		},
		getWatchList: {
			reducer: (state, action) =>
			{
				state.watchList = action?.payload?.watchList;
			},
			prepare: (watchList) => { return { payload: { watchList } }; }
		},
		getWatchedList: {
			reducer: (state, action) =>
			{
				state.watchedList = action?.payload?.watchedList;
			},
			prepare: (watchedList) => { return { payload: { watchedList } }; }
		},
		saveToWatchList: {
			reducer: (state, action) => { },
			prepare: (currentMovieId, userId) => { return { payload: { currentMovieId, userId } }; }
		},
		saveToWatchedList: {
			reducer: (state, action) => { },
			prepare: (currentMovieId, userId) => { return { payload: { currentMovieId, userId } }; }
		}
	}
});
