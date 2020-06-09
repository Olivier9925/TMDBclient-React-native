import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieScene from '@scenes/MovieScene';
import MovieListScene from '@scenes/MovieListScene';
import HomeScene from '@scenes/HomeScene';
import ActorScene from '@scenes/ActorScene';
import { NavigationConstants } from '@constants';
import { ColorConstants } from '@constants';


const Stack = createStackNavigator();

const MovieNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={MovieListScene}
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: ColorConstants.BACK_SECOND },
        headerTitleStyle: { display: 'none' }
      }}
    >
      <Stack.Screen name={NavigationConstants.HOME} component={HomeScene} />
      <Stack.Screen name={NavigationConstants.MOVIE_LIST} component={MovieListScene} />
      <Stack.Screen name={NavigationConstants.MOVIE} component={MovieScene} />
      <Stack.Screen name={NavigationConstants.ACTOR} component={ActorScene} />
    </Stack.Navigator>
  );
};
export default MovieNavigator;
