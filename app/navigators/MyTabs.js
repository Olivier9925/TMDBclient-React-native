import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { colorConstants } from '@constants';
import { logout } from '@actions/userActions';
import Movie from '@scenes/Movie';
import Home from '@scenes/Home';
import Signup from '@scenes/Signup'
import Connexion from '@scenes/Connexion';
import MovieList from '@scenes/MovieList';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();

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
		<Tab.Navigator
			initialRouteName={Home}
			screenOptions={{
				headerShown : false,
			}}
  			activeColor={colorConstants.TEXT}
			inactiveColor={colorConstants.ACCENT_COLOR}
			barStyle={{ backgroundColor: colorConstants.BACK_SECOND }}
		>
			<Tab.Screen
				name={'Movie Tracker'}
				component={Home}
			/>
			<Tab.Screen
				name={'MOVIES'}
				component={MovieList}
			/>
			<Tab.Screen
				name={'Connexion'}
				component={Connexion}
			/>
		</Tab.Navigator>
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