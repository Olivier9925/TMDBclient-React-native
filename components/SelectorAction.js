import React from 'react'
import { saveToList, saveToWatchedList } from '../actions/userActions'
import { useSelector, connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { CustomButton } from './CustomButton.js';
import { useNavigation } from '@react-navigation/native';
import { getWatched, getWatchList } from '../actions/userActions'
import { colorConstants } from '../constants';

const SelectorAction = ({ dispatch }) =>
{
	const navigation = useNavigation()

	const currentMovieId = useSelector(state => state.movieReducer.currentMovieId)
	const user = useSelector(state => state.userReducer.user)


	return (
		<View style={styles.selectorAction}>
			<CustomButton
				onPress={() =>
				{
					dispatch(saveToList(currentMovieId, user[0].id));
					dispatch(getWatchList(user[0].id));
					navigation.navigate('MOVIES')
				}}
				title='+'
			/>
			<CustomButton
				onPress={() =>
				{
					dispatch(saveToWatchedList(currentMovieId, user[0].id));
					dispatch(getWatched(user[0].id));
					navigation.navigate('MOVIES')
				}}
				title='vu'
			/>
		</View>
	)
}
export default connect()(SelectorAction);

const styles = StyleSheet.create({
	selectorAction: {
		marginBottom: 50,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingTop: 20,
		borderTopColor: colorConstants.ACCENT_COLOR,
		borderWidth: 2,
	},
});