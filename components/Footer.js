import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View } from 'react-native'
import { CustomButton } from './CustomButton.js';

const Footer = ({ navigation }) =>
{

	const dispatch = useDispatch();
	const filter = useSelector(state => state.movieReducer.filter)


	return (
		<View style={{
			display: 'flex', flexDirection: 'row',
			justifyContent: 'space-around',
			paddingTop: 20,
			borderTopColor: '#e4e4e5',
			borderWidth: 1,
			borderBottomColor: 'transparent',
			borderLeftColor: 'transparent',
			borderRightColor: 'transparent',
		}}>
			<CustomButton title='DISCOVER' onPress={() => 
			{
				dispatch({ type: 'DISCOVER' });
			}} />
			<CustomButton title='TOP' onPress={() =>
			{
				dispatch({ type: 'TOP' })
			}} />
		</View>
	)
}
export default Footer