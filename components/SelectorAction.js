import React, { useState, useEffect } from 'react'
import { saveToList, saveToWatchedList, isAlreadyWatched } from '../actions'
import { useSelector, connect } from 'react-redux'
import { View, Button } from 'react-native'

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
		<View>
			<Button onClick={() =>
			{
				dispatch(saveToList(currentMovieId));
				setRedirectList(true)
			}} title='+' />
			<Button onClick={() =>
			{
				dispatch(saveToWatchedList(currentMovieId, user));
				setRedirectList(true)
			}} title='vu' />

		</View>
	)
}
export default connect()(SelectorAction);