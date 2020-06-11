import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { ColorConstants } from '@constants';

export const CustomButton = (props) => {
	const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;

	return (
		<TouchableOpacity onPress={onPress} style={[styles.button, style]}>
			<Text style={[styles.text, textStyle]}>{props.title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: ColorConstants.ACCENT_COLOR,
		shadowColor: ColorConstants.ACCENT_COLOR,
		display: 'flex',
		flexDirection: 'row',
		height: 35,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		shadowOpacity: 0.4,
		shadowOffset: { height: 5, width: 0 },
		shadowRadius: 5,
		width: 180
	},
	text: {
		fontSize: 16,
		textTransform: 'uppercase',
		color: ColorConstants.TEXT,
	},
});