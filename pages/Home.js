import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import StartButton from '../components/StartButton'
import SearchBar from '../components/SearchBar'
import ConnexionButton from '../components/ConnexionButton'
import { useSelector } from 'react-redux'


const Home = () =>
{

	const connexion = useSelector(state => state.userReducer.connexion)

	return (
		<>
			<Text style={styles.title}>Movie Tracker</Text>
			<View style={styles.homeView} >
				<StartButton />
				{!connexion ? <ConnexionButton /> : <></>}

				<SearchBar />
			</View>
		</>
	)
}
export default Home

const styles = StyleSheet.create({
	homeView: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},
	title: {
		marginTop: 50,
		marginLeft: 20,
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold'
	}
});