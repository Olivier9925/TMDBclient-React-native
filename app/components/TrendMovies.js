import React from 'react'
import { View, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import MoviePoster from '@components/MoviePoster';
import StylesConstants from '../constants/StylesConstants';

const TrendMovies = () => {
    let trendMovies = useSelector(state => state.MoviesReducer.trendMovies)
    trendMovies = trendMovies.slice(0, 8);
    return (
        <View>
            <FlatList
                data={trendMovies}
                renderItem={({ item }) => <MoviePoster movie={item} size='small' />}
                keyExtractor={item => item.id}
                numColumns={4}
                columnWrapperStyle={{
                    justifyContent: 'space-around',
                }}
                initialNumToRender={6}
                style={StylesConstants.screenWidth}
            />

        </View>
    )
}
export default TrendMovies