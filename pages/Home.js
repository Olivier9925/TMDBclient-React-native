import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import ConnexionButton from '../components/ConnexionButton'
import { useSelector, useDispatch } from 'react-redux'
import { CustomButton } from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native'

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
		<View style={{ flex: 1 }}>
			<Text style={styles.title}>Movie Tracker</Text>
			<View style={styles.homeView} >
				{homeMenuButton('DISCOVER')}
				{homeMenuButton('TOP')}
				{connexion ? homeMenuButton('VU') : <></>}
				{connexion ? homeMenuButton('LISTE') : <></>}
				{!connexion ? <ConnexionButton /> : <></>}
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
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold'
	}
});