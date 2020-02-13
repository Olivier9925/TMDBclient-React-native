import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, connect } from 'react-redux'
import { getDiscoverMovies, getTopMovies, searchMovie, getWatchList, getWatched } from '../actions';
import { Image, View, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import 'react-native-gesture-handler';
import Footer from './Footer';

const MovieList = ({ dispatch, navigation }) =>
{
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
		dispatch(getWatchList(user));
		dispatch(getWatched(user));
	}, [dispatch, search, user])

	const [redirectMovie, setRedirectMovie] = useState(false)

	const displayList = (movies) =>
	{
		return movies.map((t, i) =>
		{
			return (
				<TouchableHighlight onPress={
					() =>
					{
						console.log('coucou là !!!!')
						dispatch({
							type: "SET_CURRENT_MOVIE",
							currentMovieId: t.id
						});
						navigation.navigate('Movie')
					}
				}>
					<Image source={{ uri: 'https://image.tmdb.org/t/p/original/' + t.poster_path }} style={{ width: 180, height: 250, marginBottom: 20, borderRadius: 8 }} key={`${i}_${t.original_title}`} />
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
		<View>
			<ScrollView style={{ backgroundColor: 'transparent' }}>
				<Footer />
				<View style={{ flexDirection: 'row', flexWrap: 'wrap', alignContent: 'space-around', justifyContent: 'space-around', paddingTop: 50 }}>
					{displayList(list)}
				</View>

			</ScrollView>
		</View>
	)
}
export default connect()(MovieList);















