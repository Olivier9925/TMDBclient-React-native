import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationConstants } from '@constants';
import Movie from '@scenes/Movie';
import Signup from '@scenes/Signup';
import Connexion from '@scenes/Connexion';

const Stack = createStackNavigator();

const MovieNavigator = () =>
{
	return (
		<Stack.Navigator
			initialRouteName={Movie}
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name={NavigationConstants.CONNEXION} component={Connexion} />
			<Stack.Screen name={NavigationConstants.SIGNUP} component={Signup} />
		</Stack.Navigator>
	);
};

export default MovieNavigator;

