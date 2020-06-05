import { createSlice } from '@reduxjs/toolkit'

const initState = {
  appStart: false,
  apiKey: 'e709f2ea9104a5d71ac4f13607ce4100',
  discoverMovies: [],
  topMovies: [],
  filter: 'DISCOVER',
  searchedMovie: [],
  search: 'batman',
  currentMovieId: 0,
  currentMovie: [],
  currentMovieDetails: [],
  currentMovieCredits: [],
};
export default createSlice({
  name: 'MoviesReducer',
  initialState: initState,
  reducers: {
    startingApp: {
      reducer: (state, action) =>
      {
        state.appStart = true;
      }
    },
    getDiscoverMovies: {
      reducer: (state, action) =>
      {
        state.discoverMovies = action?.payload?.discoverMovies;
      },
      prepare: (discoverMovies) => { return { payload: { discoverMovies } }; }
    },
    getTopMovies: {
      reducer: (state, action) =>
      {
        state.topMovies = action?.payload?.topMovies;
      },
      prepare: (topMovies) => { return { payload: { topMovies } }; }
    },
    selectChoiceFilter: {
      reducer: (state, action) =>
      {
        state.filter = action?.payload?.filter;
      },
      prepare: (filter) => { return { payload: { filter } }; }
    },
    selectMyListMovies: {
      reducer: (state, action) =>
      {
        state.filter = 'LISTE';
      },
      // prepare: (filter) => { return { filter: { filter } }; }
    },
    selectMyWatchedMovies: {
      reducer: (state, action) =>
      {
        state.filter = 'VU';
      },
      // prepare: (filter) => { return { filter: { filter } }; }
    },
    selectSearchedMovies: {
      reducer: (state, action) =>
      {
        state.search = action?.payload?.search;
      },
      prepare: (search) => { return { payload: { search } }; }
    },
    getSearchedMovies: {
      reducer: (state, action) =>
      {
        state.searchedMovie = action?.payload?.searchedMovie;
        state.filter = 'SEARCH'
      },
      prepare: (searchedMovie) => { return { payload: { searchedMovie } }; }
    },
    setCurrentMovie: {
      reducer: (state, action) =>
      {
        state.currentMovieId = action?.payload?.currentMovieId;
      },
      prepare: (currentMovieId) => { return { payload: { currentMovieId } }; }
    },
    getCurrentMovie: {
      reducer: (state, action) =>
      {
        state.currentMovie = action?.payload?.currentMovie;
      },
      prepare: (currentMovie) => { return { payload: { currentMovie } }; }
    },
    getMovieDetails: {
      reducer: (state, action) =>
      {
        state.currentMovieDetails = action?.payload?.currentMovieDetails;
      },
      prepare: (currentMovieDetails) => { return { payload: { currentMovieDetails } }; }
    },
    getMovieCredits: {
      reducer: (state, action) =>
      {
        state.currentMovieCredits = action?.payload?.currentMovieCredits;
      },
      prepare: (currentMovieCredits) => { return { payload: { currentMovieCredits } }; }
    },
    resetCurrentMovie: {
      reducer: (state, action) =>
      {
        state.currentMovieId = null;
        state.currentMovie = {};
        state.currentMovieDetails = {};
        state.currentMovieCredits = {};
      },
      prepare: (currentMovieId, currentMovie, currentMovieDetails, currentMovieCredits) => { return { payload: { currentMovieId, currentMovie, currentMovieDetails, currentMovieCredits } }; }
    },
  },
});


// SELECTORS

