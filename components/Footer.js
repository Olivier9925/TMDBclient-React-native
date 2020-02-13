import React from 'react'
import { useDispatch } from 'react-redux'
import { View } from 'react-native'
import { CustomButton } from './CustomButton.js';


const Footer = () =>
{

	const dispatch = useDispatch();

	return (
		<View style={{
			display: 'flex', flexDirection: 'row',
			justifyContent: 'space-around',
			paddingTop: 20
		}}>
			<CustomButton onPress={() => 
			{
				dispatch({ type: 'DISCOVER' });
			}} title='DISCOVER' />
			<CustomButton onPress={() =>
			{
				dispatch({ type: 'TOP' })
			}} title='TOP' />
		</View>
	)
}
export default Footer