import React, { useState } from 'react';
import { TextInput, InputAccessoryView, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = (props) =>
{
	const dispatch = useDispatch();
	const [search, setsearch] = useState(null);
	const inputAccessoryViewID = "uniqueID";
	return (
		<View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft: 20 }}>
			<TextInput
				placeholder="recherche"
				style={{
					padding: 10,
					borderWidth: 1,
					borderColor: "#ABABAB",
				}}
				inputAccessoryViewID={inputAccessoryViewID}
				onChangeText={text => setsearch(text)}
			/>
			<Button onPress={() =>
			{
				dispatch({ type: 'SEARCH', search: search })
			}} title='OK' />
		</View >
	);
}
export default SearchBar;