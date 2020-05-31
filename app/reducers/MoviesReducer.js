import actionsList from '@actions/actions';
import { createSlice } from '@reduxjs/toolkit';

const initState = {
  apiKey: 'e709f2ea9104a5d71ac4f13607ce4100',
  discoverMovies: [],
  topMovies: [],
  filter: 'DISCOVER',
  searchResult: [],
  search: 'batman',
  currentMovieId: 0,
  currentMovie: [],
  movieDetails: [],
  movieCredits: [],
};
export default createSlice({
  name: 'MoviesReducer',
  initialState: initState,
  reducers: {
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
      // prepare: (topMovies) => { return { payload: { topMovies } }; }
    },
    selectTopMovies: {
      reducer: (state, action) =>
      {
        state.filter = 'TOP';
      },
      // prepare: (filter) => { return { filter: { filter } }; }
    },
    selectDiscoverMovies: {
      reducer: (state, action) =>
      {
        console.log('coucou reducer discover')
        state.filter = 'DISCOVER';
      },
      // prepare: (filter) => { return { filter: { filter } }; }
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
        state.filter = 'VU';
      },
      // prepare: (filter) => { return { filter: { filter } }; }
    },
    getSearchedMovies: {
      reducer: (state, action) =>
      {
        state.searchResult = action?.payload?.searchResult;
      },
      // prepare: (filter) => { return { filter: { filter } }; }
    },
    setCurrentMovie: {
      reducer: (state, action) =>
      {
        state.currentMovieId = action?.payload?.currentMovieId;
      },
      // prepare: (filter) => { return { filter: { filter } }; }
    },
    getCurrentMovie: {
      reducer: (state, action) =>
      {
        state.currentMovie = action?.payload?.currentMovie;
      },
      // prepare: (filter) => { return { filter: { filter } }; }
    },
    getMovieDetails: {
      reducer: (state, action) =>
      {
        state.movieDetails = action?.payload?.movieDetails;
      },
      // prepare: (filter) => { return { filter: { filter } }; }
    },
    getMovieCredits: {
      reducer: (state, action) =>
      {
        state.movieCredits = action?.payload?.movieCredits;
      },
      // prepare: (filter) => { return { filter: { filter } }; }
    },
  },
});


// SELECTORS

