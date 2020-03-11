import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {colorConstants} from '@constants';
import {logout} from '@actions/userActions';
import Movie from '@scenes/Movie';
import Home from '@scenes/Home';
import Signup from '@scenes/Signup';
import Connexion from '@scenes/Connexion';
import MovieList from '@scenes/MovieList';

const Stack = createStackNavigator();

let width = Dimensions.get('window').width;

const MovieNavigator = () => {
	const dispatch = useDispatch();
	const connexion = useSelector(state => state.userReducer.connexion);

	return (
		<Stack.Navigator
			initialRouteName={Movie}
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name={'MOVIE'} component={Movie} />

			<Stack.Screen name={'Signup'} component={Signup} />
		</Stack.Navigator>
	);
};
export default MovieNavigator;

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

