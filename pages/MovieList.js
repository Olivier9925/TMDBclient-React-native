import React, { useEffect, useState } from 'react'
import { useSelector, connect } from 'react-redux'
import { getDiscoverMovies, getTopMovies, searchMovie } from '../actions';
import { Image, View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import 'react-native-gesture-handler';
import Footer from '../components/Footer'
import { useNavigation } from '@react-navigation/native';

const MovieList = ({ dispatch }) =>
{
	const navigation = useNavigation()
	const discoverMovies = useSelector(state => state.movieReducer.discoverMovies)
	const topMovies = useSelector(state => state.movieReducer.topMovies)
	const watchList = useSelector(state => state.movieReducer.watchList)
	const search = useSelector(state => state.movieReducer.search)
	const searchResult = useSelector(state => state.movieReducer.searchResult)
	const filter = useSelector(state => state.movieReducer.filter)
	const user = useSelector(state => state.movieReducer.user)
	const watchedList = useSelector(state => state.movieReducer.watchedList)

	useEffect(() =>
	{
		dispatch(getDiscoverMovies());
		dispatch(getTopMovies());
		dispatch(searchMovie(search));
		//dispatch(getWatchList(user));
		//dispatch(getWatched(user));
	}, [dispatch, search, user])

	console.log('watchedList :', watchedList)
	console.log('watchList :', watchList)

	const displayList = (movies) =>
	{
		return movies.map((t, i) =>
		{
			return (
				<TouchableHighlight
					onPress={
						() =>
						{
							dispatch({
								type: "SET_CURRENT_MOVIE",
								currentMovieId: t.id,
							});
							navigation.navigate('MOVIE')
						}
					}
					key={i}>
					<Image
						source={{ uri: 'https://image.tmdb.org/t/p/original/' + t.poster_path }}
						style={{ width: 180, height: 250, marginBottom: 20, borderRadius: 8 }}
						key={`${i}_${t.original_title}`}
					/>
				</TouchableHighlight>
			);
		});
	}

	let list;
	switch (filter) {
		case 'TOP':
			list = topMovies
			break;
		case 'DISCOVER':
			list = discoverMovies
			break;
		case 'SEARCH':
			list = searchResult
			break;
		case 'LISTE':
			list = watchList
			break;
		case 'VU':
			list = watchedList
			break;

		default:
			break;
	}

	return (
		<>

			<View style={{ flex: 1 }}>
				<ScrollView style={{ flex: .85, backgroundColor: '#2c2c35' }}>
					<Text style={styles.title}>{filter}</Text>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', alignContent: 'space-around', justifyContent: 'space-around', paddingTop: 50 }}>
						{displayList(list)}
					</View>
				</ScrollView>
				<View style={{ flex: .15 }}><Footer /></View>
			</View>
		</>
	)
}
export default connect()(MovieList);

const styles = StyleSheet.create({
	title: {
		marginTop: 50,
		marginLeft: 20,
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold'
	}
});