import React, { useEffect } from 'react'
import { saveToList, saveToWatchedList, isAlreadyWatched } from '../actions/userActions'
import { useSelector, connect } from 'react-redux'
import { View } from 'react-native'
import { CustomButton } from './CustomButton.js';
import { useNavigation } from '@react-navigation/native';

const SelectorAction = ({ dispatch }) =>
{
	const navigation = useNavigation()
	const currentMovieId = useSelector(state => state.movieReducer.currentMovieId)
	const user = useSelector(state => state.userReducer.user)

	useEffect(() =>
	{
		dispatch(isAlreadyWatched(currentMovieId, user));
	}, [dispatch, user])

	return (
		<View style={{
			marginBottom: 50,
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-around',
			paddingTop: 20,
			borderTopColor: '#ee121e',
			borderWidth: 2,
			borderBottomColor: 'transparent',
			borderLeftColor: 'transparent',
			borderRightColor: 'transparent',
		}}>

			<CustomButton
				onPress={() =>
				{
					dispatch(saveToList(currentMovieId, user[0].id));
					navigation.navigate('MOVIES')
				}}
				title='+'
			/>

			<CustomButton
				onPress={() =>
				{
					dispatch(saveToWatchedList(currentMovieId, user[0].id));
					navigation.navigate('MOVIES')
				}}
				title='vu'
			/>
		</View>
	)
}
export default connect()(SelectorAction);