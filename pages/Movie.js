import React, { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { displayCurrentMovie } from '../actions'
import { ScrollView } from 'react-native-gesture-handler'
import { View, Image, Text, ImageBackground } from 'react-native'
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
			<ImageBackground source={{ uri: `https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}` }} style={{ height: 500, resizeMode: 'contain', padding: 0 }}>
				<View>
					<Image source={{ uri: `https://image.tmdb.org/t/p/original/${currentMovie.poster_path}` }} key={currentMovie.title + '_p'} style={{ width: 180, height: 250, marginBottom: 20, borderRadius: 8, marginTop: 300, marginLeft: 20, borderWidth: 5, borderColor: '#ee121e', }} />

				</View>
			</ImageBackground>
			<View style={{ display: 'flex', marginTop: 50 }}>
				<Text style={{ padding: 10, fontSize: 30, fontWeight: 'bold' }}>{currentMovie.title}</Text>
				<Text style={{ padding: 10, fontSize: 20 }}>{currentMovie.tagline}</Text>

				<Text style={{ padding: 10, fontSize: 15 }}>{currentMovie.overview}</Text>
			</View>
			<SelectorAction />
		</ScrollView>


	)
}
export default connect()(Movie)