import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

const initState = {
	apiKey: 'e709f2ea9104a5d71ac4f13607ce4100',
	connexion: false,
	watchList: [],
	watchedList: [],
	alreadyWatched: 0,
	user: {},
	session_id: null,
	account_id: null,
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
			reducer: (state, action) => {
				state.session_id = action?.payload?.session_id;
				state.account_id = action?.payload?.account_id;
				state.connexion = true;
			},
			prepare: (session_id, account_id, connexion) => { return { payload: { session_id, account_id, connexion } }; }
		},
		logout: {
			reducer: (state, action) => {
				state.connexion = false;
				state.watchList = [];
				state.watchedList = [];
				state.session_id = null;
				state.account_id = null;
				state.user = {};
			},
			prepare: (connexion, watchList, watchedList, session_id, account_id, user) => { return { payload: { connexion, watchList, watchedList, session_id, account_id, user } }; }
		},
		getWatchList: {
			reducer: (state, action) => {
				state.watchList = action?.payload?.watchList;
			},
			prepare: (watchList) => { return { payload: { watchList } }; }
		},
		getWatchedList: {
			reducer: (state, action) => {
				state.watchedList = action?.payload?.watchedList;
			},
			prepare: (watchedList) => { return { payload: { watchedList } }; }
		},
		saveToWatchList: {
			reducer: (state, action) => { },
			prepare: (currentMovieId, account_id, session_id, watchList) => { return { payload: { currentMovieId, account_id, session_id, watchList } }; }
		},
		saveToWatchedList: {
			reducer: (state, action) => { },
			prepare: (currentMovieId, userId) => { return { payload: { currentMovieId, userId } }; }
		},
		setUser: {
			reducer: (state, action) => {
				state.user = action?.payload?.user;
			},
			prepare: (user) => { return { payload: { user } }; }
		},
	}
});


// SELECTEURS
export const getWatchList = state => state.UserReducer.watchList;
