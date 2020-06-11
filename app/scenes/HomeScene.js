import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '@components/SearchBar';
import { ColorConstants, NavigationConstants, TextsConstants, StylesConstants } from '@constants';
import TopOrDiscoverChoice from '@components/TopOrDiscoverChoice';
import MoviesReducer from '@reducers/MoviesReducer';
import { useNavigation } from '@react-navigation/native';
import TrendMovies from '@components/TrendMovies'

const HomeScene = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(MoviesReducer.actions.startingApp())
  }, [])

  useEffect(() => {
    const currentRoute = navigation.addListener('tabPress', e => {
      dispatch(MoviesReducer.actions.resetCurrentMovie())
      navigation.navigate(NavigationConstants.MOVIE_LIST)
    });
    return currentRoute;
  }, [navigation])

  return (
    <View style={{ flex: 1, backgroundColor: ColorConstants.BACK_FIRST, marginHorizontal: 0 }}>
      <Text style={StylesConstants.title}>{TextsConstants.HOME_SCENE_TITLE}</Text>
      <SearchBar />
      <TrendMovies />
      <TopOrDiscoverChoice />
    </View>
  );
};

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default HomeScene;