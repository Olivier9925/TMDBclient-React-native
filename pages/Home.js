import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import { useSelector, useDispatch } from 'react-redux'
import { CustomButton } from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native'
import { colorConstants } from '../constants';

const homeMenuButton = (choice) =>
{
	const dispatch = useDispatch()
	const navigation = useNavigation();

	return (
		<CustomButton
			style={{ marginTop: 30, marginBottom: 40, }}
			title={choice}
			onPress={() =>
			{
				dispatch({ type: choice });
				navigation.navigate('MOVIES')
			}}
		/>
	)
}

const Home = () =>
{
	const connexion = useSelector(state => state.userReducer.connexion)

	return (
		<View style={{ flex: 1, backgroundColor: colorConstants.BACK_SECOND }}>
			<Text style={styles.title}>Movie Tracker</Text>
			<View style={styles.homeView} >
				{homeMenuButton('DISCOVER')}
				{homeMenuButton('TOP')}
				{connexion ? homeMenuButton('VU') : <></>}
				{connexion ? homeMenuButton('LISTE') : <></>}
			</View>
			<SearchBar />
		</View>
	)
}
export default Home

const styles = StyleSheet.create({
	homeView: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	title: {
		marginTop: 50,
		marginLeft: 20,
		color: colorConstants.TEXT,
		fontSize: 30,
		fontWeight: 'bold'
	}
});