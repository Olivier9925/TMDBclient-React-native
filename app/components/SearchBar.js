import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from './CustomButton'
import { ColorConstants, NavigationConstants } from '@constants';
import MoviesReducer from '@reducers/MoviesReducer';

const SearchBar = () =>
{
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const [search, setsearch] = useState(null);

	return (
		<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
			<TextInput
				placeholder="rechercher"
				placeholderTextColor={ColorConstants.TEXT}
				style={styles.inputSearch}
				onChangeText={text => setsearch(text)}
			/>
			<CustomButton
				title='OK'
				onPress={() =>
				{
					dispatch(MoviesReducer.actions.selectSearchedMovies(search))
					navigation.navigate(NavigationConstants.MOVIE_LIST)
				}}
			/>
		</View>
	);
}
export default SearchBar;

const styles = StyleSheet.create({
	inputSearch: {
		color: ColorConstants.TEXT,
		borderColor: ColorConstants.BORDER_COLOR,
		backgroundColor: ColorConstants.BACK_SECOND,
		width: 180,
		height: 50,
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
	},
});