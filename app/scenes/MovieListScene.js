import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, SafeAreaView, View, TouchableHighlight, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ColorConstants, NavigationConstants } from '@constants';
import MoviesReducer from '@reducers/MoviesReducer';
import MoviePoster from '@components/MoviePoster'


const MovieListScene = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const discoverMovies = useSelector(state => state.MoviesReducer.discoverMovies);
  const topMovies = useSelector(state => state.MoviesReducer.topMovies);
  const watchList = useSelector(state => state.UserReducer.watchList);
  const watchedList = useSelector(state => state.UserReducer.watchedList);
  const searchedMovie = useSelector(state => state.MoviesReducer.searchedMovie);
  const filter = useSelector(state => state.MoviesReducer.filter);


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
          renderItem={({ item }) => <MoviePoster movie={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => <Text style={styles.title}>{filter}</Text>}
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

const styles = StyleSheet.create({
  title: {
    color: ColorConstants.TEXT,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default MovieListScene;
