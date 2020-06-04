import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '@components/SearchBar';
import { colorConstants } from '@constants';
import ConnectedMenu from '@components/ConnectedMenu';
import TopOrDiscoverChoice from '@components/TopOrDiscoverChoice';
import MoviesReducer from '@reducers/MoviesReducer';

const Home = () =>
{
  const dispatch = useDispatch();

  useEffect(() =>
  {
    dispatch(MoviesReducer.actions.startingApp())
  }, [])

  const connexion = useSelector(state => state.userReducer.connexion);

  return (
    <View style={{ flex: 1, backgroundColor: colorConstants.BACK_FIRST }}>
      <Text style={styles.title}>MOVIE TRACKER</Text>
      <SearchBar />
      <TopOrDiscoverChoice />
      {connexion ? <ConnectedMenu /> : <></>}
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
  title: {
    color: colorConstants.TEXT,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Home;