import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ColorConstants, StylesConstants } from '@constants';
import MoviesReducer from '@reducers/MoviesReducer';
import NavigationConstants from '@constants/NavigationConstants';
import { useNavigation } from '@react-navigation/native';
import MenuAction from '@components/MenuAction';
import FastImage from 'react-native-fast-image';
import MoviesUtils from '@utils/MoviesUtils';
import MoviePoster from '@components/MoviePoster';

const MovieScene = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation()

  const watchList = useSelector(state => state.UserReducer.watchList);
  const connexion = useSelector(state => state.UserReducer.connexion);
  const currentMovieCredits = useSelector(state => state.MoviesReducer.currentMovieCredits);
  const currentMovieImages = useSelector(state => state.MoviesReducer.currentMovieImages)
  const currentMovie = useSelector(state => state.MoviesReducer.currentMovie);
  const similars = useSelector(state => state.MoviesReducer.similars)

  useEffect(() => {
    dispatch(MoviesReducer.actions.resetCurrentMovie())
  }, [])

  const backdrops = currentMovieImages?.backdrops;

  const isInWatchList = () => MoviesUtils.getListIds(watchList).includes(currentMovie.id)

  const displayCredits = currentMovieCredits => {
    if (currentMovieCredits == undefined || currentMovieCredits == null) return;
    else
      return currentMovieCredits.map((m, i) => {
        if (i > 10) return;
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 8,
            }}>
            <TouchableOpacity
              onPress={() => {
                dispatch(MoviesReducer.actions.setCurrentActorId(m.id));
                navigation.navigate(NavigationConstants.ACTOR);
              }}
            >
              {m.profile_path && <FastImage
                style={{ width: 70, height: 70, borderRadius: 50, borderWidth: 1, borderColor: ColorConstants.ACCENT_COLOR }}
                source={{
                  uri: 'https://image.tmdb.org/t/p/original/' + m.profile_path,
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              }
            </TouchableOpacity>
            <View
              style={{
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'flex-end',
                alignContent: 'flex-end',
              }}>
              <Text style={{ color: ColorConstants.ACCENT_COLOR }}>
                {m.character}
              </Text>
              <Text
                style={{ color: ColorConstants.TEXT }}
              >
                {m.name}
              </Text>
            </View>
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
          <FastImage
            style={styles.posterImage}
            source={{
              uri: 'https://image.tmdb.org/t/p/original/' + currentMovie.poster_path,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
            key={currentMovie.title + '_p'}
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
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>
        {backdrops && backdrops.map((currentMovieImage, i) => {
          if (i >= 6) return;
          return (
            <FastImage
              style={{ width: 200, height: 100, marginVertical: 5 }}
              source={{
                uri: 'https://image.tmdb.org/t/p/original/' + currentMovieImage?.file_path,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          )
        })}
      </View>
      {connexion ? <MenuAction isInWatchList={isInWatchList()} /> : <View></View>}

      <SafeAreaView style={{ flex: 1, marginTop: 100 }}>
        <View>
          <Text style={StylesConstants.title}>{'Films similaires'}</Text>
          <FlatList
            data={similars}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            keyExtractor={item => item.id}
            refreshing={true}
            initialNumToRender={6}
            removeClippedSubviews={true}
            horizontal
          />
        </View>
      </SafeAreaView>


    </ScrollView>
  );
};

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

export default MovieScene;
