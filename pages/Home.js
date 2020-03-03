import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import StartButton from '../components/StartButton'
import SearchBar from '../components/SearchBar'
import ConnexionButton from '../components/ConnexionButton'
import { useSelector, useDispatch } from 'react-redux'
import { CustomButton } from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native'
import { getWatched } from '../actions/userActions'



const Home = () =>
{
	const dispatch = useDispatch()
	const navigation = useNavigation();
	const connexion = useSelector(state => state.userReducer.connexion)
	const user = useSelector(state => state.userReducer.user)

	return (
		<>
			<Text style={styles.title}>Movie Tracker</Text>
			{connexion ? <Text>{user[0].email}</Text> : <></>}
			<View style={styles.homeView} >
				<StartButton />
				{!connexion ? <ConnexionButton /> : <></>}
				{connexion ? <CustomButton
					style={{ margin: 30 }}
					title='Déja vu'
					onPress={() =>
					{
						dispatch(getWatched(user[0].id));
						dispatch({ type: 'VU' })
						navigation.navigate('MOVIES');
					}}
				/>
					: <></>}
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