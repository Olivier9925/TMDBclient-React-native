import React from 'react'
import { CustomButton } from './CustomButton.js';
import { useNavigation } from '@react-navigation/native';

const StartButton = () =>
{
	const navigation = useNavigation();
	return (
		<>
			<CustomButton title='Commencer' onPress={() => { navigation.navigate('MOVIES') }} />
		</>
	)
}
export default StartButton