import React, { useState } from 'react';
import { TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ColorConstants, NavigationConstants, TextsConstants, StylesConstants } from '@constants';
import MoviesReducer from '@reducers/MoviesReducer';

const SearchBar = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const [search, setsearch] = useState(null);

	return (
		<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
			<TextInput
				placeholder={TextsConstants.SEARCHBAR_PLACEHOLDER}
				placeholderTextColor={ColorConstants.TEXT}
				style={StylesConstants.textInputFullWidth}
				onChangeText={text => setsearch(text)}
				inlineImageLeft='search_icon'
				onEndEditing={() => {
					dispatch(MoviesReducer.actions.selectSearchedMovies(search))
					navigation.navigate(NavigationConstants.MOVIE_LIST)
				}}
			/>
		</View>
	);
}
export default SearchBar;

