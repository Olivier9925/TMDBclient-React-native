import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { colorConstants } from '@constants';
import { logout } from '@actions/userActions';
import Movie from '@scenes/Movie';
import Home from '@scenes/Home';
import Signup from '@scenes/Signup';
import ConnexionNavigator from '@navigators/ConnexionNavigator';
import MovieList from '@scenes/MovieList';
import MovieNavigator from '@navigators/MovieNavigator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import home from '@assets/home.png'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';


const AppNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: HomeNavigator,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) =>
					<Icon name="home" size={25} color={tintColor} />
			}
		},
		HighScores: {
			screen: HighScoresScreen,
			navigationOptions: {
				tabBarLabel: 'High Scores',
				tabBarIcon: ({ tintColor }) =>
					<Icon name="chart-bar" size={25} color={tintColor} />
			}
		},
		Settings: {
			screen: SettingsScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) =>
					<Icon name="cogs" size={25} color={tintColor} />
			}
		}
	}
);

let width = Dimensions.get('window').width;

const MyTabs = () =>
{
	const dispatch = useDispatch();
	const connexion = useSelector(state => state.userReducer.connexion);


	return (
		<Tab.Navigator
			initialRouteName={Home}
			activeColor={colorConstants.TEXT}
			inactiveColor={colorConstants.ACCENT_COLOR}
			barStyle={{ backgroundColor: colorConstants.BACK_SECOND }}>
			<AppNavigator />
		</Tab.Navigator>
	);
};

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
