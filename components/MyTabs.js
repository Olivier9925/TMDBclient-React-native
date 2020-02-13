import React from 'react'
import MovieList from './MovieList'
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'
import { View } from 'react-native';

const Stack = createStackNavigator();
const MyTabs = () =>
{
	const filter = useSelector(state => state.movieReducer.filter)


	return (
		<Stack.Navigator>
			<Stack.Screen name={filter} component={MovieList} />

		</Stack.Navigator>
	);
}

export default MyTabs;