import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, SafeAreaView, View, TouchableHighlight, Text, StyleSheet, FlatList } from 'react-native';
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

  const displayList = movie =>
  {
    return (
      <TouchableHighlight
        onPress={() =>
        {
          dispatch(MoviesReducer.actions.setCurrentMovie(movie.id))
          navigation.navigate(NavigationConstants.MOVIE);
        }}
      >
        <Image
          source={{ uri: 'https://image.tmdb.org/t/p/original/' + movie.poster_path, }}
          style={{ width: 180, height: 250, marginBottom: 20, borderRadius: 8 }}
          key={`${movie.original_title}`}
        />
      </TouchableHighlight>
    )
  };

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
    <SafeAreaView style={{ flex: 1 }}>
      <View>

        <FlatList
          data={list}
          renderItem={({ item }) => displayList(item)}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => <Text style={styles.title}>{filter}</Text>}
          numColumns={2}
          refreshing={true}
          columnWrapperStyle={{
            justifyContent: 'space-around',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colorConstants.TEXT,
    marginTop: 50,
    marginBottom: 50,
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
