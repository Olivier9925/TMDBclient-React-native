import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons';
import MovieList from './MovieList'

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () =>
{
	return (
		<Tab.Navigator initialRouteName="MovieList" >
			<Tab.Screen name="Home" component={MovieList} />
			<Tab.Screen name="Top" component={MovieList} />
		</Tab.Navigator>
	);
}

export default MyTabs;