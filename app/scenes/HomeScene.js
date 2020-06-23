import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import SearchBar from '@components/SearchBar';
import { ColorConstants, NavigationConstants, StylesConstants } from '@constants';
import MenuClassic from '@components/MenuClassic';
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
    <View style={{ flex: 1, flexWrap: 'wrap', backgroundColor: ColorConstants.BACK_FIRST }}>
      <View style={[StylesConstants.screenWidth, {
        flexDirection: 'row',
        justifyContent: 'center',
      }]}>
        <Image source={require('@assets/long_icon.png')} style={[StylesConstants.screenWidth, { height: 70 }]} resizeMode="contain" />
      </View>
      <SearchBar />
      <View>
        <TrendMovies />
      </View>
      <MenuClassic />
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