import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { CustomButton } from '@components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { signup } from '@actions/userActions'
import { useDispatch } from 'react-redux'
import { ColorConstants } from '@constants';

const Signup = () =>
{
	const navigation = useNavigation();
	const dispatch = useDispatch()

	const [email, setEmail] = useState("");
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");

	return (
		<View>
			<Text style={styles.title}>Inscription</Text>
			<View style={styles.homeView} >
				<TextInput
					placeholder="eMail"
					placeholderTextColor={ColorConstants.TEXT}
					style={styles.inputSearch}
					onChangeText={text => setEmail(text)}
				/>
				<TextInput
					secureTextEntry={true}
					textContentType='password'
					placeholder="Password"
					placeholderTextColor={ColorConstants.TEXT}
					style={styles.inputSearch}
					onChangeText={text => setPassword1(text)}
				/>
				<TextInput
					secureTextEntry={true}
					textContentType='password'
					placeholder="encore...password"
					placeholderTextColor={ColorConstants.TEXT}
					style={styles.inputSearch}
					onChangeText={text => setPassword2(text)}
				/>
				<CustomButton
					style={styles.button}
					title='OK'
					onPress={() =>
					{
						if (password1 === password2) {
							dispatch(signup(email, password1));
							navigation.navigate('Movie Tracker')
						}
					}}
				/>
			</View>
		</View>
	)
}
export default Signup;

const styles = StyleSheet.create({
	homeView: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50,
	},
	title: {
		color: ColorConstants.TEXT,
		marginTop: 50,
		marginLeft: 20,
		fontSize: 30,
		fontWeight: 'bold'
	},
	inputSearch: {
		color: ColorConstants.TEXT,
		borderColor: ColorConstants.BORDER_COLOR,
		backgroundColor: ColorConstants.BACK_SECOND,
		width: 180,
		height: 50,
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
	},
	button: {
		margin: 30
	},
});