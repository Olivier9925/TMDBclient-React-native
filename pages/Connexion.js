import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Connexion = () =>
{
	return (
		<>
			<Text style={styles.title}>Connexion</Text>
			<View style={styles.homeView} >
				<TextInput
					placeholder="Login"
					style={styles.inputSearch}
				//onChangeText={text => setsearch(text)}
				/>
				<TextInput
					placeholder="Password"
					style={styles.inputSearch}
				//onChangeText={text => setsearch(text)}
				/></View>
		</>
	)
}
export default Connexion

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
	},
	inputSearch: {
		color: 'white',
		width: 180,
		height: 50,
		padding: 10,
		borderWidth: 1,
		borderColor: "#ABABAB",
		borderRadius: 5,
		backgroundColor: '#34343f',
		marginBottom: 10,
	},

});