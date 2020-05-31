import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { Image, View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import TopOrDiscoverChoice from '@components/TopOrDiscoverChoice';
import { useNavigation } from '@react-navigation/native';
import { colorConstants } from '@constants';
import MoviesReducer from '@reducers/MoviesReducer';

const MovieList = (props) =>
{
  const navigation = useNavigation();
  const discoverMovies = useSelector(
    state => state.MoviesReducer.discoverMovies
  );
  const topMovies = useSelector(state => state.MoviesReducer.topMovies);
  const watchList = useSelector(state => state.userReducer.watchList);
  const watchedList = useSelector(state => state.userReducer.watchedList);
  const search = useSelector(state => state.MoviesReducer.search);
  const searchResult = useSelector(state => state.MoviesReducer.searchResult);
  const filter = useSelector(state => state.MoviesReducer.filter);
  const user = useSelector(state => state.userReducer.user);


  useEffect(() =>
  {
    //props.selectDiscoverMovies()
    //getDiscoverMovies();
    //dispatch(getTopMovies());
    //dispatch(searchMovie(search));
  });

  const displayList = movies =>
  {
    return movies.map((t, i) =>
    {
      return (
        <TouchableHighlight
          onPress={() =>
          {
            dispatch({
              type: 'SET_CURRENT_MOVIE',
              currentMovieId: t.id,
            });
            navigation.navigate('Movie');
          }}
          key={i}>
          <Image
            source={{
              uri: 'https://image.tmdb.org/t/p/original/' + t.poster_path,
            }}
            style={{ width: 180, height: 250, marginBottom: 20, borderRadius: 8 }}
            key={`${i}_${t.original_title}`}
          />
        </TouchableHighlight>
      );
    });
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
      list = searchResult;
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
  console.log('filter : ', filter);
  return (
    <>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 0.85, backgroundColor: colorConstants.BACK_FIRST }}>
          <Text style={styles.title}>{filter}</Text>
          <View style={styles.movieList}>{displayList(list)}</View>
        </ScrollView>
        <View>
          <TopOrDiscoverChoice />
        </View>
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


function mapStateToProps(state)
{
  return {
  }
}


export default connect(mapStateToProps, {
  selectDiscoverMovies: MoviesReducer.actions.selectDiscoverMovies,
  selectTopMovies: MoviesReducer.actions.selectTopMovies,
})(MovieList);
