import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Movie from '@scenes/Movie';
import MovieList from '@scenes/MovieList';
import { NavigationConstants } from '@constants';
import { colorConstants } from '@constants';


const Stack = createStackNavigator();

const MovieNavigator = () =>
{
  return (
    <Stack.Navigator
      initialRouteName={MovieList}
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colorConstants.BACK_FIRST },
        headerTitleStyle: { display: 'none' }
      }}
    >
      <Stack.Screen name={NavigationConstants.MOVIE_LIST} component={MovieList} />
      <Stack.Screen name={NavigationConstants.MOVIE} component={Movie} />
    </Stack.Navigator>
  );
};
export default MovieNavigator;
