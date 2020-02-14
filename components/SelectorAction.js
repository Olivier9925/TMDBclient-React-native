import React, { useState, useEffect } from 'react'
import { saveToList, saveToWatchedList, isAlreadyWatched } from '../actions'
import { useSelector, connect } from 'react-redux'
import { View, Text } from 'react-native'
import { CustomButton } from './CustomButton.js';


const SelectorAction = ({ dispatch }) =>
{
	const currentMovieId = useSelector(state => state.movieReducer.currentMovieId)
	const user = useSelector(state => state.movieReducer.user)

	useEffect(() =>
	{
		dispatch(isAlreadyWatched(currentMovieId, user));
	}, [dispatch, user])


	const connexion = useSelector(state => state.movieReducer.connexion)
	const [redirectList, setRedirectList] = useState(false)

	if (redirectList) return (<Redirect to='/' />)


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

			<CustomButton onClick={() =>
			{
				dispatch(saveToList(currentMovieId));
				setRedirectList(true)
			}} title='+' />



			<CustomButton onClick={() =>
			{
				dispatch(saveToWatchedList(currentMovieId, user));
				setRedirectList(true)
			}} title='vu' />

		</View>
	)
}
export default connect()(SelectorAction);