import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { CustomButton } from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { login } from '../actions/userActions'
import { useDispatch } from 'react-redux'
import { colorConstants } from '../constants';

const Connexion = () =>
{
	const navigation = useNavigation();
	const dispatch = useDispatch()

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View>
			<Text style={styles.title}>Connexion</Text>
			<View style={styles.homeView} >
				<TextInput
					placeholder="eMail"
					style={styles.inputSearch}
					onChangeText={text => setEmail(text)}
				/>
				<TextInput
					secureTextEntry={true}
					textContentType='password'
					placeholder="Password"
					style={styles.inputSearch}
					onChangeText={text => setPassword(text)}
				/>
				<CustomButton
					style={styles.button}
					title='OK'
					onPress={() =>
					{
						dispatch(login(email, password));
						navigation.navigate('Movie Tracker')
					}}
				/>
			</View>
		</View>
	)
}
export default Connexion;

const styles = StyleSheet.create({
	homeView: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50,
	},
	title: {
		marginTop: 50,
		marginLeft: 20,
		color: colorConstants.TEXT,
		fontSize: 30,
		fontWeight: 'bold'
	},
	inputSearch: {
		color: colorConstants.TEXT,
		width: 180,
		height: 50,
		padding: 10,
		borderWidth: 1,
		borderColor: colorConstants.BORDER_COLOR,
		borderRadius: 5,
		backgroundColor: colorConstants.BACK_SECOND,
		marginBottom: 10,
	},
	button: {
		margin: 30
	},
});