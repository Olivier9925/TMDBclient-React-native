import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Image, Text, ImageBackground, StyleSheet } from 'react-native';
import SelectorAction from '@components/SelectorAction';
import { ColorConstants } from '@constants';
import MoviesReducer from '@reducers/MoviesReducer';
import NavigationConstants from '../constants/NavigationConstants';
import { useNavigation } from '@react-navigation/native';

const Movie = () =>
{
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const currentMovie = useSelector(state => state.MoviesReducer.currentMovie);
  const currentMovieCredits = useSelector(state => state.MoviesReducer.currentMovieCredits);
  const connexion = useSelector(state => state.UserReducer.connexion);

  const displayCredits = currentMovieCredits =>
  {
    if (currentMovieCredits == undefined || currentMovieCredits == null) return;
    else
      return currentMovieCredits.map((m, i) =>
      {
        if (i > 15) return;
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ color: ColorConstants.ACCENT_COLOR }}>
              {m.character}
            </Text>
            <Text
              style={{ color: ColorConstants.TEXT }}
              onPress={() =>
              {
                dispatch(MoviesReducer.actions.setCurrentActorId(m.id));
                navigation.navigate(NavigationConstants.ACTOR);

              }}
            >
              {m.name}
            </Text>
          </View >
        );
      });
  };

  return (
    <ScrollView style={{ backgroundColor: ColorConstants.BACK_SECOND }}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/original/${
            currentMovie.backdrop_path
            }`,
        }}
        style={styles.backGroundImage}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original/${
                currentMovie.poster_path
                }`,
            }}
            key={currentMovie.title + '_p'}
            style={styles.posterImage}
          />
        </View>
      </ImageBackground>
      <View
        style={{
          display: 'flex',
          marginTop: 60,
          color: ColorConstants.TEXT,
          paddingHorizontal: 20,
        }}>
        <Text style={styles.title}>{currentMovie.title}</Text>
        <Text style={styles.tagLine}>{currentMovie.tagline}</Text>
        <Text style={styles.date}>{currentMovie.release_date}</Text>
        <Text style={styles.overView}>{currentMovie.overview}</Text>
      </View>
      <View style={styles.credits}>{displayCredits(currentMovieCredits.cast)}</View>
      {connexion ? <SelectorAction /> : <View></View>}
    </ScrollView>
  );
};
export default Movie;

const styles = StyleSheet.create({
  backGroundImage: {
    height: 500,
    resizeMode: 'contain',
    padding: 0,
  },
  posterImage: {
    borderColor: ColorConstants.ACCENT_COLOR,
    width: 180,
    height: 250,
    marginBottom: 20,
    borderRadius: 8,
    marginTop: 300,
    marginLeft: 20,
    borderWidth: 4,
  },
  title: {
    color: ColorConstants.TEXT,
    paddingVertical: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  tagLine: {
    color: ColorConstants.TEXT,
    paddingVertical: 10,
    fontSize: 25,
  },
  date: {
    color: ColorConstants.ACCENT_COLOR,
  },
  overView: {
    color: ColorConstants.TEXT,
    paddingVertical: 10,
    fontSize: 15,
  },
  credits: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
