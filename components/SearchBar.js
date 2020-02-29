import React, { useState } from 'react';
import { TextInput, View, Button } from 'react-native'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () =>
{
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const [search, setsearch] = useState(null);

	return (
		<View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft: 20 }}>
			<TextInput
				placeholder="recherche"
				style={{
					padding: 10,
					borderWidth: 1,
					borderColor: "#ABABAB",
				}}
				onChangeText={text => setsearch(text)}
			/>
			<Button
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