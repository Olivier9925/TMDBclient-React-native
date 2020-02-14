import React from 'react'
import MovieList from './MovieList'
import Movie from '../pages/Movie'
import Footer from './Footer'
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'

const Stack = createStackNavigator();
const MyTabs = () =>
{
	const filter = useSelector(state => state.movieReducer.filter)
	const currentMovie = useSelector(state => state.movieReducer.currentMovie)



	return (
		<Stack.Navigator initialRouteName={filter}>
			<Stack.Screen name={filter} component={MovieList} />
			<Stack.Screen name={'MOVIE'} component={Movie} />
		</Stack.Navigator>
	);
}

export default MyTabs;