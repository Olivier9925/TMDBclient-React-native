import React from 'react'
import { useDispatch } from 'react-redux'
import { View, Button } from 'react-native'

const Footer = () =>
{

	const dispatch = useDispatch();

	return (
		<View style={{ backgroundColor: 'pink' }}>
			<Button onPress={() => 
			{
				dispatch({ type: 'DISCOVER' });
			}} title='DISCOVER' />
			<Button onPress={() =>
			{
				dispatch({ type: 'TOP' })
			}} title='TOP' />
		</View>
	)
}
export default Footer