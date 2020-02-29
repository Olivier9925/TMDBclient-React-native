import React from 'react'
import { View, StyleSheet } from 'react-native'
import StartButton from '../components/StartButton'
import SearchBar from '../components/SearchBar'


const Home = (props) =>
{
	return (
		<View style={styles.homeView} >
			<StartButton />
			<SearchBar />
		</View>
	)
}
export default Home

const styles = StyleSheet.create({
	homeView: {
		flex: 1,
		flexDirection: 'column',
		flexWrap: 'wrap',
		alignContent: 'center',
		justifyContent: 'center',
	},
});