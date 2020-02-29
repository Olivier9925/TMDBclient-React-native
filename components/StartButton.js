import React from 'react'
import { CustomButton } from './CustomButton.js';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

const StartButton = () =>
{
	const navigation = useNavigation();
	const dispatch = useDispatch();

	return (
		<>
			<CustomButton
				title='Discover'
				onPress={() =>
				{
					dispatch({ type: 'DISCOVER' });
					navigation.navigate('MOVIES')
				}}
			/>
		</>
	)
}
export default StartButton