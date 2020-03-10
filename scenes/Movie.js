import React, { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { displayCurrentMovie, getMovieDetails, getMovieCredits } from '../actions'
import { ScrollView } from 'react-native-gesture-handler'
import { View, Image, Text, ImageBackground, StyleSheet } from 'react-native'
import SelectorAction from '../components/SelectorAction'
import { colorConstants } from '@constants';

const Movie = ({ dispatch }) =>
{
	const currentMovieId = useSelector(state => state.movieReducer.currentMovieId)
	const currentMovie = useSelector(state => state.movieReducer.currentMovie)
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
					<Text style={{ color: colorConstants.ACCENT_COLOR }}>{m.character}</Text>
					<Text style={{ color: colorConstants.TEXT }}>{m.name}</Text>
				</View>
			)
		}
		)
	}

	return (
		<ScrollView style={{ backgroundColor: colorConstants.BACK_SECOND }}>
			<ImageBackground
				source={{ uri: `https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}` }}
				style={styles.backGroundImage}
			>
				<View>
					<Image
						source={{ uri: `https://image.tmdb.org/t/p/original/${currentMovie.poster_path}` }}
						key={currentMovie.title + '_p'}
						style={styles.posterImage}
					/>
				</View>
			</ImageBackground>
			<View style={{ display: 'flex', marginTop: 60, color: colorConstants.TEXT, paddingHorizontal: 20 }}>
				<Text style={styles.title}>{currentMovie.title}</Text>
				<Text style={styles.tagLine}>{currentMovie.tagline}</Text>
				<Text style={styles.date}>{currentMovie.release_date}</Text>
				<Text style={styles.overView}>{currentMovie.overview}</Text>
			</View>
			<View style={styles.credits}>
				{displayCredits(movieCredits.cast)}
			</View>
			{connexion ? <SelectorAction /> : <></>}
		</ScrollView>
	)
}
export default connect()(Movie)

const styles = StyleSheet.create({
	backGroundImage: {
		height: 500,
		resizeMode: 'contain',
		padding: 0,
	},
	posterImage: {
		borderColor: colorConstants.ACCENT_COLOR,
		width: 180,
		height: 250,
		marginBottom: 20,
		borderRadius: 8,
		marginTop: 300,
		marginLeft: 20,
		borderWidth: 4,
	},
	title: {
		color: colorConstants.TEXT,
		paddingVertical: 10,
		fontSize: 30,
		fontWeight: 'bold',
	},
	tagLine: {
		color: colorConstants.TEXT,
		paddingVertical: 10,
		fontSize: 25,
	},
	date: {
		color: colorConstants.ACCENT_COLOR,
	},
	overView: {
		color: colorConstants.TEXT,
		paddingVertical: 10,
		fontSize: 15,
	},
	credits: {
		paddingHorizontal: 20,
		paddingVertical: 30,
	}
});