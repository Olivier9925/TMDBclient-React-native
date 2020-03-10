import React from 'react';
import MovieList from '../scenes/MovieList';
import Movie from '../scenes/Movie';
import Home from '../scenes/Home';
import Signup from '../scenes/Signup'
import { createStackNavigator } from '@react-navigation/stack';
import Connexion from '../scenes/Connexion';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { useNavigation } from '@react-navigation/native';
import { colorConstants } from '../constants';

const Stack = createStackNavigator();
let width = Dimensions.get('window').width;

const MyTabs = () =>
{
	const dispatch = useDispatch();
	const connexion = useSelector(state => state.userReducer.connexion);

	function StatusBar()
	{
		const navigation = useNavigation();

		return (
			<View style={styles.statusBar}>
				{
					connexion ?
						<Text style={styles.logText} onPress={() => { dispatch(logout()); navigation.navigate('Movie Tracker') }}>Logout</Text>
						:
						<Text style={styles.logText} onPress={() => navigation.navigate('Connexion')}> Login </Text>
				}
			</View>
		);
	}

	return (
		<Stack.Navigator
			initialRouteName={Home}
			screenOptions={{
				headerStyle: {
					backgroundColor: colorConstants.BACK_FIRST,
				},
				headerTintColor: colorConstants.TEXT,
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
			<Stack.Screen
				name={'Signup'}
				component={Signup}
			/>
		</Stack.Navigator>
	);
}

export default MyTabs;

const styles = StyleSheet.create({
	statusBar: {
		width: width - 100,
		marginLeft: 100,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		alignContent: 'center',
	},
	logText: {
		color: colorConstants.TEXT,
		padding: 10,
	},
});