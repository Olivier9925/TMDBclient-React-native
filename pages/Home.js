import React from 'react'
import { useEffect, useState } from 'react'
import MovieList from '../components/MovieList'
import { View } from 'react-native'

const Home = (props) =>
{
	return (
		<View>
			<MovieList />
		</View>
	)
}
export default Home