import React from 'react'
import MovieList from '../pages/MovieList'
import Movie from '../pages/Movie'
import Home from '../pages/Home'
import { createStackNavigator } from '@react-navigation/stack';
import Connexion from '../pages/Connexion'
import { View, Text } from 'react-native'

const Stack = createStackNavigator();

const MyTabs = () =>
{
	function StatusBar()
	{
		return (
			<View>
			</View>
		);
	}

	return (
		<Stack.Navigator
			initialRouteName={Home}
			screenOptions={{
				headerStyle: {
					backgroundColor: '#2c2c35',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
				headerTitle: props => <StatusBar {...props} />
			}}
		>
			<Stack.Screen
				name={'Movie Tracker'}
				component={Home}
			/>
			<Stack.Screen
				name={'MOVIES'}
				component={MovieList}
			/>
			<Stack.Screen
				name={'MOVIE'}
				component={Movie}
			/>
			<Stack.Screen
				name={'Connexion'}
				component={Connexion}
			/>
		</Stack.Navigator>
	);
}

export default MyTabs;