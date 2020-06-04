import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { colorConstants, NavigationConstants } from '@constants';
import MoviesReducer from '@reducers/MoviesReducer';

const MovieList = () =>
{
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const discoverMovies = useSelector(
    state => state.MoviesReducer.discoverMovies
  );
  const topMovies = useSelector(state => state.MoviesReducer.topMovies);
  const watchList = useSelector(state => state.userReducer.watchList);
  const watchedList = useSelector(state => state.userReducer.watchedList);
  const searchedMovie = useSelector(state => state.MoviesReducer.searchedMovie);
  const filter = useSelector(state => state.MoviesReducer.filter);

  const displayList = movies =>
    movies.map((t, i) =>
      (
        <TouchableHighlight
          onPress={() =>
          {
            dispatch(MoviesReducer.actions.setCurrentMovie(t.id))
            navigation.navigate(NavigationConstants.MOVIE);
          }}
          key={i}>
          <Image
            source={{ uri: 'https://image.tmdb.org/t/p/original/' + t.poster_path, }}
            style={{ width: 180, height: 250, marginBottom: 20, borderRadius: 8 }}
            key={`${i}_${t.original_title}`}
          />
        </TouchableHighlight>
      ));

  let list;
  switch (filter) {
    case 'TOP':
      list = topMovies;
      break;
    case 'DISCOVER':
      list = discoverMovies;
      break;
    case 'SEARCH':
      list = searchedMovie;
      break;
    case 'LISTE':
      list = watchList;
      break;
    case 'VU':
      list = watchedList;
      break;

    default:
      list = discoverMovies;
      break;
  }

  return (
    <>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 0.85, backgroundColor: colorConstants.BACK_FIRST }}>
          <Text style={styles.title}>{filter}</Text>
          <View style={styles.movieList}>{displayList(list)}</View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colorConstants.TEXT,
    marginTop: 50,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  movieList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    paddingTop: 50,
  },
});


export default MovieList;
