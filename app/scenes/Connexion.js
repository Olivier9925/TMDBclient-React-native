import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { CustomButton } from '@components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ColorConstants } from '@constants';
import UserReducer from '@reducers/UserReducer';

const Connexion = () =>
{
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const connexion = useSelector(state => state.UserReducer.connexion);
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
					placeholderTextColor={ColorConstants.TEXT}
					style={styles.inputSearch}
					onChangeText={text => setEmail(text)}
				/>
				<TextInput
					secureTextEntry={true}
					textContentType="password"
					placeholder="Password"
					placeholderTextColor={ColorConstants.TEXT}
					style={styles.inputSearch}
					onChangeText={text => setPassword(text)}
				/>
				<CustomButton
					style={styles.button}
					title="Se connecter"
					onPress={() =>
					{
						dispatch(UserReducer.actions.loginSaisie(email, password));
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
						dispatch(UserReducer.actions.logout());
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
		color: ColorConstants.TEXT,
		marginTop: 50,
		marginLeft: 20,
		fontSize: 30,
		fontWeight: 'bold',
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
		margin: 30,
	},
});
