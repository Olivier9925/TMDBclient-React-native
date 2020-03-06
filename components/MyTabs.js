import React from 'react'
import MovieList from '../pages/MovieList'
import Movie from '../pages/Movie'
import Home from '../pages/Home'
import { createStackNavigator } from '@react-navigation/stack';
import Connexion from '../pages/Connexion'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

const Stack = createStackNavigator();

const MyTabs = () =>
{
	const dispatch = useDispatch()
	const connexion = useSelector(state => state.userReducer.connexion)

	function StatusBar()
	{
		return (
			<View>
				{connexion ? <Text onPress={() => dispatch(logout())}>Déco</Text> : <></>}
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