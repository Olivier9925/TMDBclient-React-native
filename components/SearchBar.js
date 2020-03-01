import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from './CustomButton'

const SearchBar = () =>
{
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const [search, setsearch] = useState(null);

	return (
		<View style={{ display: 'flex', flexDirection: 'column', }}>
			<TextInput
				placeholder="rechercher"
				style={styles.inputSearch}
				onChangeText={text => setsearch(text)}
			/>
			<CustomButton
				title='OK'
				onPress={() =>
				{
					dispatch({ type: 'SEARCH', search: search })
					navigation.navigate('MOVIES')
				}}
			/>
		</View >
	);
}
export default SearchBar;

const styles = StyleSheet.create({
	inputSearch: {
		color: 'white',
		width: 180,
		height: 50,
		padding: 10,
		borderWidth: 1,
		borderColor: "#ABABAB",
		borderRadius: 5,
		backgroundColor: '#34343f',
		marginBottom: 10,
	},
});