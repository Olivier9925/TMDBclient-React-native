import React from 'react'
import { TouchableHighlight, Image } from 'react-native'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NavigationConstants } from '@constants';
import MoviesReducer from '@reducers/MoviesReducer';



const MoviePoster = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const { movie } = props;

    return (
        <>
            <TouchableHighlight
                onPress={() => {
                    dispatch(MoviesReducer.actions.setCurrentMovie(movie?.id))
                    navigation.navigate(NavigationConstants.MOVIE);
                }}
            >
                <Image
                    source={{ uri: 'https://image.tmdb.org/t/p/original/' + movie?.poster_path, }}
                    style={{ width: 180, height: 250, marginBottom: 20, borderRadius: 8 }}
                    key={`${movie?.original_title}`}
                />
            </TouchableHighlight>
        </>
    )
}
export default MoviePoster