import React from 'react'
import { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { displayCurrentMovie } from '../actions'
import { ScrollView } from 'react-native-gesture-handler'
import { View, Image, Text } from 'react-native'
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
				<Image source={{ uri: `https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}` }} key={currentMovie.title + '_bd'} />
				<Image source={{ uri: `https://image.tmdb.org/t/p/original/${currentMovie.poster_path}` }} key={currentMovie.title + '_p'} />
			</View>
			<View>
				<Text>{currentMovie.title}</Text>
				<Text>{currentMovie.tagline}</Text>

				<Text>{currentMovie.overview}</Text>
			</View>
			<SelectorAction />
		</ScrollView>


	)
}
export default connect()(Movie)