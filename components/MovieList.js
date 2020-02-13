import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, connect } from 'react-redux'
import { getDiscoverMovies, getTopMovies, searchMovie, getWatchList, getWatched } from '../actions';
import { Image, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import 'react-native-gesture-handler';

const MovieList = ({ dispatch }) =>
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
				<Image source={{ uri: 'https://image.tmdb.org/t/p/original/' + t.poster_path }} style={{ width: 180, height: 250, marginBottom: 20, borderRadius: 8 }} key={`poster_${t.original_title}`} />
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
		<ScrollView style={{ backgroundColor: 'black' }}>
			<Text>{filter}</Text>
			<View style={{ flexDirection: 'row', flexWrap: 'wrap', alignContent: 'space-around', justifyContent: 'space-around', paddingTop: 50 }}>
				{displayList(list)}
			</View>
		</ScrollView>
	)
}
export default connect()(MovieList);















