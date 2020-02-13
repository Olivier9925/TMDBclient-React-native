import React from 'react'
import { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { displayCurrentMovie } from '../actions'
import { ScrollView } from 'react-native-gesture-handler'
import { View, Image } from 'react-native'
import SelectorAction from '../components/SelectorAction'

const Movie = ({ dispatch }) =>
{
	const currentMovieId = useSelector(state => state.movieReducer.currentMovieId)
	const currentMovie = useSelector(state => state.movieReducer.currentMovie)

	useEffect(() =>
	{
		dispatch(displayCurrentMovie(currentMovieId));
	}, [dispatch, currentMovieId])


	console.log('currentMovieId :', currentMovieId)
	console.log('currentMovie :', currentMovie)
	return (
		<ScrollView>
			<View>
				<Text>{currentMovie.title}</Text>
			</View>
			<View>
				<SelectorAction />
			</View>
		</ScrollView>
	)
}
export default connect()(Movie)