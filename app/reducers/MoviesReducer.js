import { createSlice } from '@reduxjs/toolkit'

const initState = {
  appStart: false,
  discoverMovies: [],
  topMovies: [],
  trendMovies: [],
  filter: 'DISCOVER',
  searchedMovie: [],
  search: null,
  searchActor: null,
  currentMovieId: 0,
  currentMovie: [],
  currentMovieDetails: [],
  currentMovieCredits: [],
  currentMovieImages: [],
  similars: [],
  currentActorId: null,
  currentActor: {
    details: {},
    Image: [],
    filmo: []
  },
};
export default createSlice({
  name: 'MoviesReducer',
  initialState: initState,
  reducers: {
    startingApp: {
      reducer: (state, action) => {
        state.appStart = true;
      }
    },
    getDiscoverMovies: {
      reducer: (state, action) => {
        state.discoverMovies = action?.payload?.discoverMovies;
      },
      prepare: (discoverMovies) => { return { payload: { discoverMovies } }; }
    },
    getTopMovies: {
      reducer: (state, action) => {
        state.topMovies = action?.payload?.topMovies;
      },
      prepare: (topMovies) => { return { payload: { topMovies } }; }
    },
    getTrendMovies: {
      reducer: (state, action) => {
        state.trendMovies = action?.payload?.trendMovies;
      },
      prepare: (trendMovies) => { return { payload: { trendMovies } }; }
    },
    selectChoiceFilter: {
      reducer: (state, action) => {
        state.filter = action?.payload?.filter;
      },
      prepare: (filter) => { return { payload: { filter } }; }
    },
    selectMyListMovies: {
      reducer: (state, action) => {
        state.filter = 'LISTE';
      },
      // prepare: (filter) => { return { filter: { filter } }; }
    },
    selectMyWatchedMovies: {
      reducer: (state, action) => {
        state.filter = 'FAVORIS';
      },
      // prepare: (filter) => { return { filter: { filter } }; }
    },
    selectSearchedMovies: {
      reducer: (state, action) => {
        state.search = action?.payload?.search;
      },
      prepare: (search) => { return { payload: { search } }; }
    },
    getSearchedMovies: {
      reducer: (state, action) => {
        state.searchedMovie = action?.payload?.searchedMovie;
        state.filter = 'SEARCH'
      },
      prepare: (searchedMovie) => { return { payload: { searchedMovie } }; }
    },
    setCurrentMovie: {
      reducer: (state, action) => {
        state.currentMovieId = action?.payload?.currentMovieId;
      },
      prepare: (currentMovieId) => { return { payload: { currentMovieId } }; }
    },
    getCurrentMovie: {
      reducer: (state, action) => {
        state.currentMovie = action?.payload?.currentMovie;
      },
      prepare: (currentMovie) => { return { payload: { currentMovie } }; }
    },
    getMovieDetails: {
      reducer: (state, action) => {
        state.currentMovieDetails = action?.payload?.currentMovieDetails;
      },
      prepare: (currentMovieDetails) => { return { payload: { currentMovieDetails } }; }
    },
    getMovieCredits: {
      reducer: (state, action) => {
        state.currentMovieCredits = action?.payload?.currentMovieCredits;
      },
      prepare: (currentMovieCredits) => { return { payload: { currentMovieCredits } }; }
    },
    resetCurrentMovie: {
      reducer: (state, action) => {
        state.currentMovieId = null;
        state.currentMovie = {};
        state.currentMovieDetails = {};
        state.currentMovieCredits = {};
      },
      prepare: (currentMovieId, currentMovie, currentMovieDetails, currentMovieCredits) => { return { payload: { currentMovieId, currentMovie, currentMovieDetails, currentMovieCredits } }; }
    },
    setCurrentRoute: {
      reducer: (state, action) => {
        state.currentRoute = action?.payload?.currentRoute;
      },
      prepare: (currentRoute) => { return { payload: { currentRoute } }; }
    },
    setCurrentActorId: {
      reducer: (state, action) => {
        state.currentActorId = action?.payload?.currentActorId
      },
      prepare: (currentActorId) => { return { payload: { currentActorId } }; }
    },
    getCurrentActor: {
      reducer: (state, action) => {
        state.currentActor = action?.payload?.currentActor;
      },
      prepare: (currentActor) => { return { payload: { currentActor } }; }
    },
    getCurrentMovieImages: {
      reducer: (state, action) => {
        state.currentMovieImages = action?.payload?.currentMovieImages;
      },
      prepare: (currentMovieImages) => { return { payload: { currentMovieImages } }; }
    },
    getSimilars: {
      reducer: (state, action) => {
        state.similars = action?.payload?.similars;
      },
      prepare: (similars) => { return { payload: { similars } }; }
    },
    getSearchedActors: {
      reducer: (state, action) => {
        state.searchActor = action?.payload?.searchActor;
      },
      prepare: (searchActor) => { return { payload: { searchActor } }; }
    },
  },
});


// SELECTORS

