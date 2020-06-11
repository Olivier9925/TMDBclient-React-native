import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import { ColorConstants, ActionsConstants, StylesConstants } from '@constants';
import MoviePoster from '@components/MoviePoster'


const MovieListScene = () => {

  const discoverMovies = useSelector(state => state.MoviesReducer.discoverMovies);
  const topMovies = useSelector(state => state.MoviesReducer.topMovies);
  const watchList = useSelector(state => state.UserReducer.watchList);
  const watchedList = useSelector(state => state.UserReducer.watchedList);
  const searchedMovie = useSelector(state => state.MoviesReducer.searchedMovie);
  const filter = useSelector(state => state.MoviesReducer.filter);


  let list;
  switch (filter) {
    case ActionsConstants.TOP:
      list = topMovies;
      break;
    case ActionsConstants.DISCOVER:
      list = discoverMovies;
      break;
    case ActionsConstants.SEARCH:
      list = searchedMovie;
      break;
    case ActionsConstants.LISTE:
      list = watchList;
      break;
    case ActionsConstants.FAVORIS:
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
          renderItem={({ item }) => <MoviePoster movie={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => <Text style={StylesConstants.title}>{filter}</Text>}
          numColumns={2}
          refreshing={true}
          columnWrapperStyle={{
            justifyContent: 'space-around',
          }}
          initialNumToRender={6}
          removeClippedSubviews={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default MovieListScene;
