import React from 'react'
import { useDispatch } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { CustomButton } from './CustomButton.js';

const Footer = () =>
{
	const dispatch = useDispatch();

	return (
		<View style={styles.footer}>
			<CustomButton
				title='DISCOVER'
				onPress={() => 
				{
					dispatch({ type: 'DISCOVER' });
				}}
			/>
			<CustomButton
				title='TOP'
				onPress={() =>
				{
					dispatch({ type: 'TOP' })
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	footer: {
		backgroundColor: '#2c2c35',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingTop: 20,
		borderTopColor: '#e4e4e5',
		borderWidth: 1,
		borderBottomColor: 'transparent',
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
	},
});

export default Footer
