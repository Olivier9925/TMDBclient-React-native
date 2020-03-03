import React, { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { displayCurrentMovie, getMovieDetails, getMovieCredits } from '../actions'
import { ScrollView } from 'react-native-gesture-handler'
import { View, Image, Text, ImageBackground } from 'react-native'
import SelectorAction from '../components/SelectorAction'

const Movie = ({ dispatch }) =>
{
	const currentMovieId = useSelector(state => state.movieReducer.currentMovieId)
	const currentMovie = useSelector(state => state.movieReducer.currentMovie)
	//const movieDetails = useSelector(state => state.movieReducer.movieDetails)
	const movieCredits = useSelector(state => state.movieReducer.movieCredits)
	const connexion = useSelector(state => state.userReducer.connexion)


	useEffect(() =>
	{
		dispatch(displayCurrentMovie(currentMovieId));
		dispatch(getMovieDetails(currentMovieId));
		dispatch(getMovieCredits(currentMovieId));
	}, [dispatch, currentMovieId])

	const displayCredits = (movieCredits) =>
	{
		if (movieCredits == undefined || movieCredits == null) return
		else return movieCredits.map((m, i) =>
		{
			if (i > 10) return
			return (
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text style={{ color: 'red' }}>{m.character}</Text>
					<Text style={{ color: 'white' }}>{m.name}</Text>
				</View>
			)
		}
		)
	}

	return (
		<ScrollView style={{ backgroundColor: '#2c2c35' }}>
			<ImageBackground source={{ uri: `https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}` }} style={{ height: 500, resizeMode: 'contain', padding: 0 }}>
				<View>
					<Image source={{ uri: `https://image.tmdb.org/t/p/original/${currentMovie.poster_path}` }} key={currentMovie.title + '_p'} style={{ width: 180, height: 250, marginBottom: 20, borderRadius: 8, marginTop: 300, marginLeft: 20, borderWidth: 5, borderColor: '#ee121e', }} />
				</View>
			</ImageBackground>
			<View style={{ display: 'flex', marginTop: 60, color: 'white', paddingHorizontal: 20 }}>
				<Text style={{ paddingVertical: 10, fontSize: 30, fontWeight: 'bold', color: 'white' }}>{currentMovie.title}</Text>
				<Text style={{ paddingVertical: 10, fontSize: 25, color: 'white' }}>{currentMovie.tagline}</Text>
				<Text style={{ paddingVertical: 10, fontSize: 15, color: 'white' }}>{currentMovie.overview}</Text>
			</View>
			<View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
				{displayCredits(movieCredits.cast)}
			</View>
			{connexion ? <SelectorAction /> : <></>}
		</ScrollView>
	)
}

export default connect()(Movie)