import React, { useState } from 'react';
import { TextInput, InputAccessoryView, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = (props) =>
{
	const dispatch = useDispatch();
	const [search, setsearch] = useState(null);
	const inputAccessoryViewID = "uniqueID";
	return (
		<View>
			<TextInput
				style={{
					padding: 10,
					paddingTop: 50,
				}}
				inputAccessoryViewID={inputAccessoryViewID}
				onChangeText={text => setsearch(text)}
			/>
			<Button style={buttonStyle} onClick={() =>
			{
				dispatch({ type: 'SEARCH', search: search })
			}} title='OK' />
		</View >
	);
}
export default SearchBar;