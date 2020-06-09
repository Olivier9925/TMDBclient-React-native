import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationConstants } from '@constants';
import MovieScene from '@scenes/MovieScene';
import SignupScene from '@scenes/SignupScene';
import LoginScene from '@scenes/LoginScene';

const Stack = createStackNavigator();

const MovieNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName={MovieScene}
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name={NavigationConstants.LOGIN} component={LoginScene} />
			<Stack.Screen name={NavigationConstants.SIGNUP} component={SignupScene} />
		</Stack.Navigator>
	);
};

export default MovieNavigator;

