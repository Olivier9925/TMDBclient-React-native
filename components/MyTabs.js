import React from 'react'
import MovieList from '../pages/MovieList'
import Movie from '../pages/Movie'
import Home from '../pages/Home'
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'
import { View, Text } from 'react-native'

const Stack = createStackNavigator();

const MyTabs = () =>
{
	const filter = useSelector(state => state.movieReducer.filter)

	function StatusBar()
	{
		return (
			<View>
				<Text style={{ color: 'white' }}>
					{filter}
				</Text>
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
		</Stack.Navigator>
	);
}

export default MyTabs;