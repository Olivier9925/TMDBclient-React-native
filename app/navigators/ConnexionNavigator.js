import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationConstants, ColorConstants } from '@constants';
import MovieScene from '@scenes/MovieScene';
import SignupScene from '@scenes/SignupScene';
import LoginScene from '@scenes/LoginScene';

const Stack = createStackNavigator();

const MovieNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName={MovieScene}
			screenOptions={{
				headerShown: true,
				headerStyle: { backgroundColor: ColorConstants.BACK_SECOND },
				headerTitleStyle: { display: 'none' }
			}}
		>
			<Stack.Screen name={NavigationConstants.LOGIN} component={LoginScene} />
			<Stack.Screen name={NavigationConstants.SIGNUP} component={SignupScene} />
		</Stack.Navigator>
	);
};

export default MovieNavigator;

