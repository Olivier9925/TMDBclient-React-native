import React from 'react'
import MovieList from '../pages/MovieList'
import Movie from '../pages/Movie'
import Footer from './Footer'
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'
import { View, Text } from 'react-native'

const Stack = createStackNavigator();
const MyTabs = () =>
{
	const filter = useSelector(state => state.movieReducer.filter)
	const currentMovie = useSelector(state => state.movieReducer.currentMovie)


	function StatusBar()
	{
		return (
			<View>

			</View>
		);
	}


	return (
		<Stack.Navigator initialRouteName={filter}
			screenOptions={{
				headerStyle: {
					backgroundColor: '#2c2c35',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
				headerTitle: props => <StatusBar {...props} />
			}}>
			<Stack.Screen
				name={filter}
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