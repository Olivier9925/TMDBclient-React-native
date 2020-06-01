import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from './CustomButton'
import { colorConstants } from '@constants';
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
				placeholderTextColor={colorConstants.TEXT}
				style={styles.inputSearch}
				onChangeText={text => setsearch(text)}
			/>
			<CustomButton
				title='OK'
				onPress={() =>
				{
					dispatch(MoviesReducer.actions.selectSearchedMovies(search))
				}}
			/>
		</View>
	);
}
export default SearchBar;

const styles = StyleSheet.create({
	inputSearch: {
		color: colorConstants.TEXT,
		borderColor: colorConstants.BORDER_COLOR,
		backgroundColor: colorConstants.BACK_SECOND,
		width: 180,
		height: 50,
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
	},
});