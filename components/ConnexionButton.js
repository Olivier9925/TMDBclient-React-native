import React from 'react'
import { CustomButton } from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native';

const ConnexionButton = () =>
{
	const navigation = useNavigation();

	return (
		<>
			<CustomButton
				style={{ margin: 30 }}
				title='Connexion'
				onPress={() =>
				{
					navigation.navigate('Connexion')
				}}
			/>

		</>
	)
}
export default ConnexionButton