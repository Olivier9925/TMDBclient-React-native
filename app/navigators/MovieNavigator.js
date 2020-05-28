import React from 'react';
import {Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Movie from '@scenes/Movie';
import MovieList from '@scenes/MovieList';

const Stack = createStackNavigator();

let width = Dimensions.get('window').width;

const MovieNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Movie}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Movie list'} component={MovieList} />
      <Stack.Screen name={'Movie'} component={Movie} />
    </Stack.Navigator>
  );
};
export default MovieNavigator;
