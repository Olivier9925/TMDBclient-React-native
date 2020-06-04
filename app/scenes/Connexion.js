import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { CustomButton } from '@components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { login, logout } from '@actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { colorConstants } from '@constants';
import userReducer from '@reducers/userReducer';
import { WSlogin } from '@services/UserServices'

const Connexion = () =>
{
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const connexion = useSelector(state => state.userReducer.connexion);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let display,
		display_inv = 'none';

	if (connexion) {
		display = 'none';
		display_inv = 'flex';
	} else {
		display = 'flex';
		display_inv = 'none';
	}

	return (
		<View>
			<Text style={styles.title}>Connexion</Text>
			<View style={[styles.homeView, { display: display }]}>
				<TextInput
					placeholder="eMail"
					placeholderTextColor={colorConstants.TEXT}
					style={styles.inputSearch}
					onChangeText={text => setEmail(text)}
				/>
				<TextInput
					secureTextEntry={true}
					textContentType="password"
					placeholder="Password"
					placeholderTextColor={colorConstants.TEXT}
					style={styles.inputSearch}
					onChangeText={text => setPassword(text)}
				/>
				<CustomButton
					style={styles.button}
					title="Se connecter"
					onPress={() =>
					{
						dispatch(userReducer.actions.loginSaisie(email, password));
						//navigation.navigate('Home');
					}}
				/>
				<CustomButton
					title="S'inscrire"
					onPress={() =>
					{
						navigation.navigate('Signup');
					}}
				/>
			</View>
			<View style={[styles.homeView, { display: display_inv }]}>
				<CustomButton
					title="Se déconnecter"
					onPress={() =>
					{
						dispatch(userReducer.actions.logout());
					}}
				/>
			</View>
		</View>
	);
};
export default Connexion;

const styles = StyleSheet.create({
	homeView: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50,
	},
	title: {
		color: colorConstants.TEXT,
		marginTop: 50,
		marginLeft: 20,
		fontSize: 30,
		fontWeight: 'bold',
	},
	inputSearch: {
		color: colorConstants.TEXT,
		borderColor: colorConstants.BORDER_COLOR,
		backgroundColor: colorConstants.BACK_SECOND,
		width: 180,
		height: 50,
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
	},
	button: {
		margin: 30,
	},
});
